import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PatientCreationPage } from '../../pages/PatientCreationPage';


test('Patient Creation', async ({ page }) => {
  const login = new LoginPage(page);
  const patient = new PatientCreationPage(page);


await login.navigate();
await login.login('instaadmin@yopmail.com', 'Test@123');

  await patient.navigateToPatientCreation();

  await patient.personalInfo.fill({
    firstName: 'john',
    lastName: 'doe',
    gender: 'Male',
    dob: { year: 2010, month: 'May', day: 5 },
  });

  await patient.contactInfo.fill({
    email: 'johndoe@yopmail.com',
    phone: '9988776655',
    address: '1/390, karapakkam, OMR',
    area: 'karapakkam',
    pincode: '600097',
    emergency: '6578984578',
  });

  await patient.medicalInfo.fill({
    height: '160',
    weight: '65',
    allergies: 'NA',
    conditions: 'NA',
    medications: 'light fever',
    mobility: 'Fully Mobile',
  });

  await patient.submit();
});
