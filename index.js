const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const {testGetStartedButton} = require('./testingButtons/GetStartedButton_home');
const {CardButton} = require('./testingButtons/CardButton_Home');
const {testPricingButton} = require('./testingButtons/PricingButton');
const {clickCountryButton} = require('./testingButtons/testCountryChangeButton');
const {testCommunicationButtons} = require('./testingButtons/testCommunicationChannelButton');
const {testReadMoreButton} = require('./testingButtons/testReadMoreButton');
const {testScheduleMeeting} = require('./testingButtons/testScheduleMeeting');
const {testGoogleSignInButton} = require('./loginPage/signInGoogle');
const {testLoginWithOTP} = require('./loginPage/loginWithOTP');
const {testSignUp} = require('./signupPage/signup');
const {fetchDataFromPage} = require('./Web_Crawler/fetchDataFromPage');

async function getSuggestions(){
    let options = new chrome.Options();
    // Replace {username} with your actual username
    // let userDataDir = 'C:\\Users\\hp\\AppData\\Local\\Google\\Chrome\\User Data';
    // options.addArguments(`user-data-dir=${userDataDir}`);
  
    // Specify the path to the ChromeDriver executable
    // let chromeDriverPath = 'C:\\Users\\hp\\Downloads\\chromedriver_win32\\chromedriver.exe';
  
    options.addArguments('--headless');

    let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    // CardButton(driver);
    // clickCountryButton(driver);
    // testCommunicationButtons(driver);
    // testReadMoreButton(driver);
    // testScheduleMeeting(driver);
    // testGoogleSignInButton(driver);
    // testLoginWithOTP(driver);
    // testSignUp(driver);
    fetchDataFromPage(driver);
}

getSuggestions();