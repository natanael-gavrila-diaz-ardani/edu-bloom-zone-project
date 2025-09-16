import Card from '../ui/Card';
import { FeatureSectionData } from '../../Data/Home/FeatureSection';

const FeatureSection = () => {
    return (
        <div className="bg-gray-50 py-6 md:py-12 px-2 md:px-8 w-full">
            <div className="max-w-full mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                        Everything You Need for Modern Education
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        Powerful features designed to enhance the learning experience for both
                        teachers and students.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {FeatureSectionData.map((featurea) => {
                        return (
                            <Card 
                            key={featurea.id}
                            icon={featurea.icon}
                            title={featurea.title}
                            description={featurea.description}
                        />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default FeatureSection