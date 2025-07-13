import axios from 'axios';
import config from '../config.js';

export async function scanWallet(address) {
    
    const url = `https://deep-index.moralis.io/api/v2.2/${address}/erc20?chain=eth`;

    try {
        const res = await axios.get(url, {
            headers: {
                'accept': 'application/json',
                'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImRhNTRiN2I0LTAzZWEtNDQyZC1iZDJlLWU3OGI3OTNiN2U3MCIsIm9yZ0lkIjoiNDU4OTM3IiwidXNlcklkIjoiNDcyMTYyIiwidHlwZUlkIjoiNDUyNjU1ZmMtYmViNC00ZjU3LWI4Y2EtYWRiYTMyZDgzYmY5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTIyOTc5NzUsImV4cCI6NDkwODA1Nzk3NX0.s7Bkw0F__MFY4DFQ7VM3_2DuTINAnGV7UZ1g_tgR1Ns'
            }
        });
        const tokens = res.data;

        return tokens.map( token => ({
            name: token.name,
            symbol: token.symbol,
            balance: (parseFloat(token.balance) /Math.pow(10, token.decimals)).toFixed(4)
        }));
    } catch (error) {
        console.error("Error scaneando wallet", error.message);
        return []
    }
}