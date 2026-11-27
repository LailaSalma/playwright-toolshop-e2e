import { test, expect } from '../fixtures/test-fixtures';

test.describe('Login as customer to ToolShop', () => {
    test.beforeEach('Navigate to Login Page', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.heading).toBeVisible();
    });

    test('Login to ToolShop with valid customer credentials', async ({loginPage, accountPage}) => {
        await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
        await expect(accountPage.heading).toBeVisible();
    });
});