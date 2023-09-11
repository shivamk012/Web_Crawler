const {By , until} = require('selenium-webdriver');

async function CardButton(driver){
    await driver.get('https://msg91.com/in');
    try{
        let element = await driver.findElement(By.className('product-card'));
        // let span = await element[0].findElement(By.xpath(".//a/span/span[text() = 'Campaign']"));
        // let btn = await span.findElement(By.xpath('..')).findElement(By.xpath('..'));
        let btn = await driver.findElement(By.xpath('//a[@href = "/campaign"]'));
        
        // go to campaign page
        await driver.executeScript('arguments[0].scrollIntoView()' , element);
        await driver.sleep(1000);
        await driver.executeScript("arguments[0].click();", btn);
        await driver.sleep(1000);
        await driver.navigate().back();
        
        // go to hello page
        // doubt here
        // element = await driver.findElements(By.className('product-card'));
        span = await element[1].findElement(By.xpath(".//a/span/span[text() = 'Hello']"));
        btn = await span.findElement(By.xpath('..')).findElement(By.xpath('..'));
        await driver.executeScript('arguments[0].scrollIntoView()' , btn);
        await driver.sleep(500);
        await driver.executeScript("arguments[0].click();", btn);
        await driver.sleep(1000);
        await driver.navigate().back();
        
        // go to segmento page
        span = await element[2].findElement(By.xpath(".//a/span/span[text() = 'Segmento']"));
        btn = await span.findElement(By.xpath('..')).findElement(By.xpath('..'));
        await driver.executeScript('arguments[0].scrollIntoView()' , btn);
        await driver.sleep(500);
        await driver.executeScript("arguments[0].click();", btn);
        await driver.sleep(1000);
        await driver.navigate().back();
        
        // go to auth page
        span = await element[3].findElement(By.xpath(".//a/span/span[text() = 'Authentication']"));
        btn = await span.findElement(By.xpath('..')).findElement(By.xpath('..'));
        await driver.executeScript('arguments[0].scrollIntoView()' , btn);
        await driver.sleep(500);
        await driver.executeScript("arguments[0].click();", btn);
        await driver.sleep(1000);
        await driver.navigate().back();

        await driver.sleep(1000);
    }catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {CardButton};