async function cargarPartidos() {
  try {
    const res = await fetch('resultado-nba.json');
    const data = await res.json();

    const cuerpo = document.querySelector('.partidos .liga-de-verano');
    cuerpo.innerHTML = '';

    if (!data.games || data.games.length === 0) {
      cuerpo.innerHTML = '<tr><td colspan="4">No hay partidos programados.</td></tr>';
      return;
    }

 data.games.forEach(game => {
  const fila = document.createElement('tr');

  const homeWins = game.home_score > game.visitor_score;
  const visitorWins = game.visitor_score > game.home_score;

  const homeScoreCell = `<span style="background-color: ${homeWins ? '#2ecc71' : '#e74c3c'}; padding: 4px 10px; border-radius: 5px; color: white; margin-left: 12px;">${game.home_score}</span>`;
  const visitorScoreCell = `<span style="background-color: ${visitorWins ? '#2ecc71' : '#e74c3c'}; padding: 4px 10px; border-radius: 5px; color: white; margin-right: 12px;">${game.visitor_score}</span>`;

  fila.innerHTML = `
    <td>${game.date}</td>
    <td>
      ${game.home_logo ? `<img src="${game.home_logo}" alt="${game.home_team}" width="30"> ` : ''}
      ${game.home_team}${homeScoreCell}
    </td>
    <td>${game.vs}</td>
    <td>
      ${visitorScoreCell}${game.visitor_team}
      ${game.visitor_logo ? ` <img src="${game.visitor_logo}" alt="${game.visitor_team}" width="30">` : ''}
    </td>
  `;
  cuerpo.appendChild(fila);
});

 const images = document.querySelectorAll(".galeria-champ img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let current = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % images.length;
      showImage(current);
    });

/* data.games.forEach(game => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${game.date}</td>
        <td>
          ${game.home_logo ? `<img src="${game.home_logo}" alt="${game.home_team}" width="30"> ` : ''}
          ${game.home_team}
        </td>
        <td>${game.vs}</td>
        <td>
          ${game.visitor_logo ? `<img src="${game.visitor_logo}" alt="${game.visitor_team}" width="30"> ` : ''}
          ${game.visitor_team}
        </td>
      `;
      cuerpo.appendChild(fila);
    });
*/
  } catch (e) {
    console.error('Error cargando partidos:', e);
    document.querySelector('.partidos .liga-de-verano').innerHTML =
      '<tr><td colspan="4">No se pudieron cargar los partidos.</td></tr>';
  }
}

window.onload = cargarPartidos;