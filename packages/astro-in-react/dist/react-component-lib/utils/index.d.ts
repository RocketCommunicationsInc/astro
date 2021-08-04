import React from 'react';
import type { StyleReactProps } from '../interfaces';
export declare type StencilReactExternalProps<PropType, ElementType> = PropType & Omit<React.HTMLAttributes<ElementType>, 'style'> & StyleReactProps;
export declare const mergeRefs: <ElementType>(...refs: React.Ref<ElementType>[]) => (value: ElementType) => void;
export declare const createForwardRef: <PropType, ElementType>(ReactComponent: any, displayName: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<StencilReactExternalProps<PropType, ElementType>> & React.RefAttributes<ElementType>>;
export * from './attachProps';
export * from './case';
