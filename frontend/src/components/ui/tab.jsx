import PropTypes from 'prop-types'

const Tab = ({ 
  children, 
  isActive = false, 
  onClick, 
  variant = "default",
  size = "md",
  disabled = false,
  className = "",
  icon = null
}) => {
  const baseClasses = "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    default: isActive 
      ? "bg-white text-gray-900 shadow-sm border border-gray-200 rounded-lg" 
      : "text-gray-500 hover:text-gray-700",
    underline: isActive
      ? "border-b-2 border-blue-500 text-blue-600"
      : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
    pill: isActive
      ? "bg-blue-600 text-white rounded-full"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full",
    card: isActive
      ? "bg-white border border-gray-200 text-gray-900 shadow-sm rounded-lg"
      : "bg-gray-50 border border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300 rounded-lg",
    button: isActive
      ? "bg-white text-gray-900 shadow-sm border border-gray-200 rounded-lg px-4 py-2"
      : "text-gray-500 hover:text-gray-700 px-4 py-2"
  }
  
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm", 
    lg: "px-6 py-3 text-base"
  }
  
  if (variant === "button") {
    const buttonClasses = [
      baseClasses,
      variants.button,
      className
    ].filter(Boolean).join(" ")
    
    return (
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        role="tab"
        aria-selected={isActive}
      >
        <div className="flex items-center space-x-2">
          {icon && <span className="flex items-center">{icon}</span>}
          <span>{children}</span>
        </div>
      </button>
    )
  }
  
  const tabClasses = [
    baseClasses,
    variants[variant],
    sizes[size],
    className
  ].filter(Boolean).join(" ")
  
  return (
    <button
      className={tabClasses}
      onClick={onClick}
      disabled={disabled}
      role="tab"
      aria-selected={isActive}
    >
      <div className="flex items-center space-x-2">
        {icon && <span className="flex items-center">{icon}</span>}
        <span>{children}</span>
      </div>
    </button>
  )
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "underline", "pill", "card", "button"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node
}

export default Tab