import React from "react"
import Image  from "next/image"
import { Col } from "react-bootstrap"
import { myConfig } from "../../config"
import {JobInterface} from '../../types'


const Job : React.FunctionComponent<{job: JobInterface}> = ({ job })=>{
  return (
    <>
      <Col xs={6} sm={4} md={4} xl={3} >
        <a
          className="custom-cart"
          target="_blank"
          href={job.url}
          data-toggle="tooltip"
          data-placement="bottom"
          rel="noreferrer"
          title={`${job.title} - ${job.domain}`}
        >
          <div className="custom-cart-image">
            <Image
              className="img-fluid"
              layout='fill'
              src={job.image}
            />
          </div>
          <div className="custom-cart-footer p-1">
            <div className="mt-1 text-xmedium">{job.title}</div>

            <div className=" text-small">{job.domain}</div>

            <div className="mt-1 text-left text-medium text-secondary">
              {job.description}
            </div>
          </div>
        </a>
      </Col>
    </>
  );
}

export default Job;