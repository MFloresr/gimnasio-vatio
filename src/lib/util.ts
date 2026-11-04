export const NBSP = ' ';
const nf = new Intl.NumberFormat('es-ES', { useGrouping: 'always' });
export const euros = (n: number) => `${nf.format(n)}${NBSP}€`;
export const NOMBRE_TIPO: Record<string, string> = { fuerza: 'Fuerza', cardio: 'Cardio y funcional', combate: 'Combate', movilidad: 'Movilidad y mente' };
export const NOMBRE_DIA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
export const DIA_CORTO = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
export const NIVEL = ['', 'Todos los niveles', 'Intermedio', 'Avanzado'];
