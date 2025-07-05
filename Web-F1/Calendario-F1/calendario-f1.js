  async function cargar() {
    const urlAPI = 'https://api.motorsportsinfo.app/api/races/f1';
    const url = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(urlAPI);
    try {
      const res = await fetch(url);
      console.log('Status:', res.status);
      const carreras = await res.json();
      console.log(carreras);
      const lista = document.getElementById('lista');
      carreras
        .filter(gp => gp.year === 2025 || gp.season === 2025)
        .forEach(gp => {
          const li = document.createElement('li');
          li.textContent = `${gp.round}: ${gp.name} – ${new Date(gp.sessions.gp).toLocaleString()} – ${gp.location}`;
          lista.appendChild(li);
        });
    } catch (e) {
      console.error('Error:', e);
    }
  }
  cargar();