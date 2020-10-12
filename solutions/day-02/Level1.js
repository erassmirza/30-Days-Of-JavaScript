// 1
let challenge = '30 Days Of JavaScript'

// 2
console.log(challenge)

// 3
console.log(challenge.length)

// 4
console.log(challenge.toUpperCase())

// 5
console.log(challenge.toLowerCase())

// 6
console.log(challenge.substr(0,2))

// 7
console.log(challenge.substr(3,challenge.length-1))

// 8
console.log(challenge.includes('Script'))

// 9
console.log('string'.split(''))

// 10
console.log(challenge.split(' '))

// 11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))

// 12
console.log(challenge.replace('JavaScript','Python'))

// 13
console.log(challenge.charAt(15))

// 14
console.log(challenge.charCodeAt('J'))

// 15
console.log(challenge.indexOf('a'))

// 16
console.log(challenge.lastIndexOf('a'))

// 17
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))

// 18
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))

// 19
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))

// 20
console.log(' 30 Days Of JavaScript '.trim(' '))

// 21
console.log(challenge.startsWith('30'))

// 22
console.log(challenge.endsWith('JavaScript'))

// 23
console.log(challenge.match(/a/g))

// 24
console.log('30 Days Of '.concat('JavaScript'))

// 25
console.log(challenge.repeat(2))