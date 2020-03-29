function handleSubmit(event) {
    event.preventDefault()

    //constants 
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
    const apiKey = '&appid=dd98cc709575188c291eba4ecdc98541';

    // check what text was put into the form field
    let zipCode = document.getElementById('name').value

    //Client.checkForName(formText)


    console.log("::: Form Submitted :::")
    fetch(baseURL + zipCode + ',us' + apiKey + '&units=imperial')
        .then(res => {
            return res.json()
        })
        .then(function(data) {
            document.getElementById('results').innerHTML = `City Name is: ${data.name}`;
        })
}


export { handleSubmit }