const styles = {
  styles_all: {
    adwert: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 45,
      backgroundColor: "transparent",
      borderBottomColor: "#000",
      borderBottomWidth: 1,
    },
    view: {
      flex: 1,
      padding: 0,
      backgroundColor: "#dbdbdb",
    },
    adwertText: {
      color: "#000",
      fontSize: 22,
    },
  },
};
const t_styles = {
  main: {
    display: "flex",
    alignItems: "center",
  },
  textDiv: {
    marginTop: 20,
    width: "97.5%",
    height: "auto",
    minHeight: 100,
    padding: 10,
  },
  textTitle: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 21,
  },
  bold: {
    fontWeight: "bold",
  },
  btnCont: {
    marginTop: -20,
    padding: "7.5%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: (c_razm) => ({
    backgroundColor: "#B3AEA2",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    width: c_razm,
    height: c_razm,
    borderRadius: c_razm / 2,
    borderColor: "#8F7669",
    borderWidth: 4,
  }),
  buttonGreen: {
    backgroundColor: "#19f965",
  },
  buttonRed: {
    backgroundColor: "#fa1931",
  },
  buttonBlue: {
    backgroundColor: "#47acef",
  },
  buttonText: (fz) => ({
    fontWeight: "bold",
    fontSize: fz,
    textAlign: "center",
  }),
};

export { styles, t_styles };
