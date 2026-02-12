import { test, expect } from '@playwright/test';

test('Instacare Admin login', async ({ page }) => {
  await page.goto('https://dev-admin.myinstacare.com/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('instaadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.locator('i').nth(3).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('checkbox', { name: 'Immediate' }).check();
  await page.getByRole('checkbox', { name: 'Immediate' }).uncheck();
  await page.getByRole('checkbox', { name: 'Unpicked' }).check();
  await page.getByRole('checkbox', { name: 'Unpicked' }).uncheck();
  });



test('Booking Creation', async ({ page }) => {
  await page.goto('https://dev-admin.myinstacare.com/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('instaadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000); 
  await page.getByText('calendar_check Bookings').click();
  await page.getByRole('button', { name: 'New Booking' }).click();
  await page.getByRole('combobox', { name: 'Patient Name' }).fill('mak');
  await page.getByRole('option', { name: '201 - makesh' }).click();
  await page.locator('.input-field.p-autocomplete.p-component.p-inputwrapper.ng-untouched > .p-ripple').first().click();
  await page.getByRole('option', { name: '25 - Monitoring Vitals with' }).click();
  await page.getByLabel('Add New Booking').getByRole('combobox', { name: 'Date' }).click();
  await page.getByText('10', { exact: true }).click();
  await page.locator('#pn_id_8').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: '20' }).click();
  await page.locator('#pn_id_9').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: '30' }).click();
  await page.getByRole('textbox', { name: 'Partner Preferences *' }).click();
  await page.getByRole('textbox', { name: 'Partner Preferences *' }).fill('language known:tamil');
  await page.locator("//input[@placeholder='Select Partner']").fill("gop");
  await page.locator("//li[@aria-label='770 - Gopinath']").click();
   await page.waitForTimeout(1000); 

  await page.getByRole('button', { name: 'Book', exact: true }).click();
   await page.waitForTimeout(2000); 
});

//patient creation

test('Patient Creation', async ({ page }) => {
  await page.goto('https://dev-admin.myinstacare.com/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('instaadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('checkbook Patients').click();
  await page.getByRole('button', { name: 'Add New Patient' }).click();
  await page.getByRole('textbox', { name: 'Enter First Name' }).fill('john');
  await page.getByRole('textbox', { name: 'Enter Last Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Last Name' }).fill('doe');
  await page.getByRole('combobox', { name: 'Select Gender' }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('combobox', { name: 'Enter Date of Birth' }).click();
  await page.locator('div').filter({ hasText: 'February' }).nth(3).click();
  await page.getByRole('button', { name: 'Previous Year' }).click();
  await page.getByRole('button', { name: 'Choose Year' }).click();
  await page.getByRole('button', { name: 'Previous Decade' }).click();
  await page.getByText('2010', { exact: true }).click();
  await page.getByText('May').click();
  await page.getByText('5', { exact: true }).nth(1).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('johndoe@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9988776655');
  await page.getByRole('textbox', { name: 'Enter Street Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Street Address' }).fill('1/390,karapakkam,karapakkam,OMR');
  await page.getByRole('textbox', { name: 'Enter Area' }).click();
  await page.getByRole('textbox', { name: 'Enter Area' }).fill('karapakkam');
  await page.getByRole('textbox', { name: 'Enter Pincode' }).click();
  await page.getByRole('textbox', { name: 'Enter Pincode' }).fill('600097');
  await page.getByRole('textbox', { name: 'Emergency Contact' }).fill('6578984578');
  await page.getByRole('textbox', { name: 'Enter Height' }).click();
  await page.getByRole('textbox', { name: 'Enter Height' }).fill('160');
  await page.getByRole('textbox', { name: 'Enter Weight' }).click();
  await page.getByRole('textbox', { name: 'Enter Weight' }).fill('65');
  await page.getByRole('textbox', { name: 'Preferred language' }).click();
  await page.getByRole('textbox', { name: 'Preferred language' }).fill('tamil,telugu');
  await page.getByRole('textbox', { name: 'Allergies' }).click();
  await page.getByRole('textbox', { name: 'Allergies' }).fill('NA');
  await page.getByRole('textbox', { name: 'Existing Medical Conditions' }).click();
  await page.getByRole('textbox', { name: 'Existing Medical Conditions' }).fill('NA');
  await page.getByRole('textbox', { name: 'Current Medications' }).click();
  await page.getByRole('textbox', { name: 'Current Medications' }).fill('light fever');
  await page.getByRole('radio', { name: 'Fully Mobile' }).check();
  await page.locator('#no').check();
  await page.locator('#pn_id_7').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Assisted' }).click();
  await page.locator('#pn_id_8').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Semi Conscious' }).click();
  await page.locator('#pn_id_9').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Stable' }).click();
  await page.locator('#pn_id_10').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Not Required' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add Patient' }).click();
  await page.waitForTimeout(2000);
});