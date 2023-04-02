const loginLink = "https://www.hackerrank.com/auth/login";
let email = "cifekam591@naluzotan.com";
let password = "Manish";
const code = require("./code");

const puppeteer = require("puppeteer");

// let page;

console.log("before");
(async function () {
  try {
    let launch = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: null,
    });
    let opentab = await launch.newPage();

    await opentab.goto(loginLink);
    await opentab.type('input[id="input-1"]', email, { delay: 100 });
    await opentab.type('input[id="input-2"]', password, { delay: 100 });
    await opentab.click('button[data-analytics="LoginPassword"]');
    await waitandclick('a[data-attr1="algorithms"]', opentab);
    await waitandclick('input[value="warmup"]', opentab);
    console.log("open algo part ");
    let allquestion = await opentab.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled"
    );
    console.log(" allquestion");
    await questionsolver(opentab, allquestion[0], code.answers[0]);
  } catch (error) {
    console.log(error);
  }
})();



function waitandclick(slector, cpage) {
  return new Promise(function (resolve, reject) {
    let waitformodalpromise = cpage.waitForSelector(slector);
    waitformodalpromise
      .then(function () {
        let clickonselctor = cpage.click(slector, { delay: 10 });
        return clickonselctor;
      })
      .then(function () {
        resolve();
      })
      .catch(function () {
        reject();
      });
  });
}



async  function questionsolver(page, question, ans) {
  try {
    let QuePage = question.click();
  await waitandclick(
      '.hr-monaco-editor-with-input input[class="checkbox-input"]',
      page
    );
   await waitandclick(
        '#input-1',
        page
      );
    console.log('a gya page pe ')

    await page.type('textarea[id="input-1"]', ans, { delay: 10 });
    console.log('tyepe bhi ho gya')
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("X");
    await page.click('div[class="monaco-editor no-user-select  vs"]', {
      delay: 50,
    });
    await page.keyboard.press("A");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");
    await page.click(".hr-monaco-submit", { delay: 50 });
  } catch (error) {
    console.log(error);
  }
}

console.log("after");
