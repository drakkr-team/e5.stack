import { BaseTransformer } from "@adonisjs/core/transformers";
import User from "#application/models/user";

export default class UserTransformer extends BaseTransformer<User> {
	toObject() {
		return this.pick(this.resource, ["id", "name", "email", "createdAt", "updatedAt"]);
	}
}
