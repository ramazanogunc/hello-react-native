import * as React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Icon } from '.';
import { colors } from '../config/colors';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
    render() {
        const { placeholder, onClick, onChangeText, style } = this.props;
        return (
            <View style={[styles.container, style]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText} />
                <TouchableOpacity onPress={onClick}>
                    <View style={styles.button}>
                        <Icon name='search' fill='white' />

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

SearchInput.protoTypes = {
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
    onChangeText: PropTypes.func,
    style: PropTypes.any
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 300,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: Platform.OS === 'ios' ? 8 : 4,
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button: {
        flex: 1,
        width: 40,
        backgroundColor: colors.accent,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SearchInput;