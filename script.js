var chavesVogais = ["e", "i", "a", "o", "u"];
var chavesCrip = ["\n", "imes", "ai", "ober", "ufat"];
var resultado = "";
var texto = "";

clearTextArea();

function compararCript(caractere) {
  var boo = false;
  for (var i = 0; i < chavesVogais.length; i++) {
    if (caractere == chavesVogais[i]) {
      boo = true;
    }
  }
  return boo;
}

function substituirCript(caractere) {
  for (var i = 0; i < chavesVogais.length; i++) {
    if (caractere === chavesVogais[i]) {
      resultado += chavesCrip[i];
    }
  }
}

function compararDecript(texto) {
  var i=0;
  var boo = false;
  while( i<chavesCrip.length ) {
    boo = texto.includes(chavesCrip[i]);
    if(boo) {
      i = chavesCrip.length;
    } else {
      i++;
    }
  }
  return boo;
}

function descriptografar(texto) {
  var troca = '';
  resultado = '';
  while(compararDecript(texto)) {
    for(var i=0;i<chavesCrip.length;i++) {
      resultado = texto.replace(chavesCrip[i], chavesVogais[i]);
      texto = resultado;
    }
  }
  return resultado;
}

function criptografar(texto) {
  var indice = 0;
  while (indice < texto.length) {
    if (compararCript(texto.charAt(indice))) {
      substituirCript(texto.charAt(indice));
    } else {
      resultado += texto.charAt(indice);
    }
    indice++;
  }
  return resultado;
}

function buttonDescriptografar() {
    texto = document.getElementById('textoarea').value;
    clearTextArea();
    texto = descriptografar(texto);
    mostraTextoArea(texto);
    resultado = "";
    texto = "";
}

function buttonCriptografar() {
    texto = document.getElementById('textoarea').value;
    clearTextArea();
    texto = criptografar(texto);
    mostraTextoArea(texto);
    resultado = "";
    texto = "";
}

function clearTextArea() {
  document.getElementById('textoarea').value = '';
}

function mostraTextoArea(txt) {
  document.getElementById('textoarea').value = txt;
}

let evento1 = document.querySelector('#criptografar')
evento1.addEventListener('click', function() {
  buttonCriptografar();
});

let evento2 = document.querySelector('#descriptografar')
evento2.addEventListener('click', function() {
  buttonDescriptografar();
});


var evento = document.querySelector('button');
var tela = document.querySelector('textarea');