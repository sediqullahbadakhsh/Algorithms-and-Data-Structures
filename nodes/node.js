class Node {
  // defines contructor with one paramerter and defining the next Node
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  // allocating or specifying(pointing) the next node
  setNextNode(node) {
    // to check weither the next node is an instance of this class if not throws an error
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      console.log("not instance of Node");
    }
  }

  // to get the nodes data
  getNextNode() {
    return this.next;
  }
}

const strawberryNode = new Node("Berry Tasty");
const vanillaNode = new Node("Vanilla");
const coconutNode = new Node("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;
while (currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}
console.log(vanillaNode.getNextNode());
