let NUM_STARS = 60;

      // Cria um novo elemento de estrela e adiciona ao contêiner de estrelas
      function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        document.querySelector(".stars").appendChild(star);
      }

      // Cria o número desejado de estrelas
      for (let i = 0; i < NUM_STARS; i++) {
        createStar();
      }

                        

