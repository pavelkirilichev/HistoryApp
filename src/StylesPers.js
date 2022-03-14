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
  styles_6: {
    btnCont: {
      padding: 10,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: (c_razm) => ({
      justifyContent: "center",
      alignItems: "center",
      width: c_razm,
      height: c_razm,
      borderRadius: c_razm / 2,
      marginTop: 30,
    }),
    buttonText: (fz) => ({
      fontSize: fz,
      textAlign: "center",
    }),
    c1: {
      backgroundColor: "#b7f4fa",
    },
    c2: {
      backgroundColor: "#5686ad",
    },
    c3: {
      backgroundColor: "#47acef",
    },
    c4: {
      backgroundColor: "#158a8d",
    },
    c5: {
      backgroundColor: "#d7a356",
    },
    c6: {
      backgroundColor: "#d656d3",
    },
  },
  styles_7: {
    btnCont: {
      padding: 17.5,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: (c_razm) => ({
      justifyContent: "center",
      alignItems: "center",
      width: c_razm,
      height: c_razm,
      borderRadius: c_razm / 2,
      marginTop: 11,
    }),
    buttonText: (fz) => ({
      fontSize: fz,
      textAlign: "center",
    }),
    c1: {
      backgroundColor: "#b7f4fa",
    },
    c2: {
      backgroundColor: "#5686ad",
    },
    c3: {
      backgroundColor: "#47acef",
    },
    c4: {
      backgroundColor: "#158a8d",
    },
    c5: {
      backgroundColor: "#d7a356",
    },
    c6: {
      backgroundColor: "#d656d3",
    },
    c7: {
      backgroundColor: "#afd656",
      marginTop: -10,
    },
    centerRow: {
      width: "100%",
      minWidth: 200,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

export default styles;
