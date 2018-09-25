const render = require('favicon-emoji/lib/render');
const fs = require('fs');
const toIco = require('to-ico');

async function generate() {
  const pngs = await render('🇨🇦', [16, 32, 48]);
  const ico = await toIco(pngs);
  fs.writeFileSync('favicon.ico', ico);
}

generate();
