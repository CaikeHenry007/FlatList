import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
  },

  header: {
    height: 80, // Define a altura do HEADER
    backgroundColor: "black", // Define a cor de fundo
  },

  box: {
    height: 350, // Define a altura dos componentes box
    margin: 5, // Espaçamento externo
    width: 1000, // Define a largura dos componentes box
    alignItems: "center", // Centraliza o que estiver dentro da BOX
    justifyContent: "center", // Centraliza o que estiver dentro da BOX
  },

  txt: {
    fontSize: 30, // Define o tamanho da fonte
    fontWeight: "bold", // Define a " largura " da fonte
  },

  footer: {
    height: 100, // Define a altura do componente Footer
    backgroundColor: "black", // Define a cor de fundo
  },
});

export default styles;
