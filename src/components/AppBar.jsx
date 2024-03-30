import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Link } from "react-router-native";
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    contHeader: {
        marginTop: Constants.statusBarHeight,
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        flexDirection: 'row',
        height: 65,
        paddingLeft: 20,
        backgroundColor: 'rgb(214, 214, 214)',
        borderBottomColor: '#999', // Couleur de la bordure inférieure
        borderBottomWidth: 1, // Largeur de la bordure inférieure
        borderStyle: 'solid', // Style de la bordure
    },
    link: {
        marginRight: 12,
        padding: 11,
        backgroundColor: 'blue',
        fontSize: 15.5,
        borderRadius: 8,
    },
    linkText: {
        fontWeight: '600',
        color: 'white'
    }
})

const AppBar = () => {
    return (
        <View style={styles.contHeader}>
            <ScrollView horizontal>
                <Link to="/" style={styles.link}>
                    <Text style={styles.linkText}>Репозиторий</Text>
                </Link>
                <Link to="/sig-in" style={styles.link}>
                    <Text style={styles.linkText}>Войти</Text>
                </Link>
                <Link to="/" style={styles.link}>
                    <Text style={styles.linkText}>Создавать новое</Text>
                </Link>
                <Link to="/mass" style={styles.link}>
                    <Text style={styles.linkText}>Calcul Mass</Text>
                </Link>
            </ScrollView>
        </View>
    )
}

export default AppBar