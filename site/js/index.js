async function admin_login() {  
    const admin_email = ""+document.getElementById("admin_email").value;
    const admin_password = ""+document.getElementById("admin_password").value;
    fetch('http://localhost:3000/api/gerant/sign-in', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({email: admin_email, password: admin_password})
    })
    .then(response => response.json())
    .then(data => login(data['data']));
}

async function gerant_login() {  
    const gerant_email = ""+document.getElementById("gerant_email").value;
    const gerant_password = ""+document.getElementById("gerant_password").value;
    fetch('http://localhost:3000/api/gerant/sign-in', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({emailGrt: gerant_email, passwordGrt: gerant_password})
    })
    .then(response => response.json())
    .then(data => login(data['data']));
}

async function register() {  

    const sign_up_datas = {
        nomGrt: document.getElementById("nomGrt").value,
        renomGrt: document.getElementById("renomGrt").value,
        emailGrt: document.getElementById("emailGrt").value,
        passwordGrt: document.getElementById("passwordGrt").value,
        telGrt: document.getElementById("telGrt").value,
        adGrt: document.getElementById("adGrt").value,
        roleGrt: document.getElementById("roleGrt").value,
    }
        
    fetch('http://localhost:3000/api/gerant/sign-up', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(sign_up_datas)
    })
    .then(response => response.json())
    .then(data => login(data['data']));
}

const login = (data) => {
        if(data.length > 0){
            var url= "http://localhost:3000/dashboard.html"; 
            window.location = url;
        }else{
            alert("Login ou mot de passe incorrect");
        }
    }