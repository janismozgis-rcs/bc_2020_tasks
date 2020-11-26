// function foo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('failed');
//         }, 2000);
//     });

// }

// foo().then((data) => {
//     console.log('promise passed: ', data);
// }).catch((err) => {
//     console.log('promise failed: ', err)
// });



// async - await
function bar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('success');
        }, 2000);
    });

}

async function callBar() {
    console.log('calling bar');
    const result = await bar();
    console.log('bar finished calling', result);
}

callBar();