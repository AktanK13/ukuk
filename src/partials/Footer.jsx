import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import PageIllustration from '../partials/PageIllustration';

function Footer() {
  return (
    <footer id="contacts">

      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-6 lg:col-span-7">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="inline-block" aria-label="Cruip">
                  <img src={Logo} alt="logo" className='w-12' />
                </Link>
              </div>
              <div className="text-gray-400 mt-3">Кыргызская Республика, г. Бишкек, ул. Токтоналиева 2/1</div>
              <div className="text-gray-400 mt-3">office@it.gov.kg</div>
              <div className="text-gray-400 mt-3 hover:text-blue-400 hover:underline">
                <Link to="privacy-policy">
                  Политика конфиденциальности мобильного приложения «Бизнести коргоо»
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="relative rotate-180 max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>
    </footer>
  );
}

export default Footer;
