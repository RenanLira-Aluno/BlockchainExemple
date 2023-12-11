import { Blockchain } from "./blockchain.js";

const bitcoin = new Blockchain()

for (let i = 0; i < 10000; i++) {
  bitcoin.createTransaction(100, "address1", "address2")
}

bitcoin.createNewBlock()



console.log(bitcoin)
