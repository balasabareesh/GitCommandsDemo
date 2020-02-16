package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:/Selenium/Cucumber-Demo/src/main/java/features/Login.feature",
		dryRun = false,
		glue={"stepDefinition"},
		plugin ={ "pretty", "html:test-output"},
		monochrome = true
				 )
public class TestRunner {

}
