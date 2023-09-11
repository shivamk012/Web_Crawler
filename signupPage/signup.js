const {By , Select} = require('selenium-webdriver');

async function testSignUp(driver){
    driver.get('https://control.msg91.com/signup/');
    
    try{
        const dropDown  = await driver.findElement(By.tagName('select'));
        await driver.actions().click(dropDown).perform();
        const select = new Select(dropDown);
        select.selectByValue('AF');
        await driver.sleep(2000);
        await driver.actions().click(dropDown).perform();
        select.selectByValue('IN');
        const form = await driver.findElement(By.xpath('//input[@name = "email"]'));
        await form.sendKeys('shivakoolwal14@gmail.com');
        const chkBox = await driver.findElement(By.id('iAgree'));
        await driver.actions().click(chkBox).perform();
        const magicButton = await driver.findElement(By.id('btnMagLogin'));
        await driver.actions().click(magicButton).perform();
    }
    catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {testSignUp};