class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || this.length === 0) return undefined;

    let temp = this.head;
    let pre;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    pre.next = null;
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) this.tail = null;
    return temp;
  }

  get(index) {
    let value;
    let currentNode = this.head;
    let currentIndex = 0;
    if (index > this.length) {
      console.log(currentIndex, index);
      return undefined;
    }
    // [1,2,3,4,5]
    while (!!currentNode && this.length >= index) {
      if (currentIndex === index) {
        console.log(currentIndex, index);
        // value = currentNode.value;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }

    // return value;
    return currentNode;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift;
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;
    // 1, 2, 3, 4, 5
    // 5, 2, 3, 4, 1
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  getHead() {
    return this.head;
  }
}

let LL = new LinkedList(1);
LL.push(5);
LL.push(2);
LL.push(6);

// console.log(LL.pop());
console.log(LL);
// console.log(LL.set(0, 1000));
console.log(LL.get(6));
console.log(LL.reverse());
