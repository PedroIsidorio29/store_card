import { generateUUID } from "../utils/data.js"

export class Item {
  constructor({ name, price, quantity }) {
    if (!name || !price || !quantity) return
    this.name = name
    this.price = price
    this.quantity = quantity
    this.uuid = generateUUID()
  }
}

