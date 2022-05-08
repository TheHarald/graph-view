import { createGraph } from './generator.js';


// let value = {
//     "links": [],
//     "nodes": {}
// }

const url = 'https://raw.githubusercontent.com/TheHarald/graph-view/master/graph.json'

fetch(url)
    .then((response) => {
        return response.json()
    }).then((data) => {
        createGraph(data)
    })

// createGraph(value)

