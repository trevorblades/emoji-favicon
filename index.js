import render from 'favicon-emoji/lib/render';

async function generate() {
  const data = await render('🇨🇦', [16, 32]);
  console.log(data);
}

generate();
