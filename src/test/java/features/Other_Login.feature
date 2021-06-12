@Other @Regression
Feature: Techfios bank and cash New Account Functionality 

Background: 
	Given User is on the Techfios login page               

@OtherScenario1	
Scenario Outline: User should be able to login with valid credentials and open a new account
When User enters the "<username>" and "<password>"    
And User clicks the signin button     
When User clicks on bank and cash
When User clicks on new account 
When User fill up the form entering "<accountTitle>" and "<description>" and "<initialBalance>" and "<accountNumber>" and "<contactPerson>" and "<phone>" and "<internetBankingUrl>" and clicks on submit  
Then User should be able to click on submit button 
Examples:
|username          |password|accountTitle    |description|initialBalance|accountNumber|contactPerson|phone       |internetBankingUrl|
|demo@techfios.com |abc123  |Checking Account|Business   |$25000        |234567800    |Alisha Miller|000-000-0000|www.tdBank.com    |