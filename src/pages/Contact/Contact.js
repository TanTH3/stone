import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Contact.module.scss';
import images from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config';

const cx = classNames.bind(styles);

function Contact() {
    const [dataArr, setDataArr] = useState({
        name: '',
        email: '',
        message: '',
    });
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_i2u121x',
                'template_9t8hl3k',
                form.current,
                'l6bTxKSxbltKnwsO7',
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };

    const handleChange = (e, id) => {
        let copyState = { ...dataArr };
        copyState[id] = e.target.value;
        setDataArr({ ...copyState });
        console.log(dataArr);
    };
    const handleSubmit = () => {
        setDataArr({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div className={cx('title')}>Liên hệ</div>
            </div>
            <div className={cx('content')}>
                <div className={cx('address')}>
                    <div className={cx('detail-address')}>
                        <div className={cx('name-company')}>
                            Công ty cổ phần đá tự nhiên VNS
                        </div>
                        <div className={cx('label')}>Hotline</div>
                        <a href="tel:(+84) 24 6259 7010" className={cx('info')}>
                            (+84) 24 6259 7010
                        </a>
                        <div className={cx('label')}>Email</div>
                        <a
                            href="mailto:tanpham1023@gmail.com"
                            className={cx('info')}
                        >
                            info@stonex.vn
                        </a>
                        <div className={cx('label')}>Địa chỉ ĐKKD</div>
                        <a
                            href="https://goo.gl/maps/NxE2udpur4Ng5A5L7"
                            target="_blank"
                            className={cx('info')}
                        >
                            Số 137C, Phố Nguyễn Công Thái, Phường Đại Kim, Quận
                            Hoàng Mai, Hà Nội
                        </a>
                        <div className={cx('label')}>Địa chỉ nhà máy</div>
                        <a className={cx('info')}>
                            Khu công nghiệp Trường An, An Khánh, Hoài Đức, Hà
                            Nội, Việt Nam
                        </a>
                    </div>
                    <div className={cx('map')}>
                        <a
                            target="_blank"
                            className={cx('map-link')}
                            href="https://goo.gl/maps/NxE2udpur4Ng5A5L7"
                        ></a>
                    </div>
                </div>
                <div className={cx('contact-form')}>
                    <div className={cx('wrap')}>
                        <div className={cx('title-form')}>
                            Hãy để lại lời nhắn cho chúng tôi
                        </div>
                        <div className={cx('content-form')}>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className={cx('form-input')}>
                                    <label>TÊN CỦA BẠN</label>
                                    <input
                                        // value={dataArr.name}
                                        type="text"
                                        name="user_name"
                                        placeholder="TÊN CỦA BẠN"
                                        onChange={(e) => {
                                            handleChange(e, 'name');
                                        }}
                                    />
                                </div>
                                <div className={cx('form-input')}>
                                    <label>EMAIL</label>
                                    <input
                                        // value={dataArr.email}
                                        onChange={(e) => {
                                            handleChange(e, 'email');
                                        }}
                                        type="email"
                                        name="from_name"
                                        placeholder="EMAIL"
                                    />
                                </div>
                                <div className={cx('form-input')}>
                                    <label>LỜI NHẮN CỦA BẠN</label>
                                    <textarea
                                        onChange={(e) => {
                                            handleChange(e, 'message');
                                        }}
                                        // value={dataArr.message}
                                        name="message"
                                        placeholder="LỜI NHẮN CỦA BẠN"
                                    />
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    value="send"
                                >
                                    Gui
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
