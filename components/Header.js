// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerrr = document.querySelector('.header-container') 

function Header() {

    const headr = document.createElement('div')
    const h1 = document.createElement('h1')
    const date = document.createElement('span')
    const temp = document.createElement('span')

    headr.classList.add('header')
    h1.classList.add('h1')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = 'SEPTEMBER 4, 2020'
    h1.textContent = 'Lamda Times'
    temp.textContent = '98'

    // headerContainer.appendChild(header)
    // headr.appendChild(head)
    headr.appendChild(date)
    headr.appendChild(h1)
    headr.appendChild(temp)

    
console.log('right here')
    return headr

}

// headerrr.appendChild(Header(header))
