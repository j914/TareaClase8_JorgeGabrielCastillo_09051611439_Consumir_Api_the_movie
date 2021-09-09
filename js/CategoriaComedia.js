
export const Comedia = (cantidad) => {
 
    const url_generos = "https://api.themoviedb.org/3/list/35?api_key=";
   
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
          //console.log(data.genres);
          imprimirHTML(data.items);
        });
        
  
    });
  
  
  };
  
  
  function imprimirHTML(CategoriaComedia) {
    let html = "";
    //let html = "";
    CategoriaComedia.forEach((CatComedia) => {
      
        
    html += `
        <li>
            ID:${CatComedia.id} <br> Nombre: ${CatComedia.title} <br> 
             fecha: ${CatComedia.release_date} <br> Descripcion: ${CatComedia.overview}<br> Image: <img src="https://image.tmdb.org/t/p/w500${CatComedia.backdrop_path}">
            <br/>
           
        </li>
        `;
  });
  const contenedorApp = document.querySelector("#dmComedia");
  contenedorApp.innerHTML = html;
  }
  