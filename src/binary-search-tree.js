const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if(this.rootNode == null){
      this.rootNode = new Node(data);
    }else{
      let node = this.rootNode;
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
    let node = this.rootNode;
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

  find(data) {
    let node = this.rootNode;
    while(node.data != data){
      if(data > node.data){
        if(!node.right){
          return null;
        }
        node = node.right;
      }else{
        if(!node.left){
          return null;
        }
        node = node.left;
      }
    }
    return node;
  }

  remove(data) { 
    let node = this.rootNode;
    let parentNode = null;
    while(node !== null) {
      if(data === node.data) {
        if(node.left === null && node.right === null) {
          if(parentNode === null) {
            this.rootNode = null;
          } else if(node === parentNode.left) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
          return;
        }
        if(node.left === null) {
          if(parentNode === null) {
            this.rootNode = node.right;
          } else if(node === parentNode.left) {
            parentNode.left = node.right;
          } else {
            parentNode.right = node.right;
          }
          return;
        }
        if(node.right === null) {
          if(parentNode === null) {
            this.rootNode = node.left;
          } else if(node === parentNode.left) {
            parentNode.left = node.left;
          } else {
            parentNode.right = node.left;
          }
          return;
        }
        let tempNode = node.right;
        while(tempNode.left !== null) { 
          tempNode = tempNode.left; 
        } 
        node.data = tempNode.data;
        data = tempNode.data;
        parentNode = node;
        node = node.right;
      } else if(data < node.data) {
        parentNode = node;
        node = node.left;
      } else {
        parentNode = node;
        node = node.right;
      }
    }
  }

  min() {
    let node = this.rootNode;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}
module.exports = {
  BinarySearchTree
};