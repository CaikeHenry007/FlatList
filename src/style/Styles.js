import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
    backgroundColor: "#fff", // Define a cor de fundo
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    height: 80, // Define a altura do HEADER
    backgroundColor: "#888", // Define a cor de fundo
  },

  caixa: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 2,
    fontSize: 20,
    textAlign: "center",
  },

  btn: {
    backgroundColor: "#f00",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  txtbtn: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#000",
  },

  txt: {
    fontSize: 30, // Define o tamanho da fonte
    fontWeight: "bold", // Define a " largura " da fonte
    color: "#000", // Define a cor da fonte
  },

  footer: {
    height: 100, // Define a altura do componente Footer
    backgroundColor: "#888", // Define a cor de fundo
  },
});

export default styles;
