import { Toaster, type ToasterProps } from "sonner";
import { CircleCheckIcon, CircleXIcon, InfoIcon, TriangleAlertIcon } from "../../icons";
import { Spinner } from "../spinner";

export type ToastProviderProps = Pick<ToasterProps, "position">;

export function ToastProvider(props: ToastProviderProps) {
	return (
		<Toaster
			icons={{
				info: <InfoIcon className="text-info-9" />,
				error: <CircleXIcon className="text-error-9" />,
				success: <CircleCheckIcon className="text-success-9" />,
				warning: <TriangleAlertIcon className="text-warning-9" />,
				loading: <Spinner className="text-neutral-12" />,
			}}
			toastOptions={{
				unstyled: true,
				classNames: {
					toast:
						"bg-neutral-1 select-none border border-neutral-6 rounded-lg p-3 grid grid-cols-[auto_1fr_auto] gap-2 shadow shadow-neutral-5",
					title: "text-sm font-medium text-neutral-12",
					description: "text-xs text-neutral-11",
					icon: "relative size-5 flex items-center justify-center",
				},
			}}
			{...props}
		/>
	);
}
