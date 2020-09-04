// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
//data is object w array

const topics = document.querySelector('.topics')

function tabMaker(string){
    const tabbit = document.createElement('div')
    // tabz.appendChild(tabbit)
    tabbit.textContent = string
    tabbit.classList.add('tab')
    return tabbit

}


axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(response => {
    console.log('response body axios puts in "data" property', response.data)
    const tabsUrl = response.data.topics

    tabsUrl.forEach(string => {
      let tab = tabMaker(string)
      topics.appendChild(tab)
    })
    
  })
  .catch(err => {
    console.log("error", err)
    })
  