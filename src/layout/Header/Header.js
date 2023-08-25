import { useState } from 'react';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import { LogoLight } from '../../components/Icons';

import styles from './Header.module.scss';
import images from '../../assets';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config';
import ProductHost from '../../components/PreviewProduct/ProductHost';
import Portal from '../../components/Portal/Portal';
import Modal from '../../components/Modal/Modal';

const cx = classNames.bind(styles);

function Header() {
    const [visible, setVisible] = useState(false);
    const handleSetModal = () => {
        setVisible((prev) => !prev);
    };
    const typeArr = ['ĐÁ TỰ NHIÊN', 'ĐÁ NEOLITH', 'ĐÁ NHÂN TẠO'];
    const typeArry = ['ĐÁ TỰ NHIÊN', 'ĐÁ NEOLITH', 'ĐÁ NHÂN TẠO'];

    return (
        <div className={cx('container')}>
            <Portal visible={visible} setVisible={setVisible}>
                <Modal OnInCrease={handleSetModal} />
            </Portal>
            <div className={cx('top-nav')}>
                <Link to={config.routes.home} className={cx('nav-item')}>
                    Trang chủ
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
                <div className={cx('mobile-option')} onClick={handleSetModal}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    );
}

export default Header;
