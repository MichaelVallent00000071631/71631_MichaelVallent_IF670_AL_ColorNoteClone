import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './component/Home';
import Profile from './component/Profile';
import Login from './component/Login';
import Register from './component/Register';
import About from './component/About';
import Settings from './component/Settings';
import Editor from './component/Editor';
import Add from './component/Add';
import Help from './component/Help';
import Checkbox from './component/Checkbox';
import MoreSettings from './component/MoreSettings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App(){
    return (
        <>
            {/* <NavigasiStack /> */}
            <NavigasiTab />
            {/* <NavigasiDrawer /> */}
        </>
    );
}

const NavigasiDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Add" component={Add} />
                <Drawer.Screen name="Checkbox" component={Checkbox}/>
                <Drawer.Screen name="Editor" component={Editor} />
                <Drawer.Screen name="Settings" component={Settings}/>
                <Drawer.Screen name="More Settings" component={MoreSettings}/>
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Register" component={Register} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Help" component={Help} />
                <Drawer.Screen name='About' component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const NavigasiTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Add" component={Add} />
                <Tab.Screen name="Checkbox" component={Checkbox}/>
                <Tab.Screen name="Editor" component={Editor} />
                <Tab.Screen name="Settings" component={Settings}/>
                <Tab.Screen name="More Settings" component={MoreSettings}/>
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Register" component={Register} />
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Help" component={Help} />
                <Tab.Screen name='About' component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 100,
    },
});
