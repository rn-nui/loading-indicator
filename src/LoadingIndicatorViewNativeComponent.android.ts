import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps, ColorValue } from 'react-native';
import type { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

interface NativeProps extends ViewProps {
  color?: ColorValue;
  containerColor?: ColorValue;
  containerSize?: Int32;
  size?: Int32;
}

export default codegenNativeComponent<NativeProps>('LoadingIndicatorView');
