import { test, expect } from '@playwright/test';

test('Parcourir et valider une ligne dans un tableau dynamique', async ({ page }) => {
  // Le timeout de navigation est géré globalement dans playwright.config.ts
  await page.goto('https://the-internet.herokuapp.com/tables', { waitUntil: 'domcontentloaded' });

  // Filtrer la ligne contenant l'email spécifique dans le corps du tableau 1
  const row = page.locator('#table1 tbody tr').filter({ hasText: 'jsmith@gmail.com' });

  // Utiliser .nth(3) pour cibler précisément la 4ème colonne (la colonne "Due")
  const dueAmount = row.locator('td').nth(3);

  // Valider le montant dû
  await expect(dueAmount).toHaveText('$50.00');
});