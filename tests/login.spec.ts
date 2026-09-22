import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Test de connexion valide avec Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Navigation
  await loginPage.goto();

  // 2. Action métier via le Page Object
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  // 3. Assertions robustes (auto-attente native de Playwright)
  await expect(page).toHaveURL(/.*secure/);
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});