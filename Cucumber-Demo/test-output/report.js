$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium/Cucumber-Demo/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Creating a contact in FreeCRM application",
  "description": "",
  "id": "creating-a-contact-in-freecrm-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To test Create a new contact scenario",
  "description": "",
  "id": "creating-a-contact-in-freecrm-application;to-test-create-a-new-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Application URL and access to User",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter Username and Password details",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Move to Contacts and click on New contact",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter Firstname, lastname and Designation",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.application_URL_and_access_to_User()"
});
formatter.result({
  "duration": 29654533472,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 37137502260,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cFree CRM [software in the cloud powers sales and customer service]\u003e but was:\u003cFree CRM [#1 cloud software for any business large or small]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.LoginSteps.user_is_on_login_page(LoginSteps.java:31)\r\n\tat ✽.When User is on login page(C:/Selenium/Cucumber-Demo/src/main/java/features/Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.enter_Username_and_Password_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.verify_user_is_on_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.move_to_Contacts_and_click_on_New_contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.enter_Firstname_lastname_and_Designation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
});