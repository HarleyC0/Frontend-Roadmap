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
    if (user.value.length>0) {
        let userName = document.getElementById("user").value;
        console.log(userName);
        let urlUser = "https://api.github.com/users/" + userName;
        console.log(urlUser);
        return urlUser;
    } else {
        alert('Insert user');
    };
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
        const avatar = document.createElement('img');
        avatar.src = user.avatar_url;
        avatar.classList.toggle('imgCss');
        const table = document.createElement('table');
        table.classList.toggle('tableCss');
        const tbody = document.createElement('tbody');
        for (const key in user) {
            const row = document.createElement('tr');
            row.textContent = user[key];
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        const body = document.getElementById('root');
        body.appendChild(avatar);
        body.appendChild(table);
    });
}

/**
 * Mejoras Pendientes:
 * 1. No repetir clik, eliminar tabla actual y crear una nueva
 */











