import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import styles from './Product.module.scss';
import images from '../../assets';
import {
    faAngleDown,
    faL,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>San pham</div>
            <div className={cx('content')}>sdf</div>
        </div>
    );
}

export default Product;
