const {By , Builder , until} = require('selenium-webdriver');
const fs = require('fs');
const chrome = require('selenium-webdriver/chrome');

const chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--headless');

const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

async function takeScreenshot(){
    try{
        await driver.get('https://control.msg91.com/signin/');
        
        const signup = await driver.findElement(By.id('signup-form'));
        const input = await signup.findElement(By.tagName('input'));
        await input.sendKeys('shivamkoolwal14@gmail.com');
        const button = await signup.findElement(By.tagName('button'));
        await driver.actions().click(button).perform();

        const otpfield = await driver.findElement(By.id('mgTokenM'));
        await driver.executeScript('arguments[0].scrollIntoView()' , otpfield);
        await driver.wait(until.elementIsVisible(otpfield) , 30000);
        const screenshot = await otpfield.getScreenShotAs('png');
        fs.writeFileSync('./screenshot6.png', new Buffer(screenshot, 'base64'));
    }catch(err){
        console.log(err);
    }finally{
        // driver.quit();
    }
}

takeScreenshot();