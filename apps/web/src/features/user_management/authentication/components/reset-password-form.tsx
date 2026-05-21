import { useTranslation } from "react-i18next";
import { useResetPasswordForm } from "../hooks/use-reset-password-form";

type ResetPasswordFormProps = {
	token: string;
};

export function ResetPasswordForm(props: ResetPasswordFormProps) {
	const { token } = props;

	const { t } = useTranslation(
		"features.user_management.authentication.components.reset-password-form",
	);

	const form = useResetPasswordForm({ token });

	return (
		<form
			className="grid gap-4"
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			noValidate
		>
			<form.AppField name="newPassword">
				{(field) => (
					<field.PasswordField
						label={t("field.newPassword.label")}
						inputProps={{ autoComplete: "new-password" }}
					/>
				)}
			</form.AppField>

			<form.AppField name="newPasswordConfirmation">
				{(field) => (
					<field.PasswordField
						label={t("field.newPasswordConfirmation.label")}
						inputProps={{ autoComplete: "new-password" }}
					/>
				)}
			</form.AppField>

			<form.AppForm>
				<form.SubmitButton variant="primary">{t("action.resetPassword")}</form.SubmitButton>
			</form.AppForm>
		</form>
	);
}
