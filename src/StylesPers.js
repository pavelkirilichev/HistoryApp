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
  styles_6: {
    btnCont: {
      marginTop: "9%",
      display: "flex",
      flexDirection: "column",
      height: "90%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#B3AEA2",
      width: "96%",
      height: "15%",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#8F7669",
      borderWidth: 4.5,
      borderRadius: 10,
    },
    buttonText: (fz) => ({
      fontSize: fz,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }),
  },
  styles_7: {
    btnCont: {
      marginTop: "5%",
      display: "flex",
      flexDirection: "column",
      height: "95%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#B3AEA2",
      width: "95%",
      height: "13%",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#8F7669",
      borderWidth: 4.5,
      borderRadius: 10,
    },
    buttonText: (fz) => ({
      fontSize: fz,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }),
  },
};

export default styles;
