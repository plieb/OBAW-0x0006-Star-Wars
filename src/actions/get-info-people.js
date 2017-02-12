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
  replies.push(formatter.formatMsg(`Looking for information regarding ${people}`))
  const peopleAnswer = await agent('GET', `https://swapi.co/api/people/?search=${people}`)
  console.log('======================================')
  console.log(peopleAnswer)
  console.log('======================================')
//  replies.push(formatter.formatPeople(payload))


  return replies
}
