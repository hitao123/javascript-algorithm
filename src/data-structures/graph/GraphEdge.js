export default class GraphEdge {
  /**
   * 图的边
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @param {*} weight
   */
  constructor(startVertex, endVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  getKey() {
    const startVertex = this.startVertex.getKey();
    const endVertex = this.endVertex.getKey();

    return `${startVertex}_${endVertex}`;
  }

  reverse() {
    const temp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = temp;

    return this;
  }

  toString() {
    return this.getKey();
  }
}
