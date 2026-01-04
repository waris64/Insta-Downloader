const fs = require('fs');
const path = require('path');

const requiredEnvVars = [
    'RAPIDAPI_KEY',
    'RAPIDAPI_HOST'
];

function checkEnv() {
    console.log('🔍 Checking environment variables...');
    
    const missing = [];
    
    // In CI/CD, we check process.env
    // In local dev, we might also look at .env.local
    
    requiredEnvVars.forEach(v => {
        if (!process.env[v]) {
            missing.push(v);
        }
    });

    if (missing.length > 0) {
        console.error('❌ Missing required environment variables:');
        missing.forEach(v => console.error(`   - ${v}`));
        console.error('\n   Please set these in your Vercel project settings or .env.local file.');
        
        // Only exit with error if NOT in a development environment that might use other secrets
        if (process.env.NODE_ENV === 'production') {
            process.exit(1);
        } else {
            console.warn('⚠️  Proceeding with caution in non-production mode.');
        }
    } else {
        console.log('✅ All required environment variables are set.');
    }
}

checkEnv();
