import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { calculateStyle } from "./style/calculateStyle";
import useCalculate from "./useCalculate";

export default function App() {
  const { num1, setNum1, num2, setNum2, result, calculate } = useCalculate();
  return (
    <View style={calculateStyle.container}>
      <Text style={calculateStyle.title}>Calculadora Básica</Text>
      <Text>{num1}</Text>

      <TextInput
        style={calculateStyle.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={calculateStyle.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <TouchableOpacity style={calculateStyle.button} onPress={calculate}>
        <Text style={calculateStyle.buttonText}>Sumar</Text>
      </TouchableOpacity>
      <Text style={calculateStyle.resultLabel}>{result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}