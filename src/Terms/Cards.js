import * as React from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import styles from '../Styles';


function Cards ({ navigation }) {
    return (
        <View style={styles.styles2.view}>
            <View style={styles.styles2.adwert}>
                <Text style={styles.styles2.adwertText}>реклама</Text>
            </View>
            <View style={styles.styles2.btnCont}>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c1
                    ]}
                    onPress={() =>
                        navigation.navigate('T_Epochs')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Эпохи</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c2
                    ]}
                    onPress={() =>
                        navigation.navigate('T_Spheres')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Сферы</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c3
                    ]}
                    onPress={() =>
                        navigation.navigate('T_Rulers')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Правители</Text>
                </TouchableOpacity>
                
                
            </View>
        </View>
        
      );
};

export default Cards
