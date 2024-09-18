import { generateUUID } from "../utils/data.js"

export class Item {
  constructor({ name, price, quantity, uuid }) {
    if (!name || !price || !quantity) return
    this.name = name
    this.price = price
    this.quantity = quantity
    this.uuid = uuid || generateUUID()
  }

  subTotal() {
    return this.price * this.quantity
  }

  quantityAdd() {
    this.quantity++
  }

  quantityRemove() {
    if (this.quantity >= 0)
      this.quantity--
  }
}

