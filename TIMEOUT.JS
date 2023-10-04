console.log("first")
function foo(){
    console.log("foo is calling")
}

setTimeout(foo(), 2000)
console.log("Second")