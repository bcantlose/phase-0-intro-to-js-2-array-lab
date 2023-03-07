// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push("Ralph")
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob")

};

function destructivelyRemoveLastCat(name) {
    cats.pop();
};

function destructivelyRemoveFirstCat(name) {
    cats.shift();
};

function appendCat(name) {
    const moreCats = [...cats, "Broom"]
    return moreCats;
};

function prependCat(name) {
    const evenMoreCats = ["Arnold", ...cats]
    return evenMoreCats;
}

function removeLastCat(name) {

    return cats.slice(0, cats.length - 1)
    
};

function removeFirstCat(name) {
    return cats.slice(1)
};