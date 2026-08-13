import { test, expect } from '@playwright/test';

test('test to-do app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByRole('heading', { name: 'todos' }).click();
  await page.locator('html').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('buy grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.locator('html').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('go for walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'buy grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'rest' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.locator('html')).toBeVisible();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('Created by the TodoMVC Team')).toBeVisible();
  await page.locator('html').click();
});