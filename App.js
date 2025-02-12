import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D" }}
        style={{width:"100%",aspectRatio: 16 / 9}}
      />
      {/* Profile Image */}
      <Image
        source={require('./assets/profile-pic.jpg')}
        style={{
          width: 150, height: 150, borderRadius: 75, borderWidth: 2, borderColor: '#fff', marginTop: -75
        }}
      />
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Subrata Mondal</Text>
      <Text>AI Engineer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
