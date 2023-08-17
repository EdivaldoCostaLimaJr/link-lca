var menuToggle = document.getElementById("menu-toggle");
var menuLinks = document.querySelectorAll(".menu a");

menuToggle.addEventListener("click", function(e) {
  e.preventDefault();
  if (menuToggle.classList.contains("open")) {
    menuToggle.classList.remove("open");
  } else {
    menuToggle.classList.add("open");
  }
});

menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    menuToggle.classList.remove("open");
  });
});

function logout() {
  firebase.auth().signOut().then(() => {
    // Redireciona o usuário para a página de login após o logout
    window.location.href = 'index.html';
  }).catch((error) => {
    console.error(error);
  });
}

// monitora o estado da autenticação do usuário
firebase.auth().onAuthStateChanged(function(user) {
  // caso o usuário esteja autenticado
  if (user) {
    // adiciona um listener para o evento "beforeunload"
    window.addEventListener("beforeunload", function(event) {
      // desloga o usuário
      firebase.auth().signOut();
    });
  }
});






