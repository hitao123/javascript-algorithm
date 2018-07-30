import LinkedList from '../linked-list/LinkedList';

export default class GraphVertex {
  constructor(value) {
    if (value === undefined) {
      throw new Error('Graph vertex must be a value');
    }
    /**
     * 比较
     * @param {GraphEdge} edgeA
     * @param {GraphEdge} edgeB
     */
    const edgeComparator = (edgeA, edgeB) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };

    this.value = value;
    this.edges = new LinkedList(edgeComparator);
  }
  /**
   * 添加边
   * @param {GraphEdge} edge
   */
  addEdge(edge) {
    this.edges.append(edge);
    return this;
  }
  /**
   * 删除边
   * @param {GraphEdge} edge
   */
  deleteEdge(edge) {
    this.edges.delete(edge);
    return this;
  }

  deleteAllEdges() {
    this.getEdges().forEach(edge => this.deleteEdge(edge));
    return this;
  }

  getNeighbors() {
    const edges = this.edges.toArray();

    const neighborCovert = (node) => {
      return node.value.startVertex === this ? node.value.endVertex : node.value.startVertex;
    };

    return edges.map(neighborCovert);
  }

  getEdges() {
    return this.edges.toArray().map(linkedListNode => linkedListNode.value);
  }

  getDegree() {
    return this.edges.toArray().length;
  }

  hasEdge(requiredEdge) {
    const edgeNode = this.edges.find({
      callback: edge => edge === requiredEdge,
    });

    return !!edgeNode;
  }

  hasNeighbor(vertex) {
    const vertexNode = this.edges.find({
      callback: edge => edge.startVertex === vertex || edge.endVertex === vertex,
    });

    return !!vertexNode;
  }

  findEdge(vertex) {
    const edgeFinder = (edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edge = this.edges.find({ callback: edgeFinder });

    return edge ? edge.value : null;
  }

  getKey() {
    return this.value;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
