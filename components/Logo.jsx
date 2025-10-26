import { Link } from "expo-router";
import { Text } from "react-native";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          marginBottom: 20,
          fontWeight: 800,
        }}
      >
        JIKAN
      </Text>
    </Link>
  );
}
