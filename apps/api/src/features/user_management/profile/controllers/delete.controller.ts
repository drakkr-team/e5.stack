import { HttpContext } from "@adonisjs/core/http";

export default class DeleteProfileController {
	async handle({ auth }: HttpContext) {
		const user = auth.user!;

		await user.delete();

		return null;
	}
}
