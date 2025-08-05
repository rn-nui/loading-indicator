import { ActivityIndicator } from 'react-native';
import type { LoadingIndicatorProps } from './LoadingIndicator';

export default function LoadingIndicator(props: LoadingIndicatorProps) {
  return <ActivityIndicator {...props} />;
}
