import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Next Slide"
      className={className}
      style={{
        ...style,
        display: 'flex',
        right: 20,
        zIndex: 10,
        width: 50,
        height: 50,
        background: 'rgba(235, 0, 40, 0.8)',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClick}
      onMouseOver={e => {
        e.currentTarget.style.background = 'rgba(255, 26, 61, 0.9)';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = 'rgba(235, 0, 40, 0.8)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="none"/>
        <path d="M12 8l8 8-8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Previous Slide"
      className={className}
      style={{
        ...style,
        display: 'flex',
        left: 20,
        zIndex: 10,
        width: 50,
        height: 50,
        background: 'rgba(235, 0, 40, 0.8)',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClick}
      onMouseOver={e => {
        e.currentTarget.style.background = 'rgba(255, 26, 61, 0.9)';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = 'rgba(235, 0, 40, 0.8)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="none"/>
        <path d="M20 8l-8 8 8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

const slides = [
  // Title Slide
  <section className="flex flex-col justify-center items-center min-h-screen bg-white px-3 py-4 md:px-4 md:py-8">
    <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center">
      {/* Logo */}
      <img 
        src="https://i.imgur.com/J2ME1ji.png" 
        alt="USKO Logo" 
        className="w-32 md:w-64 mb-4 md:mb-8 drop-shadow-xl" 
        style={{
          maxWidth: '50vw',
          filter: 'drop-shadow(0 10px 15px rgba(235, 0, 40, 0.15))'
        }}
      />
      
      {/* Main Title */}
      <div className="text-center mb-4 md:mb-8">
        <h1 className="text-xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-4 leading-tight">
          <div className="flex flex-col md:flex-row md:gap-2 justify-center items-center">
            <span className="text-[#eb0028] whitespace-nowrap">Logistics.</span>
            <span className="text-[#eb0028] whitespace-nowrap">Delivered.</span>
            <span className="text-black whitespace-nowrap">Exceptionally.</span>
          </div>
        </h1>
        
        <h2 className="text-xs md:text-xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed px-2">
          <span className="block mb-2">USKO is your trusted partner for military heavy haul, expedited, and specialized ground transportation services across North America.</span>
        </h2>
      </div>

      {/* CTA Button */}
      <a 
        href="#contact" 
        className="bg-[#eb0028] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base shadow-lg hover:bg-[#cc0023] transition-all duration-300 mb-4 md:mb-8 transform hover:scale-105 whitespace-nowrap"
      >
        Driven to Serve Those Who Serve
      </a>

      {/* Client Badge */}
      <div className="bg-[#eb0028]/5 p-2.5 md:p-4 rounded-xl border border-[#eb0028]/20 w-full max-w-[280px] md:max-w-sm">
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#eb0028] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[#eb0028] font-bold text-sm md:text-lg whitespace-nowrap">Prepared for Expeditors International</span>
        </div>
      </div>
    </div>
  </section>,

  // About USKO
  <section className="flex flex-col justify-center items-center px-3 py-4 md:p-6 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#eb0028] mb-2 md:mb-3 text-center tracking-tight">About <span className="text-black">USKO</span></h1>
      <h2 className="text-lg md:text-2xl text-gray-700 mb-4 md:mb-5 text-center max-w-2xl mx-auto font-semibold">Excellence in Transportation and Logistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
        <div className="flex justify-center items-center order-2 md:order-1">
          <img src="https://i.imgur.com/H7F2rk9.png" alt="USKO Logistics Truck" className="max-w-full h-auto md:h-80 rounded-lg shadow-lg object-cover" style={{maxHeight: '280px'}} />
        </div>
        <div className="space-y-3 md:space-y-4 order-1 md:order-2">
          <div className="bg-gray-50 rounded-xl p-3 md:p-4 shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold text-[#eb0028] mb-3">Company Highlights</h3>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white font-bold text-sm md:text-base mx-auto shadow-md">
                  18
                </div>
                <div className="text-gray-700 text-xs md:text-sm mt-1">Years Active</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white font-bold text-sm md:text-base mx-auto shadow-md">
                  65M+
                </div>
                <div className="text-gray-700 text-xs md:text-sm mt-1">Miles</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white font-bold text-sm md:text-base mx-auto shadow-md">
                  500+
                </div>
                <div className="text-gray-700 text-xs md:text-sm mt-1">Team</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 md:p-4 shadow-lg">
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              From military heavy haul to expedited government transportation, USKO stands as a trusted DoD-approved partner in specialized ground transportation and cargo management across North America and Europe.
            </p>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-2">
              Our premium white-glove service ensures your high-value equipment and sensitive technology arrives safely, on time, every time, with our professional drivers following strict security protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Transportation Assets
  <section className="flex flex-col justify-center items-center px-3 py-4 md:p-8 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#eb0028]/10 p-3 md:p-4 rounded-lg border border-[#eb0028]/30 mb-4 md:mb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#eb0028] mb-2 text-center tracking-tight">Our <span className="text-black">Transportation Assets</span></h1>
        <h2 className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Comprehensive Fleet Solutions for Every Need</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-3 md:mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#eb0028]">Military Transportation Services</h3>
          </div>
                      <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>LTL & FTL military transportation services</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Heavy haul specialized equipment transportation</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Auto-haul services for military vehicle transport</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SDDC approved with CAS access for base scheduling</span>
            </li>
          </ul>
          
          <div className="mt-4 space-y-4">
            {/* Featured Crane Services - Enlarged */}
            <div className="w-full">
              <img src="https://i.imgur.com/294yryT.jpg" alt="USKO Crane Services" className="w-full h-48 md:h-64 object-contain rounded-lg shadow-lg bg-gray-50" />
              <p className="text-sm md:text-base text-gray-500 text-center italic mt-2 font-medium">Specialized crane services for heavy military equipment</p>
            </div>
            {/* Humvee Transport */}
            <div className="w-full">
              <img src="https://i.imgur.com/ZI791yS.jpg" alt="USKO Humvee Transportation" className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md" />
              <p className="text-xs md:text-sm text-gray-500 text-center italic mt-1 md:mt-2">USKO military Humvee transportation services</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg relative">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-3 md:mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#eb0028]">Expedited Heavy Haul & LTL/FTL Services</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
            <div>
              <img src="https://i.imgur.com/ccbyeY8.jpg" alt="USKO Military Vehicle Transport" className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md" />
              <p className="text-xs md:text-sm text-gray-500 text-center italic mt-1 md:mt-2">Military vehicle transportation services</p>
            </div>
            <div>
              <img src="https://i.imgur.com/NKqJeEz.jpg" alt="USKO Military Container Movement" className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md" />
              <p className="text-xs md:text-sm text-gray-500 text-center italic mt-1 md:mt-2">Military container and cargo movement</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expedited heavy haul transportation for oversized military equipment</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>LTL & FTL government freight transportation services</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>700+ sprinter vans for expedited military deliveries</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>DoD-approved drivers with security clearance protocols</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 shadow-lg md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#eb0028]">Why Choose USKO for Expeditors Government Division?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="border-l-4 border-[#eb0028] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">DoD Approved</h4>
              <p className="text-gray-700 text-xs">SDDC approved Transportation Service Provider with established CAS access for military base scheduling and immediate contract support.</p>
            </div>
            <div className="border-l-4 border-[#eb0028] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Heavy Haul Expertise</h4>
              <p className="text-gray-700 text-xs">Specialized heavy equipment transportation with crane services coordination for military cargo and oversized loads.</p>
            </div>
            <div className="border-l-4 border-[#eb0028] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Ground Transport Synergy</h4>
              <p className="text-gray-700 text-xs">Perfect complement to your air cargo services - we handle the ground transportation while you focus on air freight excellence.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>,

  // Network Coverage
  <section className="flex flex-col justify-center items-center px-3 md:px-8 lg:px-24 py-4 md:py-8 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#eb0028]/10 p-3 md:p-4 rounded-lg border border-[#eb0028]/30 mb-4 md:mb-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#eb0028] mb-2 text-center tracking-tight">Our <span className="text-black">Branch Network</span></h1>
        <h2 className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Strategic Locations Across North America and Europe</h2>
      </div>
      
      <div className="mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-gray-50 p-3 md:p-4 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">United States</h3>
            <ul className="space-y-2 w-full">
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">West Sacramento, CA</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Roseville, CA</span>
                <span className="font-medium text-sm">Corporate HQ</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Chicago, IL</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">St Marys, GA</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Houston, TX</span>
                <span className="font-medium text-sm">HQ2</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Independence, MO 64055</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Sacramento, CA</span>
                <span className="font-medium text-sm">Warehouse</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-3 md:p-4 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Europe</h3>
            <ul className="space-y-2 w-full">
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Warsaw, Poland</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Kyiv, Ukraine</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Odesa, Ukraine</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-3 md:p-4 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Latin America</h3>
            <ul className="space-y-2 w-full">
              <li className="flex justify-between bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium text-sm">Monterrey, Mexico</span>
                <span className="font-medium text-sm">Branch</span>
              </li>
              <li className="flex items-center bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 text-sm">Daily cross-border operations with the US</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-[#eb0028]/5 p-4 rounded-xl border border-[#eb0028]/20 shadow-lg text-center">
          <p className="text-gray-700 text-sm">
            All USKO branches are strategically positioned to provide optimal coverage for Expeditors International shipments.
          </p>
        </div>
      </div>
    </div>
  </section>,

  // Sacramento Warehouse Capacity - New Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
              <div className="bg-gradient-to-r from-[#eb0028] to-[#ff1a3d] p-6 rounded-2xl shadow-2xl mb-8 transform hover:scale-[1.02] transition-all duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center tracking-tight">Military & Government <span className="text-gray-100">Transportation Services</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-100 text-center max-w-3xl mx-auto font-semibold">DoD Approved Transportation Solutions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Services Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(235,0,40,0.1)] hover:shadow-[0_4px_25px_rgba(235,0,40,0.15)] transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-4">Core Services</h3>
          </div>
          <div className="space-y-3">
            {[
              'Military Heavy Haul Transportation',
              'Expedited Transportation',
              'Dual Driver Services',
              'Satellite Tracking & Monitoring',
              'Tally Record Documentation',
              'Crane Services Coordination'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-[#eb0028] mr-3"></div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(235,0,40,0.1)] hover:shadow-[0_4px_25px_rgba(235,0,40,0.15)] transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Transportation Equipment</h3>
              <p className="text-sm text-gray-500">Ground Transportation Solutions:</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Box Trucks',
              'Sprinter Vans',
              'Dry Vans',
              'Refrigerated Trailers',
              'Flatbed Trailers',
              'Step Deck Trailers',
              'Removable Goosenecks',
              'Auto Haulers',
              'Short-Term Storage',
              'Cross-Docking Services'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-[#eb0028] mr-2"></div>
                <span className="text-gray-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Capabilities Card */}
        <div className="bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] rounded-2xl p-6 shadow-xl md:col-span-2 transform hover:scale-[1.01] transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-4">Military Transportation Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'DoD Approved TSP',
                description: 'SDDC approved Transportation Service Provider with GFM access'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Heavy Equipment Handling',
                description: 'Specialized equipment and crane services for military cargo'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Base Access Scheduling',
                description: 'CAS (Carrier Appointment Scheduling) for military base access'
              }
            ].map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#eb0028] mb-3">
                  {capability.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                <p className="text-gray-100 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statement Card */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg md:col-span-2 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-4">Military Transportation Capabilities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                As a SDDC approved DoD Transportation Service Provider (TSP), USKO offers specialized military and government heavy haul transportation services. Our comprehensive solutions include expedited transportation, dual driver services, satellite tracking, tally record documentation, and crane services coordination. We have access to Carrier Appointment Scheduling (CAS) to schedule appointments with military bases, ensuring seamless delivery of critical equipment and supplies.
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/i6n7U3K.jpg" alt="USKO 10K Forklift Services" className="w-full h-36 md:h-48 object-cover rounded-lg shadow-md" />
              <p className="text-xs md:text-sm text-gray-500 text-center italic mt-1 md:mt-2">10K forklift services for heavy military equipment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Geodis/IBM Custom Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#eb0028] mb-2 text-center tracking-tight">Partnering with <span className="text-black">Expeditors International</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-5 text-center max-w-2xl mx-auto font-semibold">Growing Government Business Through Ground Transportation Partnership</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#eb0028] mb-3">Our Value Proposition</h3>
          <ul className="space-y-3">
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#eb0028] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Military Transportation Synergy</h4>
                <p className="text-gray-700 text-xs">Help grow Expeditors government business by offering specialized heavy haul and expedited ground transportation services while you handle the heavy air cargo.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#eb0028] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">DoD Approved Provider</h4>
                <p className="text-gray-700 text-xs">Already setup with SDDC as DoD approved TSP with CAS access for military base scheduling - ready to support government contracts and spot freight immediately.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#eb0028] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Complete Ground Solutions</h4>
                <p className="text-gray-700 text-xs">Full range of ground transportation: box trucks, sprinter vans, dry vans, reefers, flatbeds, step decks, RGNs, auto haulers, plus crane services.</p>
              </div>
            </li>
          </ul>
          
          {/* Military Transportation Showcase */}
          <div className="mt-4 bg-white rounded-lg p-3 md:p-4 shadow-sm border border-gray-100">
            <img src="https://i.imgur.com/ZI791yS.jpg" alt="USKO Military Transportation Excellence" className="w-full h-32 md:h-48 object-cover rounded-lg shadow-md" />
            <p className="text-xs md:text-sm text-gray-500 text-center italic mt-1 md:mt-2">USKO's proven military transportation capabilities in action</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#eb0028] mb-4">Key Benefits for Expeditors Government Division</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Expanded Service Offering</h4>
                <p className="text-gray-700 text-sm">Complement your air cargo with complete ground transportation solutions for government clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Pre-Qualified Partner</h4>
                <p className="text-gray-700 text-sm">SDDC approved TSP status eliminates qualification delays for government contracts</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Heavy Equipment Capability</h4>
                <p className="text-gray-700 text-sm">Specialized heavy haul equipment and crane services for military cargo</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Base Access Ready</h4>
                <p className="text-gray-700 text-sm">CAS access for military base scheduling streamlines delivery coordination</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#eb0028]/5 p-6 rounded-xl border border-[#eb0028]/20">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#eb0028]">Ready to Partner?</h3>
            </div>
            <p className="text-gray-700">USKO is positioned to be your strategic ground transportation partner for government and military contracts. With our DoD approval, diverse fleet capabilities, and existing CAS access, we can immediately support Expeditors' expansion into the government transportation sector.</p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Closing Slide
  <section className="flex flex-col justify-center items-center px-3 py-4 md:p-8 pb-16 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#eb0028] mb-3 md:mb-4">Ready to Transform Your <span className="text-black">Logistics Experience?</span></h1>
        <h2 className="text-lg md:text-2xl text-gray-700 mb-4 md:mb-6 max-w-3xl mx-auto font-semibold">
          Partner with USKO to elevate Expeditors International's government transportation capabilities with our specialized heavy haul fleet and military logistics expertise.
        </h2>
      </div>

      {/* USKO Family of Companies Section */}
      <div className="bg-[#eb0028]/5 p-4 md:p-6 rounded-xl border border-[#eb0028]/20 shadow-lg mx-auto max-w-3xl mb-6 md:mb-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-3 md:mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-[#eb0028]">USKO Family of Companies</h3>
        </div>
        <div className="space-y-4">
          {/* Tree/Org Chart Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* USKO Logistics Inc - Top Center */}
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm col-span-1 md:col-span-2 mx-auto w-full md:w-[338.89px]">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO LOGISTICS INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">728260</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">2337754</span>
              </div>
            </div>
            
            {/* Vertical Line Connector */}
            <div className="col-span-1 md:col-span-2 h-4 md:h-8 flex justify-center">
              <div className="w-px h-full bg-[#eb0028]/20"></div>
            </div>
            
            {/* USKO Expedite and Express - Side by Side */}
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO EXPEDITE INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">746242</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">307593</span>
              </div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO EXPRESS INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">563453</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">1499885</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg text-center">
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-3 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-sm md:text-base text-gray-700 mb-3">Speak with our sales team member</p>
          <p className="font-bold text-[#eb0028] text-base md:text-lg">+1 (916) 849-2156</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg text-center">
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-3 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-sm md:text-base text-gray-700 mb-3">For RFQ and RFI opportunities email:</p>
          <p className="font-bold text-[#eb0028] text-base md:text-lg">ron@uskoinc.com</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg text-center">
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-3 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">California Office</h3>
          <p className="text-sm md:text-base text-gray-700 mb-3">Our main West Coast facility</p>
          <div className="flex flex-col items-center">
            <p className="font-bold text-[#eb0028] text-base">1101 CREEKSIDE RIDGE DR STE&nbsp;270</p>
            <p className="font-bold text-[#eb0028] text-base">ROSEVILLE, CA 95678</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4 md:mt-6 mb-8 md:mb-12">
        <img src="https://i.imgur.com/J2ME1ji.png" alt="USKO Logo" className="w-48 md:w-64 mx-auto mb-4" />
        <h4 className="text-xl md:text-2xl font-bold text-[#eb0028]">Logistics. Delivered. <span className="text-black">Exceptionally.</span></h4>
      </div>
    </div>
  </section>,
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: false,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  dotsClass: "slick-dots custom-dots",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        swipe: true,
        touchMove: true,
        speed: 600,
        centerMode: false,
        centerPadding: '0px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        swipe: true,
        touchMove: true,
        speed: 500,
        centerMode: false,
        centerPadding: '0px'
      }
    }
  ],
  lazyLoad: true,
  fade: false,
  swipe: true,
  touchMove: true
};

const USKOPitchDeck = () => (
  <div className="bg-white w-full min-h-screen">
    <Slider {...settings}>
      {slides.map((slide, idx) => (
        <div key={idx} className="relative min-h-screen">
          {slide}
          <div className="page-indicator absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded-full text-sm">
            <span className="text-[#eb0028] font-bold">{idx + 1}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-gray-500">{slides.length}</span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default USKOPitchDeck; 