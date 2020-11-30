// // function foo() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             reject('failed');
// //         }, 2000);
// //     });

// // }

// // foo().then((data) => {
// //     console.log('promise passed: ', data);
// // }).catch((err) => {
// //     console.log('promise failed: ', err)
// // });



// // async - await
// function bar() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('success');
//         }, 2000);
//     });

// }

// async function callBar() {
//     console.log('calling bar');
//     const result = await bar();
//     console.log('bar finished calling', result);
// }

// callBar();

// foo -> bar -> biz
function foo(callback) {
    setTimeout(() => {
        console.log('logging from foo()');
        callback();
    }, 2000);
}

function bar(callback) {
    setTimeout(() => {
        console.log('logging from bar()');
        callback()
    }, 1000);

}

function biz(callback) {
    setTimeout(() => {
        console.log('logging from biz()');
        callback();
    }, 10);
}

// foo();
// bar();
// biz();
// foo(() => {
//     bar(() => {
//         biz(() => {
//             console.log('All done');
//         });
//     });
// });


// function foo1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // ...
//             const name = 'Peteris';
//             resolve(name);
//         }, 2000);
//     });
// }

// function bar1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // ..
//             const lastName = 'Berzins';
//             resolve(lastName);
//         }, 1000);
//     });

// }

// function biz1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // ...
//             const age = 60;
//             resolve(age);
//         }, 10);
//     });
// }

// let prom1 = foo1()
//     .then((name) => {
//         console.log('Prommise 1 resolved: ' + name)
//         return bar1();
//     })
//     .then((lastName) => {
//         console.log('Prommise 2 resolved: ' + lastName)
//         return biz1();
//     })
//     .then((age) => {
//         console.log('Prommise 3 resolved: ' + age);
//     })
//     .finally(() => {
//         console.log('all done');
//     })

// console.log(prom1);



async function foo2(number) {
    return new Promise((resolve, reject) => {
        if (number === 0) {
            reject()
        }
        setTimeout(() => {
            reject('foo');
            return;
            // ...
            const name = 'Peteris';
            resolve(name);
        }, 2000);
    });
}

async function bar2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // ..
            const lastName = 'Berzins';
            resolve(lastName);
        }, 1000);
    });

}

async function biz2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('vissslikti.lv');
            return;
            // ...
            const age = 60;
            resolve(age);
        }, 10);
    });
}


try {
    const name = await foo2();
    console.log(`name is: ${name}`);
    
    const lastName = await bar2();
    console.log(`lastName is: ${lastName}`);
    
    const age = await biz2();
    console.log(`age is: ${age}`);    
} catch(err) {
    console.log('whoops, something went wrong: ' + err);
} 


// try 
// catch 
// throw

