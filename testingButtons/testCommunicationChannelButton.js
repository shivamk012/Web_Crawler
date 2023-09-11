const {By, until} = require('selenium-webdriver');

async function testCommunicationButtons(driver){
    driver.get('https://msg91.com/in');
    try{
        const communicationChannelDiv = await driver.findElement(By.xpath("//h2[text() = 'Communication Channels']/.."));

        const channelAnchorTags = await communicationChannelDiv.findElements(By.xpath('.//a'));
        // console.log(channelAnchorTags);
        // const actions = await driver.actions();

        await driver.executeScript('arguments[0].scrollIntoView()' , communicationChannelDiv);

        // await driver.sleep(5000);
        await driver.wait(until.elementIsVisible(communicationChannelDiv) , 5000);
        for(let i=0 ; i<channelAnchorTags.length ; ++i){
            try{
                await driver.executeScript('arguments[0].click()' , channelAnchorTags[i]);
                
                console.log(await driver.getCurrentUrl());
                await driver.sleep(2500);
                await driver.navigate().back();
                console.log(await driver.getCurrentUrl());    
                await driver.sleep(2500);
            }catch(err){
                console.log(err);
            }
        }
    }catch(err){
        console.log(err);
    }finally{
        driver.quit();
    }
}

module.exports = {testCommunicationButtons};