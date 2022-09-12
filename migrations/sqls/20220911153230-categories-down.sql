-- Table: public.categories

-- DROP TABLE IF EXISTS public.categories;

DROP TABLE IF EXISTS public.categories
(
    id SERIAL PRIMARY KEY,
    name character(255) COLLATE pg_catalog."default"

)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.categories
    OWNER to postgres;