const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length; 
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || position - 1 >= this.getLength() || position - 1 < 0 ) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.getLength(); i += 1) {
      result += `( ${this.chain[i]} )`;
      if (i < this.getLength() - 1) {
        result += '~~';
      }
    }
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
