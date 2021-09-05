const name = 'Andrew'
const userAge = 27

//object construct, in this case if you use a variable and the vairable name has the same name
//as the variable name, you can basically use the variable, so {name} will be {name: name_value}
const user = {
    name,
    age : userAge,
    location : 'Barcelona'
}

console.log(user)


//object destruction
const product = {
    label : 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//In this case we will retrieve from an existing object, the variables we want to keep, the code below, 
//is an given example of what would be the original javascript code for this eyecandy

//const label = product.label
//const stock = product.stock

const {label, stock, test} = product
console.log("Basic object destruction")
console.log(label)
console.log(stock)
//test is undefined because it didnt exist inside product object
console.log(test)

//we can also retrieve the properties with a different name, for that, we will use the syntax:
//object_attr_name:alias_name
const {label:labelAliased, stock:stockAliased} = product
console.log("Object destruction with alias")
console.log(labelAliased)
console.log(stockAliased)

//we can also create a default value if the variable is missing, for that we will use the following syntax:
//object_attr_name:alias_name = default_value OR object_attr_name = default_value
const {label:labelAliased2 = 'Default test labelAliased2', stock:stockAliased2,test2='Default test value'} = product
console.log("Object destruction with value on test")
console.log(labelAliased2)
console.log(stockAliased2)
//test is undefined because it didnt exist inside product object
console.log(test2)

//we can also destructure the object in the parameter definition inside a function
//to do that we need to use the following syntax: ({parameters to filter})
console.log("Object destruction inside function parameter definition")
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}
transaction('Order', product)