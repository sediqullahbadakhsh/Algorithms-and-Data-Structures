class Node {
  // defines contructor with one paramerter and defining the next Node
  constructor(node) {
    this.node = node;
    this.next = null;
  }

  // allocating or specifying(pointing) the next node
  nextNode(node) {
    // to check weither the next node is an instance of this class if not throws an error
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      console.log("not instance of Node");
    }
  }

  // to get the nodes data
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
