  const apiKey = '8632b75f9d7a4b058279f37cb99a3885';  // Tu clave de NewsAPI
  const query = encodeURIComponent('"formula 1" OR "f1" OR "grand prix"');
  const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=es&apiKey=${apiKey}`;

  async function fetchF1News() {
    const container = document.getElementById('f1-news');
    container.innerHTML = 'Cargando noticias...';

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'ok' && data.articles.length > 0) {
        container.innerHTML = '';

        data.articles.slice(0, 6).forEach(article => {
          // Filtrar sin imagen
          if (!article.urlToImage) return;

          const articleDiv = document.createElement('div');
          articleDiv.className = 'f1-article';

          articleDiv.innerHTML = `
            <img src="${article.urlToImage}" alt="Imagen noticia F1">
            <div class="f1-article-content">
              <h3><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>
              <p><em>${new Date(article.publishedAt).toLocaleString()}</em></p>
              <p>${article.description || ''}</p>
            </div>
          `;

          container.appendChild(articleDiv);
        });
      } else {
        container.innerHTML = 'No se encontraron noticias recientes de Fórmula 1.';
      }
    } catch (error) {
      container.innerHTML = 'Hubo un error al cargar las noticias.';
      console.error('Error al consultar NewsAPI:', error);
    }
  }

  fetchF1News();

