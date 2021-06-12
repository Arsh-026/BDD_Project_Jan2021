package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginStepDefs {
	
	WebDriver driver;
	LoginPage loginPage;
	
	
	@Before
	public void beforeRun() {
		driver= BrowserFactory.startBrowser();
		loginPage= PageFactory.initElements(driver, LoginPage.class);
		
	}

	@Given ("^User is on the techfios login page$") 
	public void user_is_on_the_techfios_login_page() throws Exception {
		driver.get("http://www.techfios.com/billing/?ng=admin/");
		Thread.sleep(2000);
		
	}
	@When ("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void User_enters_and(String username, String password) {
		//loginPage= PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterCredentials(username, password);
	}
	
	@When("^User clicks signin button$")
	public void user_clicks_signin_button() throws Throwable {
		loginPage.clickOnSignInButton();
	    
	}

	@Then ("^User will land on the dashboard page$")
	public void user_lands_on_dashboard_page() {
		loginPage.getPageTitle();
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}

