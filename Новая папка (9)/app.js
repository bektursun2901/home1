//1
const request = new XMLHttpRequest();
request.open('GET', './data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send();

request.addEventListener('load',() => {
    const data = JSON.parse(request.response)

    const container = document.querySelector('.container')

    data.forEach(person =>{


    const personCard = document.createElement('div')
    personCard.className = 'Card'
    personCard.innerHTML = `
    <h3 class = "text">students Geeks</h3>
    <img class = "img" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCWoDx2vtrC7E5XEFnnSheKo6TjNooQSWoLcYdstc8nJ5RXWW5Zk43jm2TxsTpD6aI18&usqp=CAU"/>
<div class="text">${person.name}</div>
<div class="text">${person.age}</div> 
`
        container.appendChild(personCard)
    })

})
//2
const request2 = new XMLHttpRequest();
request.open('GET', './app.json')
request.setRequestHeader('Content-type', 'application/json')
request.send();
console.log(request2.response)
request.addEventListener('load',() => {
    const corn = JSON.parse(request.response)
    corn.forEach(apple => {
        console.log(apple.ap)
    })
})



