import {createKysely} from "@vercel/postgres-kysely";
import {Tables} from "@/database/types";

export const db = createKysely<Tables>()