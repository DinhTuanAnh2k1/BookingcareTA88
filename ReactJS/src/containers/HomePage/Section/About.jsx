import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';
class About extends Component {

    render() {
        
        return ( 
            <div className="section-share section-about">
                <div className="section-about-header">
                <FormattedMessage id="homepage.flo"/>
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px" 
                        src="https://www.youtube.com/embed/WKjiaqaIC9E" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Hiện mình đang là sinh viên năm 3 của HVCN Bưu Chính Viễn Thông.
                            Mình theo học công nghệ thông tin của trường tính đến nay là năm 
                            thứ 3. Điểm của mình rất rất kém ạ, hiện tại là là mức trung bình. 
                            Mình không có một định hướng nghề nghiệp gì cho bản thân cả.
                            Mình thấy bản thân mình không bằng bạn bằng bè quá nhiều. Lực 
                            học rồi đến cả sự cố gắng cũng không đủ. Hay bỏ dở giữa chừng, chẳng 
                            làm cái gì ra hồn và đúng là mình chưa bao giờ làm được chuyện gì 
                            ra hồn cả ạ. Mấy năm là sinh viên đi học, mình mải nghiên cứu liên quân
                            mà bỏ học trên lớp. Mình không lên lớp nghe giảng, đi thi cuối 
                            kì môn được thi môn không. Môn được thi mình thi chỉ đủ điểm qua. Có 
                            nhưng môn mình học lại đến lần thứ 3 mà vẫn k qua. Mấy ngôn ngữ học 
                            trên trường hiện tại mình cũng chỉ biết một chút về ngôn ngữ C.
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);