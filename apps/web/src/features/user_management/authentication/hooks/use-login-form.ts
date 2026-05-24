import { useLoginMutation } from "#/features/user_management/authentication/hooks/use-login-mutation";
import { useAppForm } from "#/libs/form";

export type UseLoginFormOptions = {
	redirectTo?: string;
	defaultValues?: {
		uid?: string;
		password?: string;
	};
};

export function useLoginForm(options?: UseLoginFormOptions) {
	const { redirectTo, defaultValues } = options ?? {};

	const { mutateAsync: login } = useLoginMutation(undefined, { redirectTo });

	return useAppForm({
		defaultValues: {
			uid: "",
			password: "",
			...defaultValues,
		},
		onSubmit: async ({ value }) => {
			await login({
				body: value,
			});
		},
	});
}
