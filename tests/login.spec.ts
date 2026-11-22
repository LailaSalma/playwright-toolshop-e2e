import { test, expect } from '@playwright/test';

test.describe('Login as customer to ToolShop', () => {
    test.beforeEach('Navigate to Login page', async ({page}) => {
        await page.goto('/auth/login');
        await expect(page.getByRole('heading', {name: 'Login'})).toBeVisible();
    });

    test('Login to ToolShop with valid customer credentials', async ({page}) => {
        await page.getByTestId('email').fill('customer@practicesoftwaretesting.com');
        await page.getByTestId('password').fill('welcome01');
        await page.getByRole('button', {name: 'Login'}).click();

        await expect(page.getByRole('heading', {name: 'My account'})).toBeVisible();
    });
});