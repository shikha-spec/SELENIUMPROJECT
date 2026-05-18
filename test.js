const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function test() {
    let options = new chrome.Options();

    options.addArguments("--headless");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");

    let driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();

    try {
        await driver.get("https://plaxonic.com");

        await driver.sleep(5000);

        await driver.findElement(
            By.xpath("//a[text()='What we do']")
        ).click();

        console.log("Clicked successfully");

        await driver.sleep(3000);

    } catch(err){
        console.log(err);
    }

    await driver.quit();
})();