const storage = localStorage.getItem("currentUser")
const currentUser = JSON.parse(storage)
if(currentUser !== null){
  const url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  if (url === "index.html") {
    window.location.replace("dashbord.html");
  }
}

async function admin_login() {  
    const emailGrt = ""+document.getElementById("admin_email").value;
    const passwordGrt = ""+document.getElementById("admin_password").value;
    fetch('http://localhost:3000/api/gerant/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({emailGrt, passwordGrt})  
      })
      .then(response => response.json())
      .then(data => login(data))
      .catch(error => console.error(error));
}

async function gerant_login() {  
    const emailGrt = ""+document.getElementById("gerant_email").value;
    const passwordGrt = ""+document.getElementById("gerant_password").value;
    fetch('http://localhost:3000/api/gerant/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({emailGrt, passwordGrt}) 
      })
      .then(response => response.json())
      .then(data => login(data))
      .catch(error => console.error(error));
}

const login = (data) => {  
        if(data){
            localStorage.setItem("currentUser", JSON.stringify(data))    
            window.location = "dashbord.html";
        }else{
            alert("Login ou mot de passe incorrect");
        }
    }