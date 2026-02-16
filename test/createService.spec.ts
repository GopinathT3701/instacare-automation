import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ServicePage } from '../pages/ServicePage';
import { ServiceFormSection } from '../Sections/Service/ServiceForm.section';
import { loginData, serviceData } from '../utils/testData';

test('Create Service', async ({ page }) => {

  const login = new LoginPage(page);
  const servicePage = new ServicePage(page);
  const serviceForm = new ServiceFormSection(page);

  await login.navigate();
  await login.login(loginData.email, loginData.password);

  await servicePage.navigateToService();
  await serviceForm.fillServiceForm(serviceData);
  await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result before closing the browser 
});


