const botao = document.querySelector('.enviar')
const saida = document.querySelector('.saida')
const input = document.querySelector('.inputNumber')

const requisicaoAPI = () => {
    const resposta = fetch(`https://swapi.dev/api;people/${value}`)
    .then((resposta) => resposta.json())
    .then((Dados) => {
        console.log(Dados)
        return Dados
    })
    return resposta
}
 const requisaoVehiclesAPI = (value) => {
    const vehicles = fetch(`https://swapi.dev.api/vehicles/${value}`)
    .then((vehicles) => text.json())
    .then((Dados) => {
        console.log(Dados)
        return Dados
    })
    return vehicles

 }
const requisicaoStarShipsAPI = (value) => {
    const Stars = fetch(`https://swapi.dev/api/starships/${value}`)
    .then((Stars) => Stars.json())
    .then((Dados) => {
        console.log(Dados)
        return Dados
    })
    return Stars
}
const requisisaoSpeciesAPI = (value) => {}
    const species = fetch(`https://swapi.dev.api/species/${value}`)
    .then((species) => species.json())
    .then((Dados) => {
        console.log(Dados)
        return Dados
    })
    return vehicles
botao.addEventListener('click', async(event) => {
    event.preventDefault

    const resposta = await requisicaoAPI(input.value)
    const  species =  await requisisaoSpeciesAPI(input.value)
    const vehicles = await requisaoVehiclesAPI(input.value)
    const  Stars = await requisicaoStarShipsAPI(input.value)
    
    saida.innerHTML = `
    <h2>Nome:${JSON.stringify(resposta.name)}</h2>
    <h2>Especie:${JSON.stringify(species.name)}</h2>
    <h2>Veiculos:${JSON.stringify(vehicles.name)}</h2>
    <h2>Naves Estelares:${JSON.stringify(Stars.name)}</h2>`
})
