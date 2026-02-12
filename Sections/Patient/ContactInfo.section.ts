import { Page } from '@playwright/test';

export class ContactInfoSection {
  constructor(private page: Page) {}

  async fill(data: any) {
    await this.page.getByRole('textbox', { name: 'Enter Email' }).fill(data.email);
    await this.page.getByRole('textbox', { name: 'Enter Phone Number' }).fill(data.phone);
    await this.page.getByRole('textbox', { name: 'Enter Street Address' }).fill(data.address);
    await this.page.getByRole('textbox', { name: 'Enter Area' }).fill(data.area);
    await this.page.getByRole('textbox', { name: 'Enter Pincode' }).fill(data.pincode);
    await this.page.getByRole('textbox', { name: 'Emergency Contact' }).fill(data.emergency);
  }
}
