# -- Push

```bash
  git add . #untuk menambahkan semua file yang ada dalam folder kedalam commit | NOTE: (.) menandakan bahwa semua file akan ditambahkan
  git commit -m "pesan kalian" #untuk memberikan pesan ketika kita melakukan commit/push kedalam repository
  git push nama_remote main #melakukan push terhadap project ke dalam repository kita
```

```bash
  git add . #untuk menambahkan semua file yang ada dalam folder kedalam commit | NOTE: (.) menandakan bahwa semua file akan ditambahkan
  git commit -m "pesan kalian" #untuk memberikan pesan ketika kita melakukan commit/push kedalam repository
  git push nama_remote main #melakukan push terhadap project ke dalam repository kita
```

type rignt:
justift- #colomn
align- #row
type left:
-content #tergantung content
-item #tergantung item
insert:
: start #kiri/atas (default)
: center #tengah
: end #kanan/bawah
: stretch #mengisi semua space
: space-around #mengisi semua space dan memberi jarak
: space-between #mengisi semua space dan memberi jarak setiap item

flex-wrap: wrap #untuk mengikuti contener

box-sizing: border-box #memasukan elemen padding dan boder dalam element dengan total ukuran yang sama

```js
const digits = [1, 2, 3, 4, 5];

// #tipe for
// function increase1(array) {
//   for (let i = 0; i < array.length; i++) {
//   console.log(array[i]); //[1, 2, 3, 4, 5]
//   }
// }
// increase1(digits);

// #tipe forEach dan arrow
//   digits.forEach((data) => {
//   console.log(data) //[1, 2, 3, 4, 5]
// })

// #tipe map
// digits.map(function (data, index) {
//   console.log(data) //[1, 2, 3, 4, 5]
//   console.log(index) //[0, 1, 2, 3, 4, 5]
// })

// #tipe filter
// const oddArray = digits.filter((digits) => {
//   return digits % 2 !== 0
// })
// console.log(oddArray) //[1, 3, 5]

// #tipe reduce (sum)
// const reduce = digits.reduce((prev, current) => prev + current) //...((prev, current) => prev + current, numberHere) #bila ingin menambahkan manual
// console.log(reduce); //15

// #tipe callback
// function hello() {
//   return "hello world"
// }
// function sayHello(name, callback) {
//   return `${name} ${callback()}`
// }
// console.log(sayHello("noname", hello)); //noname hello world
```
