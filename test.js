const { Builder, By } = require("selenium-webdriver");

async function testGoogle() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://www.google.com");
        console.log("Website opened successfully");
    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();
    }
}

testGoogle();