const states = document.querySelectorAll('path')
const info = document.querySelector('.info')

async function getDetails(e) {
    const state = e.target.id.split('-')[1]

    const res = await fetch(`http://localhost:3000/states/${state}`)
    const data = await res.json()

    if (!res.ok) {
        info.innerHTML = `
        <div class="container">
          <h1>Sorry</h1>
          <p>404 not found :(</p>
        </div>`
    }

    if (res.ok) {
        info.innerHTML = `
        <div class="container">
          <h1>${data.name}</h1>
          <p><b>Location: </b>${data.location}</p>
          <p><b>population: </b>${data.population}</p>
          <p><b>capital: </b>${data.capital}</p>
          <p><b>major cities: </b>${data.major_cities}</p>
          <p><b>famous landmarks: </b>${data.famous_landmarks}</p>
        </div>
        `
    }
}

states.forEach(state => {
  state.onclick = getDetails
})