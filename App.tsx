import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRef, useState } from 'react';

export default function App() {

  const textfield = useRef<TextInput>(null);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const operands = ['+', '-', '*', '/'];

  const [mathData, setMathData] = useState({
    first: getRandomInt(0, 15),
    second: getRandomInt(1, 15),
    operand: operands[getRandomInt(0, 3)]
  });

  const [resultData, setResultData] = useState('');

  const [userInput, setUserInput] = useState('');

  const updateTextfield = (uinput: string) => setUserInput(uinput);

  const newTask = () => {
    setResultData('');
    setMathData({
      first: getRandomInt(0, 15),
      second: getRandomInt(1, 15),
      operand: operands[getRandomInt(0, 3)]
    });
  }

  const evaluateUserInput = () =>{
    let correctResult = eval(mathData.first + mathData.operand + mathData.second);

    setResultData(correctResult == Number(userInput) ? 'Richtig' : 'Falsch');
    textfield.current?.clear();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tasktext}>Berechne die Aufgabe:</Text>
        <View style={styles.task}>
          <Text style={styles.number}>{mathData.first}</Text>
          <Text style={styles.operand}>{mathData.operand}</Text>
          <Text style={styles.number}>{mathData.second}</Text>
        </View>
      </View>
      <View style={styles.resultWrapper}>
        <Text style={styles.resultText}>{resultData}</Text>
        <TouchableOpacity style={styles.nextTaskButton} onPress={newTask}>
          <Text style={styles.nextTaskButtonText}>Neue Aufgabe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.uinput} onChangeText={updateTextfield} ref={textfield} keyboardType='numeric'></TextInput>
        <TouchableOpacity onPress={evaluateUserInput}>
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
