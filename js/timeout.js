console.log('До вызова setTimeout');

setTimeout(x => {
    console.log(x);
console.log('Внутри callback для setTimeout');
},2000,'time to js')
setTimeout(y => {
    console.log(y);

},2000,'После вызова setTimeout')

