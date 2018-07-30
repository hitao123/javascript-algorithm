import GraphEdge from '../GraphEdge';
import GraphVertex from '../GraphVertex';

describe('GraphEdge', () => {
  it('should create graph with default weight', () => {
    const startVertex = new GraphVertex('A');
    const endVertex = new GraphVertex('B');

    const edge = new GraphEdge(startVertex, endVertex);

    expect(edge.getKey()).toBe('A_B');
    expect(edge.toString()).toBe('A_B');
    expect(edge.startVertex).toEqual(startVertex);
    expect(edge.endVertex).toEqual(endVertex);
    expect(edge.weight).toEqual(0);
  });

  it('should create with predefined weight', () => {
    const startVertex = new GraphVertex('A');
    const endVertex = new GraphVertex('B');

    const edge = new GraphEdge(startVertex, endVertex, 8);

    expect(edge.getKey()).toBe('A_B');
    expect(edge.toString()).toBe('A_B');
    expect(edge.weight).toEqual(8);
  });

  it('should be possible to reverse edge', () => {
    const startVertex = new GraphVertex('A');
    const endVertex = new GraphVertex('B');

    const edge = new GraphEdge(startVertex, endVertex);

    expect(edge.getKey()).toBe('A_B');
    expect(edge.toString()).toBe('A_B');
    expect(edge.startVertex).toEqual(startVertex);
    expect(edge.endVertex).toEqual(endVertex);

    edge.reverse();
    expect(edge.getKey()).toBe('B_A');
    expect(edge.toString()).toBe('B_A');
    expect(edge.endVertex).toEqual(startVertex);
    expect(edge.startVertex).toEqual(endVertex);
  });
});
