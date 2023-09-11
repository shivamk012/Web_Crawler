const {By} = require('selenium-webdriver');
const {printTextBetweenTwoTags} = require('./printTextBetweenTwoTags');

function handleTags(pageSource , index , arr){
    const s = index;
    while(pageSource[index] !== '>'){
        index++;
    }
    arr.push({first : s , second : index});
    return index;
}

function buildTagOrder(pageSource , arr){
    for(let i=0 ; i<pageSource.length ; ++i){
        if(pageSource[i] === '<'){
            i = handleTags(pageSource , i , arr);
        }
    }   
}

function handleScriptTag(pageSource , arr , index){
    while(index < arr.length){
        if(pageSource.substring(arr[index].first+1 , arr[index].first+8) === '/script'){
            break;
        }
        index++;
    }    
    return index;
}

function printData(pageSource , arr){
    for(let i=0 ; i<arr.length-1 ; ++i){
        if(pageSource.substring(arr[i].first+1 , arr[i].first+7) === 'script'){
            i = handleScriptTag(pageSource , arr , i);
        }
        else printTextBetweenTwoTags(pageSource , arr[i].second+1 , arr[i+1].first-1);
    }
}

async function solve(driver){
    const pageSource = await driver.getAttribute('outerHTML');
    // console.log(pageSource);
    const children = await driver.findElements(By.xpath('.//*'))
    // if(children.length === 1) {
    //     const text = await children[0].getText();
    //     console.log(text);
    //     return;
    // } 
    let arr = [];
    buildTagOrder(pageSource , arr);
    // console.log(arr);
    printData(pageSource , arr);
    // for(let i=0 ; i<children.length ; ++i){
    //     await solve(children[i]);
    // }
}

module.exports = {solve};