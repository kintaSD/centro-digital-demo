/* CONFIGURACIÓN DEL CLIENTE
   Edita principalmente este bloque. true = mostrar | false = ocultar. */
const negocio = {
  identidad: {
    nombre: "Las Alitas Locas",
    iniciales: "AL",
    logo: "imagenes/logo/logo-las-alitas-locas.png",
    titulo: "Productos para impulsar tu negocio",
    descripcion: "Distribución de alitas adobadas y productos complementarios para restaurantes, puestos y negocios de alimentos.",
    fraseSuperior: "Distribuidor de alimentos",
    colorPrincipal: "#d62828",
    colorPrincipalOscuro: "#8f1515",
  },
  botones: {
    encabezado: "Contactar",
    principal: "Cotizar por WhatsApp",
    productos: "Ver productos",
    whatsappFinal: "Solicitar cotización",
    resena: "Déjanos una reseña en Google",
  },
  contacto: {
    whatsapp: "525561325072", // Código de país + número, sin +, espacios ni guiones.
    mensajeWhatsApp: "Hola, vi la Página Comercial de Las Alitas Locas y quisiera cotizar un pedido.",
    enlaceResenaGoogle: "https://www.google.com/maps/place/Las+Alitas+Locas/@19.5242079,-99.1937342,17z/data=!4m6!3m5!1s0x85d203277cd9d8ff:0xc7f460b3b995d28a!8m2!3d19.5242079!4d-99.1937342!16s%2Fg%2F11q2vx0v_5!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D",
    enlaceGoogleMaps: "https://maps.app.goo.gl/Bad7yPvqwBQPnMMU9",
  },
  secciones: {
    beneficios: true,
    productos: true,
    proceso: true,
    servicio: true,
    informacion: true,
    galeria: false,
    ubicacion: true,
    resenas: true,
    whatsappFlotante: true,
    firmaKinta: true,
  },
  textos: {
    beneficiosEtiqueta: "Calidad para tu negocio",
    beneficiosTitulo: "Un proveedor en quien confiar",
    productosEtiqueta: "Catálogo",
    productosTitulo: "Productos destacados",
    productosIntroduccion: "Conoce algunos de los productos disponibles para tu negocio.",
    procesoEtiqueta: "Preparación real",
    procesoTitulo: "Nuestro proceso",
    procesoIntroduccion: "Preparamos cada pedido mediante un proceso de selección, limpieza y manejo cuidadoso, atendiendo las necesidades de restaurantes, puestos y negocios.",
    servicioEtiqueta: "Entrega para tu negocio",
    servicioTitulo: "Servicio a domicilio",
    servicioDescripcion: "Envíos disponibles en el área metropolitana, Ciudad de México y Estado de México.",
    servicioBoton: "Cotizar entrega por WhatsApp",
    servicioNota: "Consulta disponibilidad y condiciones de entrega.",
    informacionEtiqueta: "Información comercial",
    informacionTitulo: "Información para tu pedido",
    galeriaEtiqueta: "Galería",
    galeriaTitulo: "Conoce nuestro trabajo",
    ubicacionEtiqueta: "Ubicación",
    ubicacionTitulo: "Ubicación y recolección",
    ubicacionDescripcion: "Av. Ixtacala 140, Los Reyes 1ra. Sección, Hab. Los Reyes Ixtacala, C.P. 54090, Tlalnepantla de Baz, Estado de México.",
    contactoEtiqueta: "Atención directa",
    contactoTitulo: "¿Listo para comenzar?",
    contactoDescripcion: "Cuéntanos qué productos y volumen necesitas para preparar tu cotización.",
  },
  beneficios: [
    {
      titulo: "Producto limpio y listo para preparar",
      descripcion: "Alitas seleccionadas y adobadas para facilitar la operación de tu negocio.",
    },
    {
      titulo: "Atención para negocios",
      descripcion: "Suministro para restaurantes, puestos, hamburgueserías y otros negocios de alimentos.",
    },
    {
      titulo: "Experiencia y constancia",
      descripcion: "Más de una década atendiendo clientes y construyendo relaciones comerciales.",
    },
  ],
  productos: [
    {
      nombre: "Alitas adobadas",
      descripcion: "Nuestro producto estrella: limpias, marinadas y listas para preparar.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/alitas-adobadas.webp",
      categoria: "Producto principal",
    },
    {
      nombre: "Alitas naturales (limpias y sin pluma)",
      descripcion: "Listas para sazonar y preparar según las necesidades de tu negocio.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/alitas-naturales.webp",
      categoria: "Alitas",
    },
    {
      nombre: "Piernas naturales y adobadas",
      descripcion: "Disponibles en ambas presentaciones para diferentes preparaciones.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/piernas-naturales-adobadas.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Boneless",
      descripcion: "Piezas de pollo empanizadas, prácticas y listas para freír.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/boneless.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Tenders",
      descripcion: "Tiras de pollo empanizadas, listas para preparar y servir.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/tenders.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Nuggets de pollo",
      descripcion: "Una opción práctica para porciones, menús y complementos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/nuggets-de-pollo.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Papas gajo",
      descripcion: "Una alternativa versátil para acompañamientos y porciones.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/papas-gajo.webp",
      categoria: "Papas",
    },
    {
      nombre: "Palomitas de pollo",
      descripcion: "Pequeñas piezas empanizadas, ideales para porciones y entradas.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/palomitas-de-pollo.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Papas a la francesa",
      descripcion: "El complemento clásico para hamburguesas, alitas y otros platillos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/papas-a-la-francesa.webp",
      categoria: "Papas",
    },
    {
      nombre: "Dedos de queso",
      descripcion: "Piezas empanizadas con queso, ideales para entradas y complementos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/dedos-de-queso.webp",
      categoria: "Complementos",
    },
    {
      nombre: "Aros de cebolla",
      descripcion: "Una opción empanizada para acompañamientos, entradas y porciones.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/aros-de-cebolla.webp",
      categoria: "Complementos",
    },
    {
      nombre: "Cordon Bleu",
      descripcion: "Pollo empanizado relleno de jamón y queso, listo para preparar.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/cordon-bleu.webp",
      categoria: "Pollo",
    },
  ],
  proceso: [
    {
      titulo: "Selección y limpieza",
      descripcion: "Revisión y manejo cuidadoso de las piezas.",
      imagen: "imagenes/proceso/seleccion-limpieza.webp",
    },
    {
      titulo: "Eliminación de pluma mediante sopleteado",
      descripcion: "Limpieza adicional para entregar alitas listas para preparar.",
      imagen: "imagenes/proceso/eliminacion-pluma-sopleteado.webp",
    },
    {
      titulo: "Revisión y preparación",
      descripcion: "Verificación manual antes de continuar con el proceso.",
      imagen: "imagenes/proceso/revision-preparacion.webp",
    },
    {
      titulo: "Adobado en volumen",
      descripcion: "Preparación del producto estrella para atender pedidos comerciales.",
      imagen: "imagenes/proceso/adobado-volumen.webp",
    },
  ],
  servicio: {
    imagen: "imagenes/servicio/envios-area-metropolitana.webp",
    opciones: [
      { icono: "🛒", texto: "Pedido preparado" },
      { icono: "📦", texto: "Atención por volumen" },
      { icono: "📍", texto: "Cobertura metropolitana" },
    ],
  },
  informacion: [
    { etiqueta: "Horario", valor: "Lunes a sábado, de 9:00 a.m. a 8:00 p.m. | Domingo, de 9:00 a.m. a 6:00 p.m." },
    { etiqueta: "Cobertura", valor: "Área metropolitana, Ciudad de México y Estado de México" },
    { etiqueta: "Entrega", valor: "Entrega y recolección disponibles. Consulta condiciones por WhatsApp" },
    { etiqueta: "Pedido mínimo", valor: "Consultar por WhatsApp" },
    { etiqueta: "Precios por volumen", valor: "Consultar por WhatsApp" },
    { etiqueta: "Métodos de pago", valor: "Transferencia, tarjeta bancaria y efectivo" },
  ],
  galeria: [
    // Ejemplo: { imagen: "imagenes/galeria/foto-1.jpg", descripcion: "Descripción" },
  ],
};

/* FUNCIONAMIENTO DE LA PLANTILLA
   Normalmente no necesitas modificar nada debajo de esta línea. */
const raiz = document.documentElement;
raiz.style.setProperty("--color-principal", negocio.identidad.colorPrincipal);
raiz.style.setProperty("--color-principal-oscuro", negocio.identidad.colorPrincipalOscuro);

const ponerTexto = (selector, texto) => document.querySelectorAll(selector).forEach((elemento) => { elemento.textContent = texto; });
ponerTexto("[data-negocio]", negocio.identidad.nombre);
ponerTexto("[data-titulo]", negocio.identidad.titulo);
ponerTexto("[data-descripcion]", negocio.identidad.descripcion);
ponerTexto("[data-frase-superior]", negocio.identidad.fraseSuperior);
ponerTexto("[data-boton-encabezado]", negocio.botones.encabezado);
ponerTexto("[data-boton-principal]", negocio.botones.principal);
ponerTexto("[data-boton-productos]", negocio.botones.productos);
ponerTexto("[data-boton-whatsapp-final]", negocio.botones.whatsappFinal);
ponerTexto("[data-boton-resena]", negocio.botones.resena);
Object.entries(negocio.textos).forEach(([clave, texto]) => ponerTexto(`[data-texto="${clave}"]`, texto));

document.title = `${negocio.identidad.nombre} | Distribuidor de alimentos`;
document.querySelector('meta[name="description"]').content = negocio.identidad.descripcion;
const simbolo = document.querySelector("[data-simbolo]");
simbolo.innerHTML = negocio.identidad.logo
  ? `<img src="${negocio.identidad.logo}" alt="Logo de ${negocio.identidad.nombre}">`
  : negocio.identidad.iniciales;

document.querySelectorAll("[data-logo-final]").forEach((imagen) => {
  if (negocio.identidad.logo) {
    imagen.src = negocio.identidad.logo;
    imagen.alt = `Logo de ${negocio.identidad.nombre}`;
  } else {
    imagen.hidden = true;
  }
});

const enlaceWhatsApp = `https://wa.me/${negocio.contacto.whatsapp}?text=${encodeURIComponent(negocio.contacto.mensajeWhatsApp)}`;
document.querySelectorAll("[data-whatsapp]").forEach((enlace) => {
  enlace.href = enlaceWhatsApp;
  enlace.target = "_blank";
  enlace.rel = "noopener noreferrer";
});

const prepararEnlace = (selector, url, etiquetaPendiente) => document.querySelectorAll(selector).forEach((enlace) => {
  enlace.href = url;
  if (!url || url === "#") {
    enlace.setAttribute("aria-label", etiquetaPendiente);
    enlace.title = "Enlace pendiente de configuración";
  } else {
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
  }
});
prepararEnlace("[data-resena]", negocio.contacto.enlaceResenaGoogle, "Enlace de reseñas pendiente");
prepararEnlace("[data-maps]", negocio.contacto.enlaceGoogleMaps, "Enlace de ubicación pendiente");

document.querySelector("#beneficios").innerHTML = negocio.beneficios.map((item) =>
  `<article class="tarjeta"><h3>${item.titulo}</h3><p>${item.descripcion}</p></article>`).join("");

document.querySelector("#lista-productos").innerHTML = negocio.productos.map((producto) => {
  const imagen = producto.imagen
    ? `<img class="producto__imagen" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">`
    : `<div class="producto__imagen producto__imagen--vacia" aria-hidden="true">Fotografía</div>`;
  const categoria = producto.categoria ? `<span class="producto__categoria">${producto.categoria}</span>` : "";
  return `<article class="tarjeta producto">${imagen}${categoria}<h3>${producto.nombre}</h3><p>${producto.descripcion}</p><p class="producto__meta">${producto.meta}</p></article>`;
}).join("");

document.querySelector("#lista-proceso").innerHTML = negocio.proceso.map((etapa, indice) =>
  `<article class="proceso__etapa">
    <div class="proceso__imagen-wrap">
      <img class="proceso__imagen" src="${etapa.imagen}" alt="${etapa.titulo}" loading="lazy">
      <span class="proceso__numero" aria-hidden="true">${String(indice + 1).padStart(2, "0")}</span>
    </div>
    <div class="proceso__contenido"><h3>${etapa.titulo}</h3><p>${etapa.descripcion}</p></div>
  </article>`).join("");

document.querySelector("#servicio-opciones").innerHTML = negocio.servicio.opciones.map((opcion) =>
  `<span class="servicio-domicilio__opcion"><span aria-hidden="true">${opcion.icono}</span>${opcion.texto}</span>`).join("");
document.querySelectorAll("[data-servicio-imagen]").forEach((imagen) => {
  imagen.src = negocio.servicio.imagen;
});

document.querySelector("#datos-comerciales").innerHTML = negocio.informacion.map((dato) =>
  `<div class="dato"><strong>${dato.etiqueta}</strong><span>${dato.valor}</span></div>`).join("");
document.querySelector("#lista-galeria").innerHTML = negocio.galeria.map((foto) =>
  `<figure class="foto"><img src="${foto.imagen}" alt="${foto.descripcion}" loading="lazy"><figcaption>${foto.descripcion}</figcaption></figure>`).join("");

Object.entries(negocio.secciones).forEach(([nombre, visible]) => {
  document.querySelectorAll(`[data-seccion="${nombre}"]`).forEach((elemento) => { elemento.hidden = !visible; });
});
document.querySelector("#anio").textContent = new Date().getFullYear();
