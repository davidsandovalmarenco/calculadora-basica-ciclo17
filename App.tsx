import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { calculateStyle } from "./style/calculateStyle";
import useCalculate from "./useCalculate";

export default function App() {
  const {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    operation,
    setOperation,
    calculate,
    clearValues,
  } = useCalculate();

  const operations = [
    { key: "add", label: "Sumar", symbol: "+" },
    { key: "subtract", label: "Restar", symbol: "−" },
    { key: "multiply", label: "Multiplicar", symbol: "×" },
    { key: "divide", label: "Dividir", symbol: "÷" },
  ] as const;

  return (
    <SafeAreaView style={calculateStyle.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={calculateStyle.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={calculateStyle.container}>
          <View style={calculateStyle.card}>
            <View style={calculateStyle.header}>
              <Text style={calculateStyle.badge}>CALCULADORA</Text>
              <Text style={calculateStyle.title}>En teoria esta bueno</Text>
              <Text style={calculateStyle.subtitle}>
                hecho por David Sandoval M
              </Text>
            </View>

            <View style={calculateStyle.form}>
              <View style={calculateStyle.inputWrapper}>
                <Text style={calculateStyle.label}>Número 1</Text>
                <TextInput
                  style={calculateStyle.input}
                  placeholder="Ingresa el primer número"
                  placeholderTextColor="#94A3B8"
                  keyboardType="numeric"
                  value={num1}
                  onChangeText={setNum1}
                />
              </View>

              <View style={calculateStyle.inputWrapper}>
                <Text style={calculateStyle.label}>Número 2</Text>
                <TextInput
                  style={calculateStyle.input}
                  placeholder="Ingresa el segundo número"
                  placeholderTextColor="#94A3B8"
                  keyboardType="numeric"
                  value={num2}
                  onChangeText={setNum2}
                />
              </View>

              <Text style={calculateStyle.sectionTitle}>Operación</Text>

              <View style={calculateStyle.operationsGrid}>
                {operations.map((item) => {
                  const active = operation === item.key;

                  return (
                    <TouchableOpacity
                      key={item.key}
                      style={[
                        calculateStyle.operationButton,
                        active && calculateStyle.operationButtonActive,
                      ]}
                      onPress={() => setOperation(item.key)}
                      activeOpacity={0.88}
                    >
                      <Text
                        style={[
                          calculateStyle.operationSymbol,
                          active && calculateStyle.operationTextActive,
                        ]}
                      >
                        {item.symbol}
                      </Text>
                      <Text
                        style={[
                          calculateStyle.operationText,
                          active && calculateStyle.operationTextActive,
                        ]}
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <View style={calculateStyle.actions}>
                <TouchableOpacity
                  style={calculateStyle.primaryButton}
                  onPress={calculate}
                  activeOpacity={0.9}
                >
                  <Text style={calculateStyle.primaryButtonText}>Calcular</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={calculateStyle.secondaryButton}
                  onPress={clearValues}
                  activeOpacity={0.9}
                >
                  <Text style={calculateStyle.secondaryButtonText}>Limpiar</Text>
                </TouchableOpacity>
              </View>

              <View style={calculateStyle.resultBox}>
                <Text style={calculateStyle.resultLabel}>Resultado</Text>
                <Text style={calculateStyle.resultValue}>
                  {result || "0"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}