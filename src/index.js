// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default:_}) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['jack','tom'],'-')
//     return element
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element)
// })

// import _ from 'lodash'

// var element = document.createElement('div')
//     element.innerHTML = _.join(['jack','tom'],'-')
//     document.body.appendChild(element)