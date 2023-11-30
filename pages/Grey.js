import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Grey({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const name = 'british'; // You can replace this with the dynamic value if needed
  
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
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail Grey Cat', { msg: item.id })}>
            <View style={styles.oddItemListContainer}>
              <Image source={{ uri: item.image_link }} style={styles.ImageMovie} />
              <View style={styles.itemListContent}>
                <Text style={styles.itemListText}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    marginHorizontal: 20,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowColor: '#000000',
  },
  ImageMovie: {
    height: 70,
    width: 70,
    borderRadius: 60,
    marginVertical: 10,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListText: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 21,
  },
});

export default Grey;
