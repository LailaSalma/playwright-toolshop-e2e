import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', {name: 'Login'});
        this.emailInput = page.getByTestId('email');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}