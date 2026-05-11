
import { FloatingLabel, Form } from "react-bootstrap"
import FileUploadItem from "../../../../common/FileUploadItem"

const QualityProductionControls = () => {
  return (
    <div className='row pt-2'>
        <div className='col-md-12 mb-4'>
             <FloatingLabel controlId="floatingTextarea2" label="Quality Control / Assurance Processes" className="mb-0">
                <Form.Control as="textarea" placeholder="Quality Control / Assurance Processes" style={{ height: '120px' }} />
            </FloatingLabel>
        </div>
        <div className='col-md-12 mb-4'>
             <FloatingLabel controlId="floatingTextarea2" label="Inspection / Testing Capabilities" className="mb-0">
                <Form.Control as="textarea" placeholder="Inspection / Testing Capabilities" style={{ height: '120px' }} />
            </FloatingLabel>
        </div>
        <div className='col-12 mb-2'>
            <div className="d-flex gap-3 align-items-center mb-2">
                <span className="fs-14 d-flex gap-2 align-items-center">
                    Production Standards / Certifications
                </span>
                <hr className="flex-grow-1"></hr>
            </div>
        </div>
        <div className='col-md-12 mb-4'>
            <div className="list-card-box bg-transparent p-0 m-0">
                <FileUploadItem title="ISO standards" required />
            </div>
            <div className="list-card-box bg-transparent p-0 m-0">
                <FileUploadItem title="Industry-specific standards" required />
            </div>
        </div>
    </div>
  )
}

export default QualityProductionControls