export const Horror = (cantidad) => {
 
    const url_generos = "https://api.themoviedb.org/3/list/27?api_key=";
   
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
  
  
  function imprimirHTML(CategoriaHorror) {
    let html = "";
    //let html_ = "";
    CategoriaHorror.forEach((CatHorror) => {
      
        
    html += `
    <li>
    ID:${CatHorror.id} <br> Nombre: ${CatHorror.title} <br> 
     fecha: ${CatHorror.release_date} <br> Descripcion: ${CatHorror.overview}<br> Image: <img src="https://image.tmdb.org/t/p/w500${CatHorror.backdrop_path}">
    <br/>
   
</li>
        `;
  });
  const contenedorApp = document.querySelector("#Horror");
  contenedorApp.innerHTML = html;
  }
  