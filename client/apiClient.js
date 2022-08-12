import request from 'superagent'

const serverURL = 'https://api.disneyapi.dev'

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// ***   ***   ***

const charactersAvailable = 7438

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function fetchCharacter() {
  return request
    .get(`${serverURL}/characters/${getRandomInt(1, charactersAvailable + 1)}`)
    .then((response) => response.body)
}

export function fetchFilms() {
  return request
    .get(`${serverURL}/characters`)
    .then((response) => response.body)
}
