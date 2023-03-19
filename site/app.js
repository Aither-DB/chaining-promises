/ *WEB API WITH FETCH DEMO-- * /
  let baseURL = 'http://api.animalinfo.org/data/?animal='
  let apiKey = '&appid=9f15e45060...';
  const newAnimal =  document.getElementById('animal').value;

  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){  

    //Select the actual value of an HTML input to include in POST
    const fav = document.getElementById('fav').value;

    //Faking an API call
    getAnimal('/fakeAnimalData')

    //New Syntax!
    .then(function(data){
        console.log(data)
        //Add data to POST request
        postData('/addAnimal', {animal:data.animal, fact:data.fact, fav:data.fav});
    });
  }

const getAnimal = async (url) => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
        //appropriately handle the error
    }
}

// POST example

const postData = async ( url = '', data = {}) => {
    //console log data
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}