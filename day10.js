// first Assignment
const countries = ['albania', 'bolivia', 'canada', 'denmark','ethopia', 'finland', 'germany', 'hungary', 'ireland', 'japan', 'kenya'];
if (countries.includes("ethopia")) {
    console.log("ETHOPIA")
}
else {
    countries.splice(4,0, "ethopia")
    console.log(countries)
}

// second Assignment
const webTechs = ['html', 'css', 'javascript', 'react', 'redux', 'node', 'mongoDB']

if (webTechs.includes("sass")) {
    console.log("sass is a css processor")
}
else {
    webTechs.push("sass")
    console.log(webTechs)
}

// 3rd Assignment
const ShoppingCart = ['milk', 'coffee', 'tea', 'honey'];

// to add meat to the front of the array
ShoppingCart.unshift("meat")
console.log(ShoppingCart)

//to add sugar to the end of the array
ShoppingCart.push("sugar")
console.log(ShoppingCart)

// to remove honey from the array
ShoppingCart.splice(ShoppingCart.length -2, 1)
console.log(ShoppingCart)

//to add greeen in front of tea
const ment = ShoppingCart.splice(3,1, "greentea");
console.log(ShoppingCart)
