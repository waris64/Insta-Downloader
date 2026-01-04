// using native fetch


async function testApi() {
    const url = 'http://localhost:3000/api/download';
    const testUrl = 'https://www.instagram.com/reel/DJg8Hc_zkot/?igsh=MXFvaDhueHozZjQ2bQ==';

    console.log(`Testing API at ${url}...`);
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: testUrl })
        });

        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error('Response body:', text);
            process.exit(1);
        }

        const data = await response.json();
        console.log('API Success!');
        console.log('Response Data:', JSON.stringify(data, null, 2));

        if (data.success && data.data && data.data.url) {
            console.log('Verification Passed: Video URL found.');
        } else {
            console.error('Verification Failed: structure incorrect.');
            process.exit(1);
        }

    } catch (error) {
        console.error('Fetch Error:', error);
        process.exit(1);
    }
}

// Check if fetch is available globally (Node 18+), else warn
if (!globalThis.fetch) {
    console.error("This script requires Node.js 18+ for native fetch.");
    process.exit(1);
}

testApi();
