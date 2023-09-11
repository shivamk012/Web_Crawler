const {By} = require('selenium-webdriver');

async function testPricingButton(driver){
    driver.get('https://msg91.com/in');

    try{
        const pricingDiv = await driver.findElement(By.id('navbar'));
        const pricingBtn = await pricingDiv.findElement(By.xpath(".//a/span[text() = 'Products']"));
        const actions = driver.actions();

        let count = 0;
        while(count < 1000){
            await actions.move({origin : pricingBtn}).perform();
            console.log(count);
            count += 100;
        }
    }catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {testPricingButton};