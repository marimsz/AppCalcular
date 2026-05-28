import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
   const [resultado, setResultado] = useState(0);
  const [valorTotal, setValorTotal] = useState('');
  const [taxaServico, setTaxaServico] = useState('');
  const [quantidadePessoas, setQuantidadePessoas] = useState('');
  

  const calcularValor = () => {
    const total = parseFloat(valorTotal);
    const taxa = parseFloat(taxaServico);
    const pessoas = parseInt(quantidadePessoas);

    const valorComTaxa = total + (total) * (taxa / 100);
    const valorPorPessoa = valorComTaxa / pessoas;

    setResultado(valorPorPessoa);  

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>
          Divisão de Valor Total de Uma Conta!
        </Text>

        <StatusBar style="auto" />
      </View>

    <View>
      <TextInput
      placeholder="Digite o valor total da conta"
      keyboardType="numeric"
      style={styles.input}
      value={valorTotal}
      onChangeText={setValorTotal}
      />

      <TextInput
      placeholder="Digite a taxa de serviço"
      keyboardType="numeric"
      style={styles.input}
      value={taxaServico}
      onChangeText={setTaxaServico}
      />

      <TextInput
      placeholder="Digite a quantidade de pessoas"
      keyboardType="numeric"
      style={styles.input}
      value={quantidadePessoas}
      onChangeText={setQuantidadePessoas}
      />

      <TouchableOpacity style={styles.butao} onPress={calcularValor}>
        <Text style={styles.butaoTexto}>Calcular</Text>
      </TouchableOpacity>

    </View>

    {resultado > 0 && (
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTexto}>Valor por pessoa: R$ {resultado.toFixed(2)}</Text>
      </View>
    )}

    </ScrollView>
  );
}
<style>
input:{
  borderWidth: 1,
  borderColor: '#ccc',
  margin: 20,
  padding: 10,
  borderRadius: 10,
  backgroundColor: '#fff',
},

butao:{
  backgroundColor: '#7b1fa2',
  padding: 15,
  margin: 20,
  borderRadius: 10,
  alignItems: 'center',
},

butaoTexto:{
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},

resultadoContainer:{
  alignItems: 'center',
  marginTop: 20,
},

resultadoTexto:{
  fontSize: 22,
  fontWeight: 'bold',
}
</style>
