import { Blockchain } from "./blockchain.js";

const bitcoin = new Blockchain()

bitcoin.createTransaction(100, "Alice", "Bob")
bitcoin.createTransaction(50, "Bob", "Alice")

bitcoin.createNewBlock()



console.log(bitcoin)
