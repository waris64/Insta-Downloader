const API_KEY = '330c6fe7efeb496aad232452135a0675';
const HOST = 'insta-downloader-kappa.vercel.app';
const KEY_LOCATION = `https://${HOST}/key.txt`;
const URLS_TO_SUBMIT = [
  `https://${HOST}/`
];

async function submitToIndexNow() {
  console.log(`📡 Submitting to IndexNow...`);
  console.log(`   Host: ${HOST}`);
  console.log(`   Key Location: ${KEY_LOCATION}`);

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: API_KEY,
        keyLocation: KEY_LOCATION,
        urlList: URLS_TO_SUBMIT,
      }),
    });

    if (response.ok) {
      console.log('✅ Success! Bing has been notified to crawl your site.');
    } else {
      console.error(`❌ Error ${response.status}: ${response.statusText}`);
      const text = await response.text();
      console.error(text);
    }
  } catch (error) {
    console.error('❌ Network Error:', error);
  }
}

submitToIndexNow();
