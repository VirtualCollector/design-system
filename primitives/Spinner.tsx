
import { styled, keyframes, CSS } from "../stitches.config";
import React from "react";

const dualRing = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

type SpinnerPrimitiveProps = React.ComponentProps<typeof StyledSpinner>;
type SpinnerProps = SpinnerPrimitiveProps & { css?: CSS };

export const Spinner = React.forwardRef<React.ElementRef<typeof StyledSpinner>, SpinnerProps>(
    ({ children, ...props }, forwardedRef) => (
        <StyledSpinner
            ref={forwardedRef}
            {...props}
        />
    )
);

export const StyledSpinner = styled('div', {
    display: "inline-block",
    variants: {
        size: {
            '1': {
                width: 20,
                height: 20,
                '&::after': {
                    width: 16,
                    height: 16,
                    margin: 2,
                    borderWidth: 2,
                }
            },
            '2': {
                width: 32,
                height: 32,
                '&::after': {
                    width: 24,
                    height: 24,
                    margin: 4,
                    borderWidth: 4,
                }
            },
            '3': {
                width: 80,
                height: 80,
                '&::after': {
                    width: 64,
                    height: 64,
                    margin: 8,
                    borderWidth: 6,
                }
            },
        }
    },
    defaultVariants: {
        size: '2'
    },

    '&::after': {
        content: " ",
        display: 'block',
        borderStyle: 'solid',
        borderRadius: '50%',
        borderColor: '#fff transparent #fff transparent',
        animation: `${dualRing} 1.2s linear infinite`,
    }

})