import React, { FunctionComponent } from 'react'
import Col from './grid/Col'
type ComponentType = {}
const SharedComponent: FunctionComponent<ComponentType> = ({}) => {
  return (
    <Fade autostart duration={10000} value={1}>
      <Row style={{ flexWrap: 'wrap' }}>
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
