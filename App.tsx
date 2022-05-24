import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tasktext}>Berechne die Aufgabe:</Text>
        <View style={styles.task}>
          <Text style={styles.number}>0</Text>
          <Text style={styles.operand}>*</Text>
          <Text style={styles.number}>0</Text>
        </View>
      </View>
      <View style={styles.resultWrapper}>
        <Text style={styles.resultText}>Richtig</Text>
        <TouchableOpacity style={styles.nextTaskButton}>
          <Text style={styles.nextTaskButtonText}>Neue Aufgabe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.uinput}></TextInput>
        <TouchableOpacity>
          <Ionicons name="md-arrow-forward-circle" size={40} color="#ffb703"></Ionicons>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#023047'
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#ffb703'
  },
  tasktext: {
    fontSize: 18,
    paddingBottom: 16,
    color: '#023047'
  },
  task: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  number: {
    fontWeight: 'bold',
    fontSize: 32
  },
  operand: {
    fontSize: 24
  },
  resultWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  resultText: {
    color: '#ffb703',
    fontSize: 20,
    paddingTop: 30
  },
  nextTaskButton: {
    marginTop: 20,
    backgroundColor: '#ffb703',
    padding: 10,
    borderRadius: 10
  },
  nextTaskButtonText: {
    color: '#023047',
    fontSize: 20
  },
  inputWrapper: {
    marginTop: 'auto',
    marginBottom: 30,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  uinput: {
    borderColor: '#ffb703',
    borderWidth: 2,
    borderRadius: 20,
    height: 40,
    marginRight: 12,
    color: '#fff',
    flex: 1
  }
});
