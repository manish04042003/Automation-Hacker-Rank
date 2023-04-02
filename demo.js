const puppeteer = require('puppeteer');

let launchpuppetter = puppeteer.launch({
    headless:false
});

console.log('before');

launchpuppetter.then(function(instance){
    let opennewtab = instance.newPage();
    return opennewtab;
}).then(function(instance){
        let openpepcoding=instance.goto('https://nados.io/community');
        return openpepcoding;
}).then(function(){
    console.log('sucsess fully open nados')
})


console.log('after');