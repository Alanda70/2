import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 const ModuleAddScreen = () => {

// view -----------------------
  return (
    <View style={styles.container}>

      <Text>Add</Text>
    
      
      <StatusBar style= 'light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf9f9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModuleAddScreen;
