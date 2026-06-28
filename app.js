const links = [
  {
    label: 'TikTok',
    description: 'Watch videos and short-form content.',
    url: 'https://www.tiktok.com/@ctownsupermarket445?_r=1&_t=ZP-97b24i1WWCd',
    accent: '#111111',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="TikTok">
        <rect width="64" height="64" rx="16" fill="#111111"/>
        <path fill="#25F4EE" d="M37 14c1.8 4.8 5.6 8 10 8v7c-4.2 0-8.1-1.4-11-3.8V39c0 8-6.5 14-14.5 14S7 47 7 39s6.5-14 14.5-14c1 0 2 .1 3 .3v7.7c-.9-.3-1.9-.5-3-.5-3.7 0-6.8 3-6.8 6.8S17.8 46 21.5 46s6.8-3 6.8-6.8V14H37z"/>
        <path fill="#FE2C55" d="M39 16c1.4 3.8 4.4 6.7 8 7.8v6.2c-4.4-.7-8.1-3-10.6-6.1v13.6c0 8.8-7.1 15.9-15.9 15.9-3.2 0-6.1-.9-8.6-2.4 2.8 3.3 7 5.4 11.7 5.4 8.5 0 15.4-6.9 15.4-15.4V16H39z" opacity="0.9"/>
      </svg>
    `
  },
  {
    label: 'Instagram',
    description: 'Photos, stories, and updates.',
    url: 'https://www.instagram.com/ctown445hempstead?igsh=anJiN3EwZmtkeTI0&utm_source=qr',
    accent: '#e1306c',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Instagram">
        <defs>
          <linearGradient id="igg" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f58529"/>
            <stop offset="50%" stop-color="#dd2a7b"/>
            <stop offset="100%" stop-color="#8134af"/>
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#igg)"/>
        <rect x="15" y="15" width="34" height="34" rx="10" fill="none" stroke="#fff" stroke-width="5"/>
        <circle cx="32" cy="32" r="9" fill="none" stroke="#fff" stroke-width="5"/>
        <circle cx="43" cy="21" r="3" fill="#fff"/>
      </svg>
    `
  },
  {
    label: 'Leave a review on Maps',
    description: 'Open Google Maps to write a review.',
    url: 'https://www.google.com/maps/place/CTown+Supermarkets/@40.6919444,-73.6225,17z/data=!3m1!4b1!4m6!3m5!1s0x89c27cef14207741:0xd61a01f8b79886b0!8m2!3d40.6919444!4d-73.6225!16s%2Fg%2F12mj_rzb3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    accent: '#4285f4',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Google Maps">
        <rect width="64" height="64" rx="16" fill="#ffffff"/>
        <path fill="#34A853" d="M32 10c-8.3 0-15 6.7-15 15 0 11.5 15 29 15 29s15-17.5 15-29c0-8.3-6.7-15-15-15z"/>
        <circle cx="32" cy="25" r="6.5" fill="#fff"/>
        <path fill="#4285F4" d="M21.5 44.5 32 59l10.5-14.5H21.5z" opacity="0.95"/>
        <circle cx="32" cy="25" r="3.5" fill="#4285F4"/>
      </svg>
    `
  }
];

const linksGrid = document.getElementById('linksGrid');
const template = document.getElementById('linkTemplate');

function renderLinks() {
  linksGrid.innerHTML = '';

  links.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.href = item.url;
    node.querySelector('strong').textContent = item.label;
    node.querySelector('span').textContent = item.description;
    node.querySelector('.link-icon').style.background = `linear-gradient(135deg, ${item.accent}22, ${item.accent}08)`;
    node.querySelector('.link-icon').innerHTML = item.icon;
    node.querySelector('.link-arrow').style.color = item.accent;
    linksGrid.appendChild(node);
  });
}

renderLinks();
