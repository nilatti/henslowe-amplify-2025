/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        identifier: "IDE5cW6C7kqiLphBaYzO3Odg",
        engine: "mysql",
        connectionUri: secret("SQL_CONNECTION_STRING")
    }
}).schema({
    "space_agreements": a.model({
        id: a.integer().required(),
        theater_id: a.integer(),
        space_id: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required()
    }).identifier([
        "id"
    ]),
    "spaces": a.model({
        id: a.integer().required(),
        name: a.string(),
        street_address: a.string(),
        city: a.string(),
        state: a.string(),
        zip: a.string(),
        phone_number: a.string(),
        website: a.string(),
        seating_capacity: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        mission_statement: a.string(),
        logo: a.string()
    }).identifier([
        "id"
    ]),
    "theaters": a.model({
        id: a.integer().required(),
        name: a.string(),
        street_address: a.string(),
        city: a.string(),
        state: a.string(),
        zip: a.string(),
        phone_number: a.string(),
        mission_statement: a.string(),
        website: a.string(),
        calendar_url: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        logo: a.string(),
        fake: a.boolean()
    }).identifier([
        "id"
    ]),
    "users": a.model({
        id: a.integer().required(),
        email: a.string().required(),
        // encrypted_password: a.string().required(),
        // reset_password_token: a.string(),
        // reset_password_sent_at: a.datetime(),
        // remember_created_at: a.datetime(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        first_name: a.string(),
        middle_name: a.string(),
        last_name: a.string(),
        phone_number: a.string(),
        birthdate: a.date(),
        timezone: a.string(),
        gender: a.string(),
        bio: a.string(),
        description: a.string(),
        street_address: a.string(),
        city: a.string(),
        state: a.string(),
        zip: a.string(),
        website: a.string(),
        emergency_contact_name: a.string(),
        emergency_contact_number: a.string(),
        preferred_name: a.string(),
        program_name: a.string(),
        fake: a.integer(),
        // authentication_token: a.string(),
        // authentication_token_created_at: a.datetime(),
        role: a.string(),
        // provider: a.string(),
        uid: a.string(),
        stripe_customer_id: a.string(),
        subscription_status: a.string(),
        subscription_end_date: a.date(),
        stripe_subscription_id: a.string()
    }).identifier([
        "id"
    ]),
});
