import {View, Text, StyleSheet} from 'react-native';
import Component from './component';

export default function App() {
   return(
    <View style={styles.central}>
      <Text style={styles.titulo}>Sistema conversor de moedas</Text>
      <Component/>
    </View>
   );
}

// Aqui começa os estilos

const styles = StyleSheet.create({
  central:{
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',

  },

  titulo:{
    fontSize: 25,
    color: 'white',
  }

})