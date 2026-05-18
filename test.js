const{ Builder, By, WebDriver } = require("selenium-webdriver");
(async function test() {
let driver = await new Builder()
.forBrowser("chrome")
.build();
await driver.get("https://plaxonic.com");
await driver.sleep(5000);
await driver.findElement(By.xpath("//a[contains(@class,'h-full flex flex-col justify-center')][normalize-space()='What we do']")).click();
await driver.sleep(6000);
await driver.findElement(By.xpath("//a[normalize-space()='Web Apps Development']")).click();
await driver.sleep(5000);
await driver.navigate().back();
await driver.sleep(5000);
await driver.findElement(By.xpath("//a[contains(@class,'h-full flex flex-col justify-center')][normalize-space()='What we do']")).click();
await driver.sleep(6000);
await driver.findElement(By.xpath("//p[normalize-space()='Design Consulting']")).click();
await driver.sleep(4000);
await driver.quit();

})();