import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native'
import Ad from './AdBlock';

const ex = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

let c1_razm = 220
let c2_razm = 175
let c3_razm = 165
let c4_razm = 175

let c2_top = 245
let c3_top = 385
let c4_top = 495

let fz = 25

if (ex.width > 520) {
  c1_razm = 240
  c2_razm = 200
  c3_razm = 185
  c4_razm = 195
  fz = 26
}
if (ex.width > 520 && ex.height < 800) {
  c2_top = 170
  c3_top = 330
  c4_top = 450
}

if (ex.width > 600) {
  c1_razm = 345
  c2_razm = 275
  c3_razm = 290
  c4_razm = 290
  c2_top = 250
  c3_top = 450
  c4_top = 570
  fz = 28
}

if (ex.width > 925) {
  c1_razm = 395
  c2_razm = 325
  c3_razm = 350
  c4_razm = 350
  c2_top = 340
  c3_top = 520
  c4_top = 800
  fz = 32
}

if (ex.height < 750) {
  c1_razm = 200
  c2_razm = 180
  c3_razm = 165
  c4_razm = 175
  c2_top = 220
  c3_top = 350
  c4_top = 430
  fz = 23
}

if (ex.height < 675) {
  c1_razm = 180
  c2_razm = 160
  c3_razm = 145
  c4_razm = 155
  c2_top = 180
  c3_top = 320
  c4_top = 365
  fz = 21
}


if (ex.height < 600) {
  c1_razm = 145
  c2_razm = 115
  c3_razm = 120
  c4_razm = 130
  c2_top = 165
  c3_top = 250
  c4_top = 320
  fz = 18
}


const styles = {
    adwert: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: 'transparent',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    view: {
        flex: 1,
        padding: 0,
        backgroundColor: '#b7fcea',
    },
    text: {
        color: "red",
        fontSize: 30,
    },
    adwertText: {
        color: "#000",
        fontSize: 22,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: (fz) => ({
        fontSize: fz,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }),
    c1: (c1_razm) => ({
        margin: 20,
        width: c1_razm,
        height: c1_razm,
        borderRadius: c1_razm / 2,
        backgroundColor: "#b7f4fa"
    }),
    c2: (c2_razm, c2_top) => ({
        position: 'absolute',
        float: 'right',
        right: 20,
        top: c2_top,
        width: c2_razm,
        height: c2_razm,
        borderRadius: c2_razm / 2,
        backgroundColor: "#5686ad"
    }),
    c3: (c3_razm, c3_top) => ({
        position: 'absolute',
        float: 'left',
        left: 20,
        top: c3_top,
        width: c3_razm,
        height: c3_razm,
        borderRadius: c3_razm / 2,
        backgroundColor: "#47acef"
    }),
    c4: (c4_razm, c4_top) => ({
        position: 'absolute',
        float: 'right',
        right: 20,
        top: c4_top,
        width: c4_razm,
        height: c4_razm,
        borderRadius: c4_razm / 2,
        backgroundColor: "#158a8d"
    }),
}

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.view}>
        <Ad />
        <ScrollView contentContainerStyle={styles.view}>
          <TouchableOpacity
            style={[
              styles.button, styles.c1(c1_razm)
            ]}
            /*
            onPress={() =>
              navigation.navigate('WorldHistory')
            }
            */
          >
            <Text style={styles.buttonText(fz)}>Всемирная история</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button, styles.c2(c2_razm, c2_top)
            ]}
            /*
            onPress={() =>
              navigation.navigate('Terms')
            }
            */
          >
            <Text style={styles.buttonText(fz)}>Термины</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button, styles.c3(c3_razm, c3_top)
            ]}
            onPress={() =>
              navigation.navigate('Persons')
            }
          >
            <Text style={styles.buttonText(fz)}>Личности</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.button, styles.c4(c4_razm, c4_top)
            ]}>
            <Text style={styles.buttonText(fz)}>Вопрос разработчику</Text>
          </View>
        </ScrollView>
    </View>
    
  );
};



export default HomeScreen
