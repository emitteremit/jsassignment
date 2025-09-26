const countries = ['albania', 'bolivia', 'canada', 'denmark', 'ethopia', 'finland', 'germany', 'hungary', 'ireland', 'japan', 'kenya'];
if (countries.includes("ethopia")) {
    const eth = countries.filter(talk => talk === "ethopia")
    const upperEth = eth.map(max => max.toUpperCase())
    console.log(upperEth)
}
else {
    countries.push("ethopia")
    console.log(countries)
}

const webTechs = ['html', 'css', 'javascript', 'react', 'redux', 'node', 'mongoDB']

if (webTechs.includes("sass")) {
    const filtered = webTechs.filter(tech => tech === "sass")
    const upperWebTechs = filtered.map(main => main.toUpperCase())
    console.log(upperWebTechs)
}
else {
    webTechs.push("sass")
    console.log(webTechs)
}

const ShoppingCart = ['milk', 'coffee', 'tea', 'honey'];
ShoppingCart.unshift("meat")
console.log(ShoppingCart)
ShoppingCart.push("sugar")
console.log(ShoppingCart)
const hondeyIndex = ShoppingCart.indexOf("honey");
if (hondeyIndex !== -1) {
    ShoppingCart.splice(hondeyIndex, 1);
}
console.log(ShoppingCart)
const teaIndex = ShoppingCart.indexOf("tea");
if (teaIndex !== 1) {
    ShoppingCart[teaIndex] = 'greentea';
}
console.log(ShoppingCart);