import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, children, title, Icon }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 -z-10"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#f9fafb] rounded-lg shadow-xl w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            {Icon && (
              <div className="text-blue-600">
                {Icon}
              </div>
            )}
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body - Content dari parent */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
