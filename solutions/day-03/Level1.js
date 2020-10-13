// 1
let firstName = 'Erass',
    lastName = 'Mirza',
    country = 'Pakistan',
    city = 'Karachi',
    age = 21,
    isMarried = false,
    year = 2020
console.log(typeof firstName,
    typeof lastName,
    typeof country,
    typeof city,
    typeof age,
    typeof isMarried,
    typeof year)

// 2
console.log(typeof '10' == 10)

// 3
console.log(parseInt('9.8') == 10)

// 4 

// 5
console.log(`
i) ${4 > 3}
ii) ${4 >= 3}
iii) ${4 < 3}
iv) ${4 <= 3}
v) ${4 == 4}
vi) ${4 === 4}
vii) ${4 != 4}
viii) ${4 !== 4}
ix) ${4 != '4'}
x) ${4 == '4'}
xi) ${4 === '4'}
xii) ${'python'.length !== 'jargon'.length}`)

// 6
console.log(`
i) ${4 > 3 && 10 < 12}
ii) ${4 > 3 && 10 > 12}
iii) ${4 > 3 || 10 < 12}
iv) ${4 > 3 || 10 > 12}
v) ${!(4 > 3)}
vi) ${!(4 < 3)}
vii) ${!(false)}
viii) ${!(4 > 3 && 10 < 12)}
ix) ${!(4 > 3 && 10 > 12)}
x) ${!(4 === '4')}
xi) ${!('python'.includes('on') && 'jargon'.includes('on'))}`)

// 7
let date = new Date()
console.log(`
i) ${date.getFullYear()}
ii) ${date.getMonth()+1}
iii) ${date.getDate()}
iv) ${date.getDay()}
v) ${date.getHours()}
vi) ${date.getMinutes()}
vii) ${date.getTime()}
`)