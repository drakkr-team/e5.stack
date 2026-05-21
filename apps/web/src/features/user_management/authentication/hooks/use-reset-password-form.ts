import { revalidateLogic } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";
import z from "zod";
import { useResetPasswordMutation } from "#/features/user_management/authentication/hooks/use-reset-password-mutation";
import { useAppForm } from "#/libs/form";

type UseResetPasswordFormParams = {
	token: string;
};

export function useResetPasswordForm(params: UseResetPasswordFormParams) {
	const { t } = useTranslation(
		"features.user_management.authentication.hooks.use-reset-password-form",
	);

	const { token } = params;

	const { mutateAsync: resetPassword } = useResetPasswordMutation();

	return useAppForm({
		defaultValues: {
			newPassword: "",
			newPasswordConfirmation: "",
		},
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: z
				.object({
					newPassword: z
						.string({ error: t("validation.newPassword.required") })
						.min(8, { message: t("validation.newPassword.min") })
						.max(32, { message: t("validation.newPassword.max") }),
					newPasswordConfirmation: z.string({
						error: t("validation.newPasswordConfirmation.required"),
					}),
				})
				.refine((data) => data.newPassword === data.newPasswordConfirmation, {
					message: t("validation.newPasswordConfirmation.mismatch"),
					path: ["newPasswordConfirmation"],
				}),
		},
		onSubmit: async ({ value }) => {
			await resetPassword({
				body: {
					token: token,
					...value,
				},
			});
		},
	});
}
