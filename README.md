# -- Push

```bash
  git add . #untuk menambahkan semua file yang ada dalam folder kedalam commit | NOTE: (.) menandakan bahwa semua file akan ditambahkan
  git commit -m "pesan kalian" #untuk memberikan pesan ketika kita melakukan commit/push kedalam repository
  git push nama_remote main #melakukan push terhadap project ke dalam repository kita
```

# -- Update

```bash
  git add . #untuk menambahkan semua file yang ada dalam folder kedalam commit | NOTE: (.) menandakan bahwa semua file akan ditambahkan
  git commit -m "pesan kalian" #untuk memberikan pesan ketika kita melakukan commit/push kedalam repository
  git push nama_remote main #melakukan push terhadap project ke dalam repository kita
```

# -- CSS

```bash
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
```

# -- JavaScript

# - forEach, map, filter, reduce(sum), callback

```js
//Day 9
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

# - Sycrhonous, setTimeout, Promise

```js
//Day9
// console.log("Rahmat");

// function loop() {
//   for(let i = 0; i < 5; i++) {
//     console.log(`langkah ke ${i}`);
//   }
// }

// loop()

// console.log("Lidia");

console.log("Mulai");

function end() {
  console.log("End");
}

for (let i = 0; i < 5; i++) {
  asyncron(i, () => {
    if (i === 4) {
      end();
    }
  });
}

function asyncron(iterasi, callback) {
  setTimeout(() => {
    console.log(`Langkah ${iterasi}`);
    callback();
  }, 1000);
}

const data = fetch("https://jsonplaceholder.typicode.com/users");
console.log(data);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

const isVip = true;

const chekingVip = new Promise((resolve, reject) => {
  if (!isVip) {
    resolve("Member is VIP");
  } else {
    reject("Member isnt VIP");
  }
});

console.log(chekingVip);
chekingVip
  .then((response) => console.log("yes " + response))
  .catch((response) => console.log("no " + response));

const member = new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: 1,
        name: "Dandi Saputra",
        isMember: true,
      },
    ]);
  }, 1000);
});

const product = new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: 1,
        name: "Monitor",
        price: 10000000,
      },
    ]);
  }, 1000);
});

// member.then(res => console.log(res))
// product.then(res => console.log(res))

Promise.all([product, member]).then((res) => console.log(res));



syncrhonous function
function batch() {
  return "Hallo batch 50"
}

console.log(batch())
 asynchronous function
function member() {
  return new Promise(res => {
    setTimeout(() => {
      res([{
        id: 1,
        name: "Dandi Saputra",
        isMember: true
      }])
    }, 5000)
  })
}

async function runMember() {
  const data = await member()
  console.log(data);
}

runMember()

function member() {
  return new Promise((resolve, reject) => {
    const time = 3000

    if(time < 5000) {
      resolve("run")
    } else {
      reject("time's up")
    }
  })
}

const runMember = async () => {
  try {
    const data = await member()
    console.log(data);
    // console.log(dadatata);
  } catch (error) {
    console.log(error);
  }
}

runMember()


AJAX => javascript untuk interaktif dan dinamic. biar aplikasi bisa ambil data dari server secara async. teknik agar bisa berjalan secara async. mempermudah website untuk mengupdate data secara async tanpa harus melalui proses load.
```

# - Time

```js
function getFullTime(time) {
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthName[4]);

  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthName[monthIndex]);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  console.log(distance);

  let milisecond = 1000; // 1000 milisecond = 1 detik
  let secondInHours = 3600; // 3600 detik = 1 jam
  let hoursInDays = 24; // 24 jam = 1 hari

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hour ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minute ago`;
  } else {
    return `${distanceSeconds} second ago`;
  }
}

// setInterval(function () {
//   renderBlog();
// }, 3000);
// 1000 = 1 detik
```
