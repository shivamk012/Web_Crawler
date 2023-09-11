const {By} = require('selenium-webdriver');

async function testGoogleSignInButton(driver){
    await driver.get('https://control.msg91.com/signin/');
    try{

    const ul = await driver.findElement(By.tagName('ul'));
    const socialButtons = await ul.findElements(By.tagName('li'));
    
    const googleSignInButton = socialButtons[0];
    await googleSignInButton.click();

    await driver.sleep(3000);
    const googleIds = await driver.findElement(By.tagName('li'));
    // const btn = await googleIds.findElement(By.xpath('//div'));
    // await driver.executeScript('arguments[0].click()' , btn);
    const element = await googleIds.findElement(By.xpath('//div[text() = "Miyuki shirogane"]'));
    await driver.actions().click(element).perform();
    // await driver.navigate().back();
    }catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {testGoogleSignInButton};