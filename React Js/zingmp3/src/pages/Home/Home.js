import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import images from '../../assets';
import { faAngleDown, faL, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('Slider')}>
                <Slider>
                    <div className={cx('slide-item-1')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('title-slider')}>Không gian kiến trúc đầy cảm hứng với đá tự nhiên</div>
                            <button className={cx('btn')}>Khám phá ngay</button>
                        </div>
                    </div>
                    <div className={cx('slide-item-2')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('title-slider')}>Phong cách nội thất hiện đại với đá nhân tạo</div>
                            <button className={cx('btn')}>Khám phá ngay</button>
                        </div>
                    </div>
                    <div className={cx('slide-item-3')}>
                        <div className={cx('slide-content')}>
                            <div className={cx('title-slider')}>Những tuyệt tác với Stonex</div>
                            <button className={cx('btn')}>Khám phá ngay</button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className={cx('about')}>
                <div data-aos="fade-right" className={cx('content-left')}>
                    <div className={cx('title-about')}>
                        Chúng tôi đem đến những sản phẩm chất lượng & giải pháp hiệu quả về đá cho không gian kiến trúc
                        Việt Nam đẹp và vững bền
                    </div>
                    <div className={cx('detail-content')}>
                        Stonex liên tục đổi mới để mang đến những sản phẩm đá có thẩm mỹ và chất lượng không chỉ cao
                        nhất mà còn luôn thích ứng với không gian sống ngày càng thay đổi. Đó cũng là nhờ những giải
                        pháp linh hoạt hiệu quả mà Stonex đem lại cho khách hàng dù là nhà thầu xây dựng lớn hay một
                        kiến trúc sư tài năng độc lập.
                    </div>
                    <button className={cx('btn')}>Tìm hiểu thêm về Stonex</button>
                </div>
                <div data-aos="fade-left" className={cx('content-right')}>
                    <img className={cx('img-about')} src={images.intro1} alt="about1" />
                </div>
            </div>
            <div className={cx('product')}>
                <div className={cx('title')}>Sản phẩm</div>
                <div className={cx('container')}>
                    <div className={cx('item-product')}>
                        <div data-aos="fade-right" className={cx('img-product')}>
                            <img className={cx('img')} src={images.product1} alt="product1" />
                        </div>
                        <div data-aos="fade-left" className={cx('detail-product')}>
                            <div className={cx('title-item')}>Đá tự nhiên</div>
                            <div className={cx('detail-item')}>
                                Hoa cương, trầm tích hay cẩm thạch. Mỗi tấm đá là sự đúc kết cả ngàn năm, triệu năm lịch
                                sử trái đất. Rồi vẻ đẹp thô mộc của tự nhiên đó được gọt giũa, chế tác bởi sư sáng tạo,
                                niềm đam mê của Stonex.
                            </div>
                            <button className={cx('btn')}>Xem them</button>
                        </div>
                    </div>
                    <div className={cx('item-product')}>
                        <div data-aos="fade-right" className={cx('detail-product')}>
                            <div className={cx('title-item')}>Đá tự nhiên</div>
                            <div className={cx('detail-item')}>
                                Hoa cương, trầm tích hay cẩm thạch. Mỗi tấm đá là sự đúc kết cả ngàn năm, triệu năm lịch
                                sử trái đất. Rồi vẻ đẹp thô mộc của tự nhiên đó được gọt giũa, chế tác bởi sư sáng tạo,
                                niềm đam mê của Stonex.
                            </div>
                            <button className={cx('btn')}>Xem them</button>
                        </div>
                        <div data-aos="fade-left" className={cx('img-product')}>
                            <img className={cx('img')} src={images.product1} alt="product1" />
                        </div>
                    </div>
                    <div className={cx('item-product')}>
                        <div data-aos="fade-right" className={cx('img-product')}>
                            <img className={cx('img')} src={images.product1} alt="product1" />
                        </div>
                        <div data-aos="fade-left" className={cx('detail-product')}>
                            <div className={cx('title-item')}>Đá tự nhiên</div>
                            <div className={cx('detail-item')}>
                                Hoa cương, trầm tích hay cẩm thạch. Mỗi tấm đá là sự đúc kết cả ngàn năm, triệu năm lịch
                                sử trái đất. Rồi vẻ đẹp thô mộc của tự nhiên đó được gọt giũa, chế tác bởi sư sáng tạo,
                                niềm đam mê của Stonex.
                            </div>
                            <button className={cx('btn')}>Xem them</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'white', height: '300px' }} className={cx('project')}>
                Tính năng này chuẩn bị có
            </div>
            <div className={cx('more-info')}></div>
        </div>
    );
}

export default Home;
