'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, 
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

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
    // Validate required fields with specific messages
    if (!data.name?.trim()) {
      return {
        success: false,
        error: 'Name is required'
      }
    }
    if (!data.registrationNumber?.trim()) {
      return {
        success: false,
        error: 'Registration number is required'
      }
    }
    if (!data.phoneNumber?.trim()) {
      return {
        success: false,
        error: 'Phone number is required'
      }
    }
    if (!data.srmistEmail?.trim()) {
      return {
        success: false,
        error: 'SRMIST email is required'
      }
    }
    if (!data.firstDomain?.trim()) {
      return {
        success: false,
        error: 'First domain selection is required'
      }
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/;
    if (!emailRegex.test(data.srmistEmail.trim())) {
      return {
        success: false,
        error: 'Please use a valid SRMIST email address (format: yourname@srmist.edu.in)'
      }
    }

    // Validate registration number format
    const regNumberRegex = /^RA\d{13}$/;
    if (!regNumberRegex.test(data.registrationNumber.trim())) {
      return {
        success: false,
        error: 'Registration number must be in format RA followed by 13 digits (e.g., RAXXXXXXXXXXXXX)'
      }
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.phoneNumber.trim())) {
      return {
        success: false,
        error: 'Phone number must be exactly 10 digits'
      }
    }

    // Validate optional URLs if provided
    if (data.githubProfile && data.githubProfile.trim()) {
      const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/i;
      if (!githubRegex.test(data.githubProfile.trim())) {
        return {
          success: false,
          error: 'GitHub profile must be a valid GitHub URL (e.g., https://github.com/username or github.com/username)'
        }
      }
    }

    if (data.linkedinProfile && data.linkedinProfile.trim()) {
      const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
      if (!linkedinRegex.test(data.linkedinProfile.trim())) {
        return {
          success: false,
          error: 'LinkedIn profile must be a valid LinkedIn URL (e.g., https://www.linkedin.com/in/username)'
        }
      }
    }


    const { data: result, error } = await supabase
      .from('recruitment_25')
      .insert([
        {
          name: data.name.trim(),
          registration_number: data.registrationNumber.trim(),
          phone_number: data.phoneNumber.trim(),
          srm_mail: data.srmistEmail.trim(),
          github_link: data.githubProfile?.trim() || '',
          linkedin_link: data.linkedinProfile?.trim() || '',
          domain1: data.firstDomain.trim(),
          domain2: data.secondDomain?.trim() || null,
          domain1_round: 1,
          domain2_round: data.secondDomain ? 1 : null
        }
      ])
      .select()

    if (error) {
      // Handle specific database errors
      switch (error.code) {
        case '23505': // Unique constraint violation
          const msg = error.message.toLowerCase()
          if (msg.includes('registration_number')) {
            return { 
              success: false, 
              error: 'This registration number is already registered. Please use a different registration number.' 
            }
          }
          if (msg.includes('srm_mail') || msg.includes('srmist')) {
            return { 
              success: false, 
              error: 'This SRMIST email is already registered. Please use a different email address.' 
            }
          }
          if (msg.includes('phone_number')) {
            return { 
              success: false, 
              error: 'This phone number is already registered. Please use a different phone number.' 
            }
          }
          return { 
            success: false, 
            error: 'You are already registered. Please contact support if you believe this is an error.' 
          }

        case '23503': // Foreign key constraint violation
          return {
            success: false,
            error: 'Invalid domain selection. Please refresh the page and try again.'
          }

        case '23514': // Check constraint violation
          return {
            success: false,
            error: 'Invalid data provided. Please check your information and try again.'
          }

        case '42P01': // Table doesn't exist
          return {
            success: false,
            error: 'Registration system is temporarily unavailable. Please try again later.'
          }

        case 'PGRST116': // Row Level Security violation
          return {
            success: false,
            error: 'Access denied. Please contact support if this issue persists.'
          }

        default:
          // Log the actual error for debugging (in production, this would go to a logging service)
          console.error('Database error:', error)
          return {
            success: false,
            error: 'Registration failed due to a system error. Please try again in a few minutes.'
          }
      }
    }

    // console.log('Registration successful:', result)
    return {
      success: true,
      message: 'Registration successful!',
      data: result[0]
    }

  } catch (error) {
    // Handle different types of errors
    if (error instanceof Error) {
      // Network/Connection errors
      if (error.message.includes('fetch') || error.message.includes('network') || error.message.includes('timeout')) {
        return {
          success: false,
          error: 'Network connection failed. Please check your internet connection and try again.'
        }
      }

      // Supabase client errors
      if (error.message.includes('supabase') || error.message.includes('postgrest')) {
        return {
          success: false,
          error: 'Database connection failed. Please try again in a few moments.'
        }
      }

      // Authentication errors
      if (error.message.includes('auth') || error.message.includes('unauthorized')) {
        return {
          success: false,
          error: 'Authentication failed. Please refresh the page and try again.'
        }
      }

      // Rate limiting
      if (error.message.includes('rate limit') || error.message.includes('too many requests')) {
        return {
          success: false,
          error: 'Too many requests. Please wait a moment before trying again.'
        }
      }

      // Log unexpected errors for debugging
      console.error('Unexpected error in registerRecruitment:', error)
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again or contact support if the issue persists.'
      }
    }

    // Handle non-Error objects
    console.error('Non-Error object caught:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.'
    }
  }
}