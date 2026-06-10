import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete } from "./index";

const OPTIONS = [
	{ value: "js", label: "JavaScript" },
	{ value: "ts", label: "TypeScript" },
	{ value: "py", label: "Python" },
	{ value: "java", label: "Java" },
	{ value: "c", label: "C" },
	{ value: "cpp", label: "C++" },
	{ value: "csharp", label: "C#" },
	{ value: "ruby", label: "Ruby" },
	{ value: "php", label: "PHP" },
	{ value: "go", label: "Go" },
	{ value: "rust", label: "Rust" },
	{ value: "swift", label: "Swift" },
	{ value: "kotlin", label: "Kotlin" },
	{ value: "scala", label: "Scala" },
	{ value: "r", label: "R" },
	{ value: "dart", label: "Dart" },
	{ value: "elixir", label: "Elixir" },
	{ value: "clojure", label: "Clojure" },
	{ value: "haskell", label: "Haskell" },
	{ value: "lua", label: "Lua" },
	{ value: "perl", label: "Perl" },
];

const meta: Meta<typeof Autocomplete> = {
	title: "Autocomplete",
	parameters: {
		docs: {
			description: {
				component: "https://base-ui.com/react/components/autocomplete",
			},
		},
	},
	component: Autocomplete,
	subcomponents: {
		Input: Autocomplete.Input,
		Dropdown: Autocomplete.Dropdown,
		List: Autocomplete.List,
		Item: Autocomplete.Item,
		Empty: Autocomplete.Empty,
		Collection: Autocomplete.Collection,
		Group: Autocomplete.Group,
		GroupLabel: Autocomplete.GroupLabel,
		Separator: Autocomplete.Separator,
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: OPTIONS,
	},
	render: (args) => (
		<Autocomplete {...args}>
			<Autocomplete.Input />

			<Autocomplete.Dropdown>
				<Autocomplete.Empty>No results found.</Autocomplete.Empty>

				<Autocomplete.List>
					{(item: (typeof OPTIONS)[number]) => (
						<Autocomplete.Item key={item.value} value={item}>
							{item.label}
						</Autocomplete.Item>
					)}
				</Autocomplete.List>
			</Autocomplete.Dropdown>
		</Autocomplete>
	),
};
