import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import MapView from "react-native-maps";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";
// import Map from "..components/Map";
const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      {/* First section with content */}
      <View style={tw`h-1/2 `}>
        <Map />
      </View>

      {/* Second section with content */}
      <View style={tw`h-1/2 `}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
