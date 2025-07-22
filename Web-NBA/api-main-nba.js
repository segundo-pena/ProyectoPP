const apiKey = '8632b75f9d7a4b058279f37cb99a3885'; 
const query = encodeURIComponent('"NBA"');
const sources = 'espn,bleacher-report,marca,fox-sports,nba'; 
const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=es&apiKey=${apiKey}`;

async function fetchNBANews() {
  const container = document.getElementById('nba-news');
  container.innerHTML = 'Cargando noticias...';

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('Número de artículos recibidos:', data.articles.length);

    if (data.status === 'ok' && data.articles.length > 0) {
      container.innerHTML = '';

      const maxNoticias = 8;
      let contador = 0;

      for (let i = 0; i < data.articles.length && contador < maxNoticias; i++) {
        const article = data.articles[i];

        if (!article.urlToImage || !article.title) continue;

        const texto = (article.title + ' ' + (article.description || '')).toLowerCase();
        if (!texto.includes('nba') && !texto.includes('baloncesto') && !texto.includes('basketball')) continue;

        const articleDiv = document.createElement('div');
        articleDiv.className = 'nba-article';

        articleDiv.innerHTML = `
          <img src="${article.urlToImage}" alt="Imagen noticia NBA">
          <div class="nba-article-content">
            <h3><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>
            <p>
              ${article.description || ''}
              ${article.content ? `<br><br><strong>Más:</strong> ${article.content}` : ''}
              <br><br>
              <a href="${article.url}" target="_blank">Leer artículo completo</a>
            </p>
          </div>
        `;

        container.appendChild(articleDiv);
        contador++;
      }

      if (contador === 0) {
        container.innerHTML = 'No se encontraron noticias relevantes de NBA en las fuentes seleccionadas.';
      }
    } else {
      container.innerHTML = 'No se encontraron noticias recientes de NBA.';
    }
  } catch (error) {
    container.innerHTML = 'Error al cargar las noticias.';
    console.error('Error al consultar NewsAPI:', error);
  }
}

fetchNBANews();