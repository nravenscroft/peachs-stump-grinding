function applyConfig(){
  const cfg = window.PSG_CONFIG;
  if(!cfg) return;
  document.querySelectorAll('[data-biz]').forEach(el=>el.textContent = cfg.businessName);
  document.querySelectorAll('[data-tagline]').forEach(el=>el.textContent = cfg.tagline);
  document.querySelectorAll('[data-location]').forEach(el=>el.textContent = cfg.location);
  document.querySelectorAll('[data-radius]').forEach(el=>el.textContent = cfg.radiusMiles);
  document.querySelectorAll('[data-hours]').forEach(el=>el.textContent = `${cfg.hours.days}: ${cfg.hours.time}`);
  document.querySelectorAll('[data-hours-note]').forEach(el=>el.textContent = cfg.hours.note);

  // Phone/SMS placeholders
  const phoneEls = document.querySelectorAll('[data-phone]');
  phoneEls.forEach(el=>{
    el.textContent = cfg.phone;
    if(el.tagName.toLowerCase()==='a') el.href = `tel:${cfg.phone}`;
  });
  const smsEls = document.querySelectorAll('[data-sms]');
  smsEls.forEach(el=>{
    el.textContent = cfg.sms;
    if(el.tagName.toLowerCase()==='a') el.href = `sms:${cfg.sms}`;
  });
  const emailEls = document.querySelectorAll('[data-email]');
  emailEls.forEach(el=>{
    el.textContent = cfg.email;
    if(el.tagName.toLowerCase()==='a') el.href = `mailto:${cfg.email}`;
  });

  // Service area
  const ul = document.querySelector('[data-service-area]');
  if(ul && Array.isArray(cfg.serviceArea)){
    ul.innerHTML = '';
    cfg.serviceArea.forEach(x=>{
      const li = document.createElement('li');
      li.textContent = x;
      ul.appendChild(li);
    });
  }
}

function setActiveNav(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', ()=>{applyConfig(); setActiveNav();});
