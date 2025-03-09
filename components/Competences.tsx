'use client'

import Image from "next/image";

export default function Competences() {

  return (
    <section className="text-center px-4">
      <h2 className="text-3xl my-8 md:my-12">SKILLS</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20">
        
        <div className="flex flex-col items-center  p-4 md:p-6 lg:p-8 border-purple-700 border-2 w-2/3 md:w-auto mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl mb-4 md:mb-8">Front</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8">
            <div className="flex flex-col items-center">
              <Image src="/images_skills/html.png" alt="HTML5" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images_skills/css.png" alt="CSS3" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">CSS</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8">
            <div className="flex flex-col items-center">
              <Image src="/images_skills/tailwind.png" alt="Tailwind" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">Tailwind</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images_skills/react.png" alt="React" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">React</p>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col items-center  p-4 md:p-6 lg:p-8 border-purple-700 border-2 w-2/3 md:w-auto mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl mb-4 md:mb-8">Back</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8">
            <div className="flex flex-col items-center">
              <Image src="/images_skills/javascript.png" alt="Javascript" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images_skills/php.png" alt="PHP" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">PHP</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8">
            <div className="flex flex-col items-center">
              <Image src="/images_skills/nodejs.png" alt="NodeJS" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">NodeJS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images_skills/python.png" alt="Python" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">Python</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 border-purple-700 border-2 w-2/3 md:w-auto">
          <h3 className="text-xl md:text-2xl mb-4 md:mb-8">Others</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8">
            <div className="flex flex-col items-center">
              <Image src="/images_skills/wordpress.png" alt="Wordpress" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">Wordpress</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images_skills/figma.png" alt="Figma" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">Figma</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-8">
            <div className="flex flex-col items-center">
              <Image src="/images_skills/mysql.png" alt="Mysql" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">MySQL</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images_skills/sass.png" alt="SCSS" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              <p className="mt-2">SCSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
