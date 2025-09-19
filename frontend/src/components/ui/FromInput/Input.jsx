import PropTypes from 'prop-types'
import React from 'react'

const Input = React.forwardRef(function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  icon,
  label,
  error,
  disabled = false,
  required = false,
  options = [],
  ...props
}, ref) {
  const baseClasses = "w-full pl-10 pr-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
  const errorClasses = error ? "border-red-500 focus:ring-red-500" : ""
  const disabledClasses = disabled ? "bg-gray-100 cursor-not-allowed" : ""

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-bold text-gray-700 mb-2 text-left">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        {type === "select" ? (
          <select
            ref={ref}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`${baseClasses} ${errorClasses} ${disabledClasses} ${className}`}
            {...props}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`${baseClasses} ${errorClasses} ${disabledClasses} ${className}`}
            {...props}
          />
        )}
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
})

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.array
}

export default Input