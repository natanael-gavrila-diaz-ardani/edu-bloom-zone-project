import PropTypes from 'prop-types'

const Card = ({
    children,
    icon,
    title,
    description,
    iconBg = "bg-blue-500",
    className = "",
    onClick
}) => {
    const baseClasses = "bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1"

    return (
        <div
            className={`${baseClasses} ${className}`}
            onClick={onClick}
        >
            {icon && (
                <div className={`w-16 h-16 ${iconBg} rounded-lg flex items-center justify-center mb-6`}>
                    {icon}
                </div>
            )}

            <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-left">
                {description}
            </p>

            {children}

        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconBg: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Card