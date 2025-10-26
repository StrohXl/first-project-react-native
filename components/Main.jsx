import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { getAllAnimes } from "../libs/metacritic";
import { AnimatedAnimeCard } from "./CardAnime";
import { Link } from "expo-router";
import LoadingActivity from "./LoadingActivity";

export default function Main() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAnimes()
      .then((data) => {
        setAnimes(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <View className="">
      {loading ? (
        <LoadingActivity />
      ) : animes.length === 0 ? (
        <View>
          <Text style={{ color: "#fff" }}>No se encontro ningun anime</Text>
        </View>
      ) : (
        <FlatList
          data={animes}
          style={{ paddingTop: 10 }}
          renderItem={({ item, index }) => (
            <AnimatedAnimeCard anime={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
