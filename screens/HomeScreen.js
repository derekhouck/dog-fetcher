import React from 'react';
import {
  Alert,
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/sample-dog.jpg')}
          style={styles.welcomeImage}
        />
        <View style={styles.favoriteButton}>
          <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} size={64} color='gold' />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => Alert.alert('This will fetch a new dog!')}
            title="Fetch new dog"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  favoriteButton: {
    position: 'absolute',
    right: 20,
    top: 40,
  },
  welcomeImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
