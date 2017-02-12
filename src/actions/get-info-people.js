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
  const peopleAnswer = await agent('GET', `https://swapi.co/api/people/?search=${people.value}`)
  console.log('======================================')
  console.log(peopleAnswer)
  console.log(peopleAnswer.results[0])
  console.log(peopleAnswer.results[0].name)
  console.log('======================================')
//  replies.push(formatter.formatPeople(payload))


  return replies
}
