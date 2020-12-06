//1. async - promise

function promiseFetchUser() {
    return new Promise((resolve, reject) => {
        resolve('taeil');
    });
}


//==> async


async function asyncFetchUser() {
    return 'taeil';
}

const user = promiseFetchUser();
user.then(console.log);

const user2 = asyncFetchUser();
user2.then(console.log);

// await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return '🍎';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}

// function pickFruits() {
//     return getApple()
//             .then(apple => {
//                 return getBanana()
//                         .then(banana => `${apple} + ${banana}`);
//             });
// }

// ==>

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    
    return `${apple} + ${banana}`
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
                .then(fruits => fruits.join(' ++ '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);