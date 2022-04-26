import React from "react";
import { Col, Row } from "react-bootstrap";
import  Link  from "next/link";
export default function Footer() {
  return (
    <Col xs={12} className="B mt-1">
      <Row>
        <Col xs={12} className="3">
          <div className="mt-1">
            <ul className={`footer-list mt-1 mb-2`}>

              <li className=" mr-4">
                <Link href="/am-card-memory-game">
                  <span className="name-label pl-2">
                    1.
                    بازی کارت حافظه
                  </span>
                </Link>
              </li>


            </ul>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
