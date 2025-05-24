import React, { useState, useEffect } from 'react';

export default function Home() {
  const [expanded, setExpanded] = useState(null);
const [showBanner, setShowBanner] = useState(true);
  
  useEffect(() => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');

    const onScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-blue-600');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

const scrollToWithOffset = (id) => {
  const el = document.getElementById(id);
  const yOffset = -100; // adjust this if your header is taller
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
  
  return (
    <>
    {showBanner && (
  <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 flex flex-col md:flex-row justify-between items-center px-6 relative z-50">
    <div className="mb-2 md:mb-0">
      <h2 className="text-lg font-semibold">Save Up To 30% With Our Regular Maintenance!</h2>
      <p className="text-sm">
        Join our regular maintenance plan and save up to 30% on every air duct, dryer vent, or mini-split service.
      </p>
    </div>
    <div className="flex items-center gap-4">
      <button
        className="bg-yellow-300 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-400"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Yes, I Want!
      </button>
      <button
        onClick={() => setShowBanner(false)}
        className="text-white text-2xl leading-none"
      >
        &times;
      </button>
    </div>
  </div>
)}

      <header className="bg-white shadow-md h-20 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          <span className="font-bold text-lg text-gray-800">Summit Home Services</span>
        </div>
        <div className="md:hidden">
          <button id="menu-button" className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
        <nav id="navbar" className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#blog" className="hover:text-blue-600">Blog</a>
          <a href="#service-areas" className="hover:text-blue-600">Service Areas</a>
          <a href="#contact-info" className="hover:text-blue-600">Contact Us</a>
          <a href="#contact" className="hover:text-blue-600">Free Estimate</a>
        </nav>
        <div id="mobile-menu" className="md:hidden hidden flex-col absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 space-y-2">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#services" className="block hover:text-blue-600">Services</a>
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#blog" className="block hover:text-blue-600">Blog</a>
          <a href="#service-areas" className="block hover:text-blue-600">Service Areas</a>
          <a href="#contact-info" className="block hover:text-blue-600">Contact Us</a>
          <a href="#contact" className="block hover:text-blue-600">Free Estimate</a>
        </div>
      </header>

    <div id="home" className="relative -top-28 h-0" />
      <main className="p-6 max-w-4xl mx-auto scroll-smooth">
       
        <div id="services" className="relative -top-28 h-0" aria-hidden="true"></div>
<section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-2xl p-4">
              <img
                src="/duct.png"
                alt="Air Duct Cleaning"
                width={300}
                height={200}
                className="rounded-xl mb-2"
              />
              <h3 className="text-xl font-semibold mb-2">Air Duct Cleaning</h3>
              <p>Improve indoor air quality and HVAC efficiency with expert duct cleaning.</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-4">
              <img
                src="/dryer.png"
                alt="Dryer Vent Cleaning"
                width={300}
                height={200}
                className="rounded-xl mb-2"
              />
              <h3 className="text-xl font-semibold mb-2">Dryer Vent Cleaning</h3>
              <p>Reduce fire risk and boost dryer performance with regular vent maintenance.</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-4">
              <div className="w-[235px] h-[315px] overflow-hidden rounded-xl mb-2">
  <img
    src="/chimney.jpeg"
    alt="Chimney Services"
    className="w-full h-full object-cover"
  />
</div>
              <h3 className="text-xl font-semibold mb-2">Chimney Services</h3>
              <p>Certified chimney sweeping and expert repair services to keep your home safe, your chimney clear, and in top condition.</p>
            </div>
          </div>
        </section>

        <div id="about" className="relative -top-28 h-0" aria-hidden="true"></div>
        <section id="about" className="bg-white p-6 shadow-lg rounded-2xl mb-10">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-2">Summit Home Services LLC is a family-owned and operated business dedicated to improving the comfort and safety of your home. With years of experience in air duct, dryer vent, and chimney cleaning, we use top-quality equipment and proven techniques to deliver outstanding results every time.</p>
          <p className="mb-2">Our mission is to provide cleaner air, reduce fire hazards, and extend the life of your HVAC systems. We take pride in our integrity, customer service, and professionalism—values that guide every job we take on.</p>
          <p>Whether it's your first service or you're a returning customer, we treat your home like our own. Trust Summit Home Services to help you breathe easier and live safer.</p>
        </section>

                  <div id="why-us" className="relative -top-28 h-0" aria-hidden="true"></div>
      <section id="why-us" className="bg-white p-6 shadow-lg rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-2xl">✅</span>
            <p>Licensed & EPA Lead-Safe Certified</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-2xl">🚀</span>
            <p>Fast, Reliable, and Affordable Service</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-2xl">💯</span>
            <p>100% Satisfaction Guarantee</p>
          </div>
        </div>
      </section>

                  <div id="blog" className="relative -top-28 h-0" aria-hidden="true"></div>
      <section id="blog" className="bg-white p-6 shadow-lg rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">From Our Blog</h2>
        <div className="space-y-6">
          <article id="blog1">
            <h3 className="text-xl font-semibold text-blue-700">Top 5 Benefits of Air Duct Cleaning</h3>
            <p className="text-gray-700 text-sm mt-2">
              Learn why regular duct cleaning improves air quality, lowers energy bills, and extends HVAC life.
              <button
  onClick={() => {
    setExpanded(expanded === 'blog1' ? null : 'blog1');
    scrollToWithOffset('blog1');
  }}
  className="ml-2 text-blue-500 hover:underline"
>
  {expanded === 'blog1' ? 'Read less' : 'Read more'}
</button>
            </p>
            {(expanded === 'blog1') && (
              <p className="text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out">Regular air duct cleaning helps improve indoor air quality by reducing dust, pollen, and other allergens circulating through your home. It enhances HVAC efficiency, lowers energy costs, removes unpleasant odors, and extends the system's life span. Clean ducts also promote healthier breathing environments for allergy sufferers and children.</p>
            )}
          </article>
          <article id="blog2">
            <h3 className="text-xl font-semibold text-blue-700">How Often Should You Clean Your Dryer Vent?</h3>
            <p className="text-gray-700 text-sm mt-2">
              Prevent fire hazards and keep your dryer efficient with these expert tips.
              <button
  onClick={() => {
    setExpanded(expanded === 'blog2' ? null : 'blog2');
    scrollToWithOffset('blog2');
  }}
  className="ml-2 text-blue-500 hover:underline"
>
  {expanded === 'blog2' ? 'Read less' : 'Read more'}
</button>
            </p>
            {(expanded === 'blog2') && (
              <p className="text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out">Dryer vents should be cleaned at least once a year to prevent dangerous lint buildup that can lead to house fires. Regular cleaning increases efficiency, reduces drying time, and lowers energy bills. Homes with pets, large families, or frequent laundry cycles may benefit from cleaning every six months.</p>
            )}
          </article>
          <article id="blog3">
            <h3 className="text-xl font-semibold text-blue-700">Signs Your Chimney Needs Repair</h3>
            <p className="text-gray-700 text-sm mt-2">
              Learn how to spot common chimney issues before they become costly problems.
              <button
  onClick={() => {
    setExpanded(expanded === 'blog3' ? null : 'blog3');
    scrollToWithOffset('blog3');
  }}
  className="ml-2 text-blue-500 hover:underline"
>
  {expanded === 'blog3' ? 'Read less' : 'Read more'}
</button>
            </p>
            {(expanded === 'blog3') && (
              <p className="text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out">Look for signs such as crumbling mortar, water stains on interior walls, smoky odors, smoke backdrafts, or visible cracks in the chimney. Regular inspections by certified professionals help identify structural issues, moisture problems, and blockage hazards that could lead to carbon monoxide risks or fire hazards.</p>
            )}
          </article>
        </div>
      </section>

      <section id="testimonials" className="bg-white p-6 shadow-lg rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
        <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-4 mb-4">
          “Summit Home Services cleaned our ducts thoroughly and professionally. We noticed the air was fresher immediately!” — Sarah M.
        </blockquote>
        <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-4">
          “Fast and reliable! Our dryer runs like new again. Highly recommend.” — James R.
        </blockquote>
      </section>

            <div id="service-areas" className="relative -top-28 h-0" aria-hidden="true"></div>
      <section id="service-areas" className="bg-white p-6 shadow-lg rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">Service Area</h2>
        <p className="mb-4">We proudly serve the greater New York City area including Queens, Brooklyn, the Bronx, and Nassau County.
    We also provide service to Bergen County, NJ, and White Plains, NY.</p>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48326.30404973243!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18d4e3f7%3A0x4c3c0f1b4e5a0f0!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl border"
/>



      </section>

            <div id="contact" className="relative -top-28 h-0" aria-hidden="true"></div>
      <section id="contact" className="p-6 border rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Get a Free Estimate</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Full Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email Address" className="p-2 border rounded" />
          <input type="tel" placeholder="Phone Number" className="p-2 border rounded" />
          <textarea placeholder="Service Needed" className="p-2 border rounded" rows="3" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
            Submit Request
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">We typically respond within 24 hours and serve all of NYC and surrounding areas.</p>
      </section>

      <section id="contact-info" className="p-6 border rounded-2xl mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2 text-gray-700">Email: <a href="mailto:summitservicesnyc@gmail.com" className="text-blue-600 hover:underline">summitservicesnyc@gmail.com
</a></p>
        <p className="text-gray-700">Phone: <a href="tel:+16462502358" className="text-blue-600 hover:underline">(646) 250-2358</a></p>
      </section>
    </main>
    </>
  );
}
