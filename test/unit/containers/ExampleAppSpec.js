import { renderComponent, expect } from '../testHelper';
import ExampleApp from '';

describe('ExampleApp', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(ExampleApp);
  });

  it('shows an input to add a new friend', () => {
    expect(component.find('.addFriendInput')).to.exist;
  });

  it('shows a friend list', () => {
    expect(component.find('.friendList')).to.exist;
  });
});
