import * as React from 'react';
import { View, ScrollView, StyleSheet, ImagePropTypes, FlatList } from 'react-native';
import { Header, SearchInput, FabButton } from './../component';
import { colors } from '../config/colors';
import CountryObject from './CountryObject';
import { fetchCountries, changeSearchQuery } from '../actions/countries'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchCountries());
    }

    onSearchClicked = () => {
        const { searchQuery } = this.props;
        this.props.dispatch(fetchCountries(searchQuery));
    }

    onChangeText = (text) => {
        this.props.dispatch(changeSearchQuery(text));
    }

    onFabClick = () => {
        this.props.dispatch(fetchCountries());
    }

    render() {
        const renderCountryItem = ({ item }) => <CountryObject country={item} />

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
                    <FlatList
                        data={this.props.countries}
                        renderItem={renderCountryItem}
                        keyExtractor={item=>item.name}
                    />
                </ScrollView>
                <FabButton icon='refresh' onClick={this.onFabClick} style={styles.fab} />
            </View>
        )
    }
}

Home.protoTypes = {
    dispatch: PropTypes.func,
    countries: PropTypes.array,
    searchQuery: PropTypes.string
}

const stateToProps = (state) => {
    const { countries, searchQuery } = state.countries;
    return {
        countries,
        searchQuery
    };
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