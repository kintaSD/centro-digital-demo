// Este objeto concentra la información que cambia de un cliente a otro.
const negocio = {
  nombre: "Negocio Ejemplo",
  titulo: "Productos confiables, atención directa",
  descripcion:
    "Conoce nuestros productos, cobertura y formas de atención desde un solo lugar.",
  whatsapp: "525500000000",
  mensajeWhatsApp: "Hola, vi su Centro Digital y quisiera recibir información.",
  // Sustituye este placeholder por el enlace directo para dejar una reseña en Google.
  enlaceResenaGoogle: "#",
  beneficios: [
    {
      titulo: "Atención directa",
      descripcion: "Comunícate rápidamente con el negocio sin intermediarios.",
    },
    {
      titulo: "Información clara",
      descripcion: "Consulta lo esencial antes de realizar tu pedido o visita.",
    },
    {
      titulo: "Oferta confiable",
      descripcion: "Conoce los productos y servicios destacados del negocio.",
    },
  ],
  productos: [
    {
      nombre: "Producto principal",
      descripcion: "Descripción breve del producto más importante del negocio.",
      meta: "Presentación configurable",
    },
    {
      nombre: "Producto complementario",
      descripcion: "Información corta que ayude al visitante a decidir.",
      meta: "Precio o consulta",
    },
    {
      nombre: "Otra opción",
      descripcion: "Una tercera muestra para visualizar la plantilla genérica.",
      meta: "Disponibilidad configurable",
    },
  ],
  informacion: [
    { etiqueta: "Horario", valor: "Lunes a sábado · 9:00 a 18:00" },
    { etiqueta: "Cobertura", valor: "Zona de atención configurable" },
    { etiqueta: "Pedidos", valor: "Consulta condiciones por WhatsApp" },
    { etiqueta: "Pago", valor: "Métodos de pago configurables" },
  ],
};

const enlaceWhatsApp = `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(
  negocio.mensajeWhatsApp,
)}`;

document.querySelectorAll("[data-negocio]").forEach((elemento) => {
  elemento.textContent = negocio.nombre;
});

document.querySelector("[data-titulo]").textContent = negocio.titulo;
document.querySelector("[data-descripcion]").textContent = negocio.descripcion;

document.querySelectorAll("[data-whatsapp]").forEach((enlace) => {
  enlace.href = enlaceWhatsApp;
  enlace.target = "_blank";
  enlace.rel = "noopener noreferrer";
});

document.querySelectorAll("[data-resena]").forEach((enlace) => {
  enlace.href = negocio.enlaceResenaGoogle;

  if (negocio.enlaceResenaGoogle === "#") {
    enlace.setAttribute("aria-label", "Enlace de reseñas pendiente de configuración");
    enlace.title = "Enlace pendiente de configuración";
  } else {
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
  }
});

document.querySelector("#beneficios").innerHTML = negocio.beneficios
  .map(
    (beneficio) => `
      <article class="tarjeta">
        <h3>${beneficio.titulo}</h3>
        <p>${beneficio.descripcion}</p>
      </article>
    `,
  )
  .join("");

document.querySelector("#lista-productos").innerHTML = negocio.productos
  .map(
    (producto) => `
      <article class="tarjeta producto">
        <div class="producto__imagen" aria-hidden="true">Fotografía</div>
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="producto__meta">${producto.meta}</p>
      </article>
    `,
  )
  .join("");

document.querySelector("#datos-comerciales").innerHTML = negocio.informacion
  .map(
    (dato) => `
      <div class="dato">
        <strong>${dato.etiqueta}</strong>
        <span>${dato.valor}</span>
      </div>
    `,
  )
  .join("");

document.querySelector("#anio").textContent = new Date().getFullYear();
