// Blog posts data - With custom images for each post
const blogPosts = [
  {
    title: "5 Señales de Que Tu Aire Acondicionado Necesita Servicio",
    excerpt: "Aprende a identificar las señales de alerta antes de que sea demasiado tarde.",
    date: "15 de enero de 2025",
    url: "blog/senales-que-necesitas-servicio.html",
    image: "images/blog-senales.svg"
  },
  {
    title: "Guía Completa: Mantenimiento Preventivo del A/C",
    excerpt: "Todo lo que necesitas saber para mantener tu sistema en óptimas condiciones.",
    date: "10 de enero de 2025",
    url: "blog/mantenimiento-preventivo.html",
    image: "images/blog-mantenimiento.svg"
  },
  {
    title: "Problemas Comunes del Aire Acondicionado",
    excerpt: "Los 5 problemas más frecuentes y cómo solucionarlos.",
    date: "5 de enero de 2025",
    url: "blog/problemas-comunes.html",
    image: "images/blog-problemas.svg"
  },
  {
    title: "Cómo Ahorrar Combustible con el A/C",
    excerpt: "Tips para mantenerte fresco sin incrementar tu consumo de gasolina.",
    date: "1 de enero de 2025",
    url: "blog/ahorrar-combustible.html",
    image: "images/blog-ahorro.svg"
  },
  {
    title: "Señales de Emergencia del A/C",
    excerpt: "Aprende cuándo debes detener el uso del aire acondicionado inmediatamente.",
    date: "20 de diciembre de 2024",
    url: "blog/senales-emergencia.html",
    image: "images/blog-emergencia.svg"
  },
  {
    title: "Cómo Diagnosticar Problemas del A/C",
    excerpt: "Aprende a identificar los signos de problemas antes de visitar el taller.",
    date: "13 de marzo de 2026",
    url: "blog/diagnosticar-problemas-ac.html",
    image: "images/blog-diagnostico.svg"
  },
  {
    title: "Refrigerante R-134a vs R-1234yf: Diferencias",
    excerpt: "Conoce las diferencias entre el refrigerante antiguo y el nuevo.",
    date: "13 de marzo de 2026",
    url: "blog/refrigerante-r134a-vs-r1234yf.html",
    image: "images/blog-gas.svg"
  },
  {
    title: "Por Qué el A/C de Tu Coche Huele Mal",
    excerpt: "Causas comunes y soluciones para olores del aire acondicionado.",
    date: "13 de marzo de 2026",
    url: "blog/olor-ac-coche.html",
    image: "images/blog-olor.svg"
  },
  {
    title: "A/C Automático vs Manual: Diferencias y Ventajas",
    excerpt: "Compara los dos sistemas y descubre cuál conviene más.",
    date: "13 de marzo de 2026",
    url: "blog/ac-automatico-vs-manual.html",
    image: "images/blog-automatico.svg"
  },
  {
    title: "Cómo Ahorrar Batería y Combustible con el A/C",
    excerpt: "Consejos prácticos para maximizar la eficiencia del aire acondicionado.",
    date: "13 de marzo de 2026",
    url: "blog/ahorrar-bateria-combustible-ac.html",
    image: "images/blog-bateria.svg"
  },
  {
    title: "Cuándo es el Mejor Momento para Hacer Servicio al A/C",
    excerpt: "Guía estacional para mantener tu A/C en óptimas condiciones.",
    date: "13 de marzo de 2026",
    url: "blog/cuando-servicio-ac.html",
    image: "images/blog-tiempo.svg"
  },
  {
    title: "Cuánto Cuesta el Servicio de A/C Automotriz",
    excerpt: "Precios típicos del servicio de aire acondicionado automotriz.",
    date: "13 de marzo de 2026",
    url: "blog/precio-servicio-ac.html",
    image: "images/blog-precio.svg"
  },
  {
    title: "El A/C del Auto Descarga la Batería",
    excerpt: "Causas y soluciones cuando la batería se descarga con el A/C.",
    date: "13 de marzo de 2026",
    url: "blog/ac-descarga-bateria.html",
    image: "images/blog-bateria.svg"
  },
  {
    title: "Climatizador vs A/C Tradicional",
    excerpt: "Cuál sistema conviene más para tu auto.",
    date: "13 de marzo de 2026",
    url: "blog/climatizador-vs-ac-tradicional.html",
    image: "images/blog-climatizador.svg"
  },
  {
    title: "5 Errores Comunes que Dañan el A/C",
    excerpt: "Aprende a evitar estos errores y prolonga la vida de tu sistema.",
    date: "13 de marzo de 2026",
    url: "blog/5-errores-danan-ac.html",
    image: "images/blog-errores.svg"
  }
];

// Pagination settings
const POSTS_PER_PAGE = 10;
let currentPage = 1;

function renderBlogPosts(page) {
  const blogGrid = document.getElementById('blog-grid');
  const paginationContainer = document.getElementById('blog-pagination');
  
  if (!blogGrid) return;
  
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const postsToShow = blogPosts.slice(start, end);
  
  // Render posts
  blogGrid.innerHTML = postsToShow.map(post => `
    <div class="blog-card">
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="blog-content">
        <p class="blog-date">${post.date}</p>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="${post.url}" class="blog-link">Leer más →</a>
      </div>
    </div>
  `).join('');
  
  // Render pagination
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  if (totalPages > 1 && paginationContainer) {
    let paginationHTML = '';
    
    // Previous button
    if (page > 1) {
      paginationHTML += `<button class="page-btn" onclick="renderBlogPosts(${page - 1})">← Anterior</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
        paginationHTML += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="renderBlogPosts(${i})">${i}</button>`;
      } else if (i === page - 2 || i === page + 2) {
        paginationHTML += `<span class="page-dots">...</span>`;
      }
    }
    
    // Next button
    if (page < totalPages) {
      paginationHTML += `<button class="page-btn" onclick="renderBlogPosts(${page + 1})">Siguiente →</button>`;
    }
    
    paginationContainer.innerHTML = paginationHTML;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  renderBlogPosts(1);
});
