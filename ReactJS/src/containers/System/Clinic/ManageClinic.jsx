import React, { Component } from 'react';
import { connect } from "react-redux";
import {FormattedMessage} from 'react-intl';
import './ManageClinic.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import {CommonUtils} from '../../../utils';
import {createNewClinic} from '../../../services/userService';
import {toast} from 'react-toastify';

const mdParser = new MarkdownIt();

class ManageClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
        }
    }

    async componentDidMount(){
        
    }

    
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.language !== prevProps.language){
            
        }
        
    }

    handleOnChangeInput = (event, id)=> {
        let stateCopy = {...this.state};
        stateCopy[id]= event.target.value;
        this.setState({
            ...stateCopy
        })
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionMarkdown: text,
            descriptionHTML: html,
        })
    }

    handleOnChangeImage = async(event)=>{
        let data = event.target.files;
        let file = data[0];
        if(file){
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imageBase64: base64
            })
        }
    }
    handleSaveNewSpecialty = async()=>{
        let res = await createNewClinic(this.state)
        console.log(this.state)
        if(res&& res.errCode ===0){
            toast.success('Add new specialty success')
            this.setState({
                name: '',
                address: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
            })
        }
        else{
            toast.error('Someting wrongs.....')
        }
        
    }
    
    render() {

        return(

            <div className="manage-specialty-container">
                <div className="ms-title">Qu???n l?? ph??ng kh??m</div>

                <div className="add-new-specialty row">
                    <div className="col-6 form-group">
                        <label>T??n ph??ng kh??m</label>
                        <input type="text" className="form-control"
                            value={this.state.name}
                            onChange={(event)=>this.handleOnChangeInput(event, 'name')}
                        ></input>
                    </div>
                    <div className="col-6 form-group">
                        <label>???nh ph??ng kh??m</label>
                        <input type="file" className="form-control-file"
                            onChange={(event)=>this.handleOnChangeImage(event)}
                        ></input>
                    </div>
                    <div className="col-6 form-group">
                        <label>?????a ch??? ph??ng kh??m</label>
                        <input type="text" className="form-control"
                            value={this.state.address}
                            onChange={(event)=>this.handleOnChangeInput(event, 'address')}
                        ></input>
                    </div>
                    <div className="col-12">
                        <MdEditor
                            style={{height: '300px' }}
                            renderHTML={text => mdParser.render(text)} 
                            onChange={this.handleEditorChange} 
                            value = {this.state.contentMarkdown}    
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn-save-specialty"
                            onClick={()=>this.handleSaveNewSpecialty()}
                        >Save</button>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
