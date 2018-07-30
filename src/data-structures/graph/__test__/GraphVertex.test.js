import GraphEdge from '../GraphEdge';
import GraphVertex from '../GraphVertex';

describe('GraphVertex', () => {
  it('should throw an error when trying to create vertex without value', () => {
    let vertex = null;

    function createEmptyVertex() {
      vertex = new GraphVertex();
    }

    expect(vertex).toBeNull();
    expect(createEmptyVertex).toThrow();
  });

  it('should create graph vertex', () => {
    const vertex = new GraphVertex('A');

    expect(vertex).toBeDefined();
    expect(vertex.value).toBe('A');
    expect(vertex.getKey()).toBe('A');
    expect(vertex.toString()).toBe('A');
    expect(vertex.edges.toString()).toBe('');
    expect(vertex.getEdges()).toEqual([]);
  });

  it('should add edges to vertex and check if exists', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    const edgeAB = new GraphEdge(vertexA, vertexB);

    vertexA.addEdge(edgeAB);
    expect(vertexA.hasEdge(edgeAB)).toBeTruthy();
    expect(vertexB.hasEdge(edgeAB)).toBeFalsy();
    expect(vertexA.getEdges().length).toEqual(1);
    expect(vertexA.getEdges()[0].toString()).toBe('A_B');
  });

  it('should delete edges from vertex', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);

    vertexA
      .addEdge(edgeAB)
      .addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB)).toBeTruthy();
    expect(vertexB.hasEdge(edgeAB)).toBeFalsy();

    expect(vertexA.hasEdge(edgeAC)).toBeTruthy();
    expect(vertexC.hasEdge(edgeAB)).toBeFalsy();

    expect(vertexA.getEdges().length).toEqual(2);
    expect(vertexA.getEdges()[0].toString()).toBe('A_B');
    expect(vertexA.getEdges()[1].toString()).toBe('A_C');

    vertexA.deleteEdge(edgeAB);
    expect(vertexA.hasEdge(edgeAB)).toBeFalsy();
    expect(vertexA.hasEdge(edgeAC)).toBeTruthy();
    expect(vertexA.getEdges()[0].toString()).toBe('A_C');

    vertexA.deleteEdge(edgeAC);
    expect(vertexA.hasEdge(edgeAB)).toBeFalsy();
    expect(vertexA.hasEdge(edgeAC)).toBeFalsy();
    expect(vertexA.getEdges().length).toEqual(0);
  });

  it('should delete all edges from vertex', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);

    vertexA
      .addEdge(edgeAB)
      .addEdge(edgeAC);

    vertexA.deleteAllEdges();
    expect(vertexA.hasEdge(edgeAB)).toBeFalsy();
    expect(vertexA.hasEdge(edgeAC)).toBeFalsy();
    expect(vertexA.getEdges().length).toEqual(0);
  });

  it('should calculate vertex degree', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    expect(vertexA.getDegree()).toBe(0);

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.getDegree()).toBe(1);

    const edgeBA = new GraphEdge(vertexB, vertexA);
    vertexA.addEdge(edgeBA);

    expect(vertexA.getDegree()).toBe(2);

    vertexA.addEdge(edgeAB);
    expect(vertexA.getDegree()).toBe(3);
    expect(vertexA.getEdges().length).toBe(3);
  });

  it('should find another vertex by edge', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
    expect(vertexA.findEdge(vertexC)).toBeNull();
  });

  it('should check if vertex has neighbor', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');
    const vertexC = new GraphVertex('C');

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);
    expect(vertexA.hasNeighbor(vertexB)).toBeTruthy();
    expect(vertexA.hasNeighbor(vertexC)).toBeFalsy();
  });
});
