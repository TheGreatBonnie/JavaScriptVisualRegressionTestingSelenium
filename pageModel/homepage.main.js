import Main from "./main.js";

const homepageUrl = "https://ecommerce-playground.lambdatest.io/";

class HomePage extends Main {
  constructor() {
    super();
    this.url = homepageUrl;
  }

  async openHomePage() {
    await this.driver.get(this.url);
  }

  async smartUI(){
    await this.driver.executeScript(`smartui.takeScreenshot,{"screenshotName":"homepage"}`)
  }
}

export default HomePage;