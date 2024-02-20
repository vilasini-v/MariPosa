var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`https://perenual.com/api/species-care-guide-list?key=sk-4RGN65d389ce926534243&species_id=721`, requestOptions)
    .then(response => response.json())
    .then(data => {
        const list = data.data;
        list.map((item) => { 
            const name = item.common_name;
            const sec = item.section;
            sec.map((thing) => {
                console.log(thing);
                const type = thing.type;
                const des = thing.description;
                const disp = `<h2>${type}</h2><p>${des}</p>`;
                document.querySelector('.desc').innerHTML += disp;
            })
        })       
    })
    .catch(error => console.log('error', error));