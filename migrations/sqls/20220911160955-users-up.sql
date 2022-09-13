-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id  SERIAL PRIMARY KEY,
    firstname text COLLATE pg_catalog."default",
    lastname text COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    CONSTRAINT users_email_key UNIQUE (email)
 
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;