function creatGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>`
}


let delay = -0.4;
function creatCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `      
  <header>
    <img src="./assets/logo.svg" alt="Logo NLW" />
  </header>
  <main id="cards">
  ${creatCard(
    "22/11",
    "terça",
    creatGame("argentina", "07:00", "arabia-saudita") + creatGame("frança", "16:00", "australia")
  )}
  ${creatCard(
    "24/11",
    "quinta",
    creatGame("portugal", "13:00", "ghana") +
      creatGame("brazil", "16:00", "serbia")
  )} 
  ${creatCard(
    "26/11",
    "sábado",
    creatGame("argentina", "16:00", "méxico") + creatGame("frança", "13:00", "dinamarca")
    )}
  
  ${creatCard(
    "28/11",
    "segunda",
    creatGame("brazil", "13:00", "switzerland") +
      creatGame("portugal", "16:00", "uruguay")
  )}
  ${creatCard(
    "30/11",
    "quarta",
    creatGame("argentina", "16:00", "polônia")
    + creatGame("frança", "12:00", "tunisia")
  )}
  ${creatCard(
    "02/12",
    "sexta",
    creatGame("portugal", "12:00", "south-korea") +
      creatGame("brazil", "16:00", "cameroon")
  )}
  </main>`
