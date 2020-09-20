import React, { FunctionComponent, useCallback, useRef, useState } from 'react'; // we need this to make JSX compile
import Animated, {
  and,
  useValue,
  useCode,
  Transitioning,
  cond,
  eq,
  set,
  Easing,
  block,
  not,
  proc, Transition, TransitioningView,
} from 'react-native-reanimated';
import {
  timing, useClock,
  useConst,
} from 'react-native-redash';
import { FlatList } from 'react-native';
type ComponentType = {}
import FastList from 'dcd-fast-list'
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const TheComponent: FunctionComponent<ComponentType> = ({}) => {
  const ref = useRef<TransitioningView>(null)
  const [added, setAdded] = useState("Row")
  const toggleValue = useCallback(()=>{
    if (ref.current){
      ref.current.animateNextTransition()
    }
    setAdded(added === "Row"? "Column":"Row");
  },[
    added
  ]);
  const transition = <Transition.Change durationMs={350} interpolation="easeInOut"/>
  const items = [0,1,2]

  const renderItem = (section, row)=> {
    return (
        <View key={row} style={[styles.card, styles[`card${added}`]]}>
            <Flex style={styles.cardInner}>
                <Text>{row} {added}</Text>
            </Flex>
        </View>
    )
  }
  return (
      <>
          <Flex>
              <Transitioning.View style={{ flex:1 }} {...{ ref,transition }}>
                  <ScrollView
                    contentContainerStyle={[styles.container, styles[`container${added}`]]}
                  >

                      <View style={[styles.card, styles[`card${added}`]]}>
                          <Flex style={styles.cardInner}>
                              <Text style={{ fontSize:12 }}>Row</Text>
                          </Flex>
                      </View>
                      <View style={[styles.card, styles[`card${added}`]]}>
                          <Flex style={styles.cardInner}>
                              <Text style={{ fontSize:12 }}>Row</Text>
                          </Flex>
                      </View>
                      <View style={[styles.card, styles[`card${added}`]]}>
                          <Flex style={styles.cardInner}>
                              <Text style={{ fontSize:12 }}>Row</Text>
                          </Flex>
                      </View>
                  </ScrollView>
              </Transitioning.View>
          </Flex>
          <Button onPress={toggleValue}>
              Do thing
          </Button>
      </>
  );
};

const CONTAINER_PADDING = 10;
const styles = ReactNative.StyleSheet.create({
  card: {
    height:Dimensions.get("window").height /3 - 40,
    padding:5,
    aspectRatio:1.5/1,
  },
  cardRow: {
    padding:5,
    flex:0,
    width: Dimensions.get("window").width/2 - CONTAINER_PADDING,
  },
  cardInner: {
    backgroundColor:palette.secondary,
  },
  container: {
    flex:1,
    padding:CONTAINER_PADDING,
  },
  containerRow: {
    flexDirection:"row",
    alignItems:'center',
    flexWrap:'wrap'
  }
});
export default TheComponent;
