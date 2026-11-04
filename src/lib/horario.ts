// Une sesiones, clases y entrenadores en una lista plana para el horario y el marcador.
import { getClases, getSesiones, getEntrenadores } from './contenido';

export type Sesion = {
  id: string; dia: number; hora: string; claseId: string; nombre: string; tipo: string; nivel: number; intensidad: number;
  duracion: number; plazas: number; sala: string; entrenador: string;
};

export async function getHorario(): Promise<Sesion[]> {
  const [clases, sesiones, entrenadores] = await Promise.all([getClases(), getSesiones(), getEntrenadores()]);
  const porClase = new Map(clases.map((c) => [c.id, c.data]));
  const porEntrenador = new Map(entrenadores.map((e) => [e.id, e.data.nombre]));
  return sesiones
    .map((s) => {
      const c = porClase.get(s.data.clase)!;
      return {
        id: s.id, dia: s.data.dia, hora: s.data.hora, claseId: s.data.clase, nombre: c.nombre, tipo: c.tipo, nivel: c.nivel,
        intensidad: c.intensidad, duracion: c.duracion, plazas: c.plazas, sala: c.sala, entrenador: porEntrenador.get(s.data.entrenador) ?? '',
      };
    })
    .sort((a, b) => a.hora.localeCompare(b.hora));
}
