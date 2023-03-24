const storage = localStorage.getItem("cureentUser")
const currentUser = JSON.parse(storage)

if(currentUser == null){
    window.location = "index.html";
}else{
    if(currentUser.roleGrt == 0){  
        console.log("Masquer le menu") 
        const maNav = document.querySelector("nav");
        maNav.style.display = "none";
    }
}

const form = document.getElementById('inscription-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nomGrt = document.getElementById('nomGrt').value;
  const emailGrt = document.getElementById('emailGrt').value;
  const passwordGrt = document.getElementById('passwordGrt').value;
  const telGrt = document.getElementById('telGrt').value;
  const adGrt = document.getElementById('adGrt').value;
  const roleGrt = document.getElementById('roleGrt').value;

  const userData = {
    nomGrt: nomGrt,
    emailGrt: emailGrt,
    passwordGrt: passwordGrt,
    telGrt: parseInt(telGrt),
    adGrt: adGrt,
    roleGrt: parseInt(roleGrt) 
  };
  console.log(userData)

  fetch('http://localhost:3000/api/gerant/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Les données utilisateur ont été envoyées avec succès.');
  })
  .catch(error => {
    console.error('Erreur:', error);
    alert('Une erreur est survenue lors de l\'envoi des données utilisateur.');
  });
});
