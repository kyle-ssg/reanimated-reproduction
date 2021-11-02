import React, { FunctionComponent } from 'react'
import Button from 'mobile/app/components/base/forms/Button'
import TextInput from 'mobile/app/components/base/forms/TextInput'

type ComponentType = {}
const SharedComponent: FunctionComponent<ComponentType> = ({}) => {
  // <Fade duration={5000} value={1} autostart> Currently breaks storybook
  return (
    <>
      <TextInput title="test" value="test"/>
      <Row>
        <Text style={Styles.mr5}>Hi2</Text>
        <View style={[{ flex: 1, height: 10, backgroundColor: 'red' }]} />
      </Row>
      <Button style={{width:100}} onPress={()=>alert("")}>
        Hi
      </Button>
    </>

  )
}

export default SharedComponent
