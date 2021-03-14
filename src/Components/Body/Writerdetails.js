import { Row, Col } from 'antd';
import WriterdetailsLeft from './WriterdetailsLeft';
import WriterdetailsRight from './WriterdetailsRight';

const Writerdetails = () => {
    return (
        <>
        <div style={{marginTop:'2rem'}}>
          <Row justify="space-around">
          <Col span={14}  >
          <WriterdetailsLeft userName='Sagar Pokhrel' />
          </Col>
          <Col span={8} >
        <WriterdetailsRight />
        </Col>
         </Row>
        </div>    
        </>
    )
}

export default Writerdetails
