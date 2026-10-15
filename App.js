import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/Screens/ModuleListScreen';
import ModuleAddScreen from './src/components/Screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/Screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/Screens/ModuleModifyScreen';

const stack = createNativeStackNavigator();

export const App = () => {

// view -------------------------
  return (
    <NavigationContainer>
      <stack.Navigator 
      initialRouteName= 'ModuleListScreen'
      screenOptions={{
        headerStyle: { backgroundColor: 'black'},
        headerTintColor:'white',
      }}
    >
            < stack.Screen
            name='ModuleListScreen'
            component={ModuleListScreen}
            options={{title: 'List Modules'}}
            />

            < stack.Screen
            name='ModuleAddScreen'
            component={ModuleAddScreen}
            options={{title: 'Add Modules'}}
            />

            < stack.Screen
            name='ModuleViewScreen'
            component={ModuleViewScreen}
            options={{title: 'View Modules'}}
            />

            < stack.Screen
            name='ModuleModifyScreen'
            component={ModuleModifyScreen}
            options={{title: 'Modify Modules'}}
            />


      </stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;
