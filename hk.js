const loginLink = "https://www.hackerrank.com/auth/login";
let email='cifekam591@naluzotan.com';
let password= 'Manish';
const code = require('./code');

const puppeteer = require('puppeteer');


let launch = puppeteer.launch({
    headless:false,
    args :['--start-maximized'],
    defaultViewport : null
});
let page ;

console.log('before');

launch.then(function(instance){
    let opentab = instance.newPage();
    return opentab
}).then(function(newTab){
    page=newTab
    let openhk=newTab.goto(loginLink)
    return openhk
}).then(function(){
    let enteremail = page.type('input[id="input-1"]',email,{delay :100})
    return enteremail
}).then(function(){
    let enterpass = page.type('input[id="input-2"]',password,{delay :100})
    return enterpass
}).then(function(){
    let open = page.click('button[data-analytics="LoginPassword"]')
    return open
}).then(function(){
    let algosectionclickpromiss = waitandclick('a[data-attr1="algorithms"]',page);
    return algosectionclickpromiss 
}).then(function(){
    let clickonwarmup = waitandclick('input[value="warmup"]',page);
    return clickonwarmup;
}).then(function(){
    // console.log('ho gya' );
    let allquestionarray = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
    return allquestionarray
}).then(function(allquestion){
    // console.log(allquestion.length)
    for(let i=0;i<allquestion.length;i++){
    let questionwillbesolved = questionsolver(page,allquestion[i],code.answers[i])
    return questionwillbesolved
    }
})




function waitandclick(slector,cpage){
   return new Promise(function(resolve,reject){
        let waitformodalpromise = cpage.waitForSelector(slector)
        waitformodalpromise.then(function(){
            let clickonselctor = cpage.click(slector,{delay : 10}); 
            return clickonselctor;
        }).then(function(){resolve()}).catch(function(){reject()})
   })
}




function questionsolver(page,question,ans){
    return new Promise(function(resolve,reject){
        let QuePage = question.click();
        QuePage.then(function(){
            let clickoncheckbox = waitandclick('.hr-monaco-editor-with-input input[class="checkbox-input"]',page)
           return clickoncheckbox
        }).then(function(){
            console.log('clicksycssesfullt')
            let typeque= page.type('#input-1',ans,{delay:10})
            return typeque ;
        }).then(function(){
            // console.log('type scusess fully');
            let pressCTRLpromise = page.keyboard.down('Control')
            return pressCTRLpromise;
        }).then(function(){
            let clickAprmomise = page.keyboard.press('A');
            return clickAprmomise;
        }).then(function(){
            let clickXpromise = page.keyboard.press('X')
            return clickXpromise;
        }).then(function(){
            // console.log('copy ans Done ')
            let clikontextarea = page.click('div[class="monaco-editor no-user-select  vs"]',{ delay:50})
            return clikontextarea;
        }).then(function(){
            let clickA = page.keyboard.press('A');
            return clickA;
        }).then(function(){
            let clickbackspace = page.keyboard.press('Backspace');
            return clickbackspace;
        }).then(function(){
            let clickV = page.keyboard.press('V');
            return clickV;
        }).then(function(){
            console.log('paste ans done')
        }).then(function(){
           
            let releseCTRLpromise = page.keyboard.up('Control')
            return releseCTRLpromise;
        }).then(function(){
            let clickSubmit = page.click('.hr-monaco-submit',{ delay:50});
            return clickSubmit;
        }).then(function(){
            resolve();
        }).catch(function(err){
           console.log(err);
        })
    })
}


console.log('after');