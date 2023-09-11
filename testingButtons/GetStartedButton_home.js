const {By} = require('selenium-webdriver');

async function testGetStartedButton(driver){
    await driver.get('https://msg91.com/in'); 
    try{
        await driver.findElement(By.xpath("//a[text()='Get Started' ]")).click(); // fetch anchor tag with text get started in it.
        const allWindow = await driver.getAllWindowHandles(); // get all open tags in chrome window.
        await driver.switchTo().window(allWindow[1]); // clicking on anchor tag opens a new tab which is stored at index 1.
        await driver.sleep(5000);
        await driver.close(); // closing singup page.
        await driver.sleep(5000);
        await driver.switchTo().window(allWindow[0]); // switching back to home page.
    }catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {testGetStartedButton};