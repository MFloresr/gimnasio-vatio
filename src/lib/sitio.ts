// Datos del gimnasio. En producción vendrían del CMS (un documento "Ajustes del sitio").
// Todo lo marcado como ejemplo o entre corchetes lo sustituye el cliente con sus datos reales.

export type Horario = { etiqueta: string; tramos: { abre: string; cierra: string }[] };

export const sitio = {
  nombre: 'Vatio',
  eslogan: 'Gimnasio de entrenamiento funcional y fuerza',
  descripcion:
    'Gimnasio con clases dirigidas, sala de fuerza y entrenamiento funcional. Mira el horario de hoy, reserva tu plaza y calcula tu cuota.',
  url: 'https://www.vatiotraining.example',
  // Datos de ejemplo
  telefono: '+34938000000',
  telefonoVisible: '938 00 00 00',
  whatsapp: '34600000000',
  email: 'hola@vatiotraining.example',
  direccion: { calle: 'Carrer de la Fàbrica, 14', cp: '08225', ciudad: 'Terrassa', provincia: 'Barcelona' },
  mapa: 'https://www.openstreetmap.org/search?query=Terrassa',
  endpointFormularios: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  cancelacionHoras: 3,
  matricula: 30,
  horarios: [
    { etiqueta: 'Lunes a viernes', tramos: [{ abre: '06:30', cierra: '22:30' }] },
    { etiqueta: 'Sábados', tramos: [{ abre: '08:00', cierra: '15:00' }] },
    { etiqueta: 'Domingos', tramos: [{ abre: '09:00', cierra: '13:00' }] },
  ] as Horario[],
  // Horario de apertura por día de la semana (0 = domingo)
  semana: {
    0: [['09:00', '13:00']],
    1: [['06:30', '22:30']],
    2: [['06:30', '22:30']],
    3: [['06:30', '22:30']],
    4: [['06:30', '22:30']],
    5: [['06:30', '22:30']],
    6: [['08:00', '15:00']],
  } as Record<number, string[][]>,
  responsableLegal: {
    razonSocial: '[Razón social del cliente]',
    nif: '[NIF]',
    registro: '[Datos del Registro Mercantil]',
    domicilio: 'Carrer de la Fàbrica, 14, 08225 Terrassa',
  },
};

export const menu = [
  { href: '/clases/', texto: 'Clases' },
  { href: '/tarifas/', texto: 'Tarifas' },
  { href: '/instalaciones/', texto: 'Sala' },
  { href: '/entrenadores/', texto: 'Entrenadores' },
  { href: '/consejos/', texto: 'Consejos' },
];
