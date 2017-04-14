import React, { Component } from 'react';
import  {
  View
  ,Dimensions,
  AppRegistry,
  StyleSheet,TouchableOpacity,Text,requireNativeComponent
} from 'react-native';

import Base from './Base';


var TableView = requireNativeComponent('listview', null);

// var Section = TableView.Section;
// var Item = TableView.Item;


import * as Helper from '../common/utils';
import * as StyleHelper from '../common/styleHelper';




var {height, width} = Dimensions.get('window');


class ListRow extends Base {
    baseRender(){
        var style = {};
        // Fill the full native table cell height.
        style.flex = 1;

        // All Item props get passed to this cell inside this.props.data. Use them to control the rendering, for example background color:
        if (this.props.data.backgroundColor !== undefined) {
            style.backgroundColor = this.props.data.backgroundColor;
        }

        return (
           <View style={style}>
             <Text>Row {this.props.data.rowIndex}</Text>
           </View>
       );
    }
}



class xzListView extends Base {
  constructor(props) {
    super(props)
  
  }

 
  baseRender() {
    
    var items=[];

    // for(var i=0;i<4000;i++){
    //   items.push(<Item rowIndex = {i}></Item>);
    // }
     return (<TableView>
            </TableView>);

    // return (<TableView style={{flex:1}}
    //     reactModuleForCell="ListRow" 
    //                    allowsToggle={true}
    //                    allowsMultipleSelection={true}
    //                    tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
    //                    onPress={(event) => console.log(event)}>
    //                      <Section label="Section 2">
    //           {items}
    //       </Section>
    //         </TableView>);
  }
}

AppRegistry.registerComponent('ListRow', () => ListRow);
module.exports = xzListView;





