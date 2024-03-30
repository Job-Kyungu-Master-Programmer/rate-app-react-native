import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import  Constants  from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },

    input: {
        marginBottom: 30,
        width: '100%',
        borderWidth: 1,
        padding: 17,
        borderColor: '#999',
        borderStyle: 'solid',
        borderRadius: 6,
        backgroundColor: 'white',
    },
    text : {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 30
    },
    btn: {
        width: '100%',
        padding: 17,
        backgroundColor: 'blue',
        borderRadius: 6,
    },
    enter: {
        fontWeight: '600',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    }
})

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Войти</Text>
                <TextInput style={styles.input}
                  placeholder='Enter your username'
                 />
                <TextInput style={styles.input}
                  placeholder='Enter your password numeric'
                  keyboardType='numeric'
                 />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.enter}>Входите</Text>
                </TouchableOpacity>
        </View>
    )
};

export default SignIn;