import { Page } from '@playwright/test';

export class ServiceFormSection {
  constructor(private page: Page) {}

  async fillServiceForm(data: any) {

    await this.page.getByRole('textbox', { name: 'Enter Service Name' })
      .fill(data.serviceName);

    await this.page.getByRole('combobox', { name: 'Select Category' }).click();
    await this.page.getByRole('option', { name: data.category }).click();

    await this.page.getByRole('combobox', { name: 'Select Complexity' }).click();
    await this.page.getByRole('option', { name: data.complexity }).click();

    await this.page.getByRole('textbox', { name: 'Duration' })
      .fill(data.duration);

    await this.page.getByRole('textbox', { name: 'Description' })
      .fill(data.description);

    await this.page.locator("//input[@formcontrolname='charge']")
      .fill(data.charge);

    await this.page.getByRole('textbox', { name: 'Commission' })
      .fill(data.commission);

    await this.page.getByRole('textbox', { name: 'Transport Charge' })
      .fill(data.transportCharge);

    await this.page.getByRole('button', { name: 'Add Service' }).click();
  }
}
