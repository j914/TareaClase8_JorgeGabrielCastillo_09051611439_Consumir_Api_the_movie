export const SeriesPopular= (cantidad) => {
 
    const url_generos = "https://api.themoviedb.org/3/tv/popular?api_key=";
 
    const llave = "dfe6fbb8d1fbc619a0a4a69145765217";
    const espanish = "&language=es-ES&page";
   
    fetch(
      url_generos + llave + espanish,
            
            
        
    ).then((response ) => {
      if (response.status !== 200) {
        console.log(`Error :${response.statusText} Codigo: ${response.status}`);
        return;
      }
  
     
      // no hay problemas, podemos ver el contenido
        response.json().then((data, ) => {
          console.log(data);
          console.log(data.results);
          imprimirHTML(data.results);
        });
        
  
    });
  };
  
  
  function imprimirHTML(SeriesPop) {
    let html = "";
    let html_comedia = "";
    SeriesPop.forEach((SeriesPopulares) => {
      
        
    html += `

        <li> Id: ${SeriesPopulares.id} <br> Titulo:${SeriesPopulares.name} <br> Fecha: ${SeriesPopulares.first_air_date} <br>
       ${SeriesPopulares.overview}<br>
    Imagen: <img src=" https://image.tmdb.org/t/p/w500${SeriesPopulares.backdrop_path}"> 
            
        </li>

        `;
  });
  const contenedorApp = document.querySelector("#SeriesPopular");
  contenedorApp.innerHTML = html;
  }

  