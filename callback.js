function callFn(msg, callback){
    console.log("before callback");
    callback(msg);
}

callFn("I want to leave", function(msg){
    console.log(`${msg} ecount`)
});


//==================promise====================


const callFn = function (msg){
    return new Promise((resolve, reject) => {
        resolve(msg);
    });
}

callFn('I want to leave')
    .then(msg => console.log(`${msg} ecount`));