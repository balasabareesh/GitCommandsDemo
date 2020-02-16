package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	
	WebDriver driver;
	
	@Given("^Application URL and access to User$")
	public void application_URL_and_access_to_User(){
		System.setProperty("webdriver.chrome.driver", "C://Users//Sabareesh//Downloads//Selenium//Supportfiles//ChromeDriver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@When("^User is on login page$")
	public void user_is_on_login_page() {
		driver.get("https://www.freecrm.com/index.html");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
		}

	@Then("^Enter Username and Password details$")
	public void enter_Username_and_Password_details() {
		driver.findElement(By.name("username")).sendKeys("naveenk");
		driver.findElement(By.name("password")).sendKeys("test@123");
	}

	@Then("^Click on Login button$")
	public void click_on_Login_button() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();

	}

	@Then("^verify user is on Home page$")
	public void verify_user_is_on_Home_page() {
		String currentTitle=driver.getTitle();
		System.out.println(currentTitle);
		Assert.assertEquals("CRMPRO", currentTitle);
	}

	@Then("^Move to Contacts and click on New contact$")
	public void move_to_Contacts_and_click_on_New_contact() {
		driver.findElement(By.xpath("//button[@id='newContact']")).click();
		System.out.println("Push to sub Branch");
	}

	@Then("^Enter Firstname, lastname and Designation$")
	public void enter_Firstname_lastname_and_Designation() {
		driver.findElement(By.xpath("//button[@id='newContact']")).click();
		System.out.println("Push to sub Branch");

	}

	@Then("^Click on save button$")
	public void click_on_save_button() {
		
		System.out.println("Clicked on save button");

	}

}
