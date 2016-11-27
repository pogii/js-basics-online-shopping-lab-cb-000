var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 25)

  var itemObject = {
    [item]: price // since item is a variable name, it must be in braces => e.g. [item] == 'pizza'
  }
  cart.push(itemObject)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  //let cart = getCart() // => [Object, Object] => e.g. { name: 'socks', price: 3 }
  const cartSize = cart.length
  const cartLog = []
  if(!cartSize) { // if cartSize is undefined, returns true. if it has a value, returns false
    return console.log('Your shopping cart is empty.')
  }

  for(var i = 0; i < cartSize; i++) {
    let objectInCart = cart[i] // each object in the cart has a k:v pair, in this case [item]: price
    let item = (Object.keys(objectInCart))[0] // get the first (and only) key value. e.g. itemKey == 'pizza'
    let price = objectInCart[item]
    cartLog.push(`${item} at \$${price}`) // e.g. => 'pizza at $3'
  }

  console.log(`In your cart, you have ${cartLog.join(', ')}.`)
}

function removeFromCart(item) {
  // compare each item k:v in the cart array against item parameter. if match, splice entire object from cart array
  const cartSize = cart.length

  for(let i = 0; i < cartSize; i++) {
    let cartObject = cart[i]
    let cartItem = (Object.keys(cartObject))[0]

    if(cartItem === item) {
      cart.splice(i, 1) // delete 1 object at index i
    }
  }

  // if the cart is still the same size, nothing was removed
  if(cart.length === cartSize) {
    return console.log('That item is not in your cart.')
  }

  return cart
}

function placeOrder(ccNumber) {
  if(!ccNumber) {
    return console.log('We don\'t have a credit card on file for you to place your order.')
  }

  console.log(`Your total cost is \$${total()}, which will be charged to the card ${ccNumber}.`)

  // empty the cart
  for(let i = 0, l = cart.length; i < l; i++) {
    let objectInCart = cart[i] // k:v pair
    let item = (Object.keys(objectInCart))[0] // just the k part of the k:v pair
    removeFromCart(item)
  }
}
