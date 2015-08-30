// main.js

var url = 'https://api.github.com/orgs/riojs-org/repos',
	request = new XMLHttpRequest();

request.open('GET', url);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var resp = JSON.parse(request.responseText);
    	console.log(resp.length);

  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

//menu
(function() {
  var btnOpen = document.getElementById("btnOpen");
  var mainNav = document.getElementById("mainNav");

  //Exibir ou ocultar os itens do mainNav
  function toggleMenu() {
    if(mainNav.style.display === "none") {
      mainNav.style.display = "block";
    } else {
      mainNav.style.display = "none";
    }
  }

  //Atribui a função ao evento click no botão abrir
  btnOpen.addEventListener("click",toggleMenu);

  //Cria a media querie
  var mediaQuery = window.matchMedia("(min-width: 520px)");

  //Verifica a media query e determina se os itens do mainNav deve aparecer ou não
  if (mediaQuery.matches) {
    mainNav.style.display = "block";
  } else {
    mainNav.style.display = "none";
  }

  //Verifica alterações e e determina se os itens do mainNav deve aparecer ou não
  mediaQuery.addListener(function(changed) {
    if(changed.matches) {
      mainNav.style.display = "block";
    } else {
      mainNav.style.display = "none";
    }
  });
})();
