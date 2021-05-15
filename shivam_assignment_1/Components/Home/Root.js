import * as React from 'react';
import { View, useWindowDimensions,Button } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tab1 from './Components/Home/Tab1'
import Tab2 from './Components/Home/Tab2'



export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

 
   const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'first':
        return <Tab1 jumpTo={jumpTo} />;
      case 'second':
        return <Tab2 jumpTo={jumpTo} />;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}