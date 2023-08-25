import { useState } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '../../assets';
import styles from './Modal2.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import { LogoLight } from './../Icons';

const cx = classNames.bind(styles);
function Modal2({ HandleMd2, HandleMd1 }) {
    const handleLogger = () => {
        HandleMd2();
    };
    const handleMd1 = () => {
        HandleMd1();
    };

    return (
        <div className={cx('modal')}>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <LogoLight />
                </div>
                <div className={cx('exit')} onClick={handleLogger}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className={cx('product')}>
                <div className={cx('item')}>
                    <img
                        className={cx('img')}
                        src={images.product1}
                        alt="pro1"
                    />
                    <div onClick={handleMd1} className={cx('type')}>
                        ĐÁ TỰ NHIÊN
                    </div>
                </div>
                <div className={cx('item')}>
                    <img
                        className={cx('img')}
                        src={images.product1}
                        alt="pro1"
                    />
                    <div className={cx('type')}>ĐÁ TỰ NHIÊN</div>
                </div>
                <div className={cx('item')}>
                    <img
                        className={cx('img')}
                        src={images.product1}
                        alt="pro1"
                    />
                    <div className={cx('type')}>ĐÁ TỰ NHIÊN</div>
                </div>
            </div>
        </div>
    );
}

export default Modal2;
