
import { StyleSheet, Text, View, Alert } from 'react-native';
import Navbar from './components/Navbar';
import List from './components/List';





export default function App() {
  return (
    <View style={styles.container}>

      <Navbar />

      <View style={styles.list}>

        <List />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F9',

  },

  list: {
    margin: 20,
    padding: 20,
    flex: 1,



  },
});