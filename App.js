import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const name = 'Subrata Mondal';
  const renderSocialIcons = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          gap: 10,
        }}
      >
        <FontAwesome6 name="github" size={24} color="black" />
        <FontAwesome6 name="square-x-twitter" size={24} color="black" />
        <FontAwesome6 name="at" size={24} color="black" />
      </View>
    );
  };
  const contactMe = () => {
    Linking.openURL('mailto:subratasubha2@gmail.com');
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: 'red' }} edges={['bottom']}>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar style="light" />
            {/* Background Image */}
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D',
              }}
              style={{ width: '100%', aspectRatio: 16 / 9 }}
            />
            {/* Profile Image */}
            <Image
              source={require('./assets/profile-pic.jpg')}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 2,
                borderColor: '#fff',
                marginTop: -75,
              }}
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{name}</Text>
            <Text>AI Engineer</Text>
            {renderSocialIcons()}
            <Button title="Contact Me" onPress={contactMe} />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 24 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
              aliquam sem et tortor consequat id porta nibh. Pellentesque nec
              nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
              gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
              in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
              pellentesque. Sagittis orci a scelerisque purus semper eget duis
              at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
              Duis at consectetur lorem donec massa sapien faucibus et molestie.
              At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget. Purus sit amet volutpat consequat mauris nunc congue nisi
              vitae. Urna condimentum mattis pellentesque id nibh tortor id.
              Consequat id porta nibh venenatis. Lectus vestibulum mattis
              ullamcorper velit sed ullamcorper. Mauris a diam maecenas sed enim
              ut sem. Volutpat commodo sed egestas egestas fringilla phasellus.
              Turpis egestas integer eget aliquet nibh praesent tristique magna
              sit. Congue mauris rhoncus aenean vel elit scelerisque. Tellus
              integer feugiat scelerisque varius morbi enim. Consectetur a erat
              nam at. Bibendum arcu vitae elementum curabitur vitae nunc. Sit
              amet consectetur adipiscing elit. Rhoncus mattis rhoncus urna
              neque viverra justo. Malesuada pellentesque elit eget gravida.
              Vitae nunc sed velit dignissim sodales ut eu sem integer. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Nam aliquam
              sem et tortor consequat id porta nibh. Pellentesque nec nam
              aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
              gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
              in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
              pellentesque. Sagittis orci a scelerisque purus semper eget duis
              at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
              Duis at consectetur lorem donec massa sapien faucibus et molestie.
              At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget. Purus sit amet volutpat consequat mauris nunc congue nisi
              vitae. Urna condimentum mattis pellentesque id nibh tortor id.
              Consequat id porta nibh venenatis. Lectus vestibulum mattis
              ullamcorper velit sed ullamcorper. Mauris a diam maecenas sed enim
              ut sem. Volutpat commodo sed egestas egestas fringilla phasellus.
              Turpis egestas integer eget aliquet nibh praesent tristique magna
              sit. Congue mauris rhoncus aenean vel elit scelerisque. Tellus
              integer feugiat scelerisque varius morbi enim. Consectetur a erat
              nam at. Bibendum arcu vitae elementum curabitur vitae nunc. Sit
              amet consectetur adipiscing elit. Rhoncus mattis rhoncus urna
              neque viverra justo. Malesuada pellentesque elit eget gravida.
              Vitae nunc sed velit dignissim sodales ut eu sem integer.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
