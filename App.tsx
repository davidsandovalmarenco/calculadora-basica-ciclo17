import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { calculateStyle } from "./style/calculateStyle";
import useCalculate from "./useCalculate";

const operations = [
  { key: "add", label: "Sumar", symbol: "+" },
  { key: "subtract", label: "Restar", symbol: "−" },
  { key: "multiply", label: "Multiplicar", symbol: "×" },
  { key: "divide", label: "Dividir", symbol: "÷" },
] as const;

export default function App() {
  const {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    error,
    operation,
    setOperation,
    calculate,
    clearValues,
    canCalculate,
    expression,
  } = useCalculate();

  return (
    <SafeAreaView style={calculateStyle.safeArea}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={calculateStyle.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={calculateStyle.centerBlock}>
          <View style={calculateStyle.header}>
          </View>

          <View style={calculateStyle.card}>
            <View style={calculateStyle.resultPanel}>
              <Text style={calculateStyle.resultCaption}>Resultado</Text>
              <Text style={calculateStyle.resultValue}>{result || "0"}</Text>
              <Text style={calculateStyle.expressionText}>{expression}</Text>
            </View>

            <View style={calculateStyle.fieldGroup}>
              <Text style={calculateStyle.label}>Número 1</Text>
              <TextInput
                style={calculateStyle.input}
                placeholder="Ingresa el primer número"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
                selectionColor="#2563EB"
              />
            </View>

            <View style={calculateStyle.fieldGroup}>
              <Text style={calculateStyle.label}>Número 2</Text>
              <TextInput
                style={calculateStyle.input}
                placeholder="Ingresa el segundo número"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
                selectionColor="#2563EB"
              />
            </View>

            <View style={calculateStyle.operationsWrapper}>
              <Text style={calculateStyle.sectionLabel}>Operación</Text>

              <View style={calculateStyle.operationsGrid}>
                {operations.map((item) => {
                  const active = operation === item.key;

                  return (
                    <Pressable
                      key={item.key}
                      onPress={() => setOperation(item.key)}
                      style={({ pressed }) => [
                        calculateStyle.operationButton,
                        active && calculateStyle.operationButtonActive,
                        pressed && calculateStyle.operationButtonPressed,
                      ]}
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
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {!!error && <Text style={calculateStyle.errorText}>{error}</Text>}

            <View style={calculateStyle.actionsRow}>
              <Pressable
                onPress={calculate}
                disabled={!canCalculate}
                style={({ pressed }) => [
                  calculateStyle.primaryButton,
                  !canCalculate && calculateStyle.primaryButtonDisabled,
                  pressed && canCalculate && calculateStyle.primaryButtonPressed,
                ]}
              >
                <Text style={calculateStyle.primaryButtonText}>Calcular</Text>
              </Pressable>

              <Pressable
                onPress={clearValues}
                style={({ pressed }) => [
                  calculateStyle.secondaryButton,
                  pressed && calculateStyle.secondaryButtonPressed,
                ]}
              >
                <Text style={calculateStyle.secondaryButtonText}>Limpiar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}