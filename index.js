const cats = ["Milo", "Otis", "Garfield"]; 
const destructivelyAppendCat = function(name) {
    return cats.push (name)
}
const destructivelyPrependCat = function(name) {
    return cats.unshift (name)
}
const destructivelyRemoveLastCat = function(name) {
    return cats.pop (name)
}
const destructivelyRemoveFirstCat = function(name) {
    return cats.shift (name)
}
function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push (name)
    return copyOfCats 
}
function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift (name)
    return copyOfCats
}
function removeLastCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.pop (name)
    return copyOfCats
}
function removeFirstCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.shift (name)
    return copyOfCats
}