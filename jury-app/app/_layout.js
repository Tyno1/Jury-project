import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { COLORS } from "../constants";
import { AuthProvider } from "../contexts/AuthContext";
import { LocationProvider } from "../contexts/locationContext";
import { ReviewProvider } from "../contexts/reviewContext";

const Layout = () => {
  const [fontLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const [isSplashReady, setSplashReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      setSplashReady(true);
    }
  }, [fontLoaded]);

  useEffect(() => {
    if (isSplashReady) {
      SplashScreen.hideAsync();
    }
  }, [isSplashReady]);

  // if (!fontLoaded || !isSplashReady) return null;

  return (
    <AuthProvider>
      <LocationProvider>
        <ReviewProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              headerStyle: { backgroundColor: COLORS.black },
              headerTitleStyle: { color: COLORS.white },
            }}
          />
        </ReviewProvider>
      </LocationProvider>
    </AuthProvider>
  );
};

export default Layout;
