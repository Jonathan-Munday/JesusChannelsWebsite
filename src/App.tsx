import { useState, useEffect } from 'react';
import {
  Menu, X, MapPin, Phone, Mail, ChevronRight,
  PlayCircle, Calendar, Clock, Facebook, Youtube,
  Heart, Users, BookOpen, Music, Sun, Moon
} from 'lucide-react';

import logoImg from '../images/branding/logo.jpeg';
import lionImg from '../images/branding/lion.png';
import apostleYellowSuit from '../images/portraits/apostle-yellow-suit.jpeg';
import apostleStudioPortrait from '../images/portraits/apostle-studio-portrait.jpeg';
import apostleGreenOutfit from '../images/portraits/apostle-green-outfit.jpeg';
import apostleMinistering from '../images/ministry/apostle-ministering.jpeg';
import apostlePrayerMinistry from '../images/ministry/apostle-prayer-ministry.jpeg';

const ADDRESS = "Opposite water works eleme Rivers State Port Harcourt, Nigeria.";
const EMAIL = "dicksonwilliamsministries@gmail.com";
const PHONE = "+234 806 974 7117";

const BANK_DETAILS = {
  usd: {
    number: "219404939667",
    bank: "Lead",
    achRouting: "101019644",
    wireRouting: "101019644",
    type: "Checking",
    address: "1801 Main St., Kansas City, MO 64108"
  },
  naira: {
    number: "6550617461",
    name: "Dickson Williams Ekpirikpo",
    bank: "Fidelity Bank"
  }
};

const IMAGES = {
  heroBg: lionImg,
  worship: apostleGreenOutfit,
  prayer: apostlePrayerMinistry,
  community: apostleStudioPortrait,
  apostle1: apostleYellowSuit,
  apostle2: apostleStudioPortrait,
  apostle3: apostleGreenOutfit,
  apostleAction1: apostleMinistering,
  apostleAction2: apostlePrayerMinistry,
  logo: logoImg
};

const EVENTS = [
  {
    title: "Global Prophetic Prayers: The God Who Sees Me",
    date: "August 3rd - 7th, 2026",
    time: "11 PM Daily (WAT)",
    location: "Live Online & In-Person",
    description: "Join Apostle Dickson Williams for a week of prophetic encounters. Featuring prayers, prophecies, word, and deliverance.",
    image: IMAGES.apostle2
  }
];

const MINISTRIES = [
  { name: "Prophetic Ministry", icon: Heart, description: "Encounter the God who speaks today." },
  { name: "Deliverance", icon: Users, description: "Setting the captives free through the power of Christ." },
  { name: "Word & Teaching", icon: BookOpen, description: "Deep dives into the uncompromised Word of God." },
  { name: "Worship", icon: Music, description: "Creating an atmosphere for the Holy Spirit to move." }
];

const SERMONS = [
  { title: "The God Who Sees Me", series: "August Encounters", date: "August 3, 2026", image: IMAGES.apostleAction1 },
  { title: "Divine Settlement", series: "Prophetic Declarations", date: "July 26, 2026", image: IMAGES.worship },
  { title: "Raising Champions", series: "Core Values", date: "July 19, 2026", image: IMAGES.prayer }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderNavbar = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? isDarkMode ? 'bg-[#0a0f1d]/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('home')}>
            <img src={IMAGES.logo} alt="Jesus Channels Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-[#d4af37]" />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg md:text-xl leading-tight ${
                isScrolled ? (isDarkMode ? 'text-white' : 'text-gray-900') : 'text-white'
              }`}>JESUS CHANNELS</span>
              <span className={`text-[10px] md:text-xs tracking-widest ${
                isScrolled ? (isDarkMode ? 'text-[#d4af37]' : 'text-amber-600') : 'text-[#d4af37]'
              }`}>MINISTRIES</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['home', 'about', 'events', 'media', 'give'].map((page) => (
              <button 
                key={page}
                onClick={() => navigate(page)}
                className={`uppercase tracking-wider text-xs lg:text-sm font-semibold transition-colors ${
                  currentPage === page 
                    ? 'text-[#d4af37]' 
                    : isScrolled 
                        ? (isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black')
                        : 'text-gray-200 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? (isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100')
                : 'text-white hover:bg-white/20'
            }`}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              onClick={() => navigate('contact')}
              className="px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white text-sm font-bold rounded-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className={`${
              isScrolled ? (isDarkMode ? 'text-white' : 'text-black') : 'text-white'
            }`}>
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? (isDarkMode ? 'text-white' : 'text-black') : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full shadow-2xl border-t ${
          isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-white border-gray-200'
        }`}>
          <div className="flex flex-col px-4 py-6 space-y-4">
            {['home', 'about', 'events', 'media', 'give', 'contact'].map((page) => (
              <button 
                key={page}
                onClick={() => navigate(page)}
                className={`uppercase tracking-wider text-sm font-semibold text-left py-2 border-b ${
                  isDarkMode ? 'border-gray-800 text-gray-300' : 'border-gray-100 text-gray-700'
                } ${currentPage === page ? 'text-[#d4af37]' : ''}`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const renderHome = () => (
    <div className={`animate-fade-in ${isDarkMode ? 'bg-[#020617]' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.heroBg} 
            alt="Lion of Judah" 
            className="w-full h-full object-cover object-[40%_center] sm:object-center"
          />
          {/* Gradients to ensure text readability */}
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/40' : 'bg-gradient-to-r from-white/95 via-white/80 to-white/40'}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-[#020617] via-transparent to-transparent' : 'from-white via-transparent to-transparent'}`}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 md:mt-0 w-full">
          <div className="flex justify-center mb-6 md:mb-8 animate-slide-up">
            <img src={IMAGES.logo} alt="Ministry Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] border-2 border-[#d4af37]" />
          </div>
          <h2 className={`text-sm md:text-base font-bold tracking-[0.2em] mb-4 md:mb-6 uppercase ${isDarkMode ? 'text-[#d4af37]' : 'text-amber-700'} animate-slide-up`} style={{animationDelay: '100ms'}}>
            Welcome to Jesus Channels Ministries
          </h2>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 md:mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} animate-slide-up`} style={{animationDelay: '200ms'}}>
            Raising <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#facc15]">Champions</span><br/>
            Like Christ
          </h1>
          <p className={`text-base md:text-xl md:max-w-2xl mx-auto mb-8 md:mb-10 animate-slide-up ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{animationDelay: '300ms'}}>
            Join a global army of believers spiritually robust, prophetically aligned, and equipped for divine settlement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{animationDelay: '400ms'}}>
            <button onClick={() => navigate('events')} className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold rounded-sm shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all">
              Join This Sunday
            </button>
            <button onClick={() => navigate('about')} className={`w-full sm:w-auto px-8 py-3.5 md:py-4 border-2 font-bold rounded-sm transition-all ${
              isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-900/20 text-gray-900 hover:bg-gray-100'
            }`}>
              Discover Our Ministry
            </button>
          </div>
        </div>
      </div>

      {/* Leadership Intro Section */}
      <div className={`py-16 md:py-24 ${isDarkMode ? 'bg-[#0a0f1d]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 px-4 sm:px-0">
              <h2 className={`text-3xl sm:text-4xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Meet <span className="text-[#d4af37]">Apostle Dickson Williams</span>
              </h2>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Oracle of Grace & Lead Minister
              </h3>
              <p className={`mb-6 leading-relaxed text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Apostle Dickson Williams is dedicated to raising a generation of believers who walk in the power, love, and wisdom of Jesus Christ. Through prophetic insights, deep teaching of the Word, and a powerful deliverance ministry, he equips the saints for their global mandate.
              </p>
              <button onClick={() => navigate('about')} className={`font-semibold flex items-center transition-colors ${
                isDarkMode ? 'text-[#d4af37] hover:text-white' : 'text-amber-600 hover:text-gray-900'
              }`}>
                Read Full Bio <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
            
            {/* Formal yellow suit portrait */}
            <div className="relative order-1 lg:order-2 px-4 sm:px-0">
              <div className="absolute inset-0 bg-[#d4af37] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-sm"></div>
              <img src={IMAGES.apostle1} alt="Apostle Dickson Williams" className="relative z-10 rounded-sm shadow-2xl w-full object-cover aspect-[4/5] sm:aspect-[4/3] lg:aspect-square object-top" />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section (August Encounter) */}
      <div className={`py-16 md:py-24 ${isDarkMode ? 'bg-[#020617]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Upcoming <span className="text-[#d4af37]">Encounters</span></h2>
            <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Join us for our special gatherings and experience the power of God.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS.map((event, index) => (
              <div key={index} className={`rounded-sm overflow-hidden flex flex-col shadow-lg border ${
                isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-gray-50 border-gray-200'
              } group`}>
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-sm font-bold rounded-sm border border-[#d4af37]/50">
                    FEATURED
                  </div>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 leading-tight">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  <div className={`flex items-center mb-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Calendar size={18} className="text-[#d4af37] mr-2 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className={`flex items-center mb-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Clock size={18} className="text-[#d4af37] mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <p className={`mb-6 text-sm flex-grow ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.description}</p>
                  <button onClick={() => navigate('events')} className={`w-full py-3 text-sm font-bold border rounded-sm transition-colors ${
                    isDarkMode ? 'border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black' : 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
                  }`}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className={`pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen animate-fade-in ${isDarkMode ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 sm:mb-24">
          <div className="relative px-4 sm:px-0">
             <div className="absolute -inset-2 sm:-inset-4 border-2 border-[#d4af37]/20 rounded-lg"></div>
             {/* Studio Portrait */}
             <img src={IMAGES.apostle2} alt="Apostle Dickson Williams" className="relative z-10 w-full aspect-[3/4] sm:h-[600px] object-cover rounded-sm object-top shadow-xl" />
             
             {/* Name plate */}
             <div className="absolute bottom-4 sm:bottom-10 -right-4 sm:-right-10 bg-[#d4af37] text-white p-4 sm:p-6 rounded-sm shadow-2xl z-20 max-w-[200px] sm:max-w-xs">
                <h4 className="font-serif font-bold text-lg sm:text-xl leading-tight mb-1">Apostle Dickson Williams</h4>
                <p className="text-xs sm:text-sm font-medium opacity-90">Lead Minister</p>
             </div>
          </div>
          
          <div className="px-4 sm:px-0">
            <h2 className={`text-xs font-bold tracking-widest uppercase mb-3 ${isDarkMode ? 'text-[#d4af37]' : 'text-amber-600'}`}>The Visionary</h2>
            <h3 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Raising Champions For Christ</h3>
            <div className={`space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                Apostle Dickson Williams is the lead minister of Jesus Channels Ministries. Known as the "Oracle of Grace", his ministry is characterized by profound prophetic encounters, deep revelatory teachings, and undeniable demonstrations of the Spirit's power through healing and deliverance.
              </p>
              <p>
                His mandate is clear: to raise believers who are completely molded in the image of Christ, capable of channeling God's presence into every sphere of human endeavor. 
              </p>
              <blockquote className={`pl-4 border-l-4 italic my-6 py-2 ${isDarkMode ? 'border-[#d4af37] text-gray-300' : 'border-amber-600 text-gray-700'}`}>
                "We are not just gathering crowds; we are raising an army of champions who will take territories for Jesus."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-20 sm:mb-24">
          <div className="flex justify-center mb-6">
            <img src={IMAGES.logo} alt="Ministry Logo" className="w-20 h-20 rounded-full border-2 border-[#d4af37]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Global Mandate</h2>
          <p className={`text-lg sm:text-xl leading-relaxed mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            To raise a global army of champions for Christ—believers who are spiritually robust, prophetically aligned, and equipped to channel the love, power, and wisdom of Jesus to the ends of the earth.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mt-16 sm:mt-24">
           <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ministry in Action</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-0">
              <div className="relative group overflow-hidden rounded-sm shadow-lg aspect-square">
                 <img src={IMAGES.apostleAction1} alt="Ministering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-serif font-bold text-lg">Prophetic Declarations</p>
                 </div>
              </div>
              <div className="relative group overflow-hidden rounded-sm shadow-lg aspect-square">
                 <img src={IMAGES.apostleAction2} alt="Healing & Deliverance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-serif font-bold text-lg">Healing & Deliverance</p>
                 </div>
              </div>
               <div className="relative group overflow-hidden rounded-sm shadow-lg aspect-square">
                 <img src={IMAGES.apostle3} alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-serif font-bold text-lg">Joyful Fellowship</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );

  const renderEvents = () => (
    <div className={`pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen animate-fade-in ${isDarkMode ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-5xl font-serif font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Events & <span className="text-[#d4af37]">Encounters</span></h1>
        <p className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mark your calendars for our upcoming gatherings.</p>

        {/* Featured Event Detailed View */}
        <div className={`rounded-sm overflow-hidden shadow-2xl border flex flex-col lg:flex-row ${
          isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-gray-50 border-gray-200'
        }`}>
          {/* Event Image */}
          <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
             <img src={IMAGES.apostle2} alt="August Event" className="absolute inset-0 w-full h-full object-cover object-top" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
             <div className="absolute top-6 left-6 flex flex-col items-center bg-black/80 backdrop-blur-sm p-4 rounded-sm border border-[#d4af37]/50">
               <span className="text-[#d4af37] font-bold text-sm">AUG</span>
               <span className="text-white font-serif font-bold text-3xl">3-7</span>
             </div>
          </div>

          {/* Event Details */}
          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
             <h2 className={`text-sm font-bold tracking-widest uppercase mb-2 ${isDarkMode ? 'text-[#d4af37]' : 'text-amber-600'}`}>Global Prophetic Prayers</h2>
             <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>The God Who Sees Me</h3>
             
             <div className="space-y-4 mb-8">
                <div className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Clock size={20} className="text-[#d4af37] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">11:00 PM Daily (Nigerian Time)</p>
                    <p className="text-sm opacity-80">Join us every night for powerful encounters.</p>
                  </div>
                </div>
                <div className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <MapPin size={20} className="text-[#d4af37] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Live on Social Media</p>
                    <p className="text-sm opacity-80">Facebook & YouTube @ Jesus Channels Ministries</p>
                  </div>
                </div>
             </div>

             <div className={`p-4 border-l-2 mb-8 ${isDarkMode ? 'bg-gray-800/50 border-[#d4af37] text-gray-300' : 'bg-amber-50 border-amber-500 text-gray-700'}`}>
               <p className="font-bold mb-1 text-sm">Featuring:</p>
               <ul className="text-sm space-y-1 list-disc list-inside">
                 <li>Prayers</li>
                 <li>Prophecies</li>
                 <li>Word and Deliverance</li>
               </ul>
             </div>

             <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold rounded-sm shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                Join WhatsApp Group
             </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMedia = () => (
    <div className={`pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen animate-fade-in ${isDarkMode ? 'bg-[#020617]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-5xl font-serif font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sermons & <span className="text-[#d4af37]">Media</span></h1>
        <p className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Watch and listen to the latest prophetic teachings.</p>

        {/* Featured Video */}
        <div className={`relative w-full aspect-video border flex items-center justify-center group cursor-pointer mb-12 sm:mb-16 overflow-hidden rounded-sm shadow-lg ${
          isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-gray-900 border-gray-300'
        }`}>
           <img src={IMAGES.apostleAction1} alt="Latest Sermon" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 object-top" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
           
           <div className="relative z-10 flex flex-col items-center mt-auto pb-8 sm:pb-12 w-full px-4 text-center">
              <PlayCircle size={64} className="text-white/80 group-hover:text-[#d4af37] transition-colors mb-4 sm:w-20 sm:h-20" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-2">The Power of Divine Settlement</h2>
              <p className="text-[#d4af37] font-semibold text-sm sm:text-base">Apostle Dickson Williams</p>
           </div>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERMONS.map((sermon, index) => (
            <div key={index} className={`rounded-sm overflow-hidden border group cursor-pointer hover:-translate-y-1 transition-transform ${
              isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-white border-gray-200 shadow-md'
            }`}>
              <div className="relative h-48 overflow-hidden bg-gray-900">
                 <img src={sermon.image} alt={sermon.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <PlayCircle size={40} className="text-white/70 group-hover:text-[#d4af37] transition-colors" />
                 </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className={`text-xs font-bold uppercase mb-2 ${isDarkMode ? 'text-[#d4af37]' : 'text-amber-600'}`}>{sermon.series}</p>
                <h3 className={`text-lg sm:text-xl font-serif font-bold mb-2 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{sermon.title}</h3>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{sermon.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGive = () => (
    <div className={`pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen animate-fade-in ${isDarkMode ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className={`text-4xl sm:text-5xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Partner <span className="text-[#d4af37]">With Us</span></h1>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your generous giving supports the global mandate to raise champions for Christ.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* USD Account */}
          <div className={`p-6 sm:p-8 rounded-sm border shadow-lg relative overflow-hidden ${
            isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}>
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/10 rounded-bl-full"></div>
             <h3 className={`text-xl font-serif font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="text-[#d4af37] mr-3 border border-[#d4af37] rounded-full w-8 h-8 flex items-center justify-center text-sm">$</span> 
                USD Account
             </h3>
             <div className={`space-y-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex flex-col">
                  <span className="text-xs uppercase opacity-70 mb-1">Bank Name</span>
                  <span className="font-semibold text-base">{BANK_DETAILS.usd.bank}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase opacity-70 mb-1">Account Number</span>
                  <span className="font-mono text-lg tracking-wider font-bold text-[#d4af37]">{BANK_DETAILS.usd.number}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase opacity-70 mb-1">Account Type</span>
                  <span className="font-semibold">{BANK_DETAILS.usd.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase opacity-70 mb-1">ACH Routing</span>
                    <span className="font-mono">{BANK_DETAILS.usd.achRouting}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase opacity-70 mb-1">Wire Routing</span>
                    <span className="font-mono">{BANK_DETAILS.usd.wireRouting}</span>
                  </div>
                </div>
                <div className="flex flex-col pt-2 border-t border-gray-700/50 mt-4">
                  <span className="text-xs uppercase opacity-70 mb-1">Bank Address</span>
                  <span className="text-sm">{BANK_DETAILS.usd.address}</span>
                </div>
             </div>
          </div>

          {/* Naira Account */}
          <div className={`p-6 sm:p-8 rounded-sm border shadow-lg relative overflow-hidden ${
            isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}>
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/10 rounded-bl-full"></div>
             <h3 className={`text-xl font-serif font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="text-[#d4af37] mr-3 border border-[#d4af37] rounded-full w-8 h-8 flex items-center justify-center text-sm">₦</span> 
                Naira Account
             </h3>
             <div className={`space-y-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex flex-col">
                  <span className="text-xs uppercase opacity-70 mb-1">Bank Name</span>
                  <span className="font-semibold text-base">{BANK_DETAILS.naira.bank}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase opacity-70 mb-1">Account Name</span>
                  <span className="font-semibold">{BANK_DETAILS.naira.name}</span>
                </div>
                <div className="flex flex-col pt-2">
                  <span className="text-xs uppercase opacity-70 mb-1">Account Number</span>
                  <span className="font-mono text-xl sm:text-2xl tracking-wider font-bold text-[#d4af37]">{BANK_DETAILS.naira.number}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className={`pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen animate-fade-in ${isDarkMode ? 'bg-[#020617]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-5xl font-serif font-bold text-center mb-12 sm:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact <span className="text-[#d4af37]">Us</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <h2 className={`text-2xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
            
            <div className={`flex items-start p-6 border rounded-sm ${isDarkMode ? 'bg-[#0a0f1d] border-gray-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
              <MapPin size={24} className="text-[#d4af37] mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Worship Center</h3>
                <p className="leading-relaxed text-sm sm:text-base">{ADDRESS}</p>
              </div>
            </div>

            <div className={`flex items-start p-6 border rounded-sm ${isDarkMode ? 'bg-[#0a0f1d] border-gray-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
              <Phone size={24} className="text-[#d4af37] mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone / WhatsApp</h3>
                <p className="text-sm sm:text-base">{PHONE}</p>
                <p className="text-xs opacity-70 mt-1">For support & partnership</p>
              </div>
            </div>

            <div className={`flex items-start p-6 border rounded-sm ${isDarkMode ? 'bg-[#0a0f1d] border-gray-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
              <Mail size={24} className="text-[#d4af37] mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                <p className="text-sm sm:text-base break-all">{EMAIL}</p>
              </div>
            </div>
          </div>

          <div className={`p-8 border rounded-sm shadow-xl ${isDarkMode ? 'bg-[#0a0f1d] border-gray-800' : 'bg-white border-gray-200'}`}>
            <h2 className={`text-2xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send a Message</h2>
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:ring-2 focus:ring-[#d4af37] outline-none transition-all ${
                  isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                }`} placeholder="Your name" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input type="email" className={`w-full px-4 py-3 rounded-sm border focus:ring-2 focus:ring-[#d4af37] outline-none transition-all ${
                  isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                }`} placeholder="your@email.com" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea rows={4} className={`w-full px-4 py-3 rounded-sm border focus:ring-2 focus:ring-[#d4af37] outline-none transition-all ${
                  isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                }`} placeholder="How can we pray for you?"></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold rounded-sm shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <footer className={`border-t py-12 md:py-16 ${isDarkMode ? 'bg-[#020617] border-gray-800' : 'bg-gray-900 border-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-6">
              <img src={IMAGES.logo} alt="Jesus Channels Logo" className="h-12 w-12 rounded-full object-cover border-2 border-[#d4af37]" />
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-xl text-white leading-tight">JESUS CHANNELS</span>
                <span className="text-xs tracking-widest text-[#d4af37]">MINISTRIES</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Raising champions for Christ through prophetic prayers, word, and deliverance.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-serif font-bold text-lg mb-6">Connect</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center justify-center md:justify-start">
                <Phone size={16} className="text-[#d4af37] mr-3" />
                <span>{PHONE}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin size={16} className="text-[#d4af37] mr-3" />
                <span>Port Harcourt, Nigeria</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors"><Facebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors"><Youtube size={24} /></a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3 flex flex-col text-sm">
              {['Home', 'About', 'Events', 'Give'].map((link) => (
                <button key={link} onClick={() => navigate(link.toLowerCase())} className="text-gray-400 hover:text-[#d4af37] transition-colors text-center md:text-left">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jesus Channels Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className={`min-h-screen font-sans selection:bg-[#d4af37] selection:text-black ${isDarkMode ? 'bg-[#020617] text-white' : 'bg-white text-gray-900'}`}>
      {renderNavbar()}
      <main>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'events' && renderEvents()}
        {currentPage === 'media' && renderMedia()}
        {currentPage === 'give' && renderGive()}
        {currentPage === 'contact' && renderContact()}
      </main>
      {renderFooter()}

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slide-up { opacity: 0; animation: slideUp 0.8s ease-out forwards; }
      `}} />
    </div>
  );
}
