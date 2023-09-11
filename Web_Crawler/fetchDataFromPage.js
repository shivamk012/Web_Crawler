const fs = require('fs');
const {By, until} = require('selenium-webdriver');
const {solve} = require('./recurseOnHTML');

async function fetchDataFromPage(driver){
    try{
        await driver.get('https://docs.msg91.com/reference/overview');
        // await driver.get('http://127.0.0.1:5500/');
        await driver.wait(until.elementLocated(By.tagName('body')) , 5000);
        const body = await driver.findElement(By.tagName('body'))
        // fs.writeFileSync('code.html' , new Buffer(htmlPage , 'utf8'));
        // const viewportWidth = await driver.executeScript('return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;');
        // console.log("viewport : " , viewportWidth);
        // const res = await body.getAttribute('innerHTML');
        // const text = await body.getText();
        // fs.writeFileSync('text.txt' , new Buffer(text , 'utf-8') );
        await solve(body);
    }   
    catch(err){
        console.log(err);
    }finally{
        // driver.quit();
    }
}

module.exports = {fetchDataFromPage};