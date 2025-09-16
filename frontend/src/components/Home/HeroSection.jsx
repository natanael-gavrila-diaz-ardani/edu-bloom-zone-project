// eslint-disable-next-line no-unused-vars
import React from 'react';
import teacherImg from "../../assets/image/hero-education.jpg" 
import Card from '../ui/Card';
import Button from '../ui/Button';
import { HeroSectionData } from '../../Data/Home/HeroSection';

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex bg-[#dcecf7]">
        <div className="flex-1 flex flex-col justify-center px-2 md:px-20 py-12 bg-[#dcecf7]">
          <h1 className="font-bold text-gray-800 mb-8 text-left md:text-6xl text-3xl leading-tight ">
            <span className="block">Transform Learning</span>
            <span className="block">
              with{' '}
              <span className="text-blue-600">Edu Bloom Zone</span>
            </span>
          </h1>
          
          <p className="md:text-xl text-sm text-gray-700 mb-10 leading-relaxed text-left max-w-2xl">
            The modern e-learning platform that connects teachers 
            and students through interactive materials, real-time
            collaboration, and gamified learning experiences.
          </p>
          <div className="mb-10">
            <h2 className="md:text-2xl text-sm font-semibold text-gray-800 mb-6 text-left">
              Choose your role to get started:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {HeroSectionData.map((heroa) => {
                return (
                  <Card 
                  key={heroa.id} 
                  icon={heroa.icon} 
                  title={heroa.title} 
                  description={heroa.description} 
                />
                )
              })}
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white hover:text-white font-semibold md:py-4 md:px-10 py-2 px-3 rounded-lg transition-colors md:text-lg text-sm mb-8">
            Get Started as ...
          </Button>

          <div className="lg:hidden">
            <img
              src={teacherImg}
              alt="Teacher"
              className="w-full max-w-lg mx-auto h-auto object-contain rounded-[24px]"
            />
          </div>
        </div>
        
        <div className="hidden lg:flex flex-1 items-center justify-center relative animate-float">
          <img
            src={teacherImg}
            alt="Teacher"
            className="w-[800px] mr-[114px] h-auto object-contain rounded-[24px]"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection