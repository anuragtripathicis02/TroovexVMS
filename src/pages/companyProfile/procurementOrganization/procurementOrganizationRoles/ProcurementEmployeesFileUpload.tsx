import FileUploadItem from "../../../../common/FileUploadItem"

const ProcurementEmployeesFileUpload = () => {
    return (
        <>
            <div className="mb-4">
                <FileUploadItem title="Articles of Association" required />
            </div>
            <div className='text-modal-bottom'>
                <p>
                    <i>Note : Employee File Mandatory Fields :Full Name, Position, Organizational Structure (Direction / Department / Service / Process), Email Address, Phone Number, Authorization Level (Viewer / Buyer / Approver / Signatory / Admin)</i>
                </p>
            </div>
        </>
    )
}

export default ProcurementEmployeesFileUpload
