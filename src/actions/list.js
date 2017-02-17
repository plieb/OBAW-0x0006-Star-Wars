
/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function getList(res) {
  console.log('GET LIST')

  const replies = []
  const quickReplies = []
  const list = res.getMemory('list')
  console.log('======================================')
  console.log(list)
  console.log('======================================')
  replies.push(formatter.formatMsg(`Looking for a list of ${list.value}`))
  if (list.value === 'film') {
    const response = await agent('GET', 'https://swapi.co/api/films/')
    const filmAnswer = response.body
    filmAnswer.results.forEach((f) => {
      quickReplies.push({ name: f.title, value: `Can I get information about ${f.title}` })
    })
  } else if (list.value === 'people') {
    Math.floor((Math.random() * 10) + 1)
  } else {
    replies.push(formatter.formatMsg(`Sorry I couldn't find any information regarding ${list.value}`))
  }
  return replies
}
