// Builds the static pages from content/*.mjs and site.config.json into this folder,
// next to the sources, so that GitHub Pages serves them under /vtasku/.
// Run it from this folder.
// Usage: node build.mjs            (placeholders stay visible, highlighted)
//        node build.mjs --strict   (fails while any [PLACEHOLDER] is left: use before App Review)
import { mkdirSync, readFileSync, rmSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const strict = process.argv.includes('--strict');
const cfg = JSON.parse(readFileSync('site.config.json', 'utf8'));
const KINDS = ['privacy', 'terms', 'support'];
// English is the default at the top of the folder; every other language lives in its own folder (vi/, de/, sv/, fi/).
const CODES = ['en', 'vi', 'de', 'sv', 'fi'];
const langs = [];
for (const c of CODES) langs.push((await import(`./content/${c}.mjs`)).default);
const dirOf = (code) => (code === 'en' ? '' : `${code}/`);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const isPlaceholder = (v) => /\[[^\]]+\]/.test(v) || !String(v).trim();
const left = Object.entries(cfg).filter(([, v]) => isPlaceholder(v)).map(([k]) => k);
if (strict && left.length) { console.error('Fill these in site.config.json first:', left.join(', ')); process.exit(1); }

const fill = (html, base) => html
  .replaceAll('{{base}}', base)
  .replaceAll('mailto:{{email}}', `mailto:${esc(cfg.email)}`)
  .replace(/\{\{(\w+)\}\}/g, (_, k) => {
    if (!(k in cfg)) throw new Error(`unknown token {{${k}}}`);
    const v = esc(cfg[k]);
    return isPlaceholder(cfg[k]) ? `<mark>${v}</mark>` : v;
  });

const css = `:root{--bg:#fff;--fg:#1b1f23;--muted:#5b6670;--line:#e3e7eb;--link:#0a6a4a;--mark:#fff3b0}
@media(prefers-color-scheme:dark){:root{--bg:#101417;--fg:#e8ecef;--muted:#9aa6b0;--line:#26303a;--link:#5fd0a0;--mark:#5a4b00}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
header,main,footer{max-width:720px;margin:0 auto;padding:0 16px}header{display:flex;flex-wrap:wrap;gap:8px 20px;align-items:center;padding-top:20px;padding-bottom:12px;border-bottom:1px solid var(--line)}
.lang{margin-left:auto}@media(max-width:560px){nav{order:3;flex-basis:100%}}.brand{font-weight:700;font-size:1.15rem;color:var(--fg);text-decoration:none}nav{display:flex;flex-wrap:wrap;gap:6px 16px;flex:1}nav a,.lang a{color:var(--link)}
h1{font-size:1.7rem;line-height:1.25;margin:28px 0 8px}h2{font-size:1.2rem;margin:28px 0 6px}p,li{margin:8px 0}a{color:var(--link)}
table{width:100%;border-collapse:collapse;font-size:.95rem;margin:12px 0}th,td{border:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}th{background:rgba(127,127,127,.1)}
code{background:rgba(127,127,127,.15);padding:1px 5px;border-radius:4px;font-size:.9em;word-break:break-all}mark{background:var(--mark);color:inherit;padding:0 3px}
.meta{color:var(--muted);font-size:.9rem}footer{color:var(--muted);font-size:.9rem;padding-top:24px;padding-bottom:40px}`;

function page({ L, kind, depth }) {
  const base = depth === 0 ? './' : '../'.repeat(depth);
  const suffix = dirOf(L.lang);
  const href = (k) => `${base}${k}/${suffix}`;
  const body = kind === 'home'
    ? `<h1>${esc(L.home.title)}</h1><p>${esc(L.home.lead)}</p><ul>${KINDS.map((k) => `<li><a href="${href(k)}">${esc(L.nav[k])}</a></li>`).join('')}</ul>`
    : `<h1>${esc(L[kind].title)}</h1><p class="meta">${esc(L.updated)}: ${fill('{{effectiveDate}}', base)}</p>${fill(L[kind].html, base)}`;
  const urlFor = (code) => (kind === 'home' ? `${base}${dirOf(code)}` : `${base}${kind}/${dirOf(code)}`);
  const switcher = langs.filter((x) => x.lang !== L.lang)
    .map((x) => `<a href="${urlFor(x.lang)}" hreflang="${x.lang}" lang="${x.lang}">${esc(x.label)}</a>`).join(' · ');
  const alternates = langs.map((x) => `<link rel="alternate" hreflang="${x.lang}" href="${urlFor(x.lang)}">`).join('');
  const title = kind === 'home' ? 'vTasku' : `${L[kind].title} · vTasku`;
  return `<!doctype html>
<html lang="${L.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>${alternates}<meta name="color-scheme" content="light dark"><style>${css}</style></head>
<body><header><a class="brand" href="${base}">vTasku</a>
<nav>${KINDS.map((k) => `<a href="${href(k)}">${esc(L.nav[k])}</a>`).join('')}</nav>
<span class="lang">${switcher}</span></header>
<main>${body}</main>
<footer>© vTasku · ${fill('{{operator}}', base)} · <a href="mailto:${esc(cfg.email)}">${fill('{{email}}', base)}</a></footer></body></html>
`;
}

// Only the generated paths are removed; the sources in this folder are never touched.
const GENERATED = ['index.html', ...KINDS, ...CODES.filter((c) => c !== 'en')];
for (const p of GENERATED) rmSync(p, { recursive: true, force: true });
const written = [];
const write = (p, s) => { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s); written.push(p); };
for (const L of langs) {
  const sub = L.lang !== 'en';
  write(`${dirOf(L.lang)}index.html`, page({ L, kind: 'home', depth: sub ? 1 : 0 }));
  for (const kind of KINDS) write(`${kind}/${dirOf(L.lang)}index.html`, page({ L, kind, depth: sub ? 2 : 1 }));
}

// Check: every relative link points to a page that was built.
let bad = 0;
for (const f of written) {
  const html = readFileSync(f, 'utf8');
  if (html.includes('{{')) { console.error('unfilled token in', f); bad++; }
  for (const m of html.matchAll(/(?:href|src)="([^"#:]+)"/g)) {
    let t = resolve(dirname(f), m[1]);
    if (!existsSync(t) || (statSync(t).isDirectory() && !existsSync(join(t, 'index.html')))) { console.error('broken link', m[1], 'in', f); bad++; }
  }
}
if (bad) process.exit(1);
console.log(`built ${written.length} pages` + (left.length ? `; still to fill: ${left.join(', ')}` : '; no placeholders left'));
