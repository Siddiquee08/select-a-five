
const selected = []
function addToSelect(click) {
    const playerName = click.parentNode.children[0].innerText
    selected.push(playerName)
    console.log(selected)
}