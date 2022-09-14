-- Table: public.ordertransactions

-- DROP TABLE IF EXISTS public.ordertransactions;

CREATE TABLE IF NOT EXISTS public.ordertransactions
(
    id SERIAL PRIMARY KEY,
    product_id integer,
    product_qty integer,
    user_id integer,
    order_id integer,
    CONSTRAINT orders_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT orders_transaction_id_fkey FOREIGN KEY (order_id)
        REFERENCES public.orders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.ordertransactions
    OWNER to postgres;