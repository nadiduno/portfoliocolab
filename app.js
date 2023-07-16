console.log("cargando")
async function UserData () {
    var UserId = document.getElementById("UserId").value
    var urlApi = `https://api.github.com/users/${UserId}`

    await fetch(urlApi) 

        .then((response) => {
            return response.json();
            
        })
        .then((data) => {
            console.log(data)

            
            // let imgPokemonFront = data["sprites"]["front_default"]
            

            document.getElementById("Username").innerHTML = data["name"]
            document.getElementById("AvatarUser").setAttribute ('src', data["avatar_url"])
          

        })
        .catch((error) => {
            console.error("Erro API Github")
        })
} 