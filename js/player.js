
const selected = []


function display(names) {

    const selectedPlayers = document.getElementById('selected-players')
    selectedPlayers.innerText = ""
    
    for (let i = 0; i < names.length; i++){

        const li = document.createElement('li')
        
        li.innerHTML = names[i]

        selectedPlayers.appendChild(li)
    }
}

function addToSelect(click) {
    const playerName = click.parentNode.children[0].innerText
    
    selected.push(playerName)
    const totalPlayer = document.getElementById('total-player')

    if (selected.length > 5) {
        
        alert("Cannot Select More Than 5!")
    }

    else {
       
        totalPlayer.innerText = selected.length
        display(selected)
    }

    return (selected.length)
    
}


document.getElementById('calculate').addEventListener('click', function(){

    const playerPrice = document.getElementById('player-price')

    const playerPriceInput = parseInt(playerPrice.value)
    console.log(playerPriceInput)
})