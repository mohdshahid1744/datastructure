class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjcentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjcentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "->" +[...this.adjacencyList[vertex]]);
        }
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        
        while (queue.length > 0) {
            const currentVertex = queue.shift();

            if (!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex);

                for (const neighbor of this.adjacencyList[currentVertex]) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }

    dfs(startVertex) {
        const visited = new Set();
        
        const dfsHelper = (vertex) => {
            console.log(vertex);
            visited.add(vertex);
    
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };
    
        dfsHelper(startVertex);
    }

}

const graph=new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A" , "B");
graph.addEdge("A" , "C");
graph.addEdge("B" , "D")
graph.addEdge("B" , "E")
graph.addEdge("C" , "F")


graph.display()
console.log(graph.hasEdge("A","C"));

graph.display()
graph.dfs("A")