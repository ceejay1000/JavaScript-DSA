class DLLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new DLLNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length++;
  }
}
