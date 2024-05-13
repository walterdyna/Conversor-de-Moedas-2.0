const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToconvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConvert = document.querySelector(".currency-value") //Valor da moeda convertida

    const dolarToday = 5.14
    const euroToday = 5.54
    const libraToday = 6.41
    const bitcoinToday = 60900.00


    if(currencySelect.value == "real"){ // SE FOR BTC

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

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano" 
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "€: Euro"
        currencyImage.src = "./assets/euro.png"
    } 

    
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "£: Libra"
        currencyImage.src = "./assets/libra.png"
    }
    
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "<b>₿: </b> Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    
    convertValues
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click",convertValues)
