import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const DetailOren = ({ route }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const name = 'abyssinian'; // You can replace this with the dynamic value if needed
  
    fetch('https://api.api-ninjas.com/v1/cats?name=' + name, {
      headers: {
        'X-Api-Key': 'e3QMIlCkFQy1ykKjDuakww==1KYDSov6xsMxJ4N0',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <View style={styles.bg}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.img} />
              <Text style={styles.textJudul}>{item.name}</Text>
              <Text style={styles.text1}>Sound </Text>
              <Text style={styles.text2}>{item.sound}</Text>
              <Text style={styles.text1}>Price </Text>
              <Text style={styles.text2}>{item.price}</Text>
              <Text style={styles.text1}>Description </Text>
              <Text style={styles.text2}>{item.detail}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text1: { color: '#434655', fontSize: 18, marginBottom: 1, fontWeight: '600' },
  text2: { color: '#434655', fontSize: 14, marginBottom: 4 },
  textnama: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    opacity: 0.7,
  },
  bg: {
    backgroundColor: '#F6F6F6',
  },
  textJudul: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    alignSelf: 'center',
    opacity: 0.8,
  },
  img: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginTop: 18,
    marginHorizontal: 15,
    padding: 30,
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowColor: '#000000',
    marginBottom: 20,
  },
});

export default DetailOren;