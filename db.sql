-- Adminer 4.8.1 PostgreSQL 13.4 (Debian 13.4-1.pgdg110+1) dump

DROP TABLE IF EXISTS "apply";
DROP SEQUENCE IF EXISTS apply_id_seq;
CREATE SEQUENCE apply_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 36 CACHE 1;

CREATE TABLE "public"."apply" (
    "id" bigint DEFAULT nextval('apply_id_seq') NOT NULL,
    "userMail" character varying(255),
    "skills" json,
    "graduate" json,
    "message" text,
    "inserted_at" timestamp(0) NOT NULL,
    "updated_at" timestamp(0) NOT NULL,
    "companyId" integer,
    CONSTRAINT "apply_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
INSERT INTO "apply" ("id", "userMail", "skills", "graduate", "message", "inserted_at", "updated_at", "companyId") VALUES
(2,	'mathys.dupont.37@gmail.com',	'{}',	'{}',	'mathys',	'2021-10-17 22:36:05',	'2021-10-17 22:36:05',	2),
(35,	'mathys.dupont.37@gmail.com',	'{}',	'{}',	'heyyyyyyy',	'2021-10-18 01:21:53',	'2021-10-18 01:21:53',	2),
(36,	'mathys.dupont.37@gmail.com',	'{}',	'{}',	'12345678',	'2021-10-18 01:27:44',	'2021-10-18 01:27:44',	2);

<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
DROP TABLE IF EXISTS "applyUtils";
DROP SEQUENCE IF EXISTS "applyUtils_id_seq";
CREATE SEQUENCE "applyUtils_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."applyUtils" (
    "id" bigint DEFAULT nextval('"applyUtils_id_seq"') NOT NULL,
    "userId" integer,
    "skills" json,
    "inserted_at" timestamp(0) NOT NULL,
    "updated_at" timestamp(0) NOT NULL,
    "graduate" json,
    CONSTRAINT "applyUtils_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "applyUtils_userId_index" UNIQUE ("userId")
) WITH (oids = false);

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
INSERT INTO "applyUtils" ("id", "userId", "skills", "inserted_at", "updated_at", "graduate") VALUES
(18,	62,	'"[{\"name\":\"saut a skis\",\"bar\":\"31\"},{\"name\":\"parachute\",\"bar\":\"45\"},{\"name\":\"domino\",\"bar\":\"15\"}]"',	'2021-10-17 13:48:25',	'2021-10-18 01:03:31',	'"[{\"name\":\"Arvard\",\"bar\":\"\"},{\"name\":\"Oxbow\",\"bar\":\"\"},{\"name\":\"jules ferry\",\"bar\":\"\"}]"'),
(19,	63,	'"[{\"name\":\"boxeur\",\"bar\":\"49\"},{\"name\":\"philosophe\",\"bar\":\"90\"},{\"name\":\"domino\",\"bar\":\"10\"}]"',	'2021-10-18 01:30:14',	'2021-10-18 01:32:03',	'"[{\"name\":\"proutologie\",\"bar\":\"0123-03-12\"},{\"name\":\"sorcellerie\",\"bar\":\"4567-03-12\"},{\"name\":\"mentalisme\",\"bar\":\"4567-03-12\"}]"');

DROP TABLE IF EXISTS "company";
DROP SEQUENCE IF EXISTS company_id_seq;
CREATE SEQUENCE company_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 2 CACHE 1;

CREATE TABLE "public"."company" (
    "id" bigint DEFAULT nextval('company_id_seq') NOT NULL,
    "name" character varying(255),
    "address" character varying(255),
    "description" character varying(255),
    "inserted_at" timestamp(0) NOT NULL,
    "updated_at" timestamp(0) NOT NULL,
    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
INSERT INTO "company" ("id", "name", "address", "description", "inserted_at", "updated_at") VALUES
(2,	'google',	'yolo',	'vrai baill',	'2021-10-14 20:05:28',	'2021-10-14 23:48:36');

<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
<br />
<b>Warning</b>:  Trying to access array offset on value of type bool in <b>/var/www/html/adminer.php</b> on line <b>586</b><br />
DROP TABLE IF EXISTS "jobOffer";
DROP SEQUENCE IF EXISTS "jobOffer_id_seq";
CREATE SEQUENCE "jobOffer_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."jobOffer" (
    "id" bigint DEFAULT nextval('"jobOffer_id_seq"') NOT NULL,
    "title" character varying(255),
    "content" character varying(255),
    "companyId" integer,
    "rank" integer,
    "inserted_at" timestamp(0) NOT NULL,
    "updated_at" timestamp(0) NOT NULL,
    "wage" integer,
    "workingTime" integer,
    CONSTRAINT "jobOffer_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
INSERT INTO "jobOffer" ("id", "title", "content", "companyId", "rank", "inserted_at", "updated_at", "wage", "workingTime") VALUES
(8,	'dev pipi',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-15 16:57:39',	'2021-10-15 16:57:39',	45,	35),
(22,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:22:56',	'2021-10-17 20:22:56',	45,	35),
(23,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:22:57',	'2021-10-17 20:22:57',	45,	35),
(24,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:22:58',	'2021-10-17 20:22:58',	45,	35),
(25,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:22:59',	'2021-10-17 20:22:59',	45,	35),
(26,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:22:59',	'2021-10-17 20:22:59',	45,	35),
(27,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:23:00',	'2021-10-17 20:23:00',	45,	35),
(28,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:23:00',	'2021-10-17 20:23:00',	45,	35),
(29,	'dev caca',	'mldenbe ekljfe eliced el iejdlihe doie d eoidh eoidh eoid eojd eo jideijd e id ijed',	2,	3,	'2021-10-17 20:23:01',	'2021-10-17 20:23:01',	45,	35);

DROP TABLE IF EXISTS "schema_migrations";
CREATE TABLE "public"."schema_migrations" (
    "version" bigint NOT NULL,
    "inserted_at" timestamp(0),
    CONSTRAINT "schema_migrations_pkey" PRIMARY KEY ("version")
) WITH (oids = false);

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
INSERT INTO "schema_migrations" ("version", "inserted_at") VALUES
(20211005130334,	'2021-10-05 13:15:13'),
(20211011215445,	'2021-10-11 21:55:39'),
(20211012131734,	'2021-10-12 13:29:58'),
(20211013074017,	'2021-10-13 09:25:58'),
(20211013075539,	'2021-10-13 09:28:58'),
(20211013081336,	'2021-10-13 09:28:58'),
(20211013084346,	'2021-10-13 09:37:32'),
(20211014163022,	'2021-10-14 16:34:01'),
(20211014234151,	'2021-10-14 23:44:47'),
(20211015010748,	'2021-10-15 01:11:28'),
(20211015152443,	'2021-10-15 15:27:45'),
(20211015160455,	'2021-10-15 16:17:36'),
(20211015164523,	'2021-10-15 16:48:10'),
(20211016123338,	'2021-10-16 12:37:43');

DROP TABLE IF EXISTS "user";
DROP SEQUENCE IF EXISTS user_id_seq;
CREATE SEQUENCE user_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 63 CACHE 1;

CREATE TABLE "public"."user" (
    "id" bigint DEFAULT nextval('user_id_seq') NOT NULL,
    "first_name" character varying(255),
    "last_name" character varying(255),
    "birth" date,
    "email" character varying(255),
    "password" character varying(255),
    "inserted_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL,
    "isAdmin" boolean DEFAULT false,
    "userType" character varying(255) DEFAULT 'worker',
    "avatar" text,
    CONSTRAINT "user_email_index" UNIQUE ("email"),
    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>/var/www/html/adminer.php</b> on line <b>200</b><br />
INSERT INTO "user" ("id", "first_name", "last_name", "birth", "email", "password", "inserted_at", "updated_at", "isAdmin", "userType", "avatar") VALUES
(63,	'Mathys',	'Dupont',	'2001-11-26',	'mathys.dupont.37@gmail.com',	'$2b$12$13VXJSXl8jx8mUI7svplJ.A2mi0NEgfhXO5RQB.TNsyH7Eisli5oK',	'2021-10-18 01:30:14',	'2021-10-18 01:30:14',	'0',	'worker',	'https://avataaars.io/?topType=LongHairDreads&accessoriesType=Prescription02&clotheType=Hoodie&clotheColor=PastelGreen&avatarStyle=Circle');

-- 2021-10-18 01:33:06.639956+00