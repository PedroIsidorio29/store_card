import { Item } from "./services/item.js"
import { Cart } from "./services/cart.js"

const item1 = new Item({ name: 'Garrafinha', price: 59.99, quantity: 1 })
const item2 = new Item({ name: 'Fone de Ouvido', price: 19.99, quantity: 1 })

console.log(`🛒 Welcome to the your Cart`)

const cart1 = new Cart()
cart1.addItem(item1)
cart1.addItem(item2)
cart1.addItem(item1)
cart1.addItem(item1)
cart1.displayCart()
