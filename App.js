import { View, Text, FlatList, ScrollView } from "react-native";
import styles from "./src/style/Styles";

export default function App() {
  const ligas = [
    { id: "1", backgroundColor: "red", title: "Premier League" },
    { id: "2", backgroundColor: "pink", title: "La Liga" },
    { id: "3", backgroundColor: "blue", title: "Serie A" },
    { id: "4", backgroundColor: "yellow", title: "Ligue One" },
    { id: "5", backgroundColor: "green", title: "Bundesliga" },
  ];

  const times = [
    { id: "1", backgroundColor: "red", title: "Liverpool" },
    { id: "2", backgroundColor: "pink", title: "Real Madrid" },
    { id: "3", backgroundColor: "blue", title: "Milan" },
    { id: "4", backgroundColor: "yellow", title: "Paris Saint-Germain" },
    { id: "5", backgroundColor: "green", title: "Bayern Lewerkusen" },
  ];

  const jogadores = [
    { id: "1", backgroundColor: "red", title: "Van Dijk" },
    { id: "2", backgroundColor: "pink", title: "Bellingham" },
    { id: "3", backgroundColor: "blue", title: "Rafael Leão" },
    { id: "4", backgroundColor: "yellow", title: "Mbappé" },
    { id: "5", backgroundColor: "green", title: "Witz" },
  ];

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!
  const renderLiga = ({ item }) => (
    <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.txt}>{item.title}</Text>
    </View>
  );

  const renderTime = ({ item }) => (
    <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.txt}>{item.title}</Text>
    </View>
  );

  const renderJogador = ({ item }) => (
    <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.txt}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView>
        <FlatList
          data={ligas} // Ele está recebendo todos os objetos do nosso array data
          renderItem={renderLiga} // Chama a função para renderizar as Views box
          keyExtractor={(ligas) => ligas.id} // Extrair o id do objeto
          horizontal={true}
        />

        <FlatList
          data={times} // Ele está recebendo todos os objetos do nosso array data
          renderItem={renderTime} // Chama a função para renderizar as Views box
          keyExtractor={(times) => times.id} // Extrair o id do objeto
          horizontal={true}
        />

        <FlatList
          data={jogadores} // Ele está recebendo todos os objetos do nosso array data
          renderItem={renderJogador} // Chama a função para renderizar as Views box
          keyExtractor={(jogadores) => jogadores.id} // Extrair o id do objeto
          horizontal={true}
        />
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}
