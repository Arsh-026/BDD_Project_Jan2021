@Login 
Feature: validate Techfios login functionality 

Background: 
	Given User is on the techfios login page   

@Scenario1	
Scenario Outline: User should be able to login with the valid credentials
When User enters "<username>" and "<password>" 
And User clicks signin button 
Then User will land on the dashboard page
Examples:
|username         |password|
|demo@techfios.com|abc123  |
