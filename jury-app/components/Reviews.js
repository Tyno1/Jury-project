import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants/theme";
import useFetch from "../hooks/useFetch";
import ReviewsCard from "./ReviewsCard";
import ReviewUpload from "./ReviewUpload";
import { LocationContext } from "../contexts/locationContext";
import { AuthContext } from "../contexts/AuthContext";
import { ReviewContext } from "../contexts/reviewContext";

const Reviews = ({ id, scrollToBottom }) => {
  const {
    data: reviews,
    loading,
    error,
    refresh,
  } = useFetch("https://game-app-1.onrender.com/reviews/game/" + id);

  const { address, location } = useContext(LocationContext);
  const { sendReview } = useContext(ReviewContext);
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleButton}>
        <Text style={styles.title}>Reviews</Text>
        <TouchableOpacity onPress={scrollToBottom} style={styles.addButton}>
          <Text style={styles.buttonText}>+ Add Review</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text> Something went wrong</Text>
      ) : (
        <View style={styles.reviewList}>
          {reviews.map((review) => (
            <ReviewsCard key={review._id} review={review} />
          ))}
        </View>
      )}

      <ReviewUpload
        address={address}
        sendReview={sendReview}
        user={user}
        id={id}
        refresh={refresh}
        coords={location}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: SIZES.xxLarge,
    marginTop: SIZES.xLarge,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontWeight: "bold",
  },
  reviewList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: SIZES.xLarge + 4,
  },
  titleButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.medium,
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: SIZES.smal,
  },
});
