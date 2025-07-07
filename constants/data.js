export const tasksData = [
  {
    id: '1',
    title: 'Desarrollo de Plataforma E-commerce',
    description: 'Creación de una plataforma de comercio electrónico completa para venta de productos en línea.',
    subtasks: [
      {
        id: '101',
        title: 'Definición de Requisitos',
        details: 'Recopilar y documentar todos los requisitos funcionales y no funcionales del sistema.',
        status: 'Completado' // Estado de la subtarea
      },
      {
        id: '102',
        title: 'Diseño de Base de Datos',
        details: 'Diseñar el esquema de la base de datos para productos, usuarios, pedidos y pagos.',
        status: 'En progreso' // Estado de la subtarea
      },
      {
        id: '103',
        title: 'Desarrollo del Backend',
        details: 'Implementar la lógica de negocio, APIs y servicios con Node.js y Express.',
        status: 'Pendiente' // Estado de la subtarea
      },
      {
        id: '104',
        title: 'Desarrollo del Frontend',
        details: 'Construir la interfaz de usuario con React y Redux, incluyendo carrito de compras y pasarela de pago.',
        status: 'Pendiente' // Estado de la subtarea
      },
      {
        id: '105',
        title: 'Pruebas de Integración',
        details: 'Realizar pruebas exhaustivas para asegurar que todos los módulos funcionen correctamente juntos.',
        status: 'Pendiente' // Estado de la subtarea
      },
    ]
  },
  {
    id: '2',
    title: 'Optimización de SEO para Blog',
    description: 'Mejorar el posicionamiento en motores de búsqueda para el blog corporativo.',
    subtasks: [
      {
        id: '201',
        title: 'Auditoría SEO Actual',
        details: 'Analizar el rendimiento SEO actual, identificar debilidades y oportunidades.',
        status: 'Completado' // Estado de la subtarea
      },
      {
        id: '202',
        title: 'Optimización de Contenido',
        details: 'Reescribir y optimizar artículos existentes con palabras clave relevantes y meta descripciones.',
        status: 'En progreso' // Estado de la subtarea
      },
      {
        id: '203',
        title: 'Construcción de Enlaces (Link Building)',
        details: 'Estrategia para adquirir enlaces de alta calidad de sitios web relevantes.',
        status: 'Pendiente' // Estado de la subtarea
      },
      {
        id: '204',
        title: 'Monitoreo de Rendimiento',
        details: 'Seguimiento continuo de rankings, tráfico y conversiones con Google Analytics y Search Console.',
        status: 'Pendiente' // Estado de la subtarea
      },
    ]
  },
  {
    id: '3',
    title: 'Capacitación Interna de Nuevo Software',
    description: 'Entrenar al personal en el uso de la nueva herramienta de gestión de proyectos.',
    subtasks: [
      {
        id: '301',
        title: 'Preparación de Material Didáctico',
        details: 'Crear guías, tutoriales y presentaciones para la capacitación.',
        status: 'Completado' // Estado de la subtarea
      },
      {
        id: '302',
        title: 'Programación de Sesiones',
        details: 'Establecer fechas y horarios para las sesiones de capacitación, y enviar invitaciones.',
        status: 'En progreso' // Estado de la subtarea
      },
      {
        id: '303',
        title: 'Realización de Talleres Prácticos',
        details: 'Dirigir sesiones interactivas con ejercicios prácticos para los empleados.',
        status: 'Pendiente' // Estado de la subtarea
      },
      {
        id: '304',
        title: 'Evaluación y Retroalimentación',
        details: 'Evaluar la comprensión del personal y recopilar comentarios para futuras mejoras.',
        status: 'Pendiente' // Estado de la subtarea
      },
    ]
  },
];
