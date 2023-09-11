const {By , until , Builder } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

async function testLoginWithOTPWait(){
    try{
        await driver.get('https://control.msg91.com/signin/');
        const signup = await driver.findElement(By.id('signup-form'));
        const otpfieldDiv = await driver.findElement(By.id('show_pwd'));
        const input = await signup.findElement(By.tagName('input'));

        await input.sendKeys('shivamkoolwal14@gmail.com');
        const button = await signup.findElement(By.tagName('button'));
        await driver.actions().click(button).perform();
        const otpfield = await driver.findElement(By.id('mgTokenM'));
        await driver.executeScript('arguments[0].scrollIntoView()' , otpfield);
        await driver.wait(until.elementIsVisible(otpfield) , 10000);
        let enterOtp = "";
        await driver.wait(async() => {
        //   await otpfield.sendKeys("123")
          enterOtp = await otpfield.getAttribute('value');
          return enterOtp.length === 6;
        },30000 , "user did not enter a valid otp" , 5000);
        if(enterOtp.length === 6){
            let loginButton = await driver.findElement(By.id('loginMagicCode'));
            await driver.actions().click(loginButton).perform();
        }
    }catch(err){
        console.log(err);
    }finally{
        // driver.quit();
    }
}

testLoginWithOTPWait();