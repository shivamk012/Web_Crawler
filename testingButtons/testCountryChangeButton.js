const {By , until} = require('selenium-webdriver');

async function clickCountryButton(driver){
    await driver.get('https://msg91.com/in');
    try{
        for(let i= 0; i<8 ; ++i){
            try{
                const countryChangeDiv = await driver.findElements(By.id("change-country"));
                const countryChangeBtn = await countryChangeDiv[1].findElement(By.xpath('.//a'));
                await driver.executeScript('arguments[0].click()' , countryChangeBtn);
                await driver.wait(until.elementLocated(By.xpath("//ul[@class = 'dropdown-menu show']") , 1000));
                const lists = await countryChangeDiv[1].findElements(By.xpath(".//ul/li"));
                let curElement = await lists[i].findElement(By.xpath('.//a'));
                let textOfCurrentElement = await curElement.getText();
                console.log(textOfCurrentElement);
                await driver.executeScript('arguments[0].click()' , curElement);
                console.log(await driver.getCurrentUrl());
                await driver.navigate().back();
                console.log(await driver.getCurrentUrl());
                await driver.sleep(1000);
            }
            catch(err){
                console.log(err);
            }
        }
        
    }catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {clickCountryButton};