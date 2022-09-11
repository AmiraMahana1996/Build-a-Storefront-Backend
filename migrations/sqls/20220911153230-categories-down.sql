-- Table: public.categories

-- DROP TABLE IF EXISTS public.categories;

DROP TABLE IF EXISTS public.categories
(
    id integer NOT NULL,
    name character(255) COLLATE pg_catalog."default",
    CONSTRAINT categories_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.categories
    OWNER to postgres;