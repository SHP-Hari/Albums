//import libraries to create the component --ClassBase Component--
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//Create the component
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }
}

//make this component available to use all over the app
export default AlbumList;
