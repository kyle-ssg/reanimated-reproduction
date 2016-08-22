/**
 * Created by niallquinn on 22/08/2016.
 */

const TheComponent = class extends React.Component {
  displayName: 'TheComponent'

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  render () {
    return (

      <div>
        <h1>Source files</h1>
        <p>The bootstrap source files are currently located in the <code>node_modules</code> folder, which allows for easy updating via npm.</p>

        <h1>Project SCSS files</h1>
        <p>Specifiic <code>scss</code> files created for the project and custom styles live in the styles directory. Include what you want from bootstrap in the <code>_bootstrap.scss</code> file located in the 3rdParty folder.</p>

        <p>Create your own project specific styles and put them in the relevant directory ie. <code>project</code> folder</p>

        <p>We overwrite Bootstraps variables in the <code>_variables.sccs</code> file located in our styles directory.</p>

        <h1>Bootstrap JS files</h1>

        <blockquote>
          <p>Tried importing individual Bootstrap JS components via <code>libs.js</code> to allow for Plugins to be included individually but not currently working.</p>
          <footer>Niall <cite title="Source Title"></cite></footer>
        </blockquote>




      </div>

    );
  }
};

TheComponent.propTypes = {};

module.exports = TheComponent;

