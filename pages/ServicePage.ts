import { Page } from '@playwright/test';

export class ServicePage {
  constructor(private page: Page) {}

  async navigateToService() {
    await this.page.getByText('Services').click();
    await this.page.getByRole('button', { name: 'New Service' }).click();
  }
}
