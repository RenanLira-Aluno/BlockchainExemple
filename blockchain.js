import sha256 from "sha256";

export class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }

  createGenesisBlock() {
    const block = new Block(Date.now(), [], '0');
    return block;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewBlock() {
    const newBlock = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    this.pendingTransactions = [];
    this.chain.push(newBlock);
  }

  createTransaction(amount, sender, recipient) {
    const transaction = {
      amount,
      sender,
      recipient
    };
    this.pendingTransactions.push(transaction);
  }



}

class Block {

  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    const {hash, nonce} = this.calculateHash()
    this.hash = hash;
    this.nonce = nonce;
  }

  calculateHash() {
    let hash = ""
    let nonce = 0


    while (!hash.startsWith("000")) {
      nonce++;
      hash = sha256(this.timestamp + this.previousHash + JSON.stringify(this.transactions) + nonce).toString();
    }

    return {hash, nonce}

  }

}
