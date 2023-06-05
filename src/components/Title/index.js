import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
}

export default React.memo(Title);
