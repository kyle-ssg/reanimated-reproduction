import BigDataExample from '../examples/BigDataExample';
import LoginExample from '../examples/LoginExample/LoginExample';
import ShareExample from '../examples/ShareExample';
import ModalExample from '../examples/ModalExample';
import NavigableList from '../examples/NavigableList';
import InfiniteScrollExample from '../examples/InfiniteScrollExample';
import PagedListExample from '../examples/PagedListExample';
import MaterialExample from '../examples/FormExamples';
import ReverseInfiniteScrollExample from '../examples/ReverseInfiniteScrollExample';
import Sortable from '../examples/Sortable';
import ToastExample from '../examples/ToastExample';
import GridExample from '../examples/GridExample';

module.exports = class extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = { route: 'login' };
  }

  render = () => (
    <div>
      <Link to="layout">Example Link</Link>
      <NavigableList/>
      <Divider/>
      <InfiniteScrollExample/>
      <Divider/>
      <ReverseInfiniteScrollExample/>
      <Divider/>
      <PagedListExample/>
      <Divider/>
      <BigDataExample/>
      <Divider/>
      <LoginExample/>
      <Divider/>
      <ShareExample/>
      <Divider/>
      <ModalExample/>
      <Divider/>
      <MaterialExample/>
      <ToastExample/>
      <Divider/>
      <GridExample/>
    </div>
  )
};
