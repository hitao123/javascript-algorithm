import LinkedList from '../linked-list/LinkedList';

export default class GraphVertex {
  constructor(value) {
    this.value = value;
    this.edges = new LinkedList();
  }
}
