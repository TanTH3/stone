import { useState } from 'react';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import images from '../../assets';
import { faAngleDown, faL, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Footer() {
    const [hideImg, setHideImg] = useState(false);

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="137px"
                        height="29px"
                        viewBox="0 0 137 29"
                        version="1.1"
                        class=""
                    >
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Footer" transform="translate(-375.000000, -85.000000)">
                                <g id="footer-logo" transform="translate(375.000000, 85.000000)">
                                    <polygon
                                        id="Path"
                                        fill="#998543"
                                        points="8.4122807 0.02929692 0 14.42928 8.4122807 14.42928 16.8245614 0.02929692"
                                    ></polygon>
                                    <polygon
                                        id="Path"
                                        fill="#998543"
                                        points="8.4122807 14.42928 0 28.82928 8.4122807 28.82928 16.8245614 14.42928"
                                    ></polygon>
                                    <path
                                        d="M75.6295281,14.41668 C75.680843,10.923684 72.9261816,7.935324 69.200743,7.92536472 C65.6012482,7.915884 62.7389096,10.817628 62.7524414,14.41512 C62.7659491,18.0396 65.5706035,20.85708 69.1806737,20.8731045 C72.8085298,20.88864 75.6224377,18.07152 75.6295281,14.41668 Z M79.8076775,14.43828 C79.7568333,20.51556 74.6975675,24.95616 68.730857,24.72456 C63.0073816,24.50232 58.2426658,19.83696 58.6188149,13.7094 C58.9392026,8.49174 63.4940921,3.717708 69.9901754,4.13394 C75.3840096,4.479108 79.8153588,8.812716 79.8076775,14.43828 Z"
                                        id="Shape"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M96.683664,4.741692 C98.0475351,4.581852 99.364057,4.427412 100.710743,4.2693 L100.710743,25.15764 C96.2954974,21.03348 91.9200298,16.94676 87.4690921,12.78948 L87.4690921,24.32184 L83.4355237,24.32184 L83.4355237,3.684372 C87.8513702,7.789884 92.2312842,11.8617 96.683664,16.00092 L96.683664,4.741692 Z"
                                        id="Path"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M117.355882,8.071416 L109.57969,8.071416 L109.57969,12.39576 L115.890944,12.39576 L115.890944,15.9936 L109.585339,15.9936 L109.585339,20.70768 L117.670982,20.70768 C117.486153,21.93348 117.307932,23.11428 117.127789,24.3084 L105.566432,24.3084 L105.566432,4.533984 L116.78565,4.533984 C116.973725,5.7006 117.161919,6.867648 117.355882,8.071416 Z"
                                        id="Path"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M38.7533342,9.173364 C37.6769228,8.728188 36.6413711,8.25234 35.5710886,7.873908 C34.7978798,7.600668 33.9764807,7.488348 33.1454675,7.65618 C32.1809395,7.850796 31.5342754,8.432916 31.3838158,9.248964 C31.2060763,10.212972 31.5440096,11.096628 32.4200886,11.576364 C33.1193895,11.9589 33.8853877,12.2328 34.6421325,12.4974 C35.6713149,12.85728 36.692686,13.21668 37.5984482,13.84452 C40.4414386,15.81624 40.9347588,20.01012 38.6221026,22.58544 C37.0187219,24.37092 34.9365623,24.83424 32.6525079,24.69948 C30.6584368,24.58188 28.8622947,23.87364 27.1916158,22.81272 C26.9945281,22.68744 26.9060789,22.566 26.9475395,22.32972 C27.1483526,21.18516 27.3381096,20.03904 27.5434895,18.82428 C27.7142588,18.9504 27.8585895,19.05732 28.0032807,19.1634 C29.4088526,20.19372 30.9272693,20.96172 32.692286,21.15684 C33.4127377,21.23628 34.1181675,21.1992 34.7835789,20.87928 C36.3904447,20.10732 36.5883737,17.96952 35.0706781,17.02668 C34.2537254,16.51956 33.2977298,16.21884 32.381993,15.8868 C31.1848053,15.45288 30.0191035,14.97708 29.1070921,14.05692 C27.6405912,12.57732 27.1572456,10.774356 27.5488974,8.775492 C28.0356079,6.291708 30.0160991,4.55226 32.5465132,4.210332 C34.8746719,3.89562 37.0325421,4.430004 39.1014825,5.440236 C39.2039921,5.490132 39.3111886,5.68734 39.2946044,5.798364 C39.1246763,6.948132 38.9299921,8.09466 38.7533342,9.173364 Z"
                                        id="Path"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M56.7684737,8.278104 L51.4967377,8.278104 L51.4967377,24.31824 L47.5376781,24.31824 L47.5376781,8.278104 L42.2661825,8.278104 C42.4691588,7.010184 42.6595167,5.771424 42.858407,4.524024 L56.1762491,4.524024 C56.3751395,5.771424 56.5654974,7.010184 56.7684737,8.278104 Z"
                                        id="Path"
                                        fill="#FFFFFF"
                                    ></path>
                                    <polygon
                                        id="Path"
                                        fill="#FFFFFF"
                                        points="131.042904 14.42304 136.811325 24.23136 131.912974 24.23136 128.591325 18.58428 125.269675 24.23136 120.366518 24.23136 126.139746 14.42304 120.366518 4.61016 125.269675 4.61016 128.591325 10.25748 131.912974 4.61016 136.811325 4.61016"
                                    ></polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={cx('info-company')}>
                    <div className={cx('address')}>
                        <div className={cx('title')}>CÔNG TY CỔ PHẦN ĐÁ TỰ NHIÊN VNS</div>
                        <div className={cx('address-detail')}>
                            Địa chỉ ĐKKD: Số 137C, Phố Nguyễn Công Thái, Phường Đại Kim, Quận Hoàng Mai, Hà Nội
                        </div>
                        <div className={cx('address-detail')}>
                            Địa chỉ nhà máy: Khu công nghiệp Trường An, An Khánh, Hoài Đức, Hà Nội
                        </div>
                        <div className={cx('address-detail')}>(+84) 24 6259 7010</div>
                    </div>
                    <div className={cx('nav-footer')}>
                        <div className={cx('nav-item')}>Trang chủ</div>
                        <div className={cx('nav-item')}>Sản phẩm</div>
                        <div className={cx('nav-item')}>Dự án</div>
                        <div className={cx('nav-item')}>Bài viết</div>
                        <div className={cx('nav-item')}>Liên hệ</div>
                    </div>
                    <div className={cx('connect')}>
                        <span className={cx('title')}>Ket noi</span>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>© Stonex 2020. All rights reserved.</div>
        </div>
    );
}

export default Footer;