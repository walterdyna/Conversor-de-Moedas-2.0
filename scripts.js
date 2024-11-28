const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

let dolarToday, euroToday, libraToday, bitcoinToday;

async function fetchExchangeRates() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();

    dolarToday = parseFloat(data.USD.high); // Alta do Dólar
    euroToday = parseFloat(data.EUR.high);   // Alta do Euro
    libraToday = parseFloat(data.GBP.high);  // Alta da Libra
    bitcoinToday = 572584.14; // valor fixo ou buscar de outra API
}

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace(',', '.'));
    const currencyValueToconvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConvert = document.querySelector(".currency-value");

    if (isNaN(inputCurrencyValue)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    if (currencySelect.value === "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    } else if (currencySelect.value === "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    } else if (currencySelect.value === "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    } else if (currencySelect.value === "bitcoin") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / bitcoinToday);
    } else {
        // Se for Real, não há conversão
        currencyValueConvert.innerHTML = currencyValueToconvert.innerHTML;
    }
   

    /* DOLAR para real*/

    if(currencySelect.value == "dolar"){ // SE FOR DOLAR

        currencyValueToconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue) // faz o formato da moeda

    }

    if(currencySelect.value == "real"){ //SE FOR REAL

        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarToday * inputCurrencyValue)

         /* EURO para real*/

    if(currencySelect.value == "euro"){ // SE FOR EURO

        currencyValueToconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue) // faz o formato da moeda

    }

    if(currencySelect.value == "real"){ //SE FOR REAL

        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(euroToday * inputCurrencyValue)
    }

       /* LIBRA para real*/

    if(currencySelect.value == "libra"){// SE FOR LIBRA

        currencyValueConvert.innerHTML = new Intl.NumberFormat("sq-AL", {
            style: "currency",
            currency: "ALL"
        }).format(inputCurrencyValue)// faz o formato da moeda

    }

    if(currencySelect.value == "real"){ //SE FOR REAL

        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(libraToday * inputCurrencyValue)
    }

    /* BTC para real*/

    if(currencySelect.value == "bitcoin"){ // SE FOR BTC

        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if(currencySelect.value == "real"){ //SE FOR REAL

        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(bitcoinToday * inputCurrencyValue)
    }

    }


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyImage2 = document.querySelector(".currency-img2")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano" 
        currencyImage.src = "./assets/Dolar.png"
        currencyImage2.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "€: Euro"
        currencyImage.src = "./assets/euro.png"
        currencyImage2.src = "./assets/euro.png"
    } 

    
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "£: Libra"
        currencyImage.src = "./assets/libra.png"
        currencyImage2.src = "./assets/libra.png"
    }
    
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "<b>₿: </b> Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
        currencyImage2.src = "./assets/bitcoin.png"
    }
    
    convertValues
}


currencySelect.addEventListener("change", changeCurrency)

// Chame a função para buscar as taxas de câmbio ao carregar a página
fetchExchangeRates().then(() => {
    convertButton.addEventListener("click", convertValues);
});