import PropTypes from 'prop-types'

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false
}) => {
  const baseClasses = "font-semibold rounded-md transition-colors"

  const Variants = {
    primary: "bg-[#1b91f7] text-white hover:bg-blue-100 hover:text-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600",
    social: "w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-white transition-colors",
    green: "bg-[#10B77F] hover:bg-green-500 text-white hover:text-white",
    orange: "bg-[#FAA52E] hover:bg-orange-400",
    gray: "border bg-[#f9fafb] hover:bg-gray-200 text-gray-800 hover:text-gray-900",
    orangeOutline: "border bg-[#ECF7F0] hover:bg-orange-400 transition-colors"
  }

  const Sizes = {
    xs: "py-[11px] px-[16px] text-xs",
    sm: "py-3 px-5 text-sm",
    md: "py-4 px-8 text-lg",
    lg: "py-6 px-12 text-xl"
  }

  return (
    <button
      className={`${baseClasses} ${Variants[variant]} ${Sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

  Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }

export default Button