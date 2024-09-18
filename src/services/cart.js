import { generateUUID } from "../utils/data.js"
import { Item } from "./item.js"

export class Cart {
  cartItens = []

  constructor() {
    this.uuid = generateUUID()
  }

  addItem(item) {
    const index = this.cartItens.findIndex(({ uuid }) => uuid === item.uuid)
    if (index > -1) {
      this.cartItens[index].quantityAdd()
      return
    }
    this.cartItens.push(new Item({ ...item }))
  }

  deleteItem(item) {
    const index = this.cartItens.findIndex(({ uuid }) => uuid === item.uuid)
    if (index < 0) return
    this.cartItens.splice(index, 1)
  }

  removeItem(item) {
    const index = this.cartItens.findIndex(({ uuid }) => uuid === item.uuid)
    if (index < 0) return
    if (this.cartItens[index].quantity > 1) {
      this.cartItens[index].quantityRemove()
      return
    }
    this.deleteItem(item)
  }

  calculateTotal() {
    if (!this.cartItens.length) return
    return this.cartItens.reduce((total, item) => total + item.subTotal(), 0)
  }

  displayCart() {
    console.log("\nCart list:");
    this.cartItens.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subTotal()}`);
    });
    console.log(`\n Total: ${this.calculateTotal()}`);
  }
}