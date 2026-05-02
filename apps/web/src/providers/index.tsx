import type { PropsWithChildren } from "react";
import { TanstackDevtoolsProvider } from "#/providers/tanstack-devtools";

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			{children}
			<TanstackDevtoolsProvider />
		</>
	);
}
