import Main from "./main.js";

const registerpageUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=account/register";

class RegisterPage extends Main {
  constructor() {
    super();
    this.url = registerpageUrl;
  }

  async openRegisterPage() {
    await this.driver.get(this.url);
  }

  async smartUI(){
    await this.driver.executeScript(`smartui.takeScreenshot,{"screenshotName":"registerpage"}`)
  }
}

export default RegisterPage;