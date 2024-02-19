import Main from "../pageModel/main.js";
import HomePage from "../pageModel/homepage.main.js";
import ComponentsPage from "../pageModel/componentspage.main.js";
import RegisterPage from "../pageModel/registerpage.main.js";
import { describe, it } from "mocha";

describe("E-Commerce Site Automated Visual Regression Tests", function () {
    this.timeout(80000);
  
    let driver;
    let mainPage;
    let homePage;
    let componentsPage;
    let registerPage;
  
    before(async function () {
      driver = this.driver;
      mainPage = new Main(driver);
      homePage = new HomePage(driver);
      componentsPage = new ComponentsPage(driver);
      registerPage = new RegisterPage(driver);
    });
  
    it("HomePage Visual Regression Test", async function () {
      await homePage.openHomePage();
      await homePage.smartUI();
    });
  
    it("Components Page Visual Regression Test", async function () {
      await componentsPage.openComponentsPage();
      await componentsPage.smartUI();
    });
  
    it("Registration Page Visual Regression Test", async function () {
      await registerPage.openRegisterPage();
      await registerPage.smartUI();
    });
  
    after(async function () {
      mainPage.quitB();
    });
  });