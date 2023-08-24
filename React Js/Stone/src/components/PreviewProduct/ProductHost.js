import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './PreviewProduct.module.scss';
// import Image from '~/components/Image';
// import { TickBlueIcon } from '~/components/Icons';
import PreviewProduct from './PreviewProduct';
import { Wrapper as PopperWrapper } from './../../components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function ProductHost({ data, name, onClick }) {
    const renderPreview = (attrs) => {
        return (
            <>
                <div tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <PreviewProduct data={data} name={name} />
                    </PopperWrapper>
                </div>
            </>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[0, 0]}
                render={renderPreview}
                placement="bottom"
            >
                <div className={cx('nav-item-product')}>
                    {name} <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </Tippy>
        </div>
    );
}

ProductHost.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default ProductHost;
