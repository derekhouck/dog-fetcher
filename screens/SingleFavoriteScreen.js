import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { removeFav, saveFavs } from '../actions/favorites';

export class SingleFavoriteScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={() => {
            const dog = navigation.getParam('dog');
            const removeFav = navigation.getParam('removeFav');
            const saveFavs = navigation.getParam('saveFavs');
            removeFav(dog);
            return saveFavs()
              .then(navigation.navigate('Favorites'));
          }}
          title='Remove'
          type='clear'
        />
      ),
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      removeFav: this.props.removeFav,
      saveFavs: this.props.saveFavs
    });
  }

  async removeDog() {
    const dog = this.props.navigation.getParam('dog');
    this.props.removeFav(dog);
    return this.props.saveFavs()
      .then(this.props.navigation.navigate('Favorites'));
  }

  render() {
    const { navigation } = this.props;
    const dog = navigation.getParam('dog', require('../assets/images/sample-dog.jpg'));
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: dog }}
          style={styles.image}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    favs: state.favs,
  }
};
const mapDispatchToProps = { removeFav, saveFavs };

export default connect(mapStateToProps, mapDispatchToProps)(SingleFavoriteScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: undefined,
    resizeMode: 'contain',
    width: undefined,
  },
});