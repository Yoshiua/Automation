const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});


test("can add a movie to the list", async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.css("input[name='movieTitle']")).sendKeys("Interstellar");
    await driver.findElement(By.css("button[type='submit']")).click();

    // await driver.wait(until.titleIs("Interstellar - Movies List"), 1000);
});

test("can check movie watched status", async () => {
    await driver.findElement(By.css("#movie-0")).click();
    await driver.sleep(2000);
    
    // await driver.wait(until.elementIsSelected(checkbox), 6000);
    // expect(await checkbox.isSelected()).toBe(true);
});

test("can remove a movie from the list", async () => {
    // await driver.get("http://localhost:3000");
    await driver.findElement(By.css("button.delete-btn")).click();
});