import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@workspace/ui-react/components/button";
import { Input, type InputProps } from "@workspace/ui-react/components/input";
import { useState } from "react";

type PasswordInputProps = Omit<InputProps, "type" | "rightSlot"> & {
	defaultVisible?: boolean;
	visible?: boolean;
	onVisibilityChange?: (visible: boolean, event: TogglePrimitive.ChangeEventDetails) => void;
};

function PasswordInput(props: PasswordInputProps) {
	const { disabled, defaultVisible, visible, onVisibilityChange, ...rest } = props;

	const isControlled = visible !== undefined;
	const [unControlledVisible, setUnControlledVisible] = useState(defaultVisible ?? false);
	const hisPasswordVisible = isControlled ? visible : unControlledVisible;

	const handleOnVisibilityChange: TogglePrimitive.Props["onPressedChange"] = (visible, event) => {
		if (!isControlled) {
			setUnControlledVisible(visible);
		}
		onVisibilityChange?.(visible, event);
	};

	const Toggler = () => (
		<TogglePrimitive
			className="pointer-events-auto"
			tabIndex={-1}
			defaultPressed={defaultVisible}
			pressed={visible}
			onPressedChange={handleOnVisibilityChange}
			disabled={disabled}
			render={(props, state) => {
				if (state.pressed) {
					return (
						<Button variant="ghost" size="icon-sm" {...props}>
							<HugeiconsIcon icon={ViewIcon} />
						</Button>
					);
				}

				return (
					<Button variant="ghost" size="icon-sm" {...props}>
						<HugeiconsIcon icon={ViewOffSlashIcon} />
					</Button>
				);
			}}
		/>
	);

	return (
		<Input
			type={hisPasswordVisible ? "text" : "password"}
			disabled={disabled}
			rightSlot={<Toggler />}
			{...rest}
		/>
	);
}

export type { PasswordInputProps };
export { PasswordInput };
