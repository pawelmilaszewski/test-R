export class Node {
  constructor(c) {
    this.children = [];
    this.counter = 0;
    this.id = c;
  }
  
  increment() {
    this.counter++;
  }
  
  addNode(x) {
    this.children.push(new Node(x));
  }
}