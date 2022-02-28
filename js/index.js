const loadQuoata = async ()=> {
    const response = await fetch('https://restcountries.com/v3.1/all')
    return response.json()
}

window.addEventListener("DOMContentLoaded",async ()=> {
    const countries = await loadQuoata()
    console.log(countries)
})