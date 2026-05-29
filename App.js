import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
   const [resultado, setResultado] = useState(0);
  const [valorTotal, setValorTotal] = useState('');
  const [taxaServico, setTaxaServico] = useState('');
  const [quantidadePessoas, setQuantidadePessoas] = useState('');
  

  const calcularValor = () => {
    const total = parseFloat(valorTotal) || 0;
    const taxa = parseFloat(taxaServico) || 0;
    const pessoas = parseInt(quantidadePessoas) || 1;

    const valorComTaxa = total + (total) * (taxa / 100);
    const valorPorPessoa = valorComTaxa / pessoas;

    setResultado(valorPorPessoa);  

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>
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

      <TouchableOpacity style={styles.button} onPress={calcularValor}>
        <Text style={styles.buttonText}>Calcular</Text>
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
const styles = StyleSheet.create({
container:{
backgroundColor:'fff',
alignItems:'center',
paddingTop:50,
},
header:{
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},
input:{
  borderWidth:1,
  borderColor:'#ccc',
  paddign:10,
  marginBottom:10,
  width:'90%',
  alignSelf:'center',
  borderRadius:5,
},
button:{
  backgroundColor: '#7b1fa2',
  padding: 15,
  borderRadius: 5,
  alignItems: 'center',
  marginBottom:20,
},

buttonText:{
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
});
