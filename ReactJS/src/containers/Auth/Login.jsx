import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import{handleLoginApi} from '../../services/userService';
import { userLoginSuccess } from '../../store/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            isShowPassword: false,
            errMessage:''
        }
    }

    handleOnChangeUsername=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    handleLogin=async()=>{
        this.setState({
            errMessage:''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if(data && data.errCode!==0){
                this.setState({
                    errMessage:data.message
                })
            }
            if(data && data.errCode===0){
                this.props.userLoginSuccess(data.user)
            }
        } catch (e) {
            if(e.response){
                if(e.response.data){
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }
    }
    handleShowHidePassword=()=>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleKeyDown = (event)=>{
        if(event.key === 'Enter' || event.keyCode === 13){
            this.handleLogin();
        }
    }

    render() {
        //JSX
        return ( 
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">
                            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" className="form-control" placeholder="Enter your username" 
                            value={this.state.username} 
                            onChange={(event)=>this.handleOnChangeUsername(event)}/>
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input type={this.state.isShowPassword?'text':'password'} className="form-control" 
                                placeholder="Enter your password"
                                onChange={(event)=>this.handleOnChangePassword(event)}
                                onKeyDown={(event)=>this.handleKeyDown(event)}
                                />
                                <span onClick={()=>{this.handleShowHidePassword()}}>
                                    <i className={this.state.isShowPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                </span>
                                
                            </div>
                            
                        </div>
                        <div className="col-12" style={{color:'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button className="btn-login" onClick={()=>{this.handleLogin()}}>LOGIN</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12">
                            <div className="social">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter-square"></i></a>
                                <a href="#"><i className="fab fa-google"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess:(userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);