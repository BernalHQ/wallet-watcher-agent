import { scanWallet } from "./services/defi-scanner.js";
import { formatBalance } from "./services/formatter.js";

const address = '0xcB1C1FdE09f811B294172696404e88E658659905';

const addressOwn = '0xFC8Be90a35c5B61fcA9d09eC11d93bC5CAf5D640'; 

async function run(adressWallet) {

    console.log(`🔍 Escaneando tokens de la wallet: ${adressWallet}\n`);

    const balances = await scanWallet(adressWallet);
    const response = formatBalance(balances);

    console.log(response);

}

if(process.argv[2]) {
    const useAdress = process.argv[2];
    run(useAdress);
} else {
    run(addressOwn);
}