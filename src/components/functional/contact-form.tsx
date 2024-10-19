import {Card, Form, InputField} from "@/components";
import {addSubmission} from "@/server/contact-form";
import {AreaField} from "@/components/ui/form-field";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {validationSchema} from "@/server/validation-schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";

type props = {
    onSuccess?: () => void
}

export function ContactForm({onSuccess}:props) {
    const form = useForm<z.output<typeof validationSchema>>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            company_name: "",
            company_site: "",
            availability: "",
            lead: "",
        }
    })

    const onSubmit = async (data: z.output<typeof validationSchema>) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }

        const response:{success: boolean, message: string} = await addSubmission(formData);

        if (!response.success) {
            form.setError("message", {type: 'custom', message: response.message});
            return
        }

        onSuccess?.();
        form.reset();
    }

    return (
        <Card className={"w-full p-11"}>
            <div className={"flex justify-between items-center"}>
            </div>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className={"flex flex-wrap items-center w-full"}>
                    <InputField className={"w-1/2 p-2"} control={form.control} name={"first_name"}
                                placeholder={"First Name*"} type={"text"}/>
                    <InputField className={"w-1/2 p-2"} control={form.control} name={"last_name"}
                                placeholder={"Last Name*"} type={"text"}/>
                    <InputField className={"w-1/2 p-2"} control={form.control} name={"email"} placeholder={"Email*"}
                                type={"email"}/>
                    <InputField className={"w-1/2 p-2"} control={form.control} name={"phone"}
                                placeholder={"Phone Number"} type={"text"}/>
                    <InputField className={"w-1/2 p-2"} control={form.control} name={"company_name"}
                                placeholder={"Company Name*"} type={"text"}/>
                    <InputField className={"w-1/2 p-2"} control={form.control} name={"company_site"}
                                placeholder={"Company Website"} type={"text"}/>
                    <InputField className={"w-full p-2"} control={form.control} name={"lead"}
                                placeholder={"How did you hear about Intallex?"} type={"text"}/>
                    <AreaField className={"w-full p-2"} control={form.control} name={"availability"}
                               placeholder={"When can we reach you?*"} type={"text"}/>
                    <AreaField className={"w-full p-2"} control={form.control} name={"message"} placeholder={"How can I help?*"}
                               type={"textarea"}/>
                    <button
                        className={"mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium text-sm px-5 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"}>
                        Submit
                    </button>
                </form>
            </Form>

        </Card>
    )
}