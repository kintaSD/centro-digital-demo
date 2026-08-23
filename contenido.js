/* CONFIGURACIÓN DEL CLIENTE
   Edita principalmente este bloque. true = mostrar | false = ocultar. */
const negocio = {
  identidad: {
    nombre: "Las Alitas Locas",
    iniciales: "AL",
    logo: "imagenes/logo/logo-las-alitas-locas.png",
    titulo: "Productos para impulsar tu negocio",
    descripcion: "Alitas marinadas y productos complementarios para restaurantes, puestos y negocios de alimentos.",
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
    mensajeWhatsApp: "Hola, vi el Centro Digital de Las Alitas Locas y quisiera cotizar un pedido.",
    enlaceResenaGoogle: "#",
    enlaceGoogleMaps: "https://maps.app.goo.gl/Bad7yPvqwBQPnMMU9",
  },
  secciones: {
    beneficios: true,
    productos: true,
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
    informacionEtiqueta: "Información comercial",
    informacionTitulo: "Antes de contactarnos",
    galeriaEtiqueta: "Galería",
    galeriaTitulo: "Conoce nuestro trabajo",
    ubicacionEtiqueta: "Ubicación",
    ubicacionTitulo: "Ubicación y recolección",
    ubicacionDescripcion: "Av. Ixtacala 140, Los Reyes Ixtacala 1ra. Sección, Hab. Los Reyes Ixtacala, Barrio de los Árboles/Barrio de los Héroes, C.P. 54090, Tlalnepantla, Estado de México.",
    contactoEtiqueta: "Atención directa",
    contactoTitulo: "¿Listo para comenzar?",
    contactoDescripcion: "Escríbenos y recibe información de acuerdo con lo que necesitas.",
  },
  beneficios: [
    {
      titulo: "Producto limpio y preparado",
      descripcion: "Alitas seleccionadas y marinadas, listas para facilitar la operación de tu negocio.",
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
      nombre: "Alitas",
      descripcion: "Disponibles marinadas, sopleteadas o limpias sin pluma.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/alitas.webp",
      categoria: "Producto principal",
    },
    {
      nombre: "Piernas de pollo",
      descripcion: "Disponibles adobadas o naturales para diferentes preparaciones.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/piernas-de-pollo.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Boneless",
      descripcion: "Piezas empanizadas prácticas para porciones, entradas y diferentes preparaciones.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/boneless.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Tenders",
      descripcion: "Tiras de pollo empanizadas para complementar el menú de tu negocio.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/tenders.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Nuggets",
      descripcion: "Producto práctico para restaurantes, puestos y negocios de alimentos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/nuggets.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Palomitas de pollo",
      descripcion: "Una opción versátil para porciones, entradas y complementos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/palomitas-de-pollo.webp",
      categoria: "Pollo",
    },
    {
      nombre: "Papas a la francesa",
      descripcion: "Complemento clásico para diferentes tipos de platillos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/papas-a-la-francesa.webp",
      categoria: "Papas",
    },
    {
      nombre: "Papas gajo",
      descripcion: "Una alternativa de papa para ampliar las opciones de tu menú.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/papas-gajo.webp",
      categoria: "Papas",
    },
    {
      nombre: "Dedos de queso",
      descripcion: "Complemento ideal para entradas, porciones y acompañamientos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/dedos-de-queso.webp",
      categoria: "Complementos",
    },
    {
      nombre: "Aros de cebolla",
      descripcion: "Opción crujiente para acompañar diferentes platillos.",
      meta: "Cotiza por WhatsApp",
      imagen: "imagenes/productos/aros-de-cebolla.webp",
      categoria: "Complementos",
    },
  ],
  informacion: [
    { etiqueta: "Horario", valor: "Por confirmar" },
    { etiqueta: "Cobertura", valor: "CDMX y Estado de México" },
    { etiqueta: "Entrega", valor: "Entrega y recolección disponibles" },
    { etiqueta: "Pago", valor: "Transferencia, tarjeta bancaria y efectivo" },
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

document.title = `Centro Digital | ${negocio.identidad.nombre}`;
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

document.querySelector("#datos-comerciales").innerHTML = negocio.informacion.map((dato) =>
  `<div class="dato"><strong>${dato.etiqueta}</strong><span>${dato.valor}</span></div>`).join("");
document.querySelector("#lista-galeria").innerHTML = negocio.galeria.map((foto) =>
  `<figure class="foto"><img src="${foto.imagen}" alt="${foto.descripcion}" loading="lazy"><figcaption>${foto.descripcion}</figcaption></figure>`).join("");

Object.entries(negocio.secciones).forEach(([nombre, visible]) => {
  document.querySelectorAll(`[data-seccion="${nombre}"]`).forEach((elemento) => { elemento.hidden = !visible; });
});
document.querySelector("#anio").textContent = new Date().getFullYear();
