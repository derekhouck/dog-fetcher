import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Icon,
} from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dog Fetcher',
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
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.dog }}
          style={styles.dogImage}
        />
        <View style={styles.favoriteButton}>
          <Icon
            color='gold'
            name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
            size={64}
            type='ionicon'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.fetchDog()}
            raised
            buttonStyle={styles.button}
            title="Fetch new dog"
            loading={this.state.isLoading ? true : false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    padding: 20,
    position: 'absolute',
    right: 0,
    top: 0,
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