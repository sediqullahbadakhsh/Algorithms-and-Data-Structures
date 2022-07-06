class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }

  nextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      console.log("not instance of Node");
    }
  }

  getNode() {
    return this.node;
  }
}
class NewNode {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

frstNode = new Node(1);
scndNode = new Node(2);
trdNode = new NewNode(4);

frstNode.nextNode(scndNode);
scndNode.nextNode(trdNode);

console.log(frstNode);
