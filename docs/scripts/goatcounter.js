// GoatCounter (https://www.goatcounter.com). Set GC_CODE to your site code.
// Visible count requires Settings → "Allow adding visitor counts on your website".
const GC_CODE = 'bradyc';
const GC_URL = `https://${GC_CODE}.goatcounter.com`;

window.goatcounter = { endpoint: `${GC_URL}/count` };
const gc = document.createElement('script');
gc.async = true;
gc.src = 'https://gc.zgo.at/count.js';
document.head.appendChild(gc);

fetch(`${GC_URL}/counter/TOTAL.json`)
    .then(r => (r.ok ? r.json() : Promise.reject()))
    .then(d => {
        const el = document.querySelector('.visit-count');
        if (!el) return;
        el.textContent = `${d.count} visits`;
        el.hidden = false;
    })
    .catch(() => {});
