import { useState } from 'react';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import { LogoLight } from '../../components/Icons';

import styles from './Header.module.scss';
import images from '../../assets';
import {
    faAngleDown,
    faL,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PreviewProduct from '../../components/PreviewProduct/PreviewProduct';
import ProductHost from '../../components/PreviewProduct/ProductHost';

const cx = classNames.bind(styles);

function Header() {
    const typeArr = ['ĐÁ TỰ NHIÊN', 'ĐÁ NEOLITH', 'ĐÁ NHÂN TẠO'];
    const typeArry = ['ĐÁ TỰ NHIÊN', 'ĐÁ NEOLITH', 'ĐÁ NHÂN TẠO'];

    return (
        <div className={cx('container')}>
            <div className={cx('top-nav')}>
                <Link to={config.routes.home} className={cx('nav-item')}>
                    Trang ch
                </Link>
                <Link to={config.routes.product} className={cx('nav-item')}>
                    Sản phẩm
                </Link>
                <Link to={config.routes.project} className={cx('nav-item')}>
                    Dự án
                </Link>
                <Link to={config.routes.intro} className={cx('nav-item')}>
                    Bài viết
                </Link>
                <Link to={config.routes.contact} className={cx('nav-item')}>
                    Liên hệ
                </Link>
            </div>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <LogoLight />
                </div>
                <div className={cx('nav-product')}>
                    <div className={cx('item')}>
                        {typeArr.map((type, i) => (
                            <ProductHost key={i} data={i} name={type} />
                        ))}
                    </div>
                    <div className={cx('search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
