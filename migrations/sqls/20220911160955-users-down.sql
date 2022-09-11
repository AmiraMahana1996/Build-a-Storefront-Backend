-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

DROP TABLE IF  EXISTS public.users
(
    id integer,
    "firstName" character(255) COLLATE pg_catalog."default",
    "lastName" character(255) COLLATE pg_catalog."default",
    password character(255) COLLATE pg_catalog."default",
    token character(255) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;