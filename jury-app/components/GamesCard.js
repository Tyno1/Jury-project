import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants/theme";

const GamesCard = ({ item, selectedGame, handleCardPress }) => {
  return (
    <TouchableOpacity
      onPress={() => handleCardPress(item)}
      style={styles.container(selectedGame, item)}
    >
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: item?.imageUrl }}
          resizeMode="contain"
          style={{ height: "100%", width: "100%" }}
        />
      </View>

      <View style={styles.gameInformation}>
        <Text style={styles.gameName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.gamePlatform}>
          Available on: {item.gamePlatform}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GamesCard;

const styles = StyleSheet.create({
  container: (selectedGame, item) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: SIZES.small,
    alignItems: "center",
    gap: SIZES.medium,
    padding: SIZES.xLarge,
    backgroundColor:
      selectedGame === item._id ? COLORS.primary : COLORS.lightBlack,
    ...SHADOWS.medium,
    shadowColor: COLORS.black,
  }),
  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    overflow: "hidden",
  },
  gameInformation: {
    width: "70%",
  },
  gameName: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.white,
  },
  gamePlatform: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
});
