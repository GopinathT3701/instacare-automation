import { Page } from '@playwright/test';

export class MedicalInfoSection {
  constructor(private page: Page) {}

  async fill(data: any) {
    await this.page.getByRole('textbox', { name: 'Enter Height' }).fill(data.height);
    await this.page.getByRole('textbox', { name: 'Enter Weight' }).fill(data.weight);
    await this.page.getByRole('textbox', { name: 'Allergies' }).fill(data.allergies);
    await this.page.getByRole('textbox', { name: 'Existing Medical Conditions' }).fill(data.conditions);
    await this.page.getByRole('textbox', { name: 'Current Medications' }).fill(data.medications);
    await this.page.getByRole('radio', { name: data.mobility }).check();
  }
}
