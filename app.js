// let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')

function tossbtn(index) {
    // h2.innerHTML = index
    let x = Math.floor(Math.random() * 2)

    if (x === 1) {
        console.log('Win');
        // h3.innerHTML = `index , you win`
        h4.innerHTML = 'win'
    } else {
        console.log('Loss');
        // h3.innerHTML = `index , you lose`
        h4.innerHTML = 'loss'

    }
}