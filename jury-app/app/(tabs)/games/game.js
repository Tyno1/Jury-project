import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/theme";
import { Stack, useGlobalSearchParams } from "expo-router";
import useFetch from "../../../hooks/useFetch";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Reviews from "../../../components/Reviews";

const GamesDetails = () => {
  const { id } = useGlobalSearchParams();
  const { data, loading, error } = useFetch(
    "https://game-app-1.onrender.com/games/" + id
  );

  const [expanded, setExpanded] = useState(false);
  const scrollViewRef = useRef();

  const toggleDescription = () => {
    setExpanded(!expanded);
  };
  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: data?.imageUrl }} style={styles.img} />
      </View>
      <View style={styles.gamesDetails}>
        <Text numberOfLines={3} style={styles.gameName}>
          {data.name}
        </Text>

        <Text
          numberOfLines={expanded ? undefined : 2}
          style={styles.gameDescription}
        >
          {data.description}
        </Text>

        <TouchableOpacity onPress={toggleDescription}>
          <Text style={styles.toggleButton}>
            {expanded ? "Show less" : "Show more"}
          </Text>
        </TouchableOpacity>
        <View
          style={{ display: "flex", flexDirection: "row", flex: 6, gap: 10 }}
        >
          <View style={styles.ratingBox}>
            <Text>
              {data?.rating > 0
                ? Array.from({ length: data.rating }).map((_, index) => (
                    <AntDesign name="star" size={24} color="black" />
                  ))
                : "N/A"}
            </Text>
          </View>
          <View style={styles.platforms}>
            <Text>Available on</Text>
            {data.gamePlatform &&
              data.gamePlatform.map((platform) => (
                <Text
                  style={{
                    fontSize: SIZES.xLarge,
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {platform}
                </Text>
              ))}
          </View>
        </View>
        <Reviews id={id} scrollToBottom={scrollToBottom} />
      </View>
    </ScrollView>
  );
};

export default GamesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    display: "flex",
    gap: 10,
    backgroundColor: COLORS.black,
  },
  imgContainer: {
    width: "100%",
    height: 300,
    backgroundColor: COLORS.white,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "#000"
  },
  gamesDetails: {
    marginTop: SIZES.small,
    padding: SIZES.small,
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: SIZES.small,
  },
  gameName: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.white,
  },
  ratingBox: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: SIZES.small,
    padding: SIZES.large,
  },
  platforms: {
    height: 70,
    flex: 5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  gameDescription: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    textAlign: "justify",
  },
  toggleButton: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
