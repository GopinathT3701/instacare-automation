import { Page } from '@playwright/test';

export class PersonalInfoSection {
  constructor(private page: Page) {}

  async fill(data: any) {
    await this.page.getByRole('textbox', { name: 'Enter First Name' }).fill(data.firstName);
    await this.page.getByRole('textbox', { name: 'Enter Last Name' }).fill(data.lastName);

     await this.page.getByRole('combobox', { name: 'Select Gender' }).click();
  await this.page.getByText(data.gender, { exact: true }).click();

   // Open DOB picker
await this.page.getByRole('combobox', { name: 'Enter Date of Birth' }).click();

// Scope calendar
const datePicker = this.page.locator("//div[contains(@class,'p-datepicker')]");

// Switch to year selection
await datePicker.getByRole('button', { name: /Year|Choose Year/i }).click();

// Navigate decade (if required)
await datePicker.getByRole('button', { name: 'Previous Decade' }).click();

// Select year
await datePicker.getByText(String(data.dob.year), { exact: true }).click();

// Select month
await datePicker.getByText(data.dob.month, { exact: true }).click();

// Select day
await datePicker.locator("//span[contains(@class,'p-datepicker-day') and not(contains(@class,'p-disabled'))]").filter({ hasText: String(data.dob.day) })
  .first()
  .click();

  }
}

