CREATE TABLE public.user_login2 (
	"user_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
    "token" varchar,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

-- CREATE TABLE public.keys (
-- 	"_id" serial NOT NULL,
-- 	"user_id" int NOT NULL,
-- 	"key" varchar NOT NULL,
--     "uv" varchar NOT NULL,
-- 	CONSTRAINT "keys_pk" PRIMARY KEY ("_id"),
--     CONSTRAINT "keys_fk" FOREIGN KEY ("user_id") REFERENCES  public.users("_id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE public.transactions (
-- 	"_id" serial NOT NULL,
-- 	"user_id" int NOT NULL,
-- 	"item" varchar NOT NULL,
--     "amount" DECIMAL(19,4) not NULL,
--     "date" DATE,
--     "category" varchar NOT NULL,
-- 	CONSTRAINT "transactions_pk" PRIMARY KEY ("_id"),
--     CONSTRAINT "transactions_fk0" FOREIGN KEY ("user_id") REFERENCES  public.users("_id")
-- ) WITH (
--   OIDS=FALSE
-- );

CREATE TABLE public.encrypted_transactions (
	"_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"item" varchar NOT NULL,
    "amount" DECIMAL(19,4) not NULL,
    "date" DATE,
    "category" varchar NOT NULL,
	CONSTRAINT "encrypted_transactions_pk" PRIMARY KEY ("_id"),
    CONSTRAINT "encrypted_transactions_fk0" FOREIGN KEY ("user_id") REFERENCES  public.users("_id")
) WITH (
  OIDS=FALSE
);