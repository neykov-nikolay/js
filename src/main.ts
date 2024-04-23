import fetch from "node-fetch"

const API_URL = "http://localhost:3000"
const PRODUCTS_URL = `${API_URL}/products`
const USERS_URL = `${API_URL}/users`

interface User {
  id: number
  username: string
}

interface Product {
  id: number
  userId: number
  productName: string
}


const addProductsToUsers = async () => {
  // fetch all users
  // fetch all products 
  // add products to their users (userId indicates to which user the product belongs)
}

addProductsToUsers()
// [{"id":1,"username":"john.doe","products":[{"id":52,"productName":"Persimmon","userId":1},{"id":5,"productName":"Tomato","userId":1},{"id":64,"productName":"Blackberry","userId":1},{"id":67,"productName":"Lychee","userId":1},{"id":69,"productName":"Gooseberry","userId":1},{"id":2,"productName":"Orange","userId":1},{"id":25,"productName":"Watermelon","userId":1},{"id":33,"productName":"Blueberry","userId":1},{"id":35,"productName":"Apricot","userId":1},{"id":78,"productName":"Pitahaya","userId":1},{"id":80,"productName":"Dragonfruit","userId":1},{"id":76,"productName":"Feijoa","userId":1},{"id":87,"productName":"Cranberry","userId":1},{"id":94,"productName":"Jackfruit","userId":1},{"id":98,"productName":"Pomelo","userId":1},{"id":101,"productName":"Japanese Persimmon","userId":1},{"id":104,"productName":"Ceylon Gooseberry","userId":1}]},{"id":2,"username":"jane.smith","products":[{"id":3,"productName":"Strawberry","userId":2},{"id":4,"productName":"Pear","userId":2},{"id":65,"productName":"Lingonberry","userId":2},{"id":10,"productName":"Pineapple","userId":2},{"id":70,"productName":"Passionfruit","userId":2},{"id":72,"productName":"GreenApple","userId":2},{"id":26,"productName":"Lemon","userId":2},{"id":6,"productName":"Apple","userId":2},{"id":41,"productName":"Melon","userId":2},{"id":44,"productName":"Lime","userId":2},{"id":81,"productName":"Grape","userId":2},{"id":84,"productName":"Avocado","userId":2},{"id":9,"productName":"Cherry","userId":2},{"id":95,"productName":"Horned Melon","userId":2},{"id":99,"productName":"Mangosteen","userId":2},{"id":42,"productName":"Papaya","userId":2}]},{"id":3,"username":"tyler.durden","products":[{"id":1,"productName":"Banana","userId":3},{"id":60,"productName":"Durian","userId":3},{"id":66,"productName":"Kiwi","userId":3},{"id":68,"productName":"Fig","userId":3},{"id":71,"productName":"Plum","userId":3},{"id":23,"productName":"Raspberry","userId":3},{"id":27,"productName":"Mango","userId":3},{"id":37,"productName":"Guava","userId":3},{"id":77,"productName":"Tangerine","userId":3},{"id":79,"productName":"Pomegranate","userId":3},{"id":82,"productName":"Morus","userId":3},{"id":85,"productName":"Kiwifruit","userId":3},{"id":86,"productName":"Peach","userId":3},{"id":96,"productName":"Hazelnut","userId":3},{"id":100,"productName":"Pumpkin","userId":3},{"id":103,"productName":"Annona","userId":3}]}]
