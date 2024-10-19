import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormData<T extends Record<string, string | Email>>(formData: FormData): T {
  return Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, value.toString()])
  ) as T;
}