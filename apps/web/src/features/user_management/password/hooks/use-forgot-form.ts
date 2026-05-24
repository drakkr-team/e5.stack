import { revalidateLogic } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";
import z from "zod";
import { useForgotPasswordMutation } from "#/features/user_management/password/hooks/use-forgot-mutation";
import { useAppForm } from "#/libs/form";

export type UseForgotPasswordFormOptions = {
	defaultValues?: {
		email?: string;
	};
};

export function useForgotPasswordForm(options?: UseForgotPasswordFormOptions) {
	const { defaultValues } = options ?? {};

	const { t } = useTranslation("features.user_management.password.hooks.use-forgot-form");

	const { mutateAsync: forgotPassword } = useForgotPasswordMutation();

	const schema = z.object({
		email: z.email({ error: t("validation.email.invalid") }),
	});

	return useAppForm({
		defaultValues: {
			email: "",
			...defaultValues,
		},
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: schema,
		},
		onSubmit: async ({ value }) => {
			await forgotPassword({
				body: value,
			});
		},
	});
}
