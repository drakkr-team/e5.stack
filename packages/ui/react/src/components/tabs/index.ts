import { TabsList, TabsPanel, TabsRoot, TabsTab } from "./tabs";

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Tab: TabsTab,
	Panel: TabsPanel,
});

export type {
	TabsListProps,
	TabsPanelProps,
	TabsRootProps as TabsProps,
	TabsTabProps,
} from "./tabs";
