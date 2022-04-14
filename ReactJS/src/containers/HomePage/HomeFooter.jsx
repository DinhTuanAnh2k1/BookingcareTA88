import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';
class HomeFooter extends Component {

    render() {
        
        return ( 
            <div className="home-footer">
                <p>&copy; 2022 TuanAnh88. More information, please visit my facebook.
                    <a target="_blank" href="https://www.facebook.com/tuananh12072001"> &#8594; Click here &#8592;</a>
                </p>
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);