// 1
console.log(('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi)).length)

// 2
console.log(('You cannot end a sentence with because because because is a conjunction'.match(/because/g)).length)

// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[%$@&#;!]/g,''))

// 4
let sen = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.',
extract = sen.match(/\d+/g),
aninc = parseInt(extract[0]*12)+parseInt(extract[1])+parseInt(extract[2]*12)
console.log(`Total annual income is ${aninc} euro`)