const url_empty = 'https://pokeapi.co/api/v2/pokemon/';//Es la url de la api sin el nombre del pokemon
let nombre = "";
let url = "";

function consult(){
    nombre = document.getElementById("nombre").value;
    url = url_empty + nombre;//Se agrega el nombre o numero delpokemo a buscar
    fetch(url)
    .then(response => response.json() )
    .then(data => {
        let element = document.getElementById('frame')
        element.innerHTML = `
            <section class="data">
                <div class="container_data_info">
                    <p class="data_p">El nombre del pokemon es: ${data.name}</p>
                    <p class="data_p">La estatura del pokemon es: ${data.height}</p>
                    <p class="data_p">El peso del pokemon es: ${data.weight}</p>
                    <p class="data_p">El orden del pokemon es: ${data.order}</p>
                    <p class="data_p">Su experiencia basica del pokemon es: ${data.base_experience}</p>
                    <button class="data_btn" onclick="regresar()">Regresar</button>
                </div>
                <div class="container_data_img">
                    <img class="data_img" src='${data.sprites.front_default}'/>
                </div>
                </section>
            `;        
    })
    .catch(err => alert("El pokemon no esta en la base de datos checa por favor su nombre"));
}

function regresar(){
    let element = document.getElementById('frame');
    element.innerHTML = `
    <p class="section_p">Escribe el nombre o el numero del pokemon que quieres consultar</p>
            <div class="input">
                <input type="text" id="nombre" placeholder="pikachu"/>
                <button class="btn_name" onclick="consult()">Consultar</button>
            </div>
    `
}