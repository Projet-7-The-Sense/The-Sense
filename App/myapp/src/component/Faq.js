import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import { BiZoomIn,BiZoomOut } from "react-icons/bi";


const Faq = (props) => {
    const [open, setOpen] = useState(false);
    return <>
    
              <button 
        className="faq-button"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {(!open &&(
            <>
            <Row>
                <Col lg="1" xs="1">
                    <BiZoomIn/>
                </Col>
                <Col lg="11" xs="10">
                    <p>{props.question}</p>
                </Col>
            </Row>
            
            
            </>
        )) || (
            <>
            <Row>
                <Col lg="1" xs="1">
                    <BiZoomOut/>
                </Col>
                <Col lg="11" xs="10">
                    <p>{props.question}</p>
                </Col>
            </Row>
            </>
        )

        }
        
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="desc-faq">
            <Row>
                <Col lg={{ span: 11, offset: 1 }} xs={{ span: 11, offset: 1 }}>
                    <p>
                    {props.answer}
                    </p>
                </Col>
            </Row>
            
          
        </div>
      </Collapse>
    
    </>
}

export default Faq;