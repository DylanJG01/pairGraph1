function getNeighbors(row, col, graph) {

  const neighbors = [];

  // up
  if (row > 0 && graph[row - 1][col]) {
    neighbors.push([row - 1, col]);
  }
  // Down
  if (row < graph.length - 1 && graph[row + 1][col]) {
    neighbors.push([row + 1, col]);
  }
  // left
  if (col > 0 && graph[row][col - 1]) {
    neighbors.push([row, col - 1]);
  }
  // right
  if (col < graph[row].length - 1 && graph[row][col + 1]) {
    neighbors.push([row, col + 1]);
  }
  return neighbors;

}


function islandSize(row, col, graph) {
  let firstNode = [row, col]
  // Create a visited set to store visited nodes
  const visited = new Set([`${firstNode}`]);
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  const stacky = [firstNode];

  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while(stacky.length){
    // Pop the first node
    let node = stacky.pop();
    // DO THE THING (increment size by 1)
    console.log(node)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    let neighbors = getNeighbors(node[0], node[1], graph);
   
      neighbors.forEach(el => {
        if(!visited.has(`${el}`)){
          visited.add(`${el}`)
          stacky.push(el)
        }
      })
    
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size
  }
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];