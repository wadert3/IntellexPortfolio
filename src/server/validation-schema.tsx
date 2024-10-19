import {z} from "zod";

export const validationSchema = z.object({
    first_name: z.string().min(1, {
        message: "First Name is required"
    }),
    last_name: z.string().min(1, {
        message: "Last Name is required"
    }),
    email: z.string().email({
        message: "Email is invalid"
    }),
    phone: z.string(),
    company_name: z.string().min(1, {
        message: 'Company Name is required'
    }),
    company_site: z.string(),
    availability: z.string().min(1, {
        message: "Availability is required"
    }),
    lead: z.string(),
    message: z.string().min(1, {
        message: "Message is required"
    }),
});