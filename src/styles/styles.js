import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5E17A6",
  },
  textH1: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 24,
    paddingBottom: 4,
    color: "white",
  },
  textH2: {
    fontSize: 14,
    paddingBottom: 48,
    color: "white",
  },
  formContainer: {
    width: "25%",
    height: "70%",
    backgroundColor: "#0D0D0D",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 8,
    borderColor: "#610BD9",
  },
  input: {
    borderColor: "#610BD9",
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
    color: "white",
    placeholderTextColor: "white",
  },
  buttonContainer: {
    marginTop: 16,
    width: "75%",
    borderRadius: 16,
  },
  firstButton: {
    backgroundColor: "#6907F2",
    borderWidth: 0
  },
  secondButton: {
    backgroundColor: "#610BD9",
    borderWidth: 0
  },
  buttonText: {
    color: "white",
  },
});

export default styles;
