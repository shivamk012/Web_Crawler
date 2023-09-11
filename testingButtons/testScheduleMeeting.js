const {By , until , switchTo} = require('selenium-webdriver');

async function testScheduleMeeting(driver){
    await driver.get('https://msg91.com/contact-us');

    try{
        const buttons = await driver.findElement(By.xpath('//button[text() = "Schedule a meeting"]'));
        // await driver.actions().click(buttons).perform();
        // // await driver.wait(until.elementIsVisible(By.className('modal-body')) , 5000);

        // const modalComponents = await driver.findElements(By.className('modal-body'));
        // try{
        //     const calenderIframe = await driver.switchTo().frame(By.xpath(".//iframe"));
        //     // await driver.wait(until.elementLocated(calenderIframe) , 5000);
        //     const tableRows = await calenderIframe.findElements(By.tagName("<tr>"));
        //     console.log(tableRows);
        // }catch(err){
        //     console.log(err);
        // }

        await driver.findElements(By.tagName('iframe'));
        await driver.switchTo().frame(0);
        const tableRows = await driver.findElements(By.tagName('tr'));
        
    }catch(err){
        console.log(err);
    }
}

module.exports = {testScheduleMeeting};