let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

let mustReject = new Promise((resolve,reject) => {
    reject = `${day}.${month}.${year}`;
    setTimeout(() => {
        console.log(reject);
        
    },20000);
});


    axios.get('https://jsonplaceholder.typicode.com/posts').then(item => {
        let body = document.querySelector('body');
        let ul = document.createElement('UL');
        item.data.map(item => {
        let li = document.createElement('LI');
        li.innerHTML = item.title;
        ul.appendChild(li);
        })
        body.appendChild(ul)
    })

    let regex = /^([a-zA-Z]{5})([1258]{5})([AB]{5})$/;
    let validation = document.querySelector('.validation').textContent;
    var found = validation.match(regex);
    if (validation.match(regex)) {
        console.log(`Success - ${found}`)
    } else {
        console.log('undef')
    }

    let p = document.querySelector('.firstP').textContent;
    let secondRegex = /([0-9]{4})([0-9]{5})/g;
    let pp = document.querySelector('.secP');
    let newText = p.replace(secondRegex,'####\$2');
    pp.innerHTML = newText;
