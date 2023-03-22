import React from 'react';
import { BsFillShieldLockFill, BsStars, BsClockFill, BsPersonFillGear } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">О нас</h2>
            <p className="text-xl text-gray-400">На сегодняшний день ГУ «Укук» является одной из ведущих организаций в области предоставления информационно-коммуникационных услуг в различных сферах, обладающим достаточным потенциалом для комплексного решения задач по внедрению информационных технологий, а также содействия взаимодействию государственных органов.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-[#524e3a]" width="64" height="64" rx="32" />
                <g transform="translate(14 16)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <BsStars className='text-[36px]' />

                </g>
              </svg>
              <h4 className="h4 mb-2">Профессионализм</h4>
              <p className="text-lg text-gray-400 text-center">Все работы и консультации проводятся только специалистами. Мы не ставим над Вами экспериментов, а профессионально и качественно выполняем свою работу.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">

              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-[#524e3a]" width="64" height="64" rx="32" />
                <g transform="translate(14 16)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <BsFillShieldLockFill className='text-[36px]' />
                </g>
              </svg>
              <h4 className="h4 mb-2">Конфиденциальность</h4>
              <p className="text-lg text-gray-400 text-center">Мы обязуемся обеспечить конфиденциальность информации, полученной в результате договоренностей с Заказчиком.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-[#524e3a]" width="64" height="64" rx="32" />
                <g transform="translate(14 16)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <FaHandshake className='text-[36px]' />
                </g>
              </svg>
              <h4 className="h4 mb-2">Ответственность</h4>
              <p className="text-lg text-gray-400 text-center">Мы заинтересованы в Вашей стабильности и берем на себя полную ответственность за решения по автоматизации Вашей деятельности.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-[#524e3a]" width="64" height="64" rx="32" />
                <g transform="translate(14 16)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <MdCloudDone className='text-[36px]' />
                </g>
              </svg>
              <h4 className="h4 mb-2">Гарантия</h4>
              <p className="text-lg text-gray-400 text-center">На все услуги, оказываемые нашим учреждением, от разработки ПО до обучения сотрудников, предоставляется гарантия.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-[#524e3a]" width="64" height="64" rx="32" />
                <g transform="translate(15 16)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <BsClockFill className='text-[32px]' />
                </g>
              </svg>
              <h4 className="h4 mb-2">Оперативность</h4>
              <p className="text-lg text-gray-400 text-center">Мы заинтересованы в Вашей стабильности и берем на себя полную ответственность за решения по автоматизации Вашей деятельности. </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-[#524e3a]" cx="32" cy="32" r="32" />
                <g transform="translate(14 16)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <BsPersonFillGear className='text-[32px]' />
                </g>
              </svg>
              <h4 className="h4 mb-2">Опыт</h4>
              <p className="text-lg text-gray-400 text-center">Опыт работы в самых различных отраслях позволяет быстро сориентироваться в возникших у Вас проблемах с программным обеспечением и разрешить их.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
