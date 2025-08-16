import NativeLoadingIndicatorView from './LoadingIndicatorViewNativeComponent.android';
import {
  type ActivityIndicatorProps,
  type ColorValue,
  View,
} from 'react-native';
import { useMemo } from 'react';

export default function LoadingIndicator({
  containerSize,
  containerColor,
  color,
  size = 38,
  animating = true,
  ...props
}: LoadingIndicatorProps) {
  function resolveContainerSize() {
    if (containerSize) return containerSize;
    return resolveIndicatorSize() * CONTAINER_SIZE_RATIO;
  }

  function resolveIndicatorSize() {
    const resolvedSize =
      typeof size === 'number'
        ? size
        : size === 'large'
          ? LARGE_SIZE
          : SMALL_SIZE;
    return resolvedSize;
  }
  const resolvedContainerSize = Math.round(resolveContainerSize());

  const sizeStyle = useMemo(
    () => ({
      width: resolvedContainerSize,
      height: resolvedContainerSize,
    }),
    [resolvedContainerSize]
  );

  if (!animating) {
    return <View style={sizeStyle} />;
  }

  return (
    <NativeLoadingIndicatorView
      containerColor={containerColor}
      color={color}
      size={Math.round(resolveIndicatorSize())}
      containerSize={Math.round(resolvedContainerSize)}
      style={sizeStyle}
      {...props}
    />
  );
}

export type LoadingIndicatorProps = ActivityIndicatorProps & {
  /**
   * platform @android
   * Background color of the circle surrounding the indicator
   * Leave undefined for no background
   */
  containerColor?: ColorValue | undefined;

  /**
   * platform @android
   * Size of the circle surrounding the indicator
   */
  containerSize?: number | undefined;
};

const LARGE_SIZE = 36;
const SMALL_SIZE = 20;
const CONTAINER_SIZE_RATIO = 1.263;

export type IndicatorSize = 'small' | 'large' | number | undefined;
