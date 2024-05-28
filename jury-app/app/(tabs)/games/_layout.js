
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";

import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { Fragment } from "react";

export default Games = () => {
  

  return (
    <Fragment>
      <StatusBar backgroundColor={COLORS.primary} style="auto" />
      <Stack initialRouteName="index" options={{headerTitle: ""}}>
        <Stack.Screen
          name="index"
          options={{
            contentStyle: { backgroundColor: COLORS.black },
            headerShown: true,
            headerTitle: "",

          }}
        />
      </Stack>
    </Fragment>
  );
};
