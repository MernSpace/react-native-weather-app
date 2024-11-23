import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Homepage from "./component/homepage";
import CardPage from "./component/cardPage";
import DetailPage from "./component/detailPage";
import {StatusBar} from "react-native";

const App = () => {
    return (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Homepage}
                  options={{ headerShown: false, animation:'flip' }}

              />
              <Stack.Screen name="Profile" component={CardPage}
                            options={{ headerShown: false, animation:'flip' }}

              />
                <Stack.Screen name="detail" component={DetailPage}
                              options={{ headerShown: false, animation:'flip' }}

                />
            </Stack.Navigator>
              <StatusBar
                  backgroundColor="#182140"
              />

          </NavigationContainer>

        </>
    );
};

export default App;
