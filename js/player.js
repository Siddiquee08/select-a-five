
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
    
    click.parentNode.children[2].setAttribute('disabled', true);
    
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
    
}

let playerPriceFinal;

document.getElementById('calculate').addEventListener('click', function(){

    const playerPrice = document.getElementById('per-player')

    const perPlayerPriceInput = parseInt(playerPrice.value)
    
    const playerNumber = selected.length
    
    playerPriceFinal = perPlayerPriceInput * playerNumber
   
    const playerPriceTotal = document.getElementById('player-price')

    playerPriceTotal.value = playerPriceFinal
})

document.getElementById('calculate-total').addEventListener('click', function () {
    


})