import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants/theme";
import DemoImg from "../assets/images/kemal.jpg";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ReviewsCard = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image />
      </View>
      <View style={styles.reviewTextContainer}>
        <Text numberOfLines={1} style={styles.username}>
          {review.userId.username}
        </Text>
        <View style={styles.ratingInfo}>
          <View style={styles.ratingBox}>
            {[...Array(review.rating)].map((_, index) => (
              <AntDesign name="star" size={10} color="black" />
            ))}
          </View>
          <View style={styles.userLocation}>
            <Entypo name="location-pin" size={24} color={COLORS.primary} />
            <View style={{ width: "70%", overflow: "hidden" }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ color: COLORS.white }}
              >
                {review?.location.address}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.reviewComment}>{review.comment}</Text>
      </View>
    </View>
  );
};

export default ReviewsCard;

const styles = StyleSheet.create({
  container: {
    flex: 9,
    minHeight: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    gap: SIZES.medium,
  },
  imageContainer: {
    width: SIZES.xxLarge + 10,
    backgroundColor: COLORS.lightWhite,
    height: SIZES.xxLarge + 10,
    borderRadius: SIZES.large + 200,
  },
  reviewTextContainer: {
    flex: 8,
    height: "100%",
    paddingHorizontal: SIZES.medium,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  username: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontWeight: "bold",
  },
  reviewComment: {
    fontSize: SIZES.medium - 2,
    color: COLORS.white,
    textAlign: "justify",
    marginTop: SIZES.medium,
  },
  ratingInfo: {
    flex: 8,
    display: "flex",
    flexDirection: "row",
    maxHeight: SIZES.xxLarge + 2,
  },
  ratingBox: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primary,
    flex: 2,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: SIZES.medium,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.small,
  },
  userLocation: {
    flex: 5,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
});
