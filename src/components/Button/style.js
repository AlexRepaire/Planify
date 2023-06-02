import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 13,
        marginVertical: 8,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "500",
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    },
})