import { SidebarBody, SidebarFooter, SidebarHeader, SidebarRoot } from "./sidebar";

export const Sidebar = Object.assign(SidebarRoot, {
	Header: SidebarHeader,
	Body: SidebarBody,
	Footer: SidebarFooter,
});

export type {
	SidebarBodyProps,
	SidebarFooterProps,
	SidebarHeaderProps,
	SidebarRootProps as SidebarProps,
} from "./sidebar";
