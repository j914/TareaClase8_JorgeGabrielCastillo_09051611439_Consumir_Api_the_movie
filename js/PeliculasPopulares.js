export const Search= (cantidad) => {
 
    const url_generos = "https://api.themoviedb.org/3/movie/popular?api_key=";
 
    const llave = "dfe6fbb8d1fbc619a0a4a69145765217";
  // link para ver el json
  // https://api.themoviedb.org/3/movie/popular?api_key=dfe6fbb8d1fbc619a0a4a69145765217"

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
          //console.log(data.genres);
          imprimirHTML(data.results);
        });
        
  
    });
  };
  
  
  function imprimirHTML(peliculas) {
    let html = "";
    let html_comedia = "";
    peliculas.forEach((PelisPopular) => {
      
        
    html += `

        <li> Id: ${PelisPopular.id} <br>Titulo: ${PelisPopular.title} <br>
        Fecha:${PelisPopular.release_date}
        <br>
    Imagen: <img src=" https://image.tmdb.org/t/p/w500${PelisPopular.backdrop_path}"> <br> 
    
            
        </li>

        `;
  });
  const contenedorApp = document.querySelector("#dmsearch");
  contenedorApp.innerHTML = html;
  }