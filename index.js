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
  var p = Math.floor(Math.random() * 10)

  var itemObject = {
    name: item,
    price: p
  }
  getCart().push(itemObject)
  console.log(`${itemObject.name} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cart = getCart() // => [Object, Object] => e.g. { name: 'socks', price: 3 }
  var cartLog = [] // =>

  var message = 'In your cart, you have '
  cartLog.unshift(message)

  for(var i = 0, l = cart.length; i < l; i++) {
    cartLog.push(`${getCart()[i].name} at $${getCart()[i].price}, `)
  }

  message = cartLog.join(' ')
  console.log(message)
}
