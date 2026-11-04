// Capa de acceso al contenido. Las páginas solo llaman a estas funciones.
// Hoy leen los archivos de src/content; para pasar al CMS (Sanity) basta con reescribir este archivo
// y devolver la misma forma de datos con consultas GROQ, sin tocar las páginas ni los componentes.
import { getCollection } from 'astro:content';

export const getClases = () => getCollection('clases');
export const getSesiones = () => getCollection('sesiones');
export const getEntrenadores = () => getCollection('entrenadores');
export const getTarifas = async () => (await getCollection('tarifas')).sort((a, b) => a.data.mensual - b.data.mensual);
export const getZonas = () => getCollection('zonas');
export const getOpiniones = () => getCollection('opiniones');
export const getEntradas = async () => (await getCollection('blog')).sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
export const getPreguntas = async (tema?: string) => {
  const todas = await getCollection('preguntas');
  return tema ? todas.filter((p) => p.data.tema === tema) : todas;
};
