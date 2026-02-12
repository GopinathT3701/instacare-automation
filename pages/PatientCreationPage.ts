import { Page } from '@playwright/test';
import { PersonalInfoSection } from '../Sections/Patient/PersonalInfo.section';
import { ContactInfoSection } from '../Sections/Patient/ContactInfo.section';
import { MedicalInfoSection } from '../Sections/Patient/MedicalInfo.section';

export class PatientCreationPage {
  personalInfo;
  contactInfo;
  medicalInfo;

  constructor(private page: Page) {
    this.personalInfo = new PersonalInfoSection(page);
    this.contactInfo = new ContactInfoSection(page);
    this.medicalInfo = new MedicalInfoSection(page);
  }

  async navigateToPatientCreation() {
    await this.page.getByText('checkbook Patients').click();
    await this.page.getByRole('button', { name: 'Add New Patient' }).click();
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Add Patient' }).click();
  }
}
