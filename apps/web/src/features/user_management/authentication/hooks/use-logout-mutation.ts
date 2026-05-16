import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { api } from "#/libs/tuyau";
import { toastifyTuyauError } from "#/utils/tuyau";

export function useLogoutMutation() {
	const { t } = useTranslation("features.user_management.authentication.hooks.use-logout-mutation");

	const queryClient = useQueryClient();
	const navigate = useNavigate();

	return useMutation(
		api.auth.logout.mutationOptions({
			onSuccess: () => {
				queryClient.removeQueries({
					queryKey: api.profile.view.pathKey(),
				});
				navigate({ to: "/login" });
			},
			onError: (error) => {
				toastifyTuyauError(error, {
					E_NETWORK: t("error.E_NETWORK"),
					E_UNEXPECTED: t("error.E_UNEXPECTED"),
					E_VALIDATION: t("error.E_UNEXPECTED"),
					E_UNAUTHENTICATED: t("error.E_UNAUTHENTICATED"),
				});
			},
		}),
	);
}
