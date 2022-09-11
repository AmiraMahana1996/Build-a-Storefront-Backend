-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id  SERIAL PRIMARY KEY,
    firstname character(255) COLLATE pg_catalog."default",
    lastname character(255) COLLATE pg_catalog."default",
    password character(255) COLLATE pg_catalog."default",
    token text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;