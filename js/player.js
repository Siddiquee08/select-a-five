
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
    console.log(playerPriceFinal)
   
    const playerPriceTotal = document.getElementById('player-price')

   playerPriceTotal.value = playerPriceFinal
})

document.getElementById('calculate-total').addEventListener('click', function () {
    
    const expenses = document.getElementById('expenses')
    
    const expensesInt = parseInt(expenses.value)
    console.log(expensesInt)
    
    const manager = document.getElementById('manager')
    const managerInt = parseInt(manager.value)
    console.log(managerInt)
    
    const coach = document.getElementById('coach')
    const coachInt = parseInt(coach.value)
    console.log(coachInt)
    
    const totalPrice = playerPriceFinal + expensesInt + managerInt + coachInt

    if (isNaN(totalPrice)) {
        alert("Press Caluculate and Proceed")
    }
    else {
        const total = document.getElementById('total')
    const totalValue = parseInt(total.innerText)

    total.innerText = totalPrice
    }
    
})

document.getElementById('reset').addEventListener('click', function () {
    const total = document.getElementById('total')
    const totalInput = total.innerText
    total.innerText = "00"
    
    const playerPriceTotal = document.getElementById('player-price')

   playerPriceTotal.value = "00"

    
})