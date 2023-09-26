const node_for_click = document.getElementById("for_click")
function find_edit(){
    const second = document.getElementsByTagName('span')[1]
    console.log(second.innerText)
    second.innerText = 'Probst'

    const firstName = document.getElementsByTagName('span')[2]
    console.log(firstName.innerText)
    firstName.innerText = 'Anna'

    const dadName = document.getElementsByTagName('span')[3]
    console.log(dadName.innerText)
    dadName.innerText = 'Konstantinovna'

}

node_for_click.addEventListener("click", find_edit)