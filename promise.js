'use strict';

// State: 완료전 상테 pending -> 완료 상태 fulfiled(성공) or rejected(실패)

// 1. Producer

const promise = new Promise((resorve, reject) => {
    // network , read file
    console.log("doing something");
    setTimeout(() => {
        // resorve("ellie");
        reject(new Error("no network!"));
    }, 2000)
});


// 2. Consumer -> then, catch, finally 사용
promise
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("finally!!");
    });



const fetchNumber = new Promise((resorve, reject) => {
    setTimeout(() => resorve(1), 1000);
});


fetchNumber
   .then(num => num * 2)
   .then(num => num * 3)
   .then(num => num * 4)
   .then(num => {
       return new Promise((resorve, reject) => {
            setTimeout(() => resorve(num -1), 1000);
       });
   })
   .then(num => console.log(num));
