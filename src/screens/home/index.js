import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
    const { logout } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Button onPress={logout}>Logout</Button>
        </SafeAreaView>
    );
}

export default Home;
