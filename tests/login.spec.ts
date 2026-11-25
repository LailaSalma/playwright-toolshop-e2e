import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { AccountPage } from '../pages/account-page';

test.describe('Login as customer to ToolShop', () => {
    let loginPage: LoginPage;

    test.beforeEach('Navigate to Login page', async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(loginPage.heading).toBeVisible();
    });

    test('Login to ToolShop with valid customer credentials', async ({page}) => {
        const accoutPage = new AccountPage(page);
        await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
        await expect(accoutPage.heading).toBeVisible();
    });
});