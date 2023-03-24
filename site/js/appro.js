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

const selectStation = document.getElementById('station-select');

fetch('http://localhost:3000/api/station/')
  .then(response => response.json())
  .then(data => {
    data.forEach(station => {
      const option = document.createElement('option')
      option.value = station.libStation;
      option.textContent = station.libStation;
      selectStation.appendChild(option);
    });
  })
  .catch(error => console.error(error)); 

  const selectFour = document.getElementById('fournisseur-select');

  fetch('http://localhost:3000/api/fournisseur/')
    .then(response => response.json())
    .then(data => {
      data.forEach(fournisseur => {
        const option = document.createElement('option');
        option.value = fournisseur.idFour;
        option.textContent = fournisseur.nomFour;
        selectFour.appendChild(option);
      });
    })
    .catch(error => console.error(error)); 

    
  const selectEss = document.getElementById('essence-select');

  fetch('http://localhost:3000/api/livraison/essence')
    .then(response => response.json())
    .then(data => {
      data.forEach(essence => {
        const option = document.createElement('option');
        option.value = essence.idEss;
        option.textContent = essence.libEss;
        selectEss.appendChild(option);
      });
    })
    .catch(error => console.error(error)); 

    const form = document.getElementById('inscription-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
    
      const station = document.getElementById('station-select').value;
      const fournisseur = document.getElementById('fournisseur-select').value;
      const essence = document.getElementById('essence-select').value;
      const qte = document.getElementById('qte').value;

      const livraisonData = {
          fournisseur: parseInt(fournisseur), 
          essence: parseInt(essence),
          station: station,   
          statut: "En attente",
          qte: parseInt(qte), 
      }; 
    
      fetch('http://localhost:3000/api/livraison', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(livraisonData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('La commande a été effectué avec succès.');
      })
      .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'envoi des données.'); 
      });
    });
    