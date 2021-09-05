/*
* All functions will perform x+x
*
*/

//this is the common type of function,
// will create an scope with a "this" object referencing the context
const regularFunction = function (x) {
    return x * x
}

//lambda function will not generate this object inside the scope so if
// this is not defined, will not be accesible inside the lambda
const lambda = (x) => {
    return x * x
}

//is the same as the lambda but is for those lambdas who only perform a single return statement
const lambdaShortcut = (x) => x * x

//is the eyecandy form for regular function inside an object
const methodAnnotation = {
    method(x) {
        return x * x
    }
}

//Short test to see what happens with attributes inside the json when 
//you declare lambdas instead of functions
//On the other hand, if you already have a "this" object, you want to use lambdas to 
//not override that this and keep accesing the data from the parent inside methods
const objectAnnotations = {
    'x': 2,
    'attrArray': ['x'],
    method() {
        return this.x * this.x
    },
    lambda : () => this.x * this.x,
    regularFunction : function () {
        return this.x * this.x
    },
    testLambda() {
        this.attrArray.forEach((attr) => console.log(this[attr] * this[attr]))
    },
    testRegular() {
        this.attrArray.forEach(function (attr) { console.log(this[attr] * this[attr]) })
    }
}

defaultValue = (value = 'default') => {
    console.log(value)
}
console.log('Calling  defaultValue function without arguments')
defaultValue()
console.log('Calling  defaultValue function with argument "test"')
defaultValue('test')

console.log('All annotations performs the same result? ' + (regularFunction(2) == lambda(2) &&  lambda(2) == lambdaShortcut(2) && methodAnnotation.method(2) == lambda(2)))
console.log('All annotations performs the same result using this inside an object? Must be false because lambdas doesnt have "this" variable : ' + (objectAnnotations.method() == objectAnnotations.regularFunction() && objectAnnotations.method() == objectAnnotations.lambda()))
console.log('In this case we will try to acces inside a forEach loop an already created this object, testLambda: ')
objectAnnotations.testLambda()
console.log('It\'s working and we can see the result because lambdas are not overriding this object.. but what happens if we use a regular function?, testRegular:')
+objectAnnotations.testRegular()
console.log('As we can see, we are not getting the correct result, this is because we are not accessing to the this variable of the object, we are using the this variable of the function scope ')


