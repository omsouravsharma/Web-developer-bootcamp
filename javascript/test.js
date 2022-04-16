let msg = "string"
print(msg)

console.log("Sourav")

let rating = 2;

if (rating === 3) {
    console.log("Value is 3")
}
console.log("Sharma")

let random = Math.random();
if (random < 0.5) {
    console.log(random)
}

if (random < 0.5) {
    console.log("Random is less than 0.5")
    console.log(random)
}
else if (random > 0.5) {
    console.log("Random is greater than 0.5 ")
}

// Nesting done 

// const userInput = prompt("Enter Something")

// if (userInput) {
//     console.log("Truthy")
// } else {
//     console.log("Falsly")
// }

// Logical AND , OR, NOT

const day = 2;
switch (day) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thrusday')
        break;
}

// # Array 

let Array1 = [10, 20, 30, 40]
console.log(Array1)

/* let a = [1, 2, 3]

a
    (3)[1, 2, 3]
a.indexOf
ƒ indexOf() { [native code] }
a.indexOf(3)
2
a.concat(4)
    (4)[1, 2, 3, 4]
a.concat(4)
    (4)[1, 2, 3, 4]
a.push
ƒ push() { [native code] }
a.push()
3
a
    (3)[1, 2, 3]
a.pop()
3
a
    (2)[1, 2]
a.push(5)
3
a
    (3)[1, 2, 5]
a
    (3)[1, 2, 5]
a.shift(1)
1
a
    (2)[2, 5]
a.unshift(1)
3
a
    (3)[1, 2, 5]
a.push(6)
4
a
    (4)[1, 2, 5, 6]
a.unshift(7)
5
a
    (5)[7, 1, 2, 5, 6] */

/* 
- concat
- indexof
- reverse
- slice 
- splice 
- multi dimensional array */

const person = {
    'firstname': 'sourav',
    'lastname': 'sharma'
}

const midterm =
{
    dani: 'A+',
    thomas: 79,
    sourav: 100,
    Ram: 1000,
    sub: ['a', 'b', 'c', 'd']
}

const comment =
    [{ username: "Tammy", text: "fghjkl", votes: 9 },
    { username: "sourav", text: "fine", votes: 6789 }]

