import { Page } from '@playwright/test';

export class PatientSection {
  constructor(private page: Page) {}

  async selectPatient(search: string, fullName: string) {
    await this.page.getByRole('combobox', { name: 'Patient Name' }).fill(search);
    await this.page.getByText(fullName, { exact: true }).click();
  }
}
