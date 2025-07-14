 /*const BASE = 'https://f1-api-7h7q.onrender.com';

    async function loadPodios() {
      const container = document.getElementById('podios-content');
      container.innerHTML = '';
      // Suponemos que hay hasta 10 carreras corridas
      for (let round = 1; round <= 10; round++) {
        try {
          const res = await fetch(`${BASE}/api/raceResults/${round}`);
          if (!res.ok) continue;
          const data = await res.json();
          const pods = data.results.slice(0, 3);
          const div = document.createElement('div');
          div.className = 'race';
          div.innerHTML = `<strong>GP ${round} - ${data.raceName}</strong>`;
          pods.forEach(p => {
            const pdiv = document.createElement('div');
            pdiv.className = 'pos';
            pdiv.innerHTML = `<span>${p.position}º</span><span>${p.Driver.givenName} ${p.Driver.familyName}</span><span>${p.Constructor.name}</span>`;
            div.appendChild(pdiv);
          });
          container.appendChild(div);
        } catch (e) { console.warn('Round', round, 'no data'); }
      }
      if (!container.innerHTML) container.textContent = 'No se encontraron datos de carreras.';
    }

    async function loadStandings() {
      const dBody = document.getElementById('drivers-body');
      const cBody = document.getElementById('constructors-body');
      try {
        const [drRes, coRes] = await Promise.all([
          fetch(`${BASE}/api/standings/drivers`),
          fetch(`${BASE}/api/standings/constructors`)
        ]);
        const drivers = await drRes.json();
        const cons = await coRes.json();

        drivers.forEach(d => {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${d.position}</td><td>${d.Driver.givenName} ${d.Driver.familyName}</td><td>${d.points}</td>`;
          dBody.appendChild(tr);
        });
        cons.forEach(c => {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${c.position}</td><td>${c.Constructor.name}</td><td>${c.points}</td>`;
          cBody.appendChild(tr);
        });
      } catch (e) {
        console.error('Error standings:', e);
      }
    }

    loadPodios();
    loadStandings();*/