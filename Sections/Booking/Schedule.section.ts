import { Page, expect } from '@playwright/test';

export type ScheduleData = {
  day: number;
  hour: string;
  minute: string;
};

export class ScheduleSection {
  constructor(private page: Page) {}

  // ==========================
  // MAIN METHOD (TEST CALLS THIS)
  // ==========================
  async selectDate(data: ScheduleData) {
    await this.selectDateWithYearMonth(data.day);
    await this.selectHour(data.hour);
    await this.selectMinute(data.minute);
  }

  // ==========================
  // DATE SELECT (PrimeNG p-datepicker)
  // ==========================
  private async selectDateWithYearMonth(
  year: number,
  month: string, // e.g. "Oct"
  day: number
) {
  // 1️⃣ Open Date picker (inside modal)
  const bookingModal = this.page.getByLabel('Add New Booking');
  const dateInput = bookingModal.getByRole('combobox', { name: 'Date' });
  await dateInput.click();

  // 2️⃣ DatePicker dialog
  const dateDialog = this.page.getByRole('dialog', { name: 'Choose Date' });
  await expect(dateDialog).toBeVisible({ timeout: 10000 });

  // 3️⃣ Click Month-Year title (e.g. "February 2026")
  await dateDialog
    .locator(".p-datepicker-title")
    .click();

  // 4️⃣ Click Year switch (if needed)
  await dateDialog
    .getByRole('button', { name: 'Choose Year' })
    .click();

  // 5️⃣ Select Year
  await dateDialog
    .getByText(String(year), { exact: true })
    .click();

  // 6️⃣ Select Month
  await dateDialog
    .getByText(month, { exact: true })
    .click();

  // 7️⃣ Select Day (enabled only)
  const dayCell = dateDialog.locator(
    `td:not(.p-datepicker-other-month):not(.p-disabled)
     >> span:text-is("${day}")`
  );

  await dayCell.first().scrollIntoViewIfNeeded();
  await dayCell.first().click({ force: true });
}

  // ==========================
  // HOUR SELECT (PrimeNG p-select)
  // ==========================
 private async selectHour(hour: string) {
  const hourSelect = this.page.locator(
    "p-select[formcontrolname='selectedHour']"
  );

  // 1️⃣ Click dropdown trigger
  await hourSelect
    .locator("div[aria-label='dropdown trigger']")
    .click({ force: true });

  // 2️⃣ Wait for overlay AFTER clicking hour trigger
  const overlay = this.page.locator("p-overlay >> li");
  await expect(overlay.first()).toBeVisible({ timeout: 10000 });

  // 3️⃣ Use PARTIAL text match (IMPORTANT)
  const hourOption = overlay
    .filter({ hasText: hour }) // matches "20", "20 Hr", "20:00"
    .first();

  await hourOption.scrollIntoViewIfNeeded();
  await hourOption.click({ force: true });
}

  // ==========================
  // MINUTE SELECT (PrimeNG p-select)
  // ==========================
  private async selectMinute(minute: string) {
    const minuteSelect = this.page.locator(
      "p-select[formcontrolname='selectedMinute']"
    );

    // Click dropdown trigger
    await minuteSelect
      .locator("div[aria-label='dropdown trigger']")
      .click();

    // Wait for overlay options
    const overlay = this.page.locator("p-overlay >> li");
    await expect(overlay.first()).toBeVisible({ timeout: 10000 });

    // Select minute
    await overlay
      .filter({ hasText: minute })
      .first()
      .click({ force: true });
  }
}
