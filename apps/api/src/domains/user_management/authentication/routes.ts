import router from "@adonisjs/core/services/router";
import { controllers } from "#generated/controllers";
import { middleware } from "#infrastructure/http/kernel";

router
	.group(() => {
		router
			.post("/login", [controllers.userManagement.authentication.LoginWithCredentials])
			.use(middleware.guest());
		router
			.delete("/logout", [controllers.userManagement.authentication.Logout])
			.use(middleware.auth());
	})
	.prefix("/auth")
	.as("auth");
