const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToconvert = document.querySelector(".currency-value-to-convert") //Valor 
    const currencyValueConvert = document.querySelector(".currency-value") //Valor da moeda convertida

    const dolarToday = 5.80
    const euroToday = 6.04
    const libraToday = 7.27
    const bitcoinToday = 572584.14

    /*REAL*/

    if(currencySelect.value == "real"){ // SE FOR REAL

        currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue) // faz o formato da moeda

    }

    if(currencySelect.value == "dolar"){ //SE FOR DOLAR

        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if(currencySelect.value == "euro"){// SE FOR EURO

        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if(currencySelect.value == "libra"){// SE FOR LIBRA

        currencyValueConvert.innerHTML = new Intl.NumberFormat("sq-AL", {
            style: "currency",
            currency: "ALL"
        }).format(inputCurrencyValue / libraToday)

    }

    if(currencySelect.value == "bitcoin"){ // SE FOR BTC

        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // faz o formato da moeda


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

    }

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
convertButton.addEventListener("click",convertValues)

