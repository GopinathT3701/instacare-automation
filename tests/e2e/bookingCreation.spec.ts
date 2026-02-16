import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { BookingCreationPage } from '../../pages/BookingCreationPage';




test('Booking Creation', async ({ page }) => {
  const login = new LoginPage(page);
  const booking = new BookingCreationPage(page);

  await login.navigate();
  await login.login('instaadmin@yopmail.com', 'Test@123');

  await booking.navigate();

  await booking.patient.selectPatient('mak', '201 - makesh');
  await booking.service.selectService('25 - Monitoring Vitals with Reporting ');

  await booking.schedule.selectDateWithYearMonth(2026, 'Oct', 17);
await booking.schedule.selectHour('20');
await booking.schedule.selectMinute('30');


  await booking.partner.enterPartnerPreference('language known: tamil');
  await booking.partner.selectPartner('kar', '763 - Karthik');

 // await booking.submit();
await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result before closing the browser

});
