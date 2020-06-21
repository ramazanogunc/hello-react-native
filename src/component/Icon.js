import * as React from 'react';
import Icons from '../assets/icons';
import PropTypes from 'prop-types';
import { colors } from '../config/colors';

class Icon extends React.Component {
    render() {
        const { name, tintColor } = this.props;
        const TargetIcon = Icons[name];
        return (
            <TargetIcon {...this.props} />
        )
    }
}
Icon.propTypes = {
    name: PropTypes.string,
    fill: PropTypes.string
};


Icon.defaultProps = {
    fill: colors.accent
}

export default Icon;