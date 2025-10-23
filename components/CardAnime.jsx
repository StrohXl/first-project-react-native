import { Image, StyleSheet, Text, View } from "react-native";

export default function CardAnime({ anime }) {
  alert(anime);
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: anime.images.large }}
        style={{ width: 100, height: 150 }}
      />
      <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
        {anime.title}
      </Text>
      <Text style={{ color: "#fff" }}>{anime.synopsis}</Text>
      <Text style={{ color: "green" }}>{anime.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
  },
});
