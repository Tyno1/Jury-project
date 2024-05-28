import React from "react";
import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="games" options={{headerShown: false}}/>
      <Tabs.Screen name="profile" options={{headerTitle: ""}}/>
    </Tabs>
  );
};
