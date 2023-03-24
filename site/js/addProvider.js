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
  
    const nomFour = document.getElementById('nomFour').value;
    const prenomFour = document.getElementById('prenomFour').value;
    const emailFour = document.getElementById('emailFour').value;
    const telFour = document.getElementById('telFour').value;
    const providerData = {
        nomFour: nomFour,
        prenomFour: prenomFour,
        emailFour: emailFour,
        telFour: parseInt(telFour),
    }; 
  
    fetch('http://localhost:3000/api/fournisseur/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(providerData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('La station a été ajouté avec succès.');
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi des données.'); 
    });
  });