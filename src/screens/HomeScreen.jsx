import React from "react";
import { View, Text } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text 
            style={
                { 
                    fontSize: 20, 
                    backgroundColor:"blue", 
                    color:"white",
                    fontWeight:'700',
                    padding:20,
                    borderRadius:20,
                    shadowOffset:{width:0, height:4},
                    shadowColor:"black",
                    shadowOpacity:0.8,
                    elevation:10,

                }
            }
        >
            Home Screen !
        </Text>
    </View>
  );
};