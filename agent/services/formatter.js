export function formatBalance(tokens) {
    if (!tokens || tokens.lenght === 0) {
        return 'No se encontraron tokens';
    }

    let response = 'Balances actuales de la billetera\n\n';

    tokens.forEach((token, index) => {
        response += `#${index + 1} ${token.name} (${token.symbol}): ${token.balance} \n`;
    });

    return response;
}