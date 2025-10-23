import {
  ScrollView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { getAllAnimes } from "../libs/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CardAnime from "./CardAnime";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getAllAnimes().then((data) => {
      setGames(data);
    });
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom + 5 }}>
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: 30,
          marginBottom: 10,
        }}
      >
        Mi primera pagina
      </Text>
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} />
      ) : (
        <FlatList
          data={games}
          renderItem={(game) => (
            <Text style={{ color: "#fff" }}>{game.title}</Text>
          )}
        ></FlatList>
      )}
    </View>
  );
}
