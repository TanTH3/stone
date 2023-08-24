import { useState } from 'react';
import classNames from 'classnames/bind';
import config from '../../config';
import { Link } from 'react-router-dom';
import { LogoDark } from '../../components/Icons';

import styles from './Footer.module.scss';
import images from '../../assets';
import {
    faAngleDown,
    faL,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <LogoDark />
                </div>
                <div className={cx('info-company')}>
                    <div className={cx('address')}>
                        <div className={cx('title')}>
                            CÔNG TY CỔ PHẦN ĐÁ TỰ NHIÊN VNS
                        </div>
                        <div className={cx('address-detail')}>
                            Địa chỉ ĐKKD: Số 137C, Phố Nguyễn Công Thái, Phường
                            Đại Kim, Quận Hoàng Mai, Hà Nội
                        </div>
                        <div className={cx('address-detail')}>
                            Địa chỉ nhà máy: Khu công nghiệp Trường An, An
                            Khánh, Hoài Đức, Hà Nội
                        </div>
                        <div className={cx('address-detail')}>
                            (+84) 24 6259 7010
                        </div>
                    </div>
                    <div className={cx('nav-footer')}>
                        <Link
                            to={config.routes.home}
                            className={cx('nav-item')}
                        >
                            Trang chủ
                        </Link>
                        <Link
                            to={config.routes.product}
                            className={cx('nav-item')}
                        >
                            Sản phẩm
                        </Link>
                        <Link
                            to={config.routes.project}
                            className={cx('nav-item')}
                        >
                            Dự án
                        </Link>
                        <Link
                            to={config.routes.intro}
                            className={cx('nav-item')}
                        >
                            Bài viết
                        </Link>
                        <Link
                            to={config.routes.contact}
                            className={cx('nav-item')}
                        >
                            Liên hệ
                        </Link>
                    </div>
                    <div className={cx('connect')}>
                        <span className={cx('title')}>Ket noi</span>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                © Stonex 2020. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
