import * as React from 'react'
import {
    View,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet
} from 'react-native';
import { Icon } from '../component'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from '../config/colors'
import PropType from 'prop-types';

class CountryObject extends React.Component {
    render() {
        const TouchableComponet = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
        const { name, nativeName, alpha2Code } = this.props.country;
        return (
            <TouchableComponet 
                style={styles.container}
                onPress={this.props.onClick}>
                <View style={styles.content}>
                    <Image 
                        style={styles.flag}
                        source={{ uri: `https://www.countryflags.io/${alpha2Code}/flat/64.png` }}
                    />
                    <Text style={styles.title}>{ name }</Text>
                    <Icon name='arrow' fill={colors.text_color} />
                </View>

            </TouchableComponet>
        )
    }
}

CountryObject.protoTypes = {
    country: PropType.object,
    onClick: PropType.func
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
        borderRadius: 4,
    },
    title: {
        marginStart: 12,
        flex: 1,
        color: colors.text_color,
    }
});

export default CountryObject;
