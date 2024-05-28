import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants/theme";
import { Rating } from "react-native-ratings";

const ReviewUpload = ({ address, sendReview, user, id, refresh, coords }) => {
  const [payload, setPayload] = useState({
    userId: user.user._id,
    location: null,
    gameId: id,
    comment: "",
  });
  const [rating, setRating] = useState(0);

  const handlePostReview = () => {
    if( rating === 0 ) {
      alert("Please rate the game");
      return;
    }
    if (payload.comment.trim().length === 0 ) {
      alert("Please enter a comment");
      return;
    }
    const newPayload = {
      ...payload,
      rating,
      location: {
        address: `${address.address.suburb ? address.address.suburb : address.address.city}, ${address.address.country}`,
        latitude: JSON.stringify(coords[0]) ,
        longitude: JSON.stringify(coords[1]),
      },
    };
    console.log(newPayload);
    if (newPayload) {
      sendReview(newPayload)
        .then((res) => {
          console.log(res);
          refresh();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.reviewUpload}>
      <Text style={styles.title}>Leave a review below</Text>
      <View style={styles.reviewContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Type comment here"
          onChangeText={(comment) => setPayload({ ...payload, comment })}
          value={payload.comment}
          multiline
        />

        <Rating
          style={styles.rating}
          type="star"
          ratingCount={5}
          imageSize={30}
          showRating
          startingValue={payload.rating}
          onFinishRating={(rateValue) => {
            setRating(rateValue);
          }}
        />

        <TouchableOpacity
          onPress={handlePostReview}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewUpload;

const styles = StyleSheet.create({
  reviewUpload: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 50,
    marginBottom: 300,
    marginTop: 200,
    gap: 20,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontWeight: "bold",
  },
  reviewContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  commentInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.large,
    width: "100%",
    display: "flex",
    paddingTop: SIZES.large,
    minHeight: 200,
  },
  rating: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "center",
    height: 100,
    gap: 10,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: "medium",
    fontSize: SIZES.large,
  },
});
