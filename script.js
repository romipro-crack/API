fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(datos => {
       
        datos.results.forEach(personaje => {
            document.getElementById("personajes").innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${personaje.image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${personaje.name}
                        
                            
                            <p class="card-subtitle text-muted">
                             ${personaje.species}
                            </p>

                            <p class="card-subtitle text-muted">
                             ${personaje.status}
                            </p>

                        </h5>
                    </div>
                </div>
            </div>
            
            `;
        });
    
    });



function GenerarPersonaje() {
    let numeroAleatorio = Math.floor(Math.random()*20);
    
    fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(datos => {
     
     
        document.getElementById("nombre").innerText=datos.results[numeroAleatorio].name;
        document.getElementById("id_personaje").innerText=datos.results[numeroAleatorio].id;
        document.getElementById("imagen").src=datos.results[numeroAleatorio].image;
        document.getElementById("especie_p").innerText=datos.results[numeroAleatorio].species;
        
        console.log(datos.results[numeroAleatorio].gender);

            });
    }