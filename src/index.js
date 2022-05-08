import { createGraph } from './generator.js';


// let value = {
//     "links": [],
//     "nodes": {}
// }

fetch('../graph.json')
    .then((response) => {
        console.log(response.body)
        return response.json()
    }).then((data) => {
        console.log(data)
    })

// createGraph(value)

