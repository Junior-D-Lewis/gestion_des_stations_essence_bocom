const storage = localStorage.getItem("currentUser")
const currentUser = JSON.parse(storage)

if(currentUser == null){
    window.location = "index.html";
}else{
    if(currentUser.roleGrt == 0){  
        console.log("Masquer le menu") 
        const maNav = document.querySelector("nav"); 
        maNav.classList.remove("d-md-block")
        maNav.style.display = "none";
    }
}

if(currentUser.roleGrt == 0){  
  fetch('http://localhost:3000/api/station/essences/'+ currentUser.idGrt)  
  .then(response => response.json())
  .then(data => printStationEssences(data))
  .catch(error => console.error(error));
    }else{ 
        fetch('http://localhost:3000/api/station/')  
        .then(response => response.json())
        .then(data => printStation(data))
        .catch(error => console.error(error));
    }

const printStationEssences = (datas) => {
    const userName = document.getElementById('userName');
    userName.textContent = "Welcome back " + currentUser.nomGrt;     
  const list = document.getElementById('list');
    if(datas.length == 0){
        list.innerHTML = "<h1 class='no-data' colspan='9 '>Désolé mais vous ne gérez actuellement aucune station</h1>"; 
        return;
    }
    const ul = document.createElement('ul');
  
  datas.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
  
    const title = document.createElement('h2');
    title.textContent = element.libStation;
    li.appendChild(title);
  
    element.essences.forEach((essence) => {
      const essenceDiv = document.createElement('div');
      essenceDiv.classList.add('essence');
  
      const essenceTitle = document.createElement('h3');
      essenceTitle.textContent = essence.libEss;
      essenceDiv.appendChild(essenceTitle);
  
      const essencePrice = document.createElement('div');
      essencePrice.classList.add('price');
      essencePrice.textContent = "Prix: " + essence.prixEss + " FCFA";
      essenceDiv.appendChild(essencePrice);
  
      const essenceQuantity = document.createElement('div');
      essenceQuantity.classList.add('quantity');
      essenceQuantity.textContent = "Quantité: " + essence.avoir.qte + " L";
      essenceDiv.appendChild(essenceQuantity);
  
      const essenceStation = document.createElement('div');
      essenceStation.classList.add('station');
      essenceStation.textContent = "Station: " + essence.avoir.station;
      essenceDiv.appendChild(essenceStation);
  
      li.appendChild(essenceDiv);
    }); 
    ul.appendChild(li);
  });
    list.appendChild(ul);  
};

const printStation = (datas) => {
    console.log(datas)
    const userName = document.getElementById('userName');
    userName.textContent = "Welcome back " + currentUser.name;
    const list = document.getElementById('list');
    let table = document.createElement('table');
    table.classList.add('table');
    table.innerHTML = "<tr><th>Station</th><th>Gerant</th><th>Téléphone</th><th>Email</th></tr>";
    let tbody = document.createElement('tbody');


    if (datas === undefined || datas.length === 0) {  
        table.innerHTML = "<tr><td class='no-data' colspan='9 '>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    datas.forEach(function ({libStation, gerant: {nomGrt, telGrt, emailGrt}}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${libStation}</td>`;
        tableHtml += `<td>${nomGrt}</td>`;
        tableHtml += `<td>${telGrt}</td>`;
        tableHtml += `<td>${emailGrt}</td>`;
        tableHtml += "</tr>";
    });

    tbody.innerHTML = tableHtml;
    table.appendChild(tbody); 
    list.appendChild(table);
};