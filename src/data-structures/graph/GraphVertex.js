import LinkedList from '../linked-list/LinkedList';

export default class GraphVertex {
  constructor(value) {
    if (value === undefined) {
      throw new Error('Graph vertex must be a value');
    }
    this.value = value;
    this.edges = new LinkedList();
  }
}
