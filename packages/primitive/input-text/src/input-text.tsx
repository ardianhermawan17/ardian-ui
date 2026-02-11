import * as React from 'react';


const INPUT_TEXT_NAME = 'InputText'

interface PrimitiveInputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onValueChange?: (value: string) => void;
}

const PrimitiveInputText = React.forwardRef<HTMLInputElement, PrimitiveInputTextProps>(
    ({ onValueChange, onChange, ...props }, forwardedRef) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);
            onValueChange?.(event.target.value);
        };

        return (
            <input
                {...props}
                ref={forwardedRef}
                onChange={handleChange}
            />
        );
    }
);

PrimitiveInputText.displayName = INPUT_TEXT_NAME;

const Root = PrimitiveInputText;

export {
    PrimitiveInputText,
    //
    Root
};
export type { PrimitiveInputTextProps };