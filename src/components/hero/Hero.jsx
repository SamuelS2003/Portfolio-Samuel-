import React from 'react';
import personImg from "../../assets/Profile.jpg";
import Resume from "../../assets/Resume Rewrite.pdf"

const Hero = () => {
  return (
    <>
      <main className='w-full bg-secondary dark:bg-gray-900 dark:text-white'>
        <div className='container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]'>
          {/*image container*/}
          <div>
            <img src={personImg} alt="Not found" className='w-4/6 rounded-full border-6 border-red-950 md:max-w-lg mx-10' />
          </div>
          <div>
            <div className='space-y-2 grid justify-items-center sm:justify-items-start'>
              <p className='uppercase'>
                HELLO
              </p>
              <p className="text-3xl md:text-5xl font-sm font-serif text-black/80 dark:text-white">
                 I'm Samuel Sholademi
              </p>
              <p className="text-2xl  text-gray-700 dark:text-white">
                Data Analyst &<br/> Business Intelligence Analyst
              </p><br/>
              <p className="text-black/75 text-center sm:text-left dark:text-white/70 font-normal">
              A skilled Data and Business Intelligence Analyst with a strong foundation in data analysis, visualization <br/><br/>
              With a proven track record in exploratory data analysis, KPI reporting,
              I bring expertise in crafting dashboards, analyzing complex datasets, and driving data-driven decisions. <br/>
              I am passionate about leveraging data to solve real-world problems and continuously expanding my knowledge in analytics and predictive modeling.
              </p>
              <a href={Resume}
                  className='primary-btn inline-block my-6 mr-6' target='_blank'>
                    {" "}
                    Download Resume
              </a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default Hero