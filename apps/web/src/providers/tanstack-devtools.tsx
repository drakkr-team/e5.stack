import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

export function TanstackDevtoolsProvider() {
	return (
		<TanStackDevtools
			plugins={[
				{
					name: "Tanstack Router",
					render: <TanStackRouterDevtoolsPanel />,
				},
				{
					name: "Tanstack Query",
					render: <ReactQueryDevtoolsPanel />,
				},
				{
					name: "Tanstack Form",
					render: <FormDevtoolsPanel />,
				},
			]}
		/>
	);
}
