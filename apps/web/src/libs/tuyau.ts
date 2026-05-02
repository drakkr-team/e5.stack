import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { createTuyau } from "@tuyau/core/client";
import { createTuyauReactQueryClient } from "@tuyau/react-query";
import { superjson } from "@tuyau/superjson/plugin";
import { registry } from "@workspace/api/registry";

export const client = createIsomorphicFn()
	.client(() =>
		createTuyau({
			baseUrl: import.meta.env.VITE_API_BASE_URL,
			headers: { Accept: "application/json" },
			registry,
			credentials: "include",
			plugins: [superjson()],
		}),
	)
	.server(() =>
		createTuyau({
			baseUrl: `${process.env.VITE_API_BASE_URL}`,
			headers: Object.fromEntries(getRequestHeaders()),
			registry,
			credentials: "include",
			plugins: [superjson()],
		}),
	);

export const api = () => createTuyauReactQueryClient({ client: client() });
