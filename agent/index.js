import { scanWallet } from "./services/defi-scanner.js";
import { formatBalance } from "./services/formatter.js";

const address = '0xcB1C1FdE09f811B294172696404e88E658659905';

const addressOwn = '0xFC8Be90a35c5B61fcA9d09eC11d93bC5CAf5D640'; 

const res = await scanWallet(address);



console.log(formatBalance(res));