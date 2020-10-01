const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  linkCounter: 0,
  chainContainer: [],

  getLength() {
    return this.linkCounter
  },

  addLink(value) {
    this.chain = `${this.chain}~( ${value} )~`
    this.linkCounter++
    this.chainContainer.push(`~( ${value} )~`)
    return this
  },

  removeLink(position) {
    if (position < 1 || position > this.linkCounter) {
      this.chainContainer = []
      throw new Error()
    }

    this.chain = this.chainContainer
      .filter(item => item != this.chainContainer[position - 1])
      .join('')

    this.chainContainer = this.chainContainer
      .filter(item => item != this.chainContainer[position - 1])

    this.linkCounter--

    return this
  },

  reverseChain() {
    this.chain = this.chainContainer.reverse().join('')
    return this
  },

  finishChain() {
    this.chainContainer = []
    return this.chain = this.chain.slice(1, this.chain.length - 1)
  }
}

module.exports = chainMaker;





