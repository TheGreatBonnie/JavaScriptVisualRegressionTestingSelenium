import Main from "./main.js";

const componentspageUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25";

class ComponentsPage extends Main {
  constructor() {
    super();
    this.url = componentspageUrl;
  }

  async openComponentsPage() {
    await this.driver.get(this.url);
  }

  async smartUI(){
    await this.driver.executeScript(`smartui.takeScreenshot,{"screenshotName":"componentspage"}`)
  }
}

export default ComponentsPage;