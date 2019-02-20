import React, { Component } from 'react';
import { View, Image } from 'react-native';

export class KnockAppImage extends Component {
    render() {
      let pic = {
        uri: 'https://user-images.githubusercontent.com/1142979/52136192-817afb00-2615-11e9-905c-3c451196860c.jpg'
      };
      return (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={pic} style={{width: 375, height: 811}} />
        </View>
      );
    }
  }

// export const KnockAppImage = () => {
//     return (
//     <Image source={pic} style={{width: 375, height: 811}}/>
//     )
// };