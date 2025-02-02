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
    // "active_admin_comments": a.model({
    //     id: a.integer().required(),
    //     namespace: a.string(),
    //     body: a.string(),
    //     resource_type: a.string(),
    //     resource_id: a.integer(),
    //     author_type: a.string(),
    //     author_id: a.integer(),
    //     created_at: a.datetime().required(),
    //     updated_at: a.datetime().required()
    // }).identifier([
    //     "id"
    // ]),
    // "active_storage_attachments": a.model({
    //     id: a.integer().required(),
    //     name: a.string().required(),
    //     record_type: a.string().required(),
    //     record_id: a.integer().required(),
    //     blob_id: a.integer().required(),
    //     created_at: a.datetime().required()
    // }).identifier([
    //     "id"
    // ]),
    // "active_storage_blobs": a.model({
    //     id: a.integer().required(),
    //     key: a.string().required(),
    //     filename: a.string().required(),
    //     content_type: a.string(),
    //     metadata: a.string(),
    //     service_name: a.string().required(),
    //     byte_size: a.integer().required(),
    //     checksum: a.string().required(),
    //     created_at: a.datetime().required()
    // }).identifier([
    //     "id"
    // ]),
    // "active_storage_variant_records": a.model({
    //     id: a.integer().required(),
    //     blob_id: a.integer().required(),
    //     variation_digest: a.string().required()
    // }).identifier([
    //     "id"
    // ]),
    "acts": a.model({
        id: a.integer().required(),
        number: a.integer(),
        play_id: a.integer(),
        summary: a.string(),
        start_page: a.integer(),
        end_page: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        heading: a.string(),
        original_line_count: a.float(),
        new_line_count: a.float()
    }).identifier([
        "id"
    ]),
    // "admin_users": a.model({
    //     id: a.integer().required(),
    //     email: a.string().required(),
    //     encrypted_password: a.string().required(),
    //     reset_password_token: a.string(),
    //     reset_password_sent_at: a.datetime(),
    //     remember_created_at: a.datetime(),
    //     sign_in_count: a.integer().required(),
    //     current_sign_in_at: a.datetime(),
    //     last_sign_in_at: a.datetime(),
    //     current_sign_in_ip: a.string(),
    //     last_sign_in_ip: a.string(),
    //     created_at: a.datetime().required(),
    //     updated_at: a.datetime().required()
    // }).identifier([
    //     "id"
    // ]),
    // "ar_internal_metadata": a.model({
    //     key: a.string().required(),
    //     value: a.string(),
    //     created_at: a.datetime().required(),
    //     updated_at: a.datetime().required()
    // }).identifier([
    //     "key"
    // ]),
    "authors": a.model({
        id: a.integer().required(),
        birthdate: a.date(),
        deathdate: a.date(),
        nationality: a.string(),
        first_name: a.string(),
        middle_name: a.string(),
        last_name: a.string(),
        gender: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required()
    }).identifier([
        "id"
    ]),
    "character_groups": a.model({
        id: a.integer().required(),
        name: a.string(),
        xml_id: a.string(),
        corresp: a.string(),
        play_id: a.integer().required(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required()
    }).identifier([
        "id"
    ]),
    "characters": a.model({
        id: a.integer().required(),
        name: a.string(),
        age: a.string(),
        gender: a.string(),
        description: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        play_id: a.integer(),
        xml_id: a.string(),
        corresp: a.string(),
        character_group_id: a.integer(),
        original_line_count: a.integer(),
        new_line_count: a.integer()
    }).identifier([
        "id"
    ]),
    "conflict_patterns": a.model({
        id: a.integer().required(),
        user_id: a.integer(),
        space_id: a.integer(),
        start_time: a.string(),
        end_time: a.string(),
        category: a.string(),
        start_date: a.date(),
        end_date: a.date(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        days_of_week: a.string()
    }).identifier([
        "id"
    ]),
    "conflicts": a.model({
        id: a.integer().required(),
        user_id: a.integer(),
        start_time: a.datetime(),
        end_time: a.datetime(),
        category: a.string(),
        space_id: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        regular: a.integer(),
        conflict_pattern_id: a.integer()
    }).identifier([
        "id"
    ]),
    "entrance_exits": a.model({
        id: a.integer().required(),
        french_scene_id: a.integer(),
        page: a.integer(),
        line: a.integer(),
        order: a.integer(),
        stage_exit_id: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        category: a.string(),
        notes: a.string(),
        user_id: a.integer()
    }).identifier([
        "id"
    ]),
    "french_scenes": a.model({
        id: a.integer().required(),
        scene_id: a.integer(),
        number: a.string(),
        summary: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        end_page: a.integer(),
        start_page: a.integer(),
        original_line_count: a.float(),
        new_line_count: a.float()
    }).identifier([
        "id"
    ]),
    "jobs": a.model({
        id: a.integer().required(),
        production_id: a.integer(),
        specialization_id: a.integer(),
        user_id: a.integer(),
        start_date: a.date(),
        end_date: a.date(),
        theater_id: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        character_id: a.integer(),
        character_group_id: a.integer()
    }).identifier([
        "id"
    ]),
    // "jwt_denylist": a.model({
    //     id: a.integer().required(),
    //     jti: a.string().required(),
    //     exp: a.datetime().required()
    // }).identifier([
    //     "id"
    // ]),
    "labels": a.model({
        id: a.integer().required(),
        xml_id: a.string(),
        line_number: a.string(),
        content: a.string(),
        french_scene_id: a.integer().required(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required()
    }).identifier([
        "id"
    ]),
    "lines": a.model({
        id: a.integer().required(),
        ana: a.string(),
        character_id: a.integer(),
        corresp: a.string(),
        french_scene_id: a.integer().required(),
        next: a.string(),
        number: a.string(),
        prev: a.string(),
        kind: a.string(),
        xml_id: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        character_group_id: a.integer(),
        original_content: a.string(),
        new_content: a.string(),
        original_line_count: a.float(),
        new_line_count: a.float()
    }).identifier([
        "id"
    ]),
    // "oauth_access_grants": a.model({
    //     id: a.integer().required(),
    //     resource_owner_id: a.integer().required(),
    //     application_id: a.integer().required(),
    //     token: a.string().required(),
    //     expires_in: a.integer().required(),
    //     redirect_uri: a.string().required(),
    //     created_at: a.datetime().required(),
    //     revoked_at: a.datetime(),
    //     scopes: a.string().required()
    // }).identifier([
    //     "id"
    // ]),
    // "oauth_access_tokens": a.model({
    //     id: a.integer().required(),
    //     resource_owner_id: a.integer(),
    //     application_id: a.integer().required(),
    //     token: a.string().required(),
    //     refresh_token: a.string(),
    //     expires_in: a.integer(),
    //     revoked_at: a.datetime(),
    //     created_at: a.datetime().required(),
    //     scopes: a.string(),
    //     previous_refresh_token: a.string().required()
    // }).identifier([
    //     "id"
    // ]),
    // "oauth_applications": a.model({
    //     id: a.integer().required(),
    //     name: a.string().required(),
    //     uid: a.string().required(),
    //     secret: a.string().required(),
    //     redirect_uri: a.string(),
    //     scopes: a.string().required(),
    //     confidential: a.integer().required(),
    //     created_at: a.datetime().required(),
    //     updated_at: a.datetime().required()
    // }).identifier([
    //     "id"
    // ]),
    "on_stages": a.model({
        id: a.integer().required(),
        character_id: a.integer(),
        user_id: a.integer(),
        french_scene_id: a.integer(),
        description: a.string(),
        category: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        nonspeaking: a.integer(),
        character_group_id: a.integer()
    }).identifier([
        "id"
    ]),
    "plays": a.model({
        id: a.integer().required(),
        title: a.string(),
        author_id: a.integer(),
        date: a.date(),
        genre: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        canonical: a.integer(),
        text_notes: a.string(),
        production_id: a.integer(),
        original_play_id: a.integer(),
        synopsis: a.string(),
        original_line_count: a.float(),
        new_line_count: a.float(),
        production_copy_complete: a.integer(),
        copy_status: a.string()
    }).identifier([
        "id"
    ]),
    "productions": a.model({
        id: a.integer().required(),
        start_date: a.date(),
        end_date: a.date(),
        theater_id: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        lines_per_minute: a.integer()
    }).identifier([
        "id"
    ]),
    "rehearsals": a.model({
        id: a.integer().required(),
        start_time: a.datetime(),
        end_time: a.datetime(),
        space_id: a.integer(),
        notes: a.string(),
        title: a.string(),
        production_id: a.integer().required(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        text_unit: a.string()
    }).identifier([
        "id"
    ]),
    "scenes": a.model({
        id: a.integer().required(),
        number: a.integer(),
        summary: a.string(),
        act_id: a.integer(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        end_page: a.integer(),
        start_page: a.integer(),
        heading: a.string(),
        original_line_count: a.float(),
        new_line_count: a.float()
    }).identifier([
        "id"
    ]),
    // "schema_migrations": a.model({
    //     version: a.string().required()
    // }).identifier([
    //     "version"
    // ]),
    "sound_cues": a.model({
        id: a.integer().required(),
        xml_id: a.string(),
        line_number: a.string(),
        kind: a.string(),
        french_scene_id: a.integer().required(),
        notes: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        original_content: a.string(),
        new_content: a.string()
    }).identifier([
        "id"
    ]),
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
    "specializations": a.model({
        id: a.integer().required(),
        title: a.string(),
        description: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        production_admin: a.integer(),
        theater_admin: a.integer()
    }).identifier([
        "id"
    ]),
    "stage_directions": a.model({
        id: a.integer().required(),
        french_scene_id: a.integer().required(),
        number: a.string(),
        kind: a.string(),
        xml_id: a.string(),
        original_content: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        new_content: a.string()
    }).identifier([
        "id"
    ]),
    "stage_exits": a.model({
        id: a.integer().required(),
        production_id: a.integer(),
        name: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required()
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
        fake: a.integer()
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
    "words": a.model({
        id: a.integer().required(),
        kind: a.string(),
        content: a.string(),
        xml_id: a.string(),
        line_id: a.integer(),
        line_number: a.string(),
        created_at: a.datetime().required(),
        updated_at: a.datetime().required(),
        play_id: a.integer().required()
    }).identifier([
        "id"
    ])
});
