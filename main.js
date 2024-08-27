const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Executar uma função assincrona, assim que a página for carregada
document.addEventListener("DOMContentLoaded", async () => {
    let precoBitcoin; 

    try {
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        const data = await response.json();
        console.log(data);
        precoBitcoin = data.bpi.USD;
    } catch {
        console.log("Erro ao consumir api");
    }

    console.log(precoBitcoin);
    
})