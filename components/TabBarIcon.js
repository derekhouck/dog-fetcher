import React from 'react';
import { Icon } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    if (this.props.type === 'material-community') {
      return (
        <MaterialCommunityIcons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    } else {
      return (
        <Icon.Ionicons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    }
  }
}