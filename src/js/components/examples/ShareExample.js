/**
 * Created by kylejohnson on 24/07/2016.
 */

import Share from '../../apis/share/share';

module.exports = class extends React.Component {

    facebookShare = () => {
      Share.Facebook('https://solidstategroup.com');
    }

    twitterShare = () => {
        Share.Twitter('https://solidstategroup.com');
    }

    render() {
        return (
            <div>
                <h1>Simple Share Example</h1>
                <div className="btn-group">
                    <button onClick={this.facebookShare} className="btn">
                        Facebook
                    </button>
                    <button onClick={this.twitterShare} className="btn">
                        Twitter
                    </button>
                </div>
            </div>
        );
    }
};