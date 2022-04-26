import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

import PhoneIcon from "../../public/images/phone-call.svg";
import TelegramIcon from "../../public/images/telegram.svg";
import EmailIcon from "../../public/images/email.svg";

export default function Footer() {
  return (
    <Col xs={12} className="B mt-1">
      <Row>
        <Col xs={12} className="3">
          <div className="footer border-top">
            <div className={`footer-row pt-3 mb-2`}>
              <div className={`footer-list`}>
                <a
                  href="tel:09306029572"
                  rel="noreferrer"
                  title="09306029572"
                  target="_blank"
                  className="balance me-3 ms-4 me-md-2 ms-md-3"
                >
                  <Image
                    alt="تماس تلفنی"
                    className="footer-icons"
                    width="23px"
                    height="23px"
                    src={PhoneIcon}
                  />
                  <span className="d-none d-md-block pe-2 ps-3">
                    تماس تلفنی
                  </span>
                </a>
                <a
                  href="mailto:ansarmirzayi@gmail.com"
                  title="ansarmirzayi@gmail.com"
                  className="balance me-3 ms-4 me-md-2 ms-md-3"
                >
                  <Image
                    alt="ارسال ایمیل"
                    className="footer-icons"
                    width="23px"
                    height="23px"
                    src={EmailIcon}
                  />
                  <span className="d-none d-md-block pe-2 ps-3">
                    ارسال ایمیل
                  </span>
                </a>
                <a
                  rel="noreferrer"
                  href="https://t.me/dev_ansar"
                  title="https://t.me/dev_ansar"
                  target="_blank"
                  className="balance me-3 ms-4 me-md-2 ms-md-3"
                >
                  <Image
                    alt="تلگرام"
                    className="footer-icons"
                    width="23px"
                    height="23px"
                    src={TelegramIcon}
                  />
                  <span className="d-none d-md-block pe-2 ps-3">تلگرام</span>
                </a>
              </div>
              <div className={`footer-list`}>
                <a
                  rel="noreferrer"
                  href="http://ansarmirzayi.ir"
                  target="_blank"
                  className="balance text-white text-medium"
                >
                  ansarmirzayi.ir
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
