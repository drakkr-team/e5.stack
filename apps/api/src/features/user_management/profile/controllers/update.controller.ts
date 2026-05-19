import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";
import { UpdateUserSchema } from "#validators/user.validator";

export default class UpdateProfileController {
	async handle({ request, auth }: HttpContext) {
		const user = auth.user!;

		const payload = await request.validateUsing(UpdateProfileController.payloadSchema);

		await user.merge(payload).save();

		return user.toJSON();
	}

	static payloadSchema = vine.create(UpdateUserSchema);
}
