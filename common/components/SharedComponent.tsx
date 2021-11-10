import React, { FunctionComponent } from 'react'
import Button from 'mobile/app/components/base/forms/Button'
import Col from './grid/Col'
type ComponentType = {}
const SharedComponent: FunctionComponent<ComponentType> = ({}) => {
  // <Fade duration={5000} value={1} autostart> Currently breaks storybook
  return (
    <Fade autostart duration={10000} value={1}>
      <View>
        <Col md={6} mdOffset={3} xl={4} xlOffset={4}>
          <Button>I am a React Native Button</Button>
        </Col>
      </View>
      <Row>
        <Col md={3}>
          <Text>md 3</Text>
        </Col>
        <Col md={4} mdOffset={2}>
          <Text>md-4 md-offset-2</Text>
        </Col>
        <Col lgHidden>
          <Text>lg-hidden</Text>
        </Col>
        <Col xsHidden lgBlock>
          <Text>lg-block</Text>
        </Col>
      </Row>
    </Fade>
  )
}

export default SharedComponent
