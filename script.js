function ConverterDolar() {
  var valorElemento1 = document.getElementById("valor");
  var valor = valorElemento1.value;
  var valorEmReal1 = parseFloat(valor).toFixed(2);
  var valorEmDolar = valorEmReal1 / 5.09;
  var valorEmDolarFinal = valorEmDolar.toFixed(2);

  var elementoConvertidoD = document.getElementById("valorConvertido");
  var valorConvertidoDolar = "U$" + valorEmDolarFinal;
  elementoConvertidoD.innerHTML = valorConvertidoDolar;

  console.log("R$" + valorEmReal1 + " = " + valorConvertidoDolar);
}

function ConverterEuro() {
  var valorElemento2 = document.getElementById("valor");
  var valor = valorElemento2.value;
  var valorEmReal2 = parseFloat(valor).toFixed(2);
  var valorEmEuro = valorEmReal2 / 5.54;
  var valorEmEuroFinal = valorEmEuro.toFixed(2);

  var elementoHTMLeuro = document.getElementById("valorConvertido");
  var valorConvertidoEuro = "€" + valorEmEuroFinal;
  elementoHTMLeuro.innerHTML = valorConvertidoEuro;

  console.log("R$" + valorEmReal2 + " = " + valorConvertidoEuro);
}

function ConverterBTC() {
  var valorElemento3 = document.getElementById("valor");
  var valor = valorElemento3.value;
  var valorEmReal3 = parseFloat(valor).toFixed(2);
  var valorEmBTC = valorEmReal3 / 197465.37;
  var valorEmBTCFinal = valorEmBTC.toFixed(8);

  var elementoHTMLbtc = document.getElementById("valorConvertido");
  var valorConvertidoBTC = "₿" + valorEmBTCFinal;
  elementoHTMLbtc.innerHTML = valorConvertidoBTC;

  console.log("R$" + valorEmReal3 + " = " + valorConvertidoBTC);
}

function ConverterLibra() {
  var valorElemento4 = document.getElementById("valor");
  var valor = valorElemento4.value;
  var valorEmReal4 = parseFloat(valor).toFixed(2);
  var valorEmLibra = valorEmReal4 / 6.68;
  var valorEmLibraFinal = valorEmLibra.toFixed(2);

  var elementoHTMLlibra = document.getElementById("valorConvertido");
  var valorConvertidoLibra = "£" + valorEmLibraFinal;
  elementoHTMLlibra.innerHTML = valorConvertidoLibra;

  console.log("R$" + valorEmReal4 + " = " + valorConvertidoLibra);
}