import React from 'react';

import logoGP from '../images/logoGP.png';
import Logomvd from '../images/Logomvd.png';
import logoOFR from '../images/logoOFR.png';
import logoMU from '../images/logoMU.jpg';
import logoMCR from '../images/logoMCR.png';
import logoAP from '../images/logoAP.png';
import logoMO from '../images/logoMO.png';
import logoMCS from '../images/logoMCS.png';
import logoPS from '../images/logoPS.png';
import logoGKNB from '../images/logoGKNB.png';
import logoSIN from '../images/logoSIN.jpg';
import logoDP from '../images/logoDp.jpg';
import logoSES from '../images/logoSES.jpg';

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Наши партнеры</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoGP} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Генеральная прокуратура Кыргызской Республики</span>
            </div>
            {/* 2st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoAP} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Администрация президента Кыргызской Республики</span>
            </div>
            {/* 3st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoGKNB} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Государственный комитет национальной безопасности Кыргызской Республики</span>
            </div>
            {/* 4st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoMCR} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Министерство цифрового развития Кыргызской Республики</span>
            </div>
            {/* 5st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoMU} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Министерство юстиции Кыргызской Республики</span>
            </div>
            {/* 6st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={Logomvd} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Министерство внутренних дел Кыргызской Республики</span>
            </div>
            {/* 7st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoOFR} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Государственная служба финансовой разведки Кыргызской Республики</span>
            </div>
            {/* 8st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoMCS} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Министерство чрезвычайных ситуаций Кыргызской Республики</span>
            </div>
            {/* 9st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="" src={logoMO} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Министерство обороны Кыргызской Республики</span>
            </div>
            {/* 10st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoSIN} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Государственная служба исполнения наказаний при Министерстве юстиции Кыргызской Республики</span>
            </div>
            {/* 11st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoDP} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Департамент пробации при Министерстве юстиции Кыргызской Республики</span>
            </div>
            {/* 12st testimonial */}
            <div className="flex items-center flex-col h-auto min-h-[235px] p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={logoSES} width="48" height="48" alt="Testimonial 01" />
                </div>
              </div>
              <span className="text-center text-gray-400 pb-4">Государственная судебно-экспертная служба при Министерстве юстиции Кыргызской Республики</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Testimonials;
