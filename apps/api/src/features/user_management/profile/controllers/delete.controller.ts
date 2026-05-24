import { HttpContext } from "@adonisjs/core/http";

export default class DeleteProfileController {
	async handle({ auth }: HttpContext) {
		const user = auth.user!;

		await user.delete();
		await auth.use("web").logout();

		return null;
	}
}
