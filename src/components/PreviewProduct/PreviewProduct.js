import PropTypes from 'prop-types';
import images from '../../assets';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PreviewProduct.module.scss';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Image from '~/components/Image';
// import { TickBlueIcon } from '~/components/Icons';
// import Button from '~/components/Button';
// import Modal from '~/layouts/components/Modal';

const cx = classNames.bind(styles);

function PreviewProduct({ data, name }) {
    // const context = useContext(ThemeContext);
    const [visible, setVisible] = useState(false);
    let dataPreview = {
        srcImg: '',
        nameStone: '',
    };
    // const arrType = [Sandstone, Marble, Travertine, Granite, Basalt];
    switch (data) {
        case 0:
            dataPreview = {
                srcImg: `${images.product1}`,
                nameStone: 'ĐÁ TỰ NHIÊN',
            };
            break;
        case 1:
            dataPreview = {
                srcImg: `${images.product2}`,
                nameStone: 'ĐÁ nhaan tajo',
            };
            break;
        case 2:
            dataPreview = {
                srcImg: `${images.product3}`,
                nameStone: 'ĐÁ nhaan asdjkhg',
            };
            break;
        default:
            console.log(`Sorry, we are out of .`);
    }
    return (
        <div className={cx('preview')}>
            <div className={cx('product')}>
                <img
                    className={cx('img')}
                    src={dataPreview.srcImg}
                    alt="natural"
                />
                <div className={cx('name')}>{name}</div>
                <div className={cx('link')}>
                    Sản phẩm <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <div className={cx('more-option')}>
                <div className={cx('type')}>
                    <div className={cx('title')}>Loại đá</div>
                </div>
                <div className={cx('color')}>
                    <div className={cx('title')}>màu sắc</div>
                </div>
                <div className={cx('apply')}>
                    <div className={cx('title')}>Ứng dụng</div>
                </div>
            </div>
        </div>
    );
}

PreviewProduct.prototype = {
    data: PropTypes.object,
};

export default PreviewProduct;
