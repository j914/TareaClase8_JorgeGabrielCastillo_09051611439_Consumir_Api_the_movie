
export const Aventura = (cantidad) => {
 
    const url_generos = "https://api.themoviedb.org/3/list/9648?api_key=";
   
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
  
  
  function imprimirHTML(CategoriaMisterio) {
    let html = "";
    //let html = "";
    CategoriaMisterio.forEach((CatMisterio) => {
      
        
    html += `
    <li>
    ID:${CatMisterio.id} <br> Nombre: ${CatMisterio.title} <br> 
     fecha: ${CatMisterio.release_date} <br> Descripcion: ${CatMisterio.overview}<br> Image: <img src="https://image.tmdb.org/t/p/w500${CatMisterio.backdrop_path}">
    <br/>
   
</li>
        `;
  });
  const contenedorApp = document.querySelector("#dmAventura");
  contenedorApp.innerHTML = html;
  }
  