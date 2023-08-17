import { Col, Row } from "antd"


const Job = ()=>{
    return(
        <>
            <section className="singleJob-sec">
                <Row>
                    <Col>
                        <p>name : </p>
                        <p>job : </p>
                        <p>department : </p>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Job