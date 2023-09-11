const {By, until} = require('selenium-webdriver');

async function testReadMoreButton(driver){
    await driver.get('https://msg91.com/in');

    try{
        const readMoreButton = await driver.findElement(By.xpath('//button[text() = "Read More"]'));
        const readMoreButtonParent = await readMoreButton.findElement(By.xpath('..'));
        await driver.executeScript('arguments[0].scrollIntoView()' , readMoreButtonParent);
        // await driver.actions().move(readMoreButton).click().perform();
        await driver.wait(until.elementLocated(By.nam) , 5000);
        // await driver.actions().move(readMoreButton).click().perform();
        await driver.executeScript('arguments[0].click()' , readMoreButton);
        await driver.sleep(2000);
        await driver.executeScript('arguments[0].click()' , readMoreButton);
    }catch(err){
        console.log(err);
    }finally{
        // driver.quit();
    }
}

module.exports = {testReadMoreButton};