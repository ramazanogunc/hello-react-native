import * as React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    Platform,
} from 'react-native'
import { colors } from '../config/colors';
import Icon from './Icon';
import PropTypes from 'prop-types';

export default class FabButton extends React.Component {
    render() {
        const TouchableComponet = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
        const { icon, onClick, style } = this.props;
        return (
            <View style={[styles.container, style]}>
                <TouchableComponet onPress={onClick} style={styles.touchable}>
                    <View style={styles.touchableContent}>
                        <Icon name={icon} fill='white' />
                    </View>
                </TouchableComponet>
            </View>
        )
    }
}

FabButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.any
};


const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        backgroundColor: colors.accent,

        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowRadius: 10,
                shadowOpacity: 0.25,
                shadowOffset: { height: 5 }

            },
            android: {
                elevation: 10,
                borderRadius: 28,
                overflow: 'hidden',
            }
        }),
    },
    touchable: {
        flex: 1,
        alignSelf: 'stretch',
    },
    touchableContent: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
