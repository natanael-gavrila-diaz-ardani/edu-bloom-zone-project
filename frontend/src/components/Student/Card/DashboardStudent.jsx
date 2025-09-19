import Card from "../../ui/Card"

const DashboardStudent = ({cards}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                variant="kpi"
                title={card.title}
                value={card.value}
                valueColor={card.color}
                bgColor={card.gradient}
                icon={card.icon}
              />
            )
          })}
        </div>
    )
}

export default DashboardStudent