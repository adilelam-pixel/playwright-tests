import { test, expect } from '@playwright/test';

test('Simuler une interception réseau (Mocking API)', async ({ page }) => {
  // Intercepter une requête pour simuler une réponse personnalisée avec l'encodage UTF-8
  await page.route('**/login', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'text/html; charset=utf-8', // <-- Ajout crucial ici
      body: '<h1>Page de maintenance simulée</h1>',
    });
  });

  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.locator('h1')).toHaveText('Page de maintenance simulée');
});