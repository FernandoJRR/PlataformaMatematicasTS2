--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-07-02 18:32:52 CST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3539 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 531646)
-- Name: dificultad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dificultad (
    id integer NOT NULL,
    codigo character varying(20) NOT NULL
);


ALTER TABLE public.dificultad OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 531645)
-- Name: dificultad_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dificultad_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.dificultad_id_seq OWNER TO postgres;

--
-- TOC entry 3540 (class 0 OID 0)
-- Dependencies: 221
-- Name: dificultad_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dificultad_id_seq OWNED BY public.dificultad.id;


--
-- TOC entry 236 (class 1259 OID 531736)
-- Name: ejercicio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ejercicio (
    id integer NOT NULL,
    id_tipo_ejercicio integer NOT NULL,
    id_tema integer NOT NULL,
    id_dificultad integer NOT NULL,
    anotacion character varying(255) NOT NULL,
    data_json json NOT NULL,
    fecha_creacion date NOT NULL,
    fecha_modificacion date NOT NULL
);


ALTER TABLE public.ejercicio OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 531735)
-- Name: ejercicio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ejercicio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ejercicio_id_seq OWNER TO postgres;

--
-- TOC entry 3541 (class 0 OID 0)
-- Dependencies: 235
-- Name: ejercicio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ejercicio_id_seq OWNED BY public.ejercicio.id;


--
-- TOC entry 239 (class 1259 OID 531781)
-- Name: ejercicio_partida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ejercicio_partida (
    id_ejercicio integer NOT NULL,
    id_partida integer NOT NULL,
    resuelto_satisfactoriamente boolean NOT NULL
);


ALTER TABLE public.ejercicio_partida OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 527990)
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 527989)
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.knex_migrations_id_seq OWNER TO postgres;

--
-- TOC entry 3542 (class 0 OID 0)
-- Dependencies: 215
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- TOC entry 218 (class 1259 OID 527997)
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 527996)
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNER TO postgres;

--
-- TOC entry 3543 (class 0 OID 0)
-- Dependencies: 217
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- TOC entry 225 (class 1259 OID 531665)
-- Name: logro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logro (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL
);


ALTER TABLE public.logro OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 531664)
-- Name: logro_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.logro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.logro_id_seq OWNER TO postgres;

--
-- TOC entry 3544 (class 0 OID 0)
-- Dependencies: 224
-- Name: logro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.logro_id_seq OWNED BY public.logro.id;


--
-- TOC entry 228 (class 1259 OID 531680)
-- Name: logro_usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logro_usuario (
    id_logro integer NOT NULL,
    username_usuario character varying(255) NOT NULL,
    fecha_conseguido date NOT NULL
);


ALTER TABLE public.logro_usuario OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 531674)
-- Name: modo_juego; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modo_juego (
    id integer NOT NULL,
    codigo character varying(255) NOT NULL
);


ALTER TABLE public.modo_juego OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 531673)
-- Name: modo_juego_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modo_juego_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modo_juego_id_seq OWNER TO postgres;

--
-- TOC entry 3545 (class 0 OID 0)
-- Dependencies: 226
-- Name: modo_juego_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modo_juego_id_seq OWNED BY public.modo_juego.id;


--
-- TOC entry 238 (class 1259 OID 531760)
-- Name: partida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.partida (
    id integer NOT NULL,
    id_tema integer NOT NULL,
    puntaje real,
    username_jugador character varying(255) NOT NULL,
    id_modo_juego integer NOT NULL
);


ALTER TABLE public.partida OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 531759)
-- Name: partida_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.partida_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.partida_id_seq OWNER TO postgres;

--
-- TOC entry 3546 (class 0 OID 0)
-- Dependencies: 237
-- Name: partida_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.partida_id_seq OWNED BY public.partida.id;


--
-- TOC entry 220 (class 1259 OID 531639)
-- Name: rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rol (
    id integer NOT NULL,
    codigo character varying(20) NOT NULL
);


ALTER TABLE public.rol OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 531638)
-- Name: rol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rol_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rol_id_seq OWNER TO postgres;

--
-- TOC entry 3547 (class 0 OID 0)
-- Dependencies: 219
-- Name: rol_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_id_seq OWNED BY public.rol.id;


--
-- TOC entry 234 (class 1259 OID 531717)
-- Name: tema; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tema (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL,
    id_temario integer NOT NULL,
    id_tema_previo integer,
    fecha_creacion date NOT NULL
);


ALTER TABLE public.tema OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 531716)
-- Name: tema_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tema_id_seq OWNER TO postgres;

--
-- TOC entry 3548 (class 0 OID 0)
-- Dependencies: 233
-- Name: tema_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tema_id_seq OWNED BY public.tema.id;


--
-- TOC entry 230 (class 1259 OID 531696)
-- Name: temario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.temario (
    id integer NOT NULL,
    titulo character varying(255),
    descripcion character varying(255) NOT NULL,
    username_creador character varying(255) NOT NULL,
    fecha_creacion date NOT NULL
);


ALTER TABLE public.temario OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 531695)
-- Name: temario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.temario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.temario_id_seq OWNER TO postgres;

--
-- TOC entry 3549 (class 0 OID 0)
-- Dependencies: 229
-- Name: temario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.temario_id_seq OWNED BY public.temario.id;


--
-- TOC entry 232 (class 1259 OID 531710)
-- Name: tipo_ejercicio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_ejercicio (
    id integer NOT NULL,
    codigo character varying(255) NOT NULL
);


ALTER TABLE public.tipo_ejercicio OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 531709)
-- Name: tipo_ejercicio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_ejercicio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tipo_ejercicio_id_seq OWNER TO postgres;

--
-- TOC entry 3550 (class 0 OID 0)
-- Dependencies: 231
-- Name: tipo_ejercicio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_ejercicio_id_seq OWNED BY public.tipo_ejercicio.id;


--
-- TOC entry 223 (class 1259 OID 531652)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    username character varying(255) NOT NULL,
    nombre character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    correo character varying(255) NOT NULL,
    edad integer,
    id_rol integer NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 3316 (class 2604 OID 531649)
-- Name: dificultad id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dificultad ALTER COLUMN id SET DEFAULT nextval('public.dificultad_id_seq'::regclass);


--
-- TOC entry 3322 (class 2604 OID 531739)
-- Name: ejercicio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio ALTER COLUMN id SET DEFAULT nextval('public.ejercicio_id_seq'::regclass);


--
-- TOC entry 3313 (class 2604 OID 527993)
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- TOC entry 3314 (class 2604 OID 528000)
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- TOC entry 3317 (class 2604 OID 531668)
-- Name: logro id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logro ALTER COLUMN id SET DEFAULT nextval('public.logro_id_seq'::regclass);


--
-- TOC entry 3318 (class 2604 OID 531677)
-- Name: modo_juego id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modo_juego ALTER COLUMN id SET DEFAULT nextval('public.modo_juego_id_seq'::regclass);


--
-- TOC entry 3323 (class 2604 OID 531763)
-- Name: partida id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partida ALTER COLUMN id SET DEFAULT nextval('public.partida_id_seq'::regclass);


--
-- TOC entry 3315 (class 2604 OID 531642)
-- Name: rol id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol ALTER COLUMN id SET DEFAULT nextval('public.rol_id_seq'::regclass);


--
-- TOC entry 3321 (class 2604 OID 531720)
-- Name: tema id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tema ALTER COLUMN id SET DEFAULT nextval('public.tema_id_seq'::regclass);


--
-- TOC entry 3319 (class 2604 OID 531699)
-- Name: temario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.temario ALTER COLUMN id SET DEFAULT nextval('public.temario_id_seq'::regclass);


--
-- TOC entry 3320 (class 2604 OID 531713)
-- Name: tipo_ejercicio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_ejercicio ALTER COLUMN id SET DEFAULT nextval('public.tipo_ejercicio_id_seq'::regclass);


--
-- TOC entry 3516 (class 0 OID 531646)
-- Dependencies: 222
-- Data for Name: dificultad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dificultad (id, codigo) FROM stdin;
1	Facil
2	Normal
3	Dificil
\.


--
-- TOC entry 3530 (class 0 OID 531736)
-- Dependencies: 236
-- Data for Name: ejercicio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ejercicio (id, id_tipo_ejercicio, id_tema, id_dificultad, anotacion, data_json, fecha_creacion, fecha_modificacion) FROM stdin;
1	1	1	1	Anotacion para el ejercicio	{}	2024-07-02	2024-07-02
2	1	2	3	Anotacion para el ejercicio	{}	2024-07-02	2024-07-02
3	1	3	2	Anotacion para el ejercicio	{}	2024-07-02	2024-07-02
4	1	4	1	Anotacion para el ejercicio	{}	2024-07-02	2024-07-02
\.


--
-- TOC entry 3533 (class 0 OID 531781)
-- Dependencies: 239
-- Data for Name: ejercicio_partida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ejercicio_partida (id_ejercicio, id_partida, resuelto_satisfactoriamente) FROM stdin;
\.


--
-- TOC entry 3510 (class 0 OID 527990)
-- Dependencies: 216
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
189	20240627002923_create_rol_table.ts	1	2024-07-02 18:22:30.766-06
190	20240627003923_create_dificultad_table.ts	1	2024-07-02 18:22:30.774-06
191	20240627013042_create_usuario_table.ts	1	2024-07-02 18:22:30.786-06
192	20240627014246_create_logro_table.ts	1	2024-07-02 18:22:30.795-06
193	20240627035929_create_modo_juego__table.ts	1	2024-07-02 18:22:30.802-06
194	20240627045535_create_logro_usuario__table.ts	1	2024-07-02 18:22:30.812-06
195	20240627051634_create_temario_table.ts	1	2024-07-02 18:22:30.82-06
196	20240627052222_create_tipo_ejercicio_table.ts	1	2024-07-02 18:22:30.824-06
197	20240627053220_create_tema_table.ts	1	2024-07-02 18:22:30.83-06
198	20240627054000_create_ejercicio_table.ts	1	2024-07-02 18:22:30.837-06
199	20240627200647_create_partida_table.ts	1	2024-07-02 18:22:30.841-06
200	20240627202152_create_ejercicio_partida_table.ts	1	2024-07-02 18:22:30.845-06
\.


--
-- TOC entry 3512 (class 0 OID 527997)
-- Dependencies: 218
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- TOC entry 3519 (class 0 OID 531665)
-- Dependencies: 225
-- Data for Name: logro; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.logro (id, titulo, descripcion) FROM stdin;
\.


--
-- TOC entry 3522 (class 0 OID 531680)
-- Dependencies: 228
-- Data for Name: logro_usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.logro_usuario (id_logro, username_usuario, fecha_conseguido) FROM stdin;
\.


--
-- TOC entry 3521 (class 0 OID 531674)
-- Dependencies: 227
-- Data for Name: modo_juego; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modo_juego (id, codigo) FROM stdin;
1	Contrarreloj
2	Campaña
3	Refuerzo
\.


--
-- TOC entry 3532 (class 0 OID 531760)
-- Dependencies: 238
-- Data for Name: partida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.partida (id, id_tema, puntaje, username_jugador, id_modo_juego) FROM stdin;
\.


--
-- TOC entry 3514 (class 0 OID 531639)
-- Dependencies: 220
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rol (id, codigo) FROM stdin;
1	Estudiante
2	Profesor
3	Administrador
\.


--
-- TOC entry 3528 (class 0 OID 531717)
-- Dependencies: 234
-- Data for Name: tema; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tema (id, titulo, descripcion, id_temario, id_tema_previo, fecha_creacion) FROM stdin;
1	Tema1 - Temario1	Descripcion del tema	1	\N	2024-07-02
2	Tema2 - Temario1	Descripcion del tema	1	1	2024-07-02
3	Tema1 - Temario2	Descripcion del tema	2	\N	2024-07-02
4	Tema2 - Temario2	Descripcion del tema	2	3	2024-07-02
\.


--
-- TOC entry 3524 (class 0 OID 531696)
-- Dependencies: 230
-- Data for Name: temario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.temario (id, titulo, descripcion, username_creador, fecha_creacion) FROM stdin;
1	Temario1	Descripcion del temario	profesor1	2024-07-02
2	Temario2	Descripcion del temario 2 creado por el profesor1	profesor1	2024-07-02
\.


--
-- TOC entry 3526 (class 0 OID 531710)
-- Dependencies: 232
-- Data for Name: tipo_ejercicio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_ejercicio (id, codigo) FROM stdin;
1	Preguntas y Respuestas
2	Parejas
3	Opcion Multiple
\.


--
-- TOC entry 3517 (class 0 OID 531652)
-- Dependencies: 223
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (username, nombre, password, correo, edad, id_rol) FROM stdin;
usuario1	Antonio	XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=	correo@correo.com	\N	1
profesor1	Maria	XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=	correo@correo.com	\N	2
admin1	Roberto	XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=	correo@correo.com	\N	3
\.


--
-- TOC entry 3551 (class 0 OID 0)
-- Dependencies: 221
-- Name: dificultad_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dificultad_id_seq', 3, true);


--
-- TOC entry 3552 (class 0 OID 0)
-- Dependencies: 235
-- Name: ejercicio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ejercicio_id_seq', 4, true);


--
-- TOC entry 3553 (class 0 OID 0)
-- Dependencies: 215
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 200, true);


--
-- TOC entry 3554 (class 0 OID 0)
-- Dependencies: 217
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- TOC entry 3555 (class 0 OID 0)
-- Dependencies: 224
-- Name: logro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.logro_id_seq', 1, false);


--
-- TOC entry 3556 (class 0 OID 0)
-- Dependencies: 226
-- Name: modo_juego_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modo_juego_id_seq', 3, true);


--
-- TOC entry 3557 (class 0 OID 0)
-- Dependencies: 237
-- Name: partida_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.partida_id_seq', 1, false);


--
-- TOC entry 3558 (class 0 OID 0)
-- Dependencies: 219
-- Name: rol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_id_seq', 3, true);


--
-- TOC entry 3559 (class 0 OID 0)
-- Dependencies: 233
-- Name: tema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tema_id_seq', 4, true);


--
-- TOC entry 3560 (class 0 OID 0)
-- Dependencies: 229
-- Name: temario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.temario_id_seq', 2, true);


--
-- TOC entry 3561 (class 0 OID 0)
-- Dependencies: 231
-- Name: tipo_ejercicio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipo_ejercicio_id_seq', 3, true);


--
-- TOC entry 3331 (class 2606 OID 531651)
-- Name: dificultad dificultad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dificultad
    ADD CONSTRAINT dificultad_pkey PRIMARY KEY (id);


--
-- TOC entry 3351 (class 2606 OID 531785)
-- Name: ejercicio_partida ejercicio_partida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio_partida
    ADD CONSTRAINT ejercicio_partida_pkey PRIMARY KEY (id_ejercicio, id_partida);


--
-- TOC entry 3347 (class 2606 OID 531743)
-- Name: ejercicio ejercicio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio
    ADD CONSTRAINT ejercicio_pkey PRIMARY KEY (id);


--
-- TOC entry 3327 (class 2606 OID 528002)
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- TOC entry 3325 (class 2606 OID 527995)
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3335 (class 2606 OID 531672)
-- Name: logro logro_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logro
    ADD CONSTRAINT logro_pkey PRIMARY KEY (id);


--
-- TOC entry 3339 (class 2606 OID 531684)
-- Name: logro_usuario logro_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logro_usuario
    ADD CONSTRAINT logro_usuario_pkey PRIMARY KEY (id_logro, username_usuario);


--
-- TOC entry 3337 (class 2606 OID 531679)
-- Name: modo_juego modo_juego_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modo_juego
    ADD CONSTRAINT modo_juego_pkey PRIMARY KEY (id);


--
-- TOC entry 3349 (class 2606 OID 531765)
-- Name: partida partida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_pkey PRIMARY KEY (id);


--
-- TOC entry 3329 (class 2606 OID 531644)
-- Name: rol rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id);


--
-- TOC entry 3345 (class 2606 OID 531724)
-- Name: tema tema_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tema
    ADD CONSTRAINT tema_pkey PRIMARY KEY (id);


--
-- TOC entry 3341 (class 2606 OID 531703)
-- Name: temario temario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.temario
    ADD CONSTRAINT temario_pkey PRIMARY KEY (id);


--
-- TOC entry 3343 (class 2606 OID 531715)
-- Name: tipo_ejercicio tipo_ejercicio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_ejercicio
    ADD CONSTRAINT tipo_ejercicio_pkey PRIMARY KEY (id);


--
-- TOC entry 3333 (class 2606 OID 531658)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (username);


--
-- TOC entry 3358 (class 2606 OID 531754)
-- Name: ejercicio ejercicio_id_dificultad_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio
    ADD CONSTRAINT ejercicio_id_dificultad_foreign FOREIGN KEY (id_dificultad) REFERENCES public.dificultad(id);


--
-- TOC entry 3359 (class 2606 OID 531749)
-- Name: ejercicio ejercicio_id_tema_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio
    ADD CONSTRAINT ejercicio_id_tema_foreign FOREIGN KEY (id_tema) REFERENCES public.tema(id);


--
-- TOC entry 3360 (class 2606 OID 531744)
-- Name: ejercicio ejercicio_id_tipo_ejercicio_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio
    ADD CONSTRAINT ejercicio_id_tipo_ejercicio_foreign FOREIGN KEY (id_tipo_ejercicio) REFERENCES public.tipo_ejercicio(id);


--
-- TOC entry 3364 (class 2606 OID 531786)
-- Name: ejercicio_partida ejercicio_partida_id_ejercicio_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio_partida
    ADD CONSTRAINT ejercicio_partida_id_ejercicio_foreign FOREIGN KEY (id_ejercicio) REFERENCES public.ejercicio(id);


--
-- TOC entry 3365 (class 2606 OID 531791)
-- Name: ejercicio_partida ejercicio_partida_id_partida_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ejercicio_partida
    ADD CONSTRAINT ejercicio_partida_id_partida_foreign FOREIGN KEY (id_partida) REFERENCES public.partida(id);


--
-- TOC entry 3353 (class 2606 OID 531685)
-- Name: logro_usuario logro_usuario_id_logro_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logro_usuario
    ADD CONSTRAINT logro_usuario_id_logro_foreign FOREIGN KEY (id_logro) REFERENCES public.logro(id);


--
-- TOC entry 3354 (class 2606 OID 531690)
-- Name: logro_usuario logro_usuario_username_usuario_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logro_usuario
    ADD CONSTRAINT logro_usuario_username_usuario_foreign FOREIGN KEY (username_usuario) REFERENCES public.usuario(username);


--
-- TOC entry 3361 (class 2606 OID 531776)
-- Name: partida partida_id_modo_juego_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_id_modo_juego_foreign FOREIGN KEY (id_modo_juego) REFERENCES public.modo_juego(id);


--
-- TOC entry 3362 (class 2606 OID 531766)
-- Name: partida partida_id_tema_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_id_tema_foreign FOREIGN KEY (id_tema) REFERENCES public.tema(id);


--
-- TOC entry 3363 (class 2606 OID 531771)
-- Name: partida partida_username_jugador_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partida
    ADD CONSTRAINT partida_username_jugador_foreign FOREIGN KEY (username_jugador) REFERENCES public.usuario(username);


--
-- TOC entry 3356 (class 2606 OID 531730)
-- Name: tema tema_id_tema_previo_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tema
    ADD CONSTRAINT tema_id_tema_previo_foreign FOREIGN KEY (id_tema_previo) REFERENCES public.tema(id);


--
-- TOC entry 3357 (class 2606 OID 531725)
-- Name: tema tema_id_temario_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tema
    ADD CONSTRAINT tema_id_temario_foreign FOREIGN KEY (id_temario) REFERENCES public.temario(id);


--
-- TOC entry 3355 (class 2606 OID 531704)
-- Name: temario temario_username_creador_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.temario
    ADD CONSTRAINT temario_username_creador_foreign FOREIGN KEY (username_creador) REFERENCES public.usuario(username);


--
-- TOC entry 3352 (class 2606 OID 531659)
-- Name: usuario usuario_id_rol_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_rol_foreign FOREIGN KEY (id_rol) REFERENCES public.rol(id);


-- Completed on 2024-07-02 18:32:52 CST

--
-- PostgreSQL database dump complete
--

