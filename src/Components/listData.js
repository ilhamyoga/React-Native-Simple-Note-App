import React,{Component} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import items from '../Data/items';

class listData extends Component{
  render(){
    return(
      <View style={{flex: 1, margin: 5}}>
        <FlatList 
          data={items}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
              style={[styles.card,
                {backgroundColor:
                  (item.category == 'Learn')? '#2FC2DF' :
                  (item.category == 'Work')? '#C0EB6A' :
                  (item.category == 'Wishlist')? '#FAD06C' :
                  (item.category == 'Personal')? '#FF92A9' : '#FFF'
                }
              ]}
              onPress={() => this.props.navigation.navigate('EditNote', item)}>
              
              <View style={{flex:1, height:'100%', marginLeft:10}}>
                <View style={styles.timeView}>
                  <Text style={styles.text} numberOfLines={1}>{item.time}</Text>
                </View>
                <View style={styles.titleView}>
                  <Text style={[styles.text, {fontSize:20}]} numberOfLines={1}>{item.title}</Text>
                </View>
                <View style={styles.categoryView}>
                  <Text style={styles.text} numberOfLines={1}>{item.category}</Text>
                </View>
                <View style={styles.noteView}>
                  <Text style={styles.text} numberOfLines={4}>{item.note}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item,index)=>index.toString()}
        >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight : 10,
    marginBottom: 30,
    padding:11,
    borderRadius: 5,
    maxHeight: 170,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  timeView: {
    alignItems: 'flex-end',
    width:'100%'
  },
  titleView: {
    width:'100%'
  },
  categoryView: {
    width:'100%'
  },
  noteView: {
    marginTop:5,
    marginBottom:10,
    width:'100%'
  },
});

export default listData;