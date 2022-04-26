import React from 'react';
import {Job} from './index';
import {JobInterface} from '../../types'

const Jobs : React.FunctionComponent<{jobs : JobInterface[]}> = ({jobs})=>{
    return (
        <>
            {
                jobs?.map((job : JobInterface, index) => <Job key={index} job={job}/>)
            }
        </>
    )
}
export default Jobs;