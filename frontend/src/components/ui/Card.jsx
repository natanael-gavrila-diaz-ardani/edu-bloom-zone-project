import PropTypes from 'prop-types'
import { CopyIcon } from 'lucide-react'

const Card = ({
  children,
  icon,
  title,
  description,
  iconBg = "bg-blue-500",
  className = "",
  onClick,
  value,
  valueColor = "text-blue-600",
  bgColor = "bg-blue-50",
  variant = "default",
  subtitle = "",
  code = "",
  onCopyCode,
  stats = [],
  actions = [],
  progress,
}) => {
  const baseClasses = "rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"

  const variants = {
    default: `${baseClasses} bg-white cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1`,
    kpi: `${baseClasses} ${bgColor} border-0`,
    classroom: `${baseClasses} bg-white`,
    sidebar: `${baseClasses} bg-white`
  }

  const renderKPI = () => (
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 text-sm font-medium mb-2">{title}</p>
        <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
      </div>
      {icon && <div>{icon}</div>}
    </div>
  )

  const renderClassroom = () => (
    <>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
        <div className="flex items-center space-x-2">
          {progress !== undefined && (
            <div className="border text-[10px] rounded-full bg-[#E3F5F0] px-2 py-1 font-bold">
              {progress}% Complete
            </div>
          )}
          {code && <span className="text-sm text-gray-600">Code: {code}</span>}
          {onCopyCode && (
            <button onClick={onCopyCode} className="text-blue-600 hover:text-blue-800">
              <CopyIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {stats.length > 0 && (
        <div className="flex items-center space-x-4 mb-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center space-x-1">
              {stat.icon}
              <span className="text-sm text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {actions.length > 0 && (
        <div className="flex justify-end space-x-2">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${action.variant === "outline"
                  ? "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "bg-green-600 text-white hover:bg-green-700"
                }`}
            >
              <div className="flex items-center space-x-1">
                {action.icon}
                <span>{action.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
      {children}
    </>
  )

  const renderSidebar = () => (
    <>
      <div className="flex items-center gap-2 mb-4">
        {icon && <span>{icon}</span>}
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      {children}
    </>
  )

  const renderDefault = () => (
    <>
      {icon && (
        <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-6`}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
      {children}
    </>
  )

  // Content mapping
  const content = {
    kpi: renderKPI,
    classroom: renderClassroom,
    sidebar: renderSidebar,
    default: renderDefault
  }

  return (
    <div className={`${variants[variant]} ${className}`} onClick={onClick}>
      {content[variant]()}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  iconBg: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueColor: PropTypes.string,
  bgColor: PropTypes.string,
  variant: PropTypes.oneOf(["default", "kpi", "classroom", "sidebar"]),
  subtitle: PropTypes.string,
  code: PropTypes.string,
  onCopyCode: PropTypes.func,
  stats: PropTypes.array,
  actions: PropTypes.array,
  progress: PropTypes.number
}

export default Card