
async function testConnectivity() {
    const host = 'instagram-reels-downloader-api.p.rapidapi.com';
    const url = `https://${host}/download?url=https://www.instagram.com/reel/dummy`;

    console.log(`Testing connectivity to ${url}...`);
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

        const response = await fetch(url, { 
            method: 'GET',
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        console.log(`Response Status: ${response.status}`);
        // console.log(`Response Text: ${await response.text()}`); 
        console.log("Connectivity check PASSED (Endpoint is reachable).");

    } catch (error) {
        console.error("Connectivity check FAILED:");
        console.error(error);
        if (error.cause) console.error("Cause:", error.cause);
    }
}

testConnectivity();
