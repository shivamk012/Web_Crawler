const {fetchEmail} = require('../fetchOTPFromEmail');
const {By} = require('selenium-webdriver');

async function testLoginWithOTP(driver){
    driver.get('https://control.msg91.com/signin/');

    try{
        const emailForm = await driver.findElement(By.tagName('form'));
        const emailInput = await emailForm.findElement(By.tagName('input'));
        await emailInput.sendKeys('shivamkoolwal14@gmail.com');
        const getOtpButton = await emailForm.findElement(By.tagName('button'));
        await driver.actions().click(getOtpButton).perform();
        await driver.sleep(5000);
        const getOTPDiv = await driver.findElement(By.id('show_pwd'));
        const getOTPinput = await getOTPDiv.findElement(By.tagName('input'));
        const OTP = await fetchEmail();
        await getOTPinput.sendKeys(OTP);
        const loginButton = await getOTPDiv.findElements(By.tagName('button'));
        await driver.actions().click(loginButton[2]).perform();
    }catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {testLoginWithOTP};