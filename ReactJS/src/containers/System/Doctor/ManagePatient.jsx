import React, { Component } from 'react';
import { connect } from "react-redux";
import {FormattedMessage} from 'react-intl';
import './ManagePatient.scss';
import DatePicker from '../../../components/Input/DatePicker';
class ManagePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
        }
    }

    async componentDidMount(){
        
    }

    
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.language !== prevProps.language){
            
        }
        
    }

    handleOnChangeDatePicker=(date) => {
        this.setState({
            currentDate: date[0]
        })
    }
    
    render() {

        return (
            <div className="manage-patient-container">
                <div className="m-p-title">
                    Quản lý bệnh nhân khám bệnh
                </div>
                <div className="manage-patient-boy row">
                    <div className="col-4 form-group">
                        <label>Chọn nhày khám</label>
                        <DatePicker
                            onChange={this.handleOnChangeDatePicker}
                            className="form-control"
                            value={this.state.currentDate}
                        />
                    </div>
                    <div className="col-12 table-manage-patient">
                        <table style={{width: '100%'}}>
                            <tr>
                                <th>Name</th>
                                <th colSpan="2">telephone</th>
                            </tr>
                            <tr>
                                <td>Bill gates</td>
                                <td>5555555</td>
                                <td>4444444</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
