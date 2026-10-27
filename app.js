//1. `Promise` obyektining **3 ta holati (state)** qaysilar va u bir marta `fulfilled` (bajarildi) 
// bo'lgandan keyin yana `rejected` (rad etildi) holatiga o'zgarishi mumkinmi?
//javob: . Promise holatlari: pending(kutilmoqda), fulfilled(bajarildi), rejected(rad qilindi). 
// Yo'q, fulfilledbo'lgandan keyin rejectedga o'tmaydi: holat bir marta o'tib ketadi va keyingi 
// resolve/ rejectchaqiruvlari e'tiborsizlanadi.

//2. Nima sababdan `Promise` natijasini `.then()` siz to'g'ridan-to'g'ri `console.log(myPromise)` qilsak,
//ekranda tayyor javob emas, `Promise { <pending> }` yozuvi chiqib qoladi?
//javob: 2. console.log qayta va tezda bajariladi, so'z natijasi esa asinxron keyinroq keladi. 
//Log vaqtida hali pendingbo'ladi va'da. Natijani olish uchun .then()yoki awaitkerak.


//1-TOPSHIRIQ

const coffeeOrder = new Promise((resolve, reject) => {
    resolve("sizning qahvangiz tayyor!");
});
coffeeOrder.then((message) => {
    console.log(message);  
});

//2-TOPSHIRIQ

const orderPizza = new Promise ((resolve,  reject) => {
    setTimeout(() => {
        resolve("Issiq pepperoni pitsa yetgazildi!");
    }, 2000);
});
orderPizza.then((result) => {
    console.log(result);
});

//3-TOPSHIRIQ

const inputPass = "fn4_wrong";

const checkWifi = new Promise((resolve, reject) => {
  if (inputPass === "fn4_2026") {
    resolve("Ulandingiz!");
  } else {
    reject("Parol noto'g'ri!");
  }
});

checkWifi
  .then(console.log)
  .catch(console.log);

  //4-TOPSHIRIQ

  function bookTicket(seatsCount) {
    const availableSeats = 5;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seatsCount <= availableSeats) {
                resolve(`${seatsCount} ta kino chiptasi band qilindi`);
            } else {
                reject(`faqat ${availableSeats} ta bosh joy qolgan`);
            }
        }, 1000);
    });
  }
  bookTicket(3)
  .then(console.log)
  .catch(console.log);
  

  //5-TOPSHIRIQ

  function findDriver(isDriverNearby){
    return new Promise((resolve, reject) => {
        if (isDriverNearby) {
            resolve("haydovchi topildi: oq cobalt (04 A 222 AA");
        } else {
            reject("atrofda bosh haydovchi topilmadi");
        }
    });
  }
  findDriver(false)
  .then(console.log)
  .catch(console.log)
  .finally(() => console.log("qidiruv jarayoni yakunlandi"));
  

  //6-TOPSHIRIQ

 const orderPrice = Promise.resolve(200000);

orderPrice
  .then(price => price - 30000)
  .then(price => price + 15000)
  .then(price => console.log(`yetkazib berish bilan Yakuniy to'lov: ${price} so'm`));


  //7-TOPSHIRIQ

  const item1 = { title: "PlayStation 5", stock: 4 };
  const item2 = { title: "AirPords Pro", stock: 0 };

  function checkStock(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.stock > 0) {
                resolve(`${product.title} omborda bor (${product.stock} dona)`);
            } else {
                reject(`${product.title} omborda tugagan`);
            }
        }, 1000 );
    });
  }
checkStock(item1)
.then(console.log)
.catch(console.log);


//8-TOPSHIRIQ

class ExamCenter {
    constructor(candidateName, score) {
        this.candidateName = candidateName;
        this.score = score;
    }
    checkCertificate() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.score >= 70) {
                    resolve(`tabriklaymiz, ${this.candidateName} siz ${this.score} ball bilan sertifikat oldingiz`);
                } else {
                    reject(`afsus, ${this.candidateName}. ${this.score} ball yetarli emas`);
                }
            }, 1500);
        });
    }
}
const candidate = new ExamCenter("Javohir", 85);
candidate.checkCertificate()
.then(console.log)
.catch(console.log)
.finally(() => console.log("imtihon natijasi e'lon qilindi"));
