// se hace un pedido/fetch
// se recibe el fetch transformandolo a json y se muestra


window.onload = async () => {
    try {
        const goSearch = document.getElementById("enviar");
    
        goSearch.addEventListener("click", async (user) => {
            const userUrl = cachtUrlUser(user);
            const userInfo = createJson(userUrl);
            const tablaLista = createTable(userInfo);
        });

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

async function createJson(Url) {
    let userInfo = await (await fetch(Url)).json();
    for (const key in userInfo) {
    console.log(userInfo[key]);
    }
    return userInfo;
}

function createTable(userJson) {
    userJson.then((user) => {
        console.log("todo bien");
        const table = document.createElement('table');
        table.style.backgroundColor = 'beige';
        table.style.borderStyle = 'groove';
        const tbody = document.createElement('tbody');
        for (const key in user) {
            const row = document.createElement('tr');
            row.textContent = user[key];
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        const body = document.getElementById('root');
        body.appendChild(table);
    });
}

/**
 * Mejoras Pendientes:
 * 1. No reperit clik, eliminar tabla actual y crear una nueva
 * 2. Dar estilos a la tabla
 * 3. Obligar a poner un usuario para crear tabla
 * 4. renderizar imagen perfil
 */











