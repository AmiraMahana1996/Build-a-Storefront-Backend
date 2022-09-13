-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

DROP TABLE IF NOT EXISTS public.users
(
    id  SERIAL PRIMARY KEY,
    firstname character(255) COLLATE pg_catalog."default",
    lastname character(255) COLLATE pg_catalog."default",
    password character(255) COLLATE pg_catalog."default",
    email character(255) COLLATE pg_catalog."default",
    CONSTRAINT users_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;