package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.CustomerAccount;
import util.BrowserFactory;

public class CustomerStepDefs {
	WebDriver driver;
	CustomerAccount customerAccount;
	
	@Before
	public void beforeRun() {
		driver= BrowserFactory.startBrowser();
		customerAccount = PageFactory.initElements(driver, CustomerAccount.class);
	}
	@Given ("^User is on the Techfios login page$")
	public void user_is_on_the_Techfios_login_page() {
		driver.get("http://www.techfios.com/billing/?ng=admin/");
	}


	@When ("^User enters the \"([^\"]*)\" and \"([^\"]*)\"$")  
	public void User_enters_the_and(String username, String password) {
		customerAccount.enterCredentials(username, password);
	}
	
	@And ("^User clicks the signin button$")
	public void user_clicks_the_signin_button() {
	customerAccount.clickOnSignInButton();
	}

	
	@When("^User clicks on bank and cash$")
	public void user_clicks_on_bank_and_cash() throws Throwable {
		customerAccount.ClickOnBankAndCash();
	
	}
	
	@When("^User clicks on new account$")
	public void user_clicks_on_new_account() throws Throwable {
		customerAccount.ClickOnNewAccount();
	}
	
	@When("^User fill up the form entering \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and clicks on submit$")
	public void user_fill_up_the_form_entering_and_and_and_and_and_and_and_clicks_on_submit(String accountTitle, String description, String initialBalance, String accountNumber, String contactPerson, String phone, String internetBankingUrl) throws Throwable {
	   customerAccount.enterCredentials(accountTitle, description, initialBalance, accountNumber, contactPerson, phone, internetBankingUrl);
	}
	

	@Then ("^User should be able to click on submit button$") 
	public void user_should_be_able_to_click_on_submit_button() {
		customerAccount.ClickOnSubmitButton();
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
