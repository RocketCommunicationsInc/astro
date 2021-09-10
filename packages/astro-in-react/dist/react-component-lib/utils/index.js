import React from 'react';
export const setRef = (ref, value) => {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        // Cast as a MutableRef so we can assign current
        ref.current = value;
    }
};
export const mergeRefs = (...refs) => {
    return (value) => {
        refs.forEach(ref => {
            setRef(ref, value);
        });
    };
};
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