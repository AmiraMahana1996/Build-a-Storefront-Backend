-- Table: public.products

-- DROP TABLE IF EXISTS public.products;

CREATE TABLE IF NOT EXISTS public.products
(
    id SERIAL PRIMARY KEY,
    name character(255) COLLATE pg_catalog."default",
    price integer,
    category_id integer
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.products
    OWNER to postgres;