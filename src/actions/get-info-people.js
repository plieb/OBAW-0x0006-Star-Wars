/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function getInfoPeople (res) {
  console.log('GET INFO PEOPLE')

  const replies = []

  const people = res.getMemory('people')
  console.log('======================================')
  console.log(people)
  console.log('======================================')
  replies.push(formatter.formatMsg(`Looking for information regarding ${people.value}`))
  const response = await agent('GET', `https://swapi.co/api/people/?search=${people.value}`)
  const peopleAnswer = response.body
  const height = peopleAnswer.results[0].height
  const mass = peopleAnswer.results[0].mass
  const hairColor = peopleAnswer.results[0].hair_color
  const skinColor = peopleAnswer.results[0].skin_color
  const eyeColor = peopleAnswer.results[0].eye_color
  const birthYear = peopleAnswer.results[0].birth_year
  const gender = peopleAnswer.results[0].gender
  const info = `${people.value} :\n- height: ${height}\n- mass: ${mass}\n- hair color: ${hairColor}\n- skin color: ${skinColor}\n- eye color: ${eyeColor}\n- birth year: ${birthYear}\n- gender: ${gender}`
  replies.push(formatter.formatMsg(info))
  console.log('======================================')
  console.log(peopleAnswer)
  console.log()
  console.log(peopleAnswer.results[0].name)
  console.log('======================================')
//  replies.push(formatter.formatPeople(payload))


  return replies
}
