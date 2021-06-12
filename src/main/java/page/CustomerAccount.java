package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CustomerAccount extends BasePage {
	WebDriver driver;

	public CustomerAccount(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement User_Name;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SignIn;
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")
	WebElement BANK_CASH;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")
	WebElement NEW_ACCOUNT;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement ACCOUNT_TITLE;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement DESCRIPTION;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement INITIAL_BALANCE;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement ACCOUNT_NUMBER;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement CONTACT_PERSON;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement PHONE;
	@FindBy(how = How.XPATH, using = "//input[@name='ib_url']")
	WebElement BANKING_URL;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-search']")
	WebElement SUBMIT_BUTTON;

	public void enterUserName(String userName) {
		User_Name.sendKeys(userName);
	}

	public void enterPassword(String password) {
		Password.sendKeys(password);
	}

	public void enterCredentials(String userName, String password) {
		User_Name.sendKeys(userName);
		Password.sendKeys(password);
	}

	public void clickOnSignInButton() {
		SignIn.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void ClickOnBankAndCash() {
		waitForElement(driver, 3, BANK_CASH);
		BANK_CASH.click();

	}

	public void ClickOnNewAccount() {
		NEW_ACCOUNT.click();
	}

	public void enterCredentials(String accountTitle, String description, String initialBalance, String accountNumber,
			String contactPerson, String phone, String internetBankingUrl) {
		ACCOUNT_TITLE.sendKeys(accountTitle);
		DESCRIPTION.sendKeys(description);
		INITIAL_BALANCE.sendKeys(initialBalance);
		ACCOUNT_NUMBER.sendKeys(accountNumber);
		CONTACT_PERSON.sendKeys(contactPerson);
		PHONE.sendKeys(phone);
		BANKING_URL.sendKeys(internetBankingUrl);
	}

	public void ClickOnSubmitButton() {
		SUBMIT_BUTTON.click();
	}

}
