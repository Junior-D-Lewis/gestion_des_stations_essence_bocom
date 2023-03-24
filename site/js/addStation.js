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

const select = document.getElementById('gerant-select');

fetch('http://localhost:3000/api/gerant/')
  .then(response => response.json())
  .then(data => {
    data.forEach(gerant => {
      const option = document.createElement('option');
      option.value = gerant.idGrt;
      option.textContent = gerant.nomGrt;
      select.appendChild(option);
    });
  })
  .catch(error => console.error(error)); 

  const form = document.getElementById('inscription-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const posGeo = document.getElementById('posGeo').value;
    const libStation = document.getElementById('libStation').value;
    const gerantID = document.getElementById('gerant-select').value;
    const stationData = {
        posGeo: posGeo,
        libStation: libStation,
        gerantID: parseInt(gerantID) 
    }; 
  
    fetch('http://localhost:3000/api/station/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(stationData)
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
  