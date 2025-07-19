async function cargarPartidos() {
  try {
    const res = await fetch('tabla-nba.json');
    const data = await res.json();

    const cuerpo = document.querySelector('.partidos .liga-de-verano');
    cuerpo.innerHTML = '';

    if (!data.games || data.games.length === 0) {
      cuerpo.innerHTML = '<tr><td colspan="4">No hay partidos programados.</td></tr>';
      return;
    }

    data.games.forEach(game => {
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

  } catch (e) {
    console.error('Error cargando partidos:', e);
    document.querySelector('.partidos .liga-de-verano').innerHTML =
      '<tr><td colspan="4">No se pudieron cargar los partidos.</td></tr>';
  }
}

window.onload = cargarPartidos;

window.onload = cargarPartidos;


/* {
      "date": "",
      "home_team": "",
      "vs": "",
      "visitor_team": "",
      "home_logo": "",
      "visitor_logo": ""
    },
 */   