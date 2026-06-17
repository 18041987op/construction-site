/* ===== Elan Construction Corp — site scripts ===== */

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

/* ---- Mobile nav ---- */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

/* ---- Contact form -> opens email with details prefilled ---- */
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    formNote.textContent = I18N[currentLang]['form.required'];
    formNote.classList.remove('form__note--ok');
    return;
  }

  const subject = `New Estimate Request — ${service} — ${name}`;
  const body =
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Service: ${service}\n\n` +
    `Project details:\n${message}\n`;

  window.location.href =
    `mailto:constructionelan6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  formNote.textContent = I18N[currentLang]['form.sent'];
  formNote.classList.add('form__note--ok');
});

/* ---- Bilingual content (EN / ES) ---- */
const I18N = {
  en: {
    'brand.tag': 'Siding & Remodeling',
    'nav.services': 'Services', 'nav.about': 'About', 'nav.why': 'Why Us',
    'nav.contact': 'Contact', 'nav.quote': 'Free Estimate',
    'hero.eyebrow': 'Mt Holly, NC & surrounding areas',
    'hero.title': 'Quality Siding & Remodeling You Can Trust',
    'hero.lead': 'From new siding to full home remodels, Elan Construction Corp delivers craftsmanship that lasts — on time and on budget.',
    'hero.cta1': 'Get a Free Estimate', 'hero.cta2': 'Call Now',
    'hero.badge1': 'Trusted Local Contractor', 'hero.badge2': '✔ Free Estimates', 'hero.badge3': '✔ Licensed & Insured',
    'services.eyebrow': 'What We Do', 'services.title': 'Our Services',
    'services.sub': 'Complete exterior and interior solutions for your home.',
    'services.s1.title': 'Siding Installation & Repair', 'services.s1.text': 'Vinyl, fiber cement and more — boost curb appeal and protect your home from the elements.',
    'services.s2.title': 'Home Remodeling', 'services.s2.text': 'Kitchens, bathrooms, basements and additions tailored to your style and budget.',
    'services.s3.title': 'Windows & Doors', 'services.s3.text': 'Energy-efficient window and door installation for comfort and lower bills.',
    'services.s4.title': 'Roofing & Exteriors', 'services.s4.text': 'Durable roofing, soffit, fascia and gutter work to keep your home weather-tight.',
    'services.s5.title': 'Decks & Additions', 'services.s5.text': 'Custom decks, porches and room additions that expand your living space.',
    'services.s6.title': 'General Repairs', 'services.s6.text': 'Reliable handyman and repair services to keep everything in top shape.',
    'about.eyebrow': 'About Us', 'about.title': 'Built on Trust & Craftsmanship',
    'about.p1': 'Elan Construction Corp is a locally owned siding and remodeling company proudly serving Mt Holly, NC and the surrounding communities. We treat every project like it\'s our own home.',
    'about.p2': 'From the first estimate to the final walkthrough, we focus on clear communication, honest pricing, and quality that stands the test of time.',
    'about.cta': 'Start Your Project',
    'why.eyebrow': 'Why Choose Us', 'why.title': 'The Elan Difference',
    'why.f1.title': 'Quality Craftsmanship', 'why.f1.text': 'Skilled workmanship and premium materials on every job.',
    'why.f2.title': 'Honest Pricing', 'why.f2.text': 'Transparent, free estimates with no hidden fees.',
    'why.f3.title': 'On-Time Delivery', 'why.f3.text': 'We respect your time and finish when we say we will.',
    'why.f4.title': 'Local & Reliable', 'why.f4.text': 'A trusted neighbor you can count on, before and after the job.',
    'contact.eyebrow': 'Get In Touch', 'contact.title': 'Request Your Free Estimate',
    'contact.sub': "Tell us about your project and we'll get back to you shortly.",
    'contact.phone': 'Phone', 'contact.email': 'Email', 'contact.address': 'Address',
    'contact.hours': 'Hours', 'contact.hoursVal': 'Mon–Sat: 8:00 AM – 6:00 PM',
    'form.name': 'Full Name', 'form.phone': 'Phone', 'form.email': 'Email',
    'form.service': 'Service Needed', 'form.message': 'Project Details', 'form.submit': 'Send Request',
    'form.opt1': 'Siding', 'form.opt2': 'Remodeling', 'form.opt3': 'Windows & Doors',
    'form.opt4': 'Roofing & Exteriors', 'form.opt5': 'Decks & Additions', 'form.opt6': 'Other',
    'form.note': 'This opens your email app with the details pre-filled.',
    'form.required': 'Please enter your name and project details.',
    'form.sent': 'Thank you! Your email app should now open to send the request.',
    'footer.rights': 'All rights reserved.'
  },
  es: {
    'brand.tag': 'Siding y Remodelación',
    'nav.services': 'Servicios', 'nav.about': 'Nosotros', 'nav.why': 'Por Qué Nosotros',
    'nav.contact': 'Contacto', 'nav.quote': 'Cotización Gratis',
    'hero.eyebrow': 'Mt Holly, NC y áreas cercanas',
    'hero.title': 'Siding y Remodelación de Calidad en Quien Confiar',
    'hero.lead': 'Desde siding nuevo hasta remodelaciones completas, Elan Construction Corp ofrece un trabajo que perdura — a tiempo y dentro del presupuesto.',
    'hero.cta1': 'Cotización Gratis', 'hero.cta2': 'Llamar Ahora',
    'hero.badge1': 'Contratista Local de Confianza', 'hero.badge2': '✔ Estimados Gratis', 'hero.badge3': '✔ Con Licencia y Seguro',
    'services.eyebrow': 'Lo Que Hacemos', 'services.title': 'Nuestros Servicios',
    'services.sub': 'Soluciones completas para el exterior e interior de su hogar.',
    'services.s1.title': 'Instalación y Reparación de Siding', 'services.s1.text': 'Vinil, fibrocemento y más — mejore la apariencia y proteja su hogar del clima.',
    'services.s2.title': 'Remodelación de Hogar', 'services.s2.text': 'Cocinas, baños, sótanos y ampliaciones a la medida de su estilo y presupuesto.',
    'services.s3.title': 'Ventanas y Puertas', 'services.s3.text': 'Instalación de ventanas y puertas eficientes para mayor confort y ahorro.',
    'services.s4.title': 'Techos y Exteriores', 'services.s4.text': 'Techos, sofitos, fascia y canaletas duraderas que protegen su hogar.',
    'services.s5.title': 'Decks y Ampliaciones', 'services.s5.text': 'Decks, porches y ampliaciones personalizadas para más espacio.',
    'services.s6.title': 'Reparaciones Generales', 'services.s6.text': 'Servicios de reparación confiables para mantener todo en óptimo estado.',
    'about.eyebrow': 'Nosotros', 'about.title': 'Construido con Confianza y Calidad',
    'about.p1': 'Elan Construction Corp es una empresa local de siding y remodelación que sirve con orgullo a Mt Holly, NC y las comunidades cercanas. Tratamos cada proyecto como si fuera nuestro propio hogar.',
    'about.p2': 'Desde el primer estimado hasta la revisión final, nos enfocamos en una comunicación clara, precios honestos y una calidad que perdura.',
    'about.cta': 'Inicie Su Proyecto',
    'why.eyebrow': 'Por Qué Elegirnos', 'why.title': 'La Diferencia Elan',
    'why.f1.title': 'Trabajo de Calidad', 'why.f1.text': 'Mano de obra experta y materiales premium en cada trabajo.',
    'why.f2.title': 'Precios Honestos', 'why.f2.text': 'Estimados gratis y transparentes, sin costos ocultos.',
    'why.f3.title': 'Entrega a Tiempo', 'why.f3.text': 'Respetamos su tiempo y terminamos cuando lo prometemos.',
    'why.f4.title': 'Local y Confiable', 'why.f4.text': 'Un vecino de confianza con quien contar, antes y después del trabajo.',
    'contact.eyebrow': 'Contáctenos', 'contact.title': 'Solicite Su Cotización Gratis',
    'contact.sub': 'Cuéntenos sobre su proyecto y le responderemos pronto.',
    'contact.phone': 'Teléfono', 'contact.email': 'Correo', 'contact.address': 'Dirección',
    'contact.hours': 'Horario', 'contact.hoursVal': 'Lun–Sáb: 8:00 AM – 6:00 PM',
    'form.name': 'Nombre Completo', 'form.phone': 'Teléfono', 'form.email': 'Correo',
    'form.service': 'Servicio Requerido', 'form.message': 'Detalles del Proyecto', 'form.submit': 'Enviar Solicitud',
    'form.opt1': 'Siding', 'form.opt2': 'Remodelación', 'form.opt3': 'Ventanas y Puertas',
    'form.opt4': 'Techos y Exteriores', 'form.opt5': 'Decks y Ampliaciones', 'form.opt6': 'Otro',
    'form.note': 'Esto abre su aplicación de correo con los datos ya completados.',
    'form.required': 'Por favor ingrese su nombre y los detalles del proyecto.',
    'form.sent': '¡Gracias! Su aplicación de correo debería abrirse para enviar la solicitud.',
    'footer.rights': 'Todos los derechos reservados.'
  }
};

let currentLang = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
  });
  // Toggle button shows the OTHER language
  document.getElementById('langToggle').textContent = lang === 'en' ? 'ES' : 'EN';
  try { localStorage.setItem('elan-lang', lang); } catch (e) {}
}

// Restore saved preference
try {
  const saved = localStorage.getItem('elan-lang');
  if (saved) currentLang = saved;
} catch (e) {}
applyLang(currentLang);

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});
