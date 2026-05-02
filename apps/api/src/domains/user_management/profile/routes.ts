import router from "@adonisjs/core/services/router";
import { controllers } from "#generated/controllers";
import { middleware } from "#infrastructure/http/kernel";

router
	.group(() => {
		router.get("/", [controllers.userManagement.profile.View]);
	})
	.use(middleware.auth({ guards: ["web"] }))
	.prefix("/profile")
	.as("profile");
