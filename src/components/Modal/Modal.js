import { useState } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '../../assets';
import styles from './Modal.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import { LogoLight } from './../Icons';
import Modal2 from '../Modal2/Modal2';
import Portal from '../Portal/Portal';

const cx = classNames.bind(styles);
function Modal({ OnInCrease }) {
    const [visible, setVisible] = useState(false);
    const handleSetModal = () => {
        setVisible((prev) => !prev);
        OnInCrease();
    };
    const handleLogger = () => {
        OnInCrease();
    };

    return (
        <div className={cx('modal')}>
            <Portal visible={visible} setVisible={setVisible}>
                <Modal2 HandleMd2={handleSetModal} HandleMd1={handleLogger} />
            </Portal>
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
                    <div onClick={handleSetModal} className={cx('type')}>
                        ĐÁ TỰ NHIÊN
                    </div>
                </div>
                <div className={cx('item')}>
                    <img
                        className={cx('img')}
                        src={images.product1}
                        alt="pro1"
                    />
                    <div onClick={handleSetModal} className={cx('type')}>
                        ĐÁ TỰ NHIÊN
                    </div>
                </div>
                <div className={cx('item')}>
                    <img
                        className={cx('img')}
                        src={images.product1}
                        alt="pro1"
                    />
                    <div onClick={handleSetModal} className={cx('type')}>
                        ĐÁ TỰ NHIÊN
                    </div>
                </div>
            </div>
            <div className={cx('nav')}>
                <Link
                    onClick={handleLogger}
                    to={config.routes.home}
                    className={cx('nav-item')}
                >
                    Trang chủ
                </Link>
                <Link
                    onClick={handleLogger}
                    to={config.routes.product}
                    className={cx('nav-item')}
                >
                    Sản phẩm
                </Link>
                <Link
                    onClick={handleLogger}
                    to={config.routes.project}
                    className={cx('nav-item')}
                >
                    Dự án
                </Link>
                <Link
                    onClick={handleLogger}
                    to={config.routes.intro}
                    className={cx('nav-item')}
                >
                    Bài viết
                </Link>
                <Link
                    onClick={handleLogger}
                    to={config.routes.contact}
                    className={cx('nav-item')}
                >
                    Liên hệ
                </Link>
            </div>
        </div>
    );
}

export default Modal;
