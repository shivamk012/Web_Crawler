const fs = require('fs');
const {By, until} = require('selenium-webdriver');
const {solve} = require('./recurseOnHTML');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function fetchDataFromPage(driver){
    try{
        await driver.get('https://docs.msg91.com/reference/overview');
        // await driver.wait(until.elementLocated(By.tagName('body')) , 5000);
        // const body = await driver.findElement(By.tagName('body'))
        const pageSource = await driver.getPageSource();

        // Use JSDOM to parse the HTML source
         const { document } = new JSDOM(pageSource).window;
        console.log(document.body);
    // Extract text content from the parsed HTML
    const textContent = document.body.textContent;

    // console.log('Text Content from HTML Source:', textContent);
    //     await solve(body);
    // }   
    fs.writeFileSync('text.txt' , new Buffer(textContent , 'utf-8'));
    }
    catch(err){
        console.log(err);
    }finally{
        // driver.quit();
    }
}

module.exports = {fetchDataFromPage};