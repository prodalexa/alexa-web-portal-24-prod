'use server'

import { supabase } from '@/lib/supabase'

export interface RegistrationData {
  name: string
  registrationNumber: string
  phoneNumber: string
  srmistEmail: string
  githubProfile?: string
  linkedinProfile?: string
  firstDomain: string
  secondDomain?: string
}

export async function registerRecruitment(data: RegistrationData) {
  try {
    // Validate required fields
    if (!data.name || !data.registrationNumber || !data.phoneNumber || !data.srmistEmail || !data.firstDomain) {
      return {
        success: false,
        error: 'Missing required fields'
      }
    }

    // Validate email format
    if (!data.srmistEmail.includes('@srmist.edu.in')) {
      return {
        success: false,
        error: 'Please use a valid SRMIST email address'
      }
    }

    // Validate registration number format
    if (!data.registrationNumber.startsWith('RA')) {
      return {
        success: false,
        error: 'Registration number must start with RA'
      }
    }

    // Validate phone number length
    if (data.phoneNumber.length !== 10) {
      return {
        success: false,
        error: 'Phone number must be exactly 10 digits'
      }
    }

    // Insert into Supabase
    const { data: result, error } = await supabase
      .from('recruitment_25')
      .insert([
        {
          name: data.name,
          registration_number: data.registrationNumber,
          phone_number: data.phoneNumber,
          srm_mail: data.srmistEmail,
          github_link: data.githubProfile || '',
          linkedin_link: data.linkedinProfile || '',
          domain1: data.firstDomain,
          domain2: data.secondDomain || null,
          round: 1
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      
      // Handle duplicate entries
      if (error.code === '23505') {
        if (error.message.includes('registration_number')) {
          return {
            success: false,
            error: 'This registration number is already registered'
          }
        }
        if (error.message.includes('srmist_email')) {
          return {
            success: false,
            error: 'This email is already registered'
          }
        }
        return {
          success: false,
          error: 'Registration number or email already exists'
        }
      }
      
      return {
        success: false,
        error: 'Failed to register. Please try again.'
      }
    }

    return {
      success: true,
      message: 'Registration successful! Welcome to Alexa Developers Club SRM!',
      data: result[0]
    }

  } catch (error) {
    console.error('Registration error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.'
    }
  }
}
