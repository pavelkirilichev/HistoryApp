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
      backgroundColor: "#b7fcea",
    },
    adwertText: {
      color: "#000",
      fontSize: 22,
    },
  },
};
const c_styles = {
  main: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  chapterTitle: {
    positon: "relative",
    padding: "2%",
    marginTop: 20,
    width: "100%",
    height: "auto",
    textAlign: "center",
  },
  textTitle: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  chapterTextDiv: {
    padding: "2%",
    marginTop: 40,
    width: "95%",
    height: "auto",
    height: "auto",
    textAlign: "center",
  },
  chapterText: {
    fontSize: 18,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  btnCont: {
    marginTop: 10,
    padding: "7.5%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: (c_razm) => ({
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    width: c_razm,
    height: c_razm,
    borderRadius: c_razm / 2,
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
    fontSize: fz,
    textAlign: "center",
  }),
  btnDiv: {
    width: "100%",
    padding: "4%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  swipeBtn: {
    backgroundColor: "#158a8d",
    width: 125,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
};

export { styles, c_styles };
