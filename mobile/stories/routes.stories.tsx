import { getStory, withNavbarWrapper, withPaddedContainer } from './setup'
import ListItem from 'components/base/ListItem'
import React from 'react'

getStory('Lists')
  .addDecorator(withPaddedContainer)
  .addDecorator(withNavbarWrapper)
  .add('all', () => (
    <>
      <ListItem
        icon={<FA5Pro name='plus' size={20} color={palette.primary} light />}
      >
        <Text>List Item text</Text>
      </ListItem>
      <ListItem>
        <Text>List Item text</Text>
      </ListItem>
    </>
  ))
