/* module imports */

exports.formatMsg = msg => ({
  type: 'text',
  content: msg,
})

exports.formatQuickReplies = (array) => {
  const elements = []
  array.forEach((elem) => {
    elements.push({
      title: elem.name,
      value: elem.value,
    })
  })
  return {
    type: 'quickReplies',
    content: {
      title: 'More information',
      buttons: elements,
    },
  }
}

exports.formatPriceChanges = (priceChanges) => {
  const elements = []
  priceChanges.forEach((priceChange) => {
    const property = priceChange.get('Parent')
    elements.push({
      title: `${property.Address__c}, ${property.City__c} ${property.State__c}`,
      imageUrl: property.Picture__c,
      buttons: [
        {
          type: 'postback',
          title: 'Schedule visit',
          value: JSON.stringify({
            text: 'Schedule visit',
            propertyId: property.Id,
          }),
        },
        {
          type: 'postback',
          title: 'View broker info',
          value: JSON.stringify({
            text: 'View broker info',
            propertyId: property.Id,
          }),
        },
        {
          type: 'postback',
          title: 'Contact me',
          value: JSON.stringify({
            text: 'Contact me',
            propertyId: property.Id,
          }),
        },
      ],
    })
  })
  return {
    type: 'carouselle',
    content: elements,
  }
}

exports.formatBroker = (payload) => {
  const elements = {
    title: 'Caroline Kingsley',
    subtitle: 'Senior Broker  · 617-219-6363 · ckingsley@dreamhouse.com',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/messenger/caroline_500x260.png',
    buttons: [
      {
        type: 'postback',
        title: 'Contact Me',
        value: JSON.stringify({
          text: 'Contact me',
          propertyId: payload.properyId,
        }),
      },
    ],
  }
  return {
    type: 'card',
    content: elements,
  }
}
