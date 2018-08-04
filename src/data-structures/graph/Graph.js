
export default class Graph {
  /**
   * 图
   * @param {*} isDirected
   */
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }
  /**
   * 添加顶点
   * @param {GraphVertex} newVertex
   */
  addVertex(newVertex) {
    this.vertices[newVertex.getKey()] = newVertex;
    return this;
  }
  /**
   * 获取顶点
   * @param {*} vertexKey
   */
  getVertexByKey(vertexKey) {
    return this.vertices[vertexKey];
  }
  /**
   * 获取邻居
   * @param {GraphVertex} vertex
   */
  getNeighbors(vertex) {
    return vertex.getNeighbors();
  }
  /**
   * 获取所有的顶点
   */
  getAllVertices() {
    return Object.values(this.vertices);
  }
  /**
   * 获取所有的边
   */
  getAllEdges() {
    return Object.values(this.edges);
  }
  /**
   * 添加边
   * @param edge
   */
  addEdge(edge) {
    // 查找 起始结点
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());
    // start
    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }
    // end
    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    if (this.edges[edge.getKey()]) {
      throw new Error('Edge has already been added before');
    } else {
      this.edges[edge.getKey()] = edge;
    }
    // 有向图
    if (this.isDirected) {
      startVertex.addEdge(edge);
    } else {
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }
  /**
   * 删除边
   * @param {GraphEdge} edge
   */
  deleteEdge(edge) {
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error('Edge not found in graph');
    }
    // 删除在起始结点的边
    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
  }
  /**
   * 查找边
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   */
  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex);
    if (!vertex) {
      return null;
    }
    return vertex.findEdge(endVertex);
  }
  /**
   * 查找顶点
   * @param {*} vertexKey
   */
  findVertexByKey(vertexKey) {
    if (this.vertices[vertexKey]) {
      return this.vertices[vertexKey];
    }
    return null;
  }
  /**
   * 获取权重
   */
  getWeight() {
    return this.getAllEdges().reduce((weight, edge) => {
      return weight + edge.weight;
    }, 0);
  }
  /**
   * 反向
   */
  reverse() {
    this.getAllEdges().forEach((edge) => {
      this.deleteEdge(edge);
      edge.reverse();
      this.addEdge(edge);
    });
    return this;
  }
  /**
   * 获取顶点的索引值
   */
  getVerticesIndices() {
    const verticesIndices = {};
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index;
    });
    return verticesIndices;
  }
  /**
   * 获取邻接矩阵
   */
  getAdjacencyMatrix() {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    const adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
      return Array(vertices.length).fill(Infinity);
    });

    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()];
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
      });
    });

    return adjacencyMatrix;
  }

  toString() {
    return Object.keys(this.vertices).toString();
  }
}
