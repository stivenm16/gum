import Button from '../Button/Button'

const Modal = ({ isOpen = true, onClose, children }: any) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 transition-opacity duration-300">
          <div className="bg-white rounded-lg w-1/3 p-6 flex flex-col items-center">
            <div className="modal-content flex-grow">{children}</div>
            <Button
              intent={'secondary'}
              onClick={handleClose}
              className="w-1/3 mt-4"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
