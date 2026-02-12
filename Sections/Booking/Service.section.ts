import { Page, expect } from '@playwright/test';

export class ServiceSection {
  constructor(private page: Page) {}

  async selectService(serviceText: string) {
    // 1️⃣ Target Service input (combobox)
    const input = this.page.getByRole('combobox', { name: 'Service' });

    // 2️⃣ Focus + clear
    await input.click();
    await input.press('Control+A');
    await input.press('Backspace');

    // 3️⃣ TYPE to trigger list
    await input.type(serviceText.split(' ')[0], { delay: 150 });
    // Example: "25"

    // 4️⃣ Wait directly for the OPTION (not panel)
    const option = this.page
      .locator("li")
      .filter({ hasText: serviceText })
      .first();

    await expect(option).toBeVisible({ timeout: 10000 });

    // 5️⃣ Scroll + force click (PrimeNG safe)
    await option.scrollIntoViewIfNeeded();
    await option.click({ force: true });
  }
}
