import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';
import Slider from 'react-slick';
class OutStandingDoctor extends Component {

    render() {
        
        return ( 
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-docter"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Gs, Tiến sĩ Tuấn Anh 88</div>
                                        <div>Khoa Trĩ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-docter"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>GS, Tiến sĩ Tuấn Anh 88</div>
                                        <div>Khoa Trĩ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-docter"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>GS, Tiến sĩ Tuấn Anh 88</div>
                                        <div>Khoa Trĩ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-docter"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>GS, Tiến sĩ Tuấn Anh 88</div>
                                        <div>Khoa Trĩ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-docter"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>GS, Tiến sĩ Tuấn Anh 88</div>
                                        <div>Khoa Trĩ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-docter"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>GS, Tiến sĩ Tuấn Anh 88</div>
                                        <div>Khoa Trĩ</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);