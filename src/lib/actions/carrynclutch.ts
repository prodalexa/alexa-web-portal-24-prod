"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

// Define Zod schema for validation
const phoneRegex = /^[0-9]{10}$/;
const riotIdRegex = /^.+#.+$/; // Basic format check for Riot ID (name#tag)
const srmEmailRegex = /^[a-z0-9._%+-]+@srmist\.edu\.in$/i;

const srmMemberSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    riotId: z.string().regex(riotIdRegex, "Must be a valid Riot ID (name#tag)"),
    phoneNumber: z.string().regex(phoneRegex, "Phone must be exactly 10 digits"),
    email: z.string().email("Invalid email format").regex(srmEmailRegex, "Must be a valid SRM student email"),
});

const memberSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    riotId: z.string().regex(riotIdRegex, "Must be a valid Riot ID (name#tag)"),
    phoneNumber: z.string().regex(phoneRegex, "Phone must be exactly 10 digits"),
    email: z.string().email("Invalid email format")
});

// Create a conditional member schema for the optional 6th member
const conditionalMemberSchema = z.object({
    name: z.string().optional(),
    riotId: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string().optional()
}).refine(
    data => {
        // Check if any field is filled
        const hasAnyField = data.name || data.riotId || data.phoneNumber || data.email;

        // If any field is filled, all fields should be filled
        if (hasAnyField) {
            return data.name && data.riotId && data.phoneNumber && data.email;
        }

        // If no fields are filled, that's also valid (entirely optional member)
        return true;
    },
    {
        message: "If any field is provided, all fields must be completed for this member",
        path: ["incomplete"]
    }
).superRefine((data, ctx) => {
    // Only validate fields if they exist
    if (data.name) {
        try {
            z.string().min(2, "Name must be at least 2 characters").parse(data.name);
        } catch (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Name must be at least 2 characters",
                path: ["name"]
            });
        }
    }

    if (data.riotId) {
        try {
            z.string().regex(riotIdRegex, "Must be a valid Riot ID (name#tag)").parse(data.riotId);
        } catch (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Must be a valid Riot ID (name#tag)",
                path: ["riotId"]
            });
        }
    }

    if (data.phoneNumber) {
        try {
            z.string().regex(phoneRegex, "Phone must be exactly 10 digits").parse(data.phoneNumber);
        } catch (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Phone must be exactly 10 digits",
                path: ["phoneNumber"]
            });
        }
    }

    if (data.email) {
        try {
            z.string().email("Invalid email format").parse(data.email);
        } catch (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid email format",
                path: ["email"]
            });
        }
    }
});

const teamSchema = z.object({
    teamName: z.string().min(3, "Team name must be at least 3 characters"),
    members: z.tuple([
        srmMemberSchema, // Member 1 (required)
        memberSchema, // Member 2 (required)
        memberSchema, // Member 3 (required)
        memberSchema, // Member 4 (required)
        memberSchema, // Member 5 (required)
        conditionalMemberSchema  // Member 6 (optional)
    ])
});

export async function registerTeam(prevState: any, formData: FormData) {
    try {
        // Parse form data into objects
        console.log("Form data:", formData);
        const rawData = {
            teamName: formData.get("teamName"),
            members: [
                {
                    name: formData.get("member1Name"),
                    riotId: formData.get("member1RiotId"),
                    phoneNumber: formData.get("member1PhoneNumber"),
                    email: formData.get("member1Email"),
                },
                {
                    name: formData.get("member2Name"),
                    riotId: formData.get("member2RiotId"),
                    phoneNumber: formData.get("member2PhoneNumber"),
                    email: formData.get("member2Email"),
                },
                {
                    name: formData.get("member3Name"),
                    riotId: formData.get("member3RiotId"),
                    phoneNumber: formData.get("member3PhoneNumber"),
                    email: formData.get("member3Email"),
                },
                {
                    name: formData.get("member4Name"),
                    riotId: formData.get("member4RiotId"),
                    phoneNumber: formData.get("member4PhoneNumber"),
                    email: formData.get("member4Email"),
                },
                {
                    name: formData.get("member5Name"),
                    riotId: formData.get("member5RiotId"),
                    phoneNumber: formData.get("member5PhoneNumber"),
                    email: formData.get("member5Email"),
                },
                {
                    name: formData.get("member6Name") || "",
                    riotId: formData.get("member6RiotId") || "",
                    phoneNumber: formData.get("member6PhoneNumber") || "",
                    email: formData.get("member6Email") || "",
                },
            ],
        };

        // Validate the form data
        const validatedData = teamSchema.parse(rawData);

        // Filter out empty members (the optional 6th member if not filled)
        const filteredMembers = validatedData.members.filter(member =>
            member && member.name && member.riotId && member.phoneNumber && member.email
        );

        // Create the final payload
        const payload = {
            teamName: validatedData.teamName,
            members: filteredMembers
        };

        // Call the API endpoint
        const response = await fetch("https://api.example.com/register-team", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store"
        });

        if (!response.ok) {
            const errorData = await response.json();
            return {
                success: false,
                message: errorData.message || "Failed to register team. Please try again."
            };
        }

        const data = await response.json();

        // Revalidate the page to show the latest data
        revalidatePath("/carrynclutch");

        return {
            success: true,
            message: "Your team has been successfully registered!",
            data
        };

    } catch (error: any) {
        if (error.errors) {
            const fieldErrors: Record<string, string[]> = {};

            error.errors.forEach((err: any) => {
                // Handle the special case for incomplete members
                if (err.path.includes("incomplete")) {
                    const memberIndex = parseInt(err.path[1]) + 1;
                    // Create errors for all fields of this member
                    fieldErrors[`members.${memberIndex - 1}.name`] = ["All fields must be completed"];
                    fieldErrors[`members.${memberIndex - 1}.riotId`] = ["All fields must be completed"];
                    fieldErrors[`members.${memberIndex - 1}.phoneNumber`] = ["All fields must be completed"];
                    fieldErrors[`members.${memberIndex - 1}.email`] = ["All fields must be completed"];
                } else {
                    const path = err.path.join('.');
                    if (!fieldErrors[path]) {
                        fieldErrors[path] = [];
                    }
                    fieldErrors[path].push(err.message);
                }
            });
            console.error("Form validation errors:", fieldErrors);
            return {
                success: false,
                message: "Please correct the errors in the form.",
                errors: fieldErrors
            };
        }

        console.error("Form validation error:", error);

        return {
            success: false,
            message: error.message || "An unexpected error occurred. Please try again."
        };
    }
}