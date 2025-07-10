    
    const apiKey = '8632b75f9d7a4b058279f37cb99a3885'; 
    const query = encodeURIComponent('"formula 1","F1"');
    const sources = 'autosport,bbc-sport,f1,espn,marca,the-sport-bible,fox-sports';
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=es&apiKey=${apiKey}`;

    async function fetchF1News() {
      const container = document.getElementById('f1-news');
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
        if (!texto.includes('formula 1') && !texto.includes('f1') && !texto.includes('grand prix')) continue;

        const articleDiv = document.createElement('div');
        articleDiv.className = 'f1-article';

        articleDiv.innerHTML = `
          <img src="${article.urlToImage}" alt="Imagen noticia F1">
          <div class="f1-article-content">
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
        container.innerHTML = 'No se encontraron noticias relevantes de Fórmula 1 en las fuentes seleccionadas.';
      }
    } else {
      container.innerHTML = 'No se encontraron noticias recientes de Fórmula 1.';
    }
  } catch (error) {
    container.innerHTML = 'Error al cargar las noticias.';
    console.error('Error al consultar NewsAPI:', error);
  }
}

fetchF1News();

///////////////////////////////////////////////////////////////
 
 

      





/*try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok' && data.articles.length > 0) {
          container.innerHTML = '';
          data.articles.slice(0, 8).forEach(article => {
            if (!article.urlToImage || !article.title) return;

            const articleDiv = document.createElement('div');
            articleDiv.className = 'f1-article';

            articleDiv.innerHTML = `
              <img src="${article.urlToImage}" alt="Imagen noticia F1">
              <div class="f1-article-content">
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
          });
        } else {
          container.innerHTML = 'No se encontraron noticias recientes de Fórmula 1.';
        }
      } catch (error) {
        container.innerHTML = 'Error al cargar las noticias.';
        console.error('Error al consultar NewsAPI:', error);
      }
    }

    fetchF1News();

   /* const apiKey = '8632b75f9d7a4b058279f37cb99a3885'; 

// Query mejorada para buscar "formula 1" Y ("f1" o "grand prix")
const query = encodeURIComponent('"formula 1" AND ("f1" OR "grand prix")');

// Fuentes confiables sobre F1 para limitar resultados
const sources = 'autosport,bbc-sport,f1,espn,marca,the-sport-bible,fox-sports';

const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=es&apiKey=${apiKey}`;

async function fetchF1News() {
  const container = document.getElementById('f1-news');
  container.innerHTML = 'Cargando noticias...';

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'ok' && data.articles.length > 0) {
      container.innerHTML = '';

      data.articles.slice(0, 8).forEach(article => {
        if (!article.urlToImage || !article.title) return;

        const texto = (article.title + ' ' + (article.description || '')).toLowerCase();
        if (!texto.includes('formula 1') && !texto.includes('f1') && !texto.includes('grand prix')) return;

        const articleDiv = document.createElement('div');
        articleDiv.className = 'f1-article';

        articleDiv.innerHTML = `
          <img src="${article.urlToImage}" alt="Imagen noticia F1">
          <div class="f1-article-content">
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
      });

      if (container.children.length === 0) {
        container.innerHTML = 'No se encontraron noticias relevantes de Fórmula 1 en las fuentes seleccionadas.';
      }
    } else {
      container.innerHTML = 'No se encontraron noticias recientes de Fórmula 1.';
    }
  } catch (error) {
    container.innerHTML = 'Error al cargar las noticias.';
    console.error('Error al consultar NewsAPI:', error);
  }
}

fetchF1News();*/

/*const apiKey = '8632b75f9d7a4b058279f37cb99a3885';  

const query = encodeURIComponent('"formula 1" OR "f1" OR "grand prix"');

const sources = 'autosport,bbc-sport,f1,espn,marca,the-sport-bible,fox-sports';

const url = `https://newsapi.org/v2/everything?q=${query}&sources=${sources}&sortBy=publishedAt&apiKey=${apiKey}`;

async function fetchF1News() {
  const container = document.getElementById('f1-news');
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
        if (!texto.includes('formula 1') && !texto.includes('f1') && !texto.includes('grand prix')) continue;

        const articleDiv = document.createElement('div');
        articleDiv.className = 'f1-article';

        articleDiv.innerHTML = `
          <img src="${article.urlToImage}" alt="Imagen noticia F1">
          <div class="f1-article-content">
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
        container.innerHTML = 'No se encontraron noticias relevantes de Fórmula 1 en las fuentes seleccionadas.';
      }
    } else {
      container.innerHTML = 'No se encontraron noticias recientes de Fórmula 1.';
    }
  } catch (error) {
    container.innerHTML = 'Error al cargar las noticias.';
    console.error('Error al consultar NewsAPI:', error);
  }
}

fetchF1News();
*/
