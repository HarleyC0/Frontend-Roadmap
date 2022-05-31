// se hace un pedido/fetch
// se recibe el fetch transformandolo a json y se muestra


window.onload = async () => {
    try {
        const goSearch = document.getElementById("enviar");
    
        goSearch.addEventListener("click", cachtUrlUser);
        
        console.log(cachtUrlUser());

        //console.log(cachtUrlUser());

        //const response = await fetch('https://api.github.com/users/'+cachtUrlUser());
        //const data = await response.json();
        //console.log(data);
        //for (const key in data) {
        //  console.log(data[key]);
        //}

    } catch (error) {
        console.log(error);
    };
}

function cachtUrlUser(envioEvent) {
    envioEvent.preventDefault();
    let userName = document.getElementById("user").value;
    console.log(userName);
    let urlUser = "https://api.github.com/users/" + userName;
    console.log(urlUser);
    return urlUser;
}












