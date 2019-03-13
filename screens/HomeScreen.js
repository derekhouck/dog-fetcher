import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    isLoading: true
  }

  fetchDog() {
    this.setState({ isLoading: true });
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(res => this.setState({ isLoading: false, dog: res.message }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.dog }}
          style={styles.dogImage}
        />
        <View style={styles.favoriteButton}>
          <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} size={64} color='gold' />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.fetchDog()}
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
  dogImage: {
    flex: 1,
    height: undefined,
    resizeMode: 'cover',
    width: undefined,
  },
  favoriteButton: {
    position: 'absolute',
    right: 20,
    top: 40,
  },
  loading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});