import { useRouter } from "expo-router";
import React, { Fragment, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import GamesCard from "../../../components/GamesCard";
import { COLORS, icons, images, SIZES } from "../../../constants";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function HomeScreen () {
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState();

  const { data, loading, error } = useFetch("https://game-app-1.onrender.com/games/all");

  const navigate = (link, id) => {
    router.push({ pathname: link, params: { id } });
  };
  
  const handleCardPress = (item) => {
    navigate("/games/game", item._id);
    setSelectedGame(item._id);
  };
  return (
    <ScrollView style={styles.cardsContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text> Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <GamesCard
              handleCardPress={handleCardPress}
              selectedGame={selectedGame}
              item={item}
              keyExtractor={index}
            />
          )}
          keyExtractor={(item) => item?._id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({})
