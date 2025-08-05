import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  LoadingIndicator,
  type IndicatorSize,
} from '@rn-nui/loading-indicator';

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingIndicator
        size={Platform.select<IndicatorSize>({
          android: 70,
          ios: 'large',
        })}
        color="#4e3b78"
        containerColor="#c8b2fc"
        animating={true}
      />
      <Text style={styles.text}>Setting up your account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    gap: 24,
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    color: '#4e3b78',
  },
});
