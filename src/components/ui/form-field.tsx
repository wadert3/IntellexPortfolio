import {FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea} from "@/components";
import {HTMLInputTypeAttribute} from "react";
import {Control} from "react-hook-form";

type FormFieldProps = {
    name: string,
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    control?: Control<any>,
    className?: string,
}

export function InputField({name, type = "text", placeholder, control, className}:FormFieldProps) {
    return (
        <FormField control={control} name={name} render={({field}) => (
            <FormItem className={className}>
                <FormLabel>{placeholder}</FormLabel>
                <FormControl>
                    <Input type={type} {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>
    )
}

export function AreaField({name, placeholder, control, className}:FormFieldProps) {
    return (
        <FormField control={control} name={name} render={({field}) => (
            <FormItem className={className}>
                <FormLabel>{placeholder}</FormLabel>
                <FormControl>
                    <Textarea {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>
    )
}

// export function PhoneField({name, type = "text", placeholder, control}:FormFieldProps) {
//     return (
//         <FormField control={control} name={name} render={({field}) => (
//             <FormItem>
//                 <FormLabel>Phone Number</FormLabel>
//                 <FormControl>
//                     <PhoneInput placeholder={placeholder} {...field}/>
//                 </FormControl>
//                 <FormMessage/>
//             </FormItem>
//         )}/>
//     )
// }