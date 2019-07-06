import React,{Component} from "react";
import { Image, View, FlatList, Alert} from "react-native";
import { Container, Content, Text, List, Left, ListItem, TouchableHighlight } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "../Components/modalShow";

import { getByCategory } from '../publics/redux/actions/notes'
import { getCategory, deleteCategory } from '../publics/redux/actions/category'
import { connect } from 'react-redux'

class SideBar extends Component {

  confirmDeleteCategory(id){
    //handler for Long Click
    Alert.alert(
      'Warning !',
      'Are you sure delete this category ?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => this.deleteDataCategory(id)},
      ],
      {cancelable: false},
    );
  }

  deleteDataCategory(id) {
    this.props.dispatch(deleteCategory(id))
  }

  componentDidMount = () => {
    this.getDataCategory()
  }

  getDataCategory = () => {
    this.props.dispatch(getCategory())
  }

  pickCategory(id){
    this.props.dispatch(getByCategory(id))
    this.props.navigation.closeDrawer()
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{justifyContent:'center', alignItems:'center',margin:35}}>
            <Image
              style={{ marginTop:20, height: 130, width: 130, borderRadius: 80 }}
              source={
                require('../Assets/images/images.jpg')
              }
            />
            <Text style={{marginTop:20, marginBottom:20, fontSize:20}}>Maximilian Rodel</Text>
          </View>
          <View>
            <FlatList
              data={this.props.category.data}
              renderItem={({ item, index }) => (
                <ListItem
                  noBorder
                  onLongPress={() => this.confirmDeleteCategory(item.id)}
                  onPress={() => this.pickCategory(item.id)}>
                  <Left>
                    <Image
                      style={{ height: 30, width: 30, marginRight:14}}
                      source={
                        {uri:item.icon_image}
                      }
                    />
                    <Text style={{ fontSize: 18 }}>{item.category}</Text>
                  </Left>
                </ListItem>
              )}
            />
          </View>
          <List>
            <ListItem noBorder>
              <Left>
                <Icon
                  name='plus-circle'
                  style={{ color: "#000", fontSize: 28, width: 40, marginLeft:3 }}
                />
                <Modal />
              </Left> 
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ( state ) => {
  return (
    category: state.category
  )
}
export default connect(mapStateToProps)(SideBar);