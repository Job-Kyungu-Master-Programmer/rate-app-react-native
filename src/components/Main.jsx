import { StyleSheet, View,Text } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './Repository';
import theme from '../theme';
import AppBar from './AppBar'
import SignIn from './SignIn';
import BodyMassIndexCalculator from './Mass';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/sig-in' element={<SignIn />} />
        <Route path='/mass' element={<BodyMassIndexCalculator />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;