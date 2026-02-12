import { Page } from '@playwright/test';    
import { PatientSection } from '../Sections/Booking/Patient.section';
import { ServiceSection } from '../Sections/Booking/Service.section';
import { ScheduleSection } from '../Sections/Booking/Schedule.section';
import { PartnerSection } from '../Sections/Booking/Partner.section';


export class BookingCreationPage {
  patient;
  service;
  schedule;
  partner;

  constructor(private page: Page) {
    this.patient = new PatientSection(page);
    this.service = new ServiceSection(page);
    this.schedule = new ScheduleSection(page);
    this.partner = new PartnerSection(page);
  }

  async navigate() {
    await this.page.getByText('calendar_check Bookings').click();
    await this.page.getByRole('button', { name: 'New Booking' }).click();
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Book', exact: true }).click();
  }
}
