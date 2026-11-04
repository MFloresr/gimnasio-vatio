// Esquemas del contenido. Cada colección equivale a un tipo de documento del CMS (Sanity):
// clases, sesiones del horario, entrenadores, tarifas, extras, zonas, opiniones, preguntas y entradas del blog.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const TIPOS = ['fuerza', 'cardio', 'combate', 'movilidad'] as const;

const clases = defineCollection({
  loader: file('src/content/datos/clases.json'),
  schema: z.object({
    nombre: z.string(),
    tipo: z.enum(TIPOS),
    nivel: z.number().min(1).max(3), // 1 = todos los niveles, 3 = avanzado
    intensidad: z.number().min(1).max(5),
    duracion: z.number(),
    plazas: z.number(),
    sala: z.string(),
    descripcion: z.string(),
    paraQuien: z.string(),
  }),
});

// Una sesión es una clase en un día y una hora. dia: 0 = domingo ... 6 = sábado.
const sesiones = defineCollection({
  loader: file('src/content/datos/sesiones.json'),
  schema: z.object({ dia: z.number().min(0).max(6), hora: z.string(), clase: z.string(), entrenador: z.string() }),
});

const entrenadores = defineCollection({
  loader: file('src/content/datos/entrenadores.json'),
  schema: z.object({ nombre: z.string(), especialidad: z.string(), texto: z.string(), frase: z.string(), anos: z.number() }),
});

const tarifas = defineCollection({
  loader: file('src/content/datos/tarifas.json'),
  schema: z.object({
    nombre: z.string(),
    mensual: z.number(),
    incluye: z.array(z.string()),
    destacada: z.boolean().default(false),
    clasesSemana: z.string(),
  }),
});

const zonas = defineCollection({
  loader: file('src/content/datos/zonas.json'),
  schema: z.object({ nombre: z.string(), texto: z.string(), metros: z.number(), equipamiento: z.array(z.string()) }),
});

const opiniones = defineCollection({
  loader: file('src/content/datos/opiniones.json'),
  schema: z.object({ texto: z.string(), nombre: z.string(), meses: z.number() }),
});

const preguntas = defineCollection({
  loader: file('src/content/datos/preguntas.json'),
  schema: z.object({ tema: z.enum(['clases', 'tarifas', 'general']), pregunta: z.string(), respuesta: z.string() }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({ titulo: z.string(), resumen: z.string(), fecha: z.coerce.date(), categoria: z.string(), foto: image(), fotoAlt: z.string(), minutos: z.number() }),
});

export const collections = { clases, sesiones, entrenadores, tarifas, zonas, opiniones, preguntas, blog };
