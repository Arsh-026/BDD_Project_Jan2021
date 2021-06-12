$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Other_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Other"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User fill up the form entering \"\u003caccountTitle\u003e\" and \"\u003cdescription\u003e\" and \"\u003cinitialBalance\u003e\" and \"\u003caccountNumber\u003e\" and \"\u003ccontactPerson\u003e\" and \"\u003cphone\u003e\" and \"\u003cinternetBankingUrl\u003e\" and clicks on submit",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should be able to click on submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingUrl"
      ],
      "line": 16,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checking Account",
        "Business",
        "$25000",
        "234567800",
        "Alisha Miller",
        "000-000-0000",
        "www.tdBank.com"
      ],
      "line": 17,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2636946000,
  "status": "passed"
});
formatter.before({
  "duration": 1350215400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerStepDefs.user_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 1320621500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Other"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 7,
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User fill up the form entering \"Checking Account\" and \"Business\" and \"$25000\" and \"234567800\" and \"Alisha Miller\" and \"000-000-0000\" and \"www.tdBank.com\" and clicks on submit",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should be able to click on submit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "CustomerStepDefs.User_enters_the_and(String,String)"
});
formatter.result({
  "duration": 346629100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerStepDefs.user_clicks_the_signin_button()"
});
formatter.result({
  "duration": 1643923700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerStepDefs.user_clicks_on_bank_and_cash()"
});
formatter.result({
  "duration": 184301800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerStepDefs.user_clicks_on_new_account()"
});
formatter.result({
  "duration": 623435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking Account",
      "offset": 32
    },
    {
      "val": "Business",
      "offset": 55
    },
    {
      "val": "$25000",
      "offset": 70
    },
    {
      "val": "234567800",
      "offset": 83
    },
    {
      "val": "Alisha Miller",
      "offset": 99
    },
    {
      "val": "000-000-0000",
      "offset": 119
    },
    {
      "val": "www.tdBank.com",
      "offset": 138
    }
  ],
  "location": "CustomerStepDefs.user_fill_up_the_form_entering_and_and_and_and_and_and_and_clicks_on_submit(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 555436400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerStepDefs.user_should_be_able_to_click_on_submit_button()"
});
formatter.result({
  "duration": 2075770000,
  "status": "passed"
});
formatter.after({
  "duration": 4698395800,
  "status": "passed"
});
formatter.after({
  "duration": 697943400,
  "status": "passed"
});
});