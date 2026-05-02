import { HttpContext } from "@adonisjs/core/http";
import UserTransformer from "#application/transformers/user.transformer";

export default class ViewProfileController {
	async handle({ auth, serialize }: HttpContext) {
		const user = auth.user!;

		return serialize(UserTransformer.transform(user));
	}
}
