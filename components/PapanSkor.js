import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import SkorTim from './SkorTim';

const PapanSkor = ({ timA, timB }) => {
  const [skorA, setSkorA] = useState(0);
  const [skorB, setSkorB] = useState(0);
  const [pemenang, setPemenang] = useState(null);
  const [animasiNilai] = useState(new Animated.Value(1));

  useEffect(() => {
    if (skorA >= 10) {
      setPemenang(timA);
    } else if (skorB >= 10) {
      setPemenang(timB);
    } else {
      setPemenang(null);
    }

    Animated.sequence([
      Animated.timing(animasiNilai, { toValue: 1.2, duration: 200, useNativeDriver: true }),
      Animated.timing(animasiNilai, { toValue: 1, duration: 200, useNativeDriver: true })
    ]).start();
  }, [skorA, skorB, timA, timB]);

  const ubahSkor = (tim, jumlah) => {
    if (tim === 'A') {
      setSkorA(prev => Math.max(0, Math.min(prev + jumlah, 10)));
    } else {
      setSkorB(prev => Math.max(0, Math.min(prev + jumlah, 10)));
    }
  };

  const resetSkor = () => {
    setSkorA(0);
    setSkorB(0);
    setPemenang(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Papan Skor Futsal</Text>
      <View style={styles.skorContainer}>
        <SkorTim 
          namaTim={timA} 
          skor={skorA} 
          onTambah={() => ubahSkor('A', 1)}
          onKurang={() => ubahSkor('A', -1)}
        />
        <SkorTim 
          namaTim={timB} 
          skor={skorB} 
          onTambah={() => ubahSkor('B', 1)}
          onKurang={() => ubahSkor('B', -1)}
        />
      </View>
      {pemenang && (
        <Animated.Text style={[styles.teksPemenang, { transform: [{ scale: animasiNilai }] }]}>
          {pemenang} Menang!
        </Animated.Text>
      )}
      <TouchableOpacity style={styles.tombolReset} onPress={resetSkor}>
        <Text style={styles.teksTombolReset}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
  },
  judul: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  skorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  teksPemenang: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  tombolReset: {
    backgroundColor: '#FF6347',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  teksTombolReset: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PapanSkor;

