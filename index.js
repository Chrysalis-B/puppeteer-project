const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const selector = '.col .postArticle .u-paddingBottom25 > a';
        await page.goto('https://medium.freecodecamp.com', {waitUntil: 'networkidle2'});
        await page.waitForSelector(selector);
         const result = await page.evaluate((selector) => {
             const elements = document.querySelectorAll(selector);
             //return Array.from(elements).map((element) => { return element.href });
             return Array.from(elements).map((element) => { return element.textContent });
          }, selector);
        console.log(result);
        await browser.close();
    }
    catch(err) {
        console.log(err);
    }
})();