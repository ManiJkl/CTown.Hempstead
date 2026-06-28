const links = [
  {
    label: 'Instagram',
    description: 'Publicaciones, historias y novedades.',
    url: 'https://instagram.com/',
    accent: '#e1306c'
  },
  {
    label: 'WhatsApp',
    description: 'Contacto directo y respuestas rápidas.',
    url: 'https://wa.me/',
    accent: '#25d366'
  },
  {
    label: 'Portafolio',
    description: 'Proyectos, casos de estudio y trabajos.',
    url: 'https://github.com/',
    accent: '#233a8b'
  },
  {
    label: 'Correo',
    description: 'Escríbeme para colaboraciones y pedidos.',
    url: 'mailto:tu-correo@ejemplo.com',
    accent: '#e66b3d'
  }
];

const linksGrid = document.getElementById('linksGrid');
const template = document.getElementById('linkTemplate');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const qrImage = document.getElementById('qrImage');
const qrDownload = document.getElementById('qrDownload');

function getShareUrl() {
  return window.location.href;
}

function renderLinks() {
  linksGrid.innerHTML = '';

  links.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.href = item.url;
    node.querySelector('strong').textContent = item.label;
    node.querySelector('span').textContent = item.description;
    node.querySelector('.link-icon').style.background = `linear-gradient(135deg, ${item.accent}22, ${item.accent}08)`;
    node.querySelector('.link-arrow').style.color = item.accent;
    linksGrid.appendChild(node);
  });
}

function updateQr() {
  const url = getShareUrl();
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=10&data=${encodeURIComponent(url)}`;
  qrImage.src = qrUrl;
  qrDownload.href = qrUrl;
}

async function copyCurrentLink() {
  const url = getShareUrl();

  try {
    await navigator.clipboard.writeText(url);
    copyLinkBtn.textContent = 'Enlace copiado';
    setTimeout(() => {
      copyLinkBtn.textContent = 'Copiar enlace';
    }, 1800);
  } catch {
    window.prompt('Copia este enlace:', url);
  }
}

renderLinks();
updateQr();
copyLinkBtn.addEventListener('click', copyCurrentLink);
