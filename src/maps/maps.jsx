import { Col, Row } from 'antd'
import React from 'react'
import { BarsChart, LiquidChart } from '../charts/Charts'
const Maps = ()=>{
    return(
        <>
        <section className='maps-sec'>
            <Row gutter={[16,16]}>
                <Col lg={8} md={12} xs={24}>
                    <div className='box'>
                        <LiquidChart/>
                    </div>
                </Col>
                <Col lg={16} md={12} xs={24}>
                    <div className='box'>
                        <BarsChart/>
                    </div>
                </Col>
            </Row>
        </section>
        </>
    )
}


export default Maps