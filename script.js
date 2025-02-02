// Información del sitio web
const siteInfo = {
    name: "Softwaresymas",
    description: "Servicio técnico de computadoras, soluciones rápidas y efectivas para el mantenimiento y reparación de computadoras.",
    socialLinks: {
        whatsapp: "https://wa.me/50760690148",
        instagram: "https://www.instagram.com/softwaresymas?igsh=MTQ1Z2tsN2JxYWd2Ng=="
    },
    contactForm: {
        recipientEmail: "softwaresymas507@gmail.com",
        successMessage: "¡Gracias por tu mensaje! Nos pondremos en contacto pronto."
    }
};

// Servicios
const services = [
    {
        title: "Reparación de computadoras",
        description: "Reparación de computadoras de escritorio y portátiles."
    },
    {
        title: "Mantenimiento preventivo y correctivo",
        description: "Mantenimiento preventivo para mejorar el rendimiento y corrección de problemas."
    },
    {
        title: "Instalación de software",
        description: "Instalación de software actualizado y compatible con tu dispositivo."
    },
    {
        title: "Recuperación de datos",
        description: "Recuperación de datos perdidos o dañados de discos duros y otros dispositivos."
    }
];

// Información de contacto
const contactDetails = {
    phone: "+507 6069-0148",
    email: "softwaresymas507@gmail.com"
};

// Función para cargar la información en la página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#site-name').textContent = siteInfo.name;
    document.querySelector('#site-description').textContent = siteInfo.description;

    document.querySelector('#whatsapp-link').href = siteInfo.socialLinks.whatsapp;
    document.querySelector('#instagram-link').href = siteInfo.socialLinks.instagram;

    const servicesContainer = document.querySelector('#services-list');
    services.forEach(service => {
        const serviceElement = document.createElement('li');
        serviceElement.innerHTML = `<strong>${service.title}</strong>: ${service.description}`;
        servicesContainer.appendChild(serviceElement);
    });

    document.querySelector('#contact-phone').textContent = contactDetails.phone;
    document.querySelector('#contact-email').textContent = contactDetails.email;
    document.querySelector('#contact-address').textContent = contactDetails.address;
});

// Función para abrir/cerrar el menú
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
