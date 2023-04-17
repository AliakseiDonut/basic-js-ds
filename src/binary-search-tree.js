const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.roodNode = null;
  }

  root() {
    return this.roodNode;
  }

  add(data) {
    if(this.roodNode == null){
      this.roodNode = new Node(data);
    }else{
      let node = this.roodNode;
      let newNode = new Node(data);
      while(node){
        if(data > node.data){
          if(!node.right){
            break;
          }
          node = node.right;
        }else{
          if(!node.left){
            break;
          }
          node = node.left;
        }
      }
      if(data > node.data){
        node.right = newNode;
      }else{
        node.left = newNode;
      }
    }
  }

  has(data) {
    let node = this.roodNode;
    while(node.data != data){
      if(data > node.data){
        if(!node.right){
          return false;
        }
        node = node.right;
      }else{
        if(!node.left){
          return false;
        }
        node = node.left;
      }
    }
    return true;
  }

  find(/* data */) {

  }

  remove(/* data */) {

  }

  min() {

  }

  max() {
 
  }
}

module.exports = {
  BinarySearchTree
};