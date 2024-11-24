import {Generated, Insertable, Selectable} from "kysely";

export interface Tables {
    form_submissions: FormSubmissionsTable;
}

export interface FormSubmissionsTable {
    id: Generated<number>;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    created_at?: Date;
    job_title?: string;
    lead: string;
    availability: string;
    message: string;
}

export type Lead = Selectable<FormSubmissionsTable>;
export type NewLead = Insertable<FormSubmissionsTable>;
