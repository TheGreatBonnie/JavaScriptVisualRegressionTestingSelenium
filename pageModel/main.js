import { By, until, Builder } from "selenium-webdriver";
import selenium from "selenium-webdriver";
import "dotenv/config";

const username = process.env.LT_USERNAME;
const accessKey = process.env.LT_ACCESS_KEY;

var remoteHub =
  "https://" + username + ":" + accessKey + "@hub.lambdatest.com/wd/hub";

const chromeWindowsCapability = {
  "browserName": "Chrome",
	"browserVersion": "121.0",
	"LT:Options": {
		"username": username,
		"accessKey": accessKey,
		"platformName": "Windows 10",
		"resolution": "1024x768",
		"build": "VRTSelenium",
		"project": "VRTSelenium",
		"smartUI.project": "JavaScriptVRTSelenium",
    "smartUI.build": "VisualRegressionTesting",
		"name": "VRTSeleniumTests",
		"w3c": true,
		"plugin": "node_js-mocha"
  },
};

const seleniumDriver = new selenium.Builder()
  .usingServer(remoteHub)
  .withCapabilities(chromeWindowsCapability)
  .build();

class Main {
  constructor() {
    this.driver = seleniumDriver;
  }

  async quitB() {
    await this.driver.quit();
  }
}

export default Main;
