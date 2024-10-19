'use server'
import {db} from "@/database";
import {validationSchema} from "@/server/validation-schema";

export async function addSubmission(formDataRaw: FormData):Promise<{success: boolean, message: string}> {
    // const formData = getFormData<Omit<FormSubmissionsTable, 'id' | 'created_at'>>(data);
    const formDataParse = Object.fromEntries(formDataRaw);
    const {data, success} = validationSchema.safeParse(formDataParse);
    try {
        if (success) {
            console.log(data);
            await db
                .insertInto('form_submissions')
                .values({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone: data.phone,
                    company_name: data.company_name,
                    company_site: data.company_site,
                    availability: data.availability,
                    lead: data.lead,
                    message: data.message,
                })
                .executeTakeFirst()

            return {
                success: true,
                message: 'Form submission added successfully'
            }
        }
    } catch (error) {
        return {
            success: false,
            message: 'Error adding form submission'
        }
    }

    return {
        success: false,
        message: "Error adding form submission"
    }
}