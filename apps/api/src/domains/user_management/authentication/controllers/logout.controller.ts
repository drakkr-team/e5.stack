import { inject } from "@adonisjs/core";
import AuthService from "#domains/user_management/authentication/services/auth.service";

@inject()
export default class LogoutController {
	constructor(protected authService: AuthService) {}

	async handle() {
		await this.authService.logout();
	}
}
