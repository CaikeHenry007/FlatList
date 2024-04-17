import { View, FlatList } from "react-native";
import styles from "./src/style/Styles";
import Txt from "./src/componentes/TxtComponent";
import TxtInput from "./src/componentes/TextInputComponent";
import Btn from "./src/componentes/BtnComponent";

export default function App() {
  const lista = [
    { id: "1", componente: <Txt /> },
    { id: "2", componente: <TxtInput /> },
    { id: "3", componente: <Btn /> },
  ];

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!

  const renderLista = ({ item }) => {
    return item.componente;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <FlatList
        data={lista} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderLista} // Chama a função para renderizar as Views box
        keyExtractor={(lista) => lista.id} // Extrair o id do objeto
      />

      <View style={styles.footer}></View>
    </View>
  );
}
