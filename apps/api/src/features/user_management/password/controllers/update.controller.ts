import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";
import PasswordService from "#features/user_management/password/services/password.service";
import { UserPasswordValidator } from "#validators/user.validator";

@inject()
export default class UpdatePasswordController {
	constructor(protected passwordService: PasswordService) {}

	async handle({ request, auth }: HttpContext) {
		const currentUser = auth.user!;

		const { currentPassword, newPassword } = await request.validateUsing(
			UpdatePasswordController.payloadSchema,
		);

		await this.passwordService.update({
			user: currentUser,
			currentPassword,
			newPassword,
		});

		return null;
	}

	static payloadSchema = vine.create({
		currentPassword: vine.string(),
		newPassword: UserPasswordValidator,
	});
}
