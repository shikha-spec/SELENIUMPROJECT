const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function example() {
    let options = new chrome.Options();

    options.addArguments("--headless");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");

    let driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();

    await driver.get("https://www.google.com");
    console.log("Test Passed");

    await driver.quit();
})();