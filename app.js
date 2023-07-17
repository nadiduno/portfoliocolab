async function userData() {
    var userId = document.getElementById("userId").value
    var urlApi = `https://api.github.com/users/${userId}`

    await fetch(urlApi)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            // console.log(data)

            document.getElementById("userAvatar").setAttribute('src', data["avatar_url"])
            document.getElementById("userName").innerHTML = data["name"]
            document.getElementById("userBio").innerHTML = data["bio"]
            document.getElementById("publicRepos").innerHTML = data["public_repos"]
            document.getElementById("followers").innerHTML = data["followers"]
            document.getElementById("following").innerHTML = data["following"]
            document.getElementById("htmlUrl").setAttribute('href', data["html_url"])
            document.getElementById("createdAt").innerHTML = data["created_at"]
        })
        .catch((error) => {
            console.error("Erro API Github")
        })
} 