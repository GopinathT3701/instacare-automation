import { Page } from '@playwright/test';

export class PartnerSection {
  constructor(private page: Page) {}

  async enterPartnerPreference(text: string) {
    await this.page
      .getByRole('textbox', { name: 'Partner Preferences *' })
      .fill(text);
  }

  async selectPartner(search: string, partnerName: string) {
    await this.page.locator("//input[@placeholder='Select Partner']").fill(search);
    await this.page.getByText(partnerName, { exact: true }).click();
  }
}
