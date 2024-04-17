import { TouchableOpacity, Text } from "react-native";
import styles from "../style/Styles";

export default function Btn() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text
        style={styles.txtbtn}
        onPress={() => alert("São paulo é o maior time do Brasil")}
      >
        Clique aqui
      </Text>
    </TouchableOpacity>
  );
}
