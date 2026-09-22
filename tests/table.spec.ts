import { test, expect } from '@playwright/test';

test('Parcourir et valider une ligne dans un tableau dynamique', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Filtrer la ligne contenant un email spécifique dans le tableau 1
  const row = page.locator('table#table1 tr').filter({ hasText: 'jsmith@gmail.com' });

  // Utiliser nth-child(4) pour cibler la 4ème colonne (la colonne "Due")
  const dueAmount = row.locator('td:nth-child(4)');
  
  // Valider le montant dû
  await expect(dueAmount).toHaveText('$50.00');
});