import * as React from 'react'
import {
    View,
    Text,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet
} from 'react-native';
import { Icon } from '../component'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from '../config/colors'

class CountryObject extends React.Component {
    render() {
        const TouchableComponet = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
        return (
            <TouchableComponet style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.flag} />
                    <Text style={styles.title}>Ülke 1 Deneme</Text>
                    <Icon name='arrow' fill={colors.text_color} />
                </View>

            </TouchableComponet>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    flag: {
        width: 32,
        height: 20,
        backgroundColor: 'green',
        borderRadius: 4,
    },
    title: {
        marginStart: 12,
        flex: 1,
        color: colors.text_color,
    }
});

export default CountryObject;
