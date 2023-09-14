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

  get(index) {
    // let nodeIndex = 0;
    // let currentNode = this.head;
    let temp = this.head;

    if (index >= this.length || index < 0) return undefined;
    if (index === 0) return this.head;
    if (index - 1 === this.length) return this.tail;

    // while (nodeIndex != index && currentNode.next) {
    //   if (nodeIndex === index){
    //     break;
    //   }
    //   currentNode = currentNode.next;
    //   nodeIndex++;
    // }

    // return currentNode;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  push(value) {
    const newNode = new DLLNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    let temp = this.tail;
    if (!this.head || this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;

    return temp;
  }

  shift() {
    if (!this.head || this.length === 0) return undefined;

    // let nextNode = this.head.next;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // this.head.next = null;
      // nextNode.prev = null;
      // this.head = nextNode;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return nextNode;
  }

  unshift(value) {
    const newNode = new DLLNode(value);

    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  set(index, value) {
    let temp = this.get(index);
    if (!temp) return false;

    temp.value = value;
    return true;
  }

  insert1(index, value) {
    if (index === 0) return this.unshift(value);
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length) return this.push(value);

    let temp = this.get(index);
    if (!temp) return undefined;

    let newNode = new DLLNode(value);

    newNode.next = temp;
    newNode.prev = temp.prev;
    temp.prev.next = newNode;
    temp.prev = newNode;
    this.length++;
    return this;
  }

  insert2(index, value) {
    if (index === 0) return this.unshift(value);
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length) return this.push(value);

    let before = this.get(index - 1);
    let after = before.next;
    let newNode = new DLLNode(value);

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length) return this.pop(value);

    let temp = this.get(index);

    if (!temp) return undefined;
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}

// 1,2,3,4,5,6
