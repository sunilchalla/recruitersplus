import React from 'react'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PaneListaAll = () => {
  return (
    <div>
        <div className="row py-3">
            <div className="col-md-3">
                <div className='card br-2'>
                        <div className="row p-3">
                            <div className="col-md-7">
                                <h4>Jim Corbett</h4>
                                <p className='text-muted'>Sr. UI UX Developer</p>
                            </div>
                            <div className="col-md-5 text-right">
                                <span className='status-online'>
                                <FontAwesomeIcon icon={faCircle} className='pad-right-5'/>
                                Available
                                </span>
                          
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className='card br-2'>
                        <div className="row p-3">
                            <div className="col-md-7">
                                <h4>Corbett</h4>
                                <p className='text-muted'>Sr. UI UX Developer</p>
                            </div>
                            <div className="col-md-5 text-right">
                                <span className='status-online'>
                                <FontAwesomeIcon icon={faCircle} className='pad-right-5'/>
                                Available
                                </span>
                          
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className='card br-2'>
                        <div className="row p-3">
                            <div className="col-md-7">
                                <h4>Owen</h4>
                                <p className='text-muted'>UI Developer</p>
                            </div>
                            <div className="col-md-5 text-right">
                                <span className='status-offline'>
                                <FontAwesomeIcon icon={faCircle} className='pad-right-5'/>
                                Unavailable
                                </span>
                          
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className='card br-2'>
                        <div className="row p-3">
                            <div className="col-md-7">
                                <h4>Derek</h4>
                                <p className='text-muted'>Salesforce Developer</p>
                            </div>
                            <div className="col-md-5 text-right">
                                <span className='status-online'>
                                <FontAwesomeIcon icon={faCircle} className='pad-right-5'/>
                                Available
                                </span>
                          
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className='card br-2'>
                        <div className="row p-3">
                            <div className="col-md-7">
                                <h4>Ethan</h4>
                                <p className='text-muted'>Sr. UI UX Developer</p>
                            </div>
                            <div className="col-md-5 text-right">
                                <span className='status-offline'>
                                <FontAwesomeIcon icon={faCircle} className='pad-right-5'/>
                                Available
                                </span>
                          
                            </div>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PaneListaAll