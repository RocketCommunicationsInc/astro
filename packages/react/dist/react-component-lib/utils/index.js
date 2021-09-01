import React from 'react';
// The comma in the type is to trick typescript because it things a single generic in a tsx file is jsx
export const mergeRefs = (...refs) => (value) => refs.forEach((ref) => {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        // This is typed as readonly so we need to allow for override
        ref.current = value;
    }
});
export const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};
export * from './attachProps';
export * from './case';
//# sourceMappingURL=index.js.map