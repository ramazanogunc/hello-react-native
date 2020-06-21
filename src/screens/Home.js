import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, ImagePropTypes } from 'react-native';
import { Header, SearchInput, FabButton } from './../component';
import { colors } from '../config/colors';
import CountryObject from './CountryObject';
import { fetchCountries, changeSearchQuery } from '../actions/countries'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <Header />
                    <SearchInput
                        placeholder='Bir şeyler yaz'
                        onClick={this.onSearchClicked}
                        onChangeText={this.onChangeText}
                        style={styles.searchLayout}
                    />
                    <View style={styles.line} />
                    <CountryObject />
                </ScrollView>
                <FabButton icon='refresh' onClick={this.onFabClick} style={styles.fab} />
            </View>
        )
    }

    onSearchClicked = () => {
        this.props.dispatch(fetchCountries(''));
        
    }

    onChangeText = (text) => {
        this.props.dispatch(changeSearchQuery(text));
    }

    onFabClick = () => {
        this.props.dispatch(fetchCountries(''));
    }
}

Home.protoTypes = {
    dispatch : PropTypes.func
}

const stateToProps = (state) => {
    return {};
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    line: {
        flex: 1,
        marginTop: 35,
        height: 1,
        backgroundColor: colors.gray,
    },
    searchLayout: {
        alignSelf: 'center',
    },
    fab: {
        position: 'absolute',
        bottom: 36,
        end: 36
    }
});



export default connect(stateToProps)(Home);