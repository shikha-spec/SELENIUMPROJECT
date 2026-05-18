const { Builder, By } = require("selenium-webdriver");

(async function test() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("https://plaxonic.com");

        await driver.sleep(5000);

        await driver.findElement(
            By.xpath("//a[text()='What we do']")
        ).click();

        console.log("Clicked successfully");

        await driver.sleep(5000);

    } catch(err){
        console.log(err);
    }

    await driver.quit();
})();