import React from 'react';
import kodeId from '../../assets/kode-hactive.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation().pathname;
  return (
    <footer className="pt-24 pb-12 border-t-2 border-primary relative">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-primary md:w-1/3 [&>p]:mt-1">
            <h3 className="mb-2 text-3xl lg:text-2xl font-bold">RCTN-KS09</h3>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-primary">Resource</h3>
            <ul className="text-primary flex flex-col">
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                  ReactJS
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                  TailwindCSS
                </a>
              </li>
              <li>
                <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                  OMDbAPI
                </a>
              </li>
              <li>
              </li>
              <li>
                <a href="https://www.kode.id" target="_blank" rel="noreferrer noopener">
                  <img src={kodeId} alt="kode.id" className="hover:scale-105" width={100} />
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-primary">Navigation</h3>
            <ul className="text-primary">
              <li>
                {location === '/' ? (
                  <a href="#home" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Home
                  </a>
                ) : (
                  <Link to="/" onClick={window.scrollTo(0, 0)} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Home
                  </Link>
                )}
              </li>
              <li>
                {location === '/' ? (
                  <a href="#movies" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Movies
                  </a>
                ) : (
                  <Link to="/" onClick={() => window.scrollTo(0, 729)} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Movies
                  </Link>
                )}
              </li>
              <li>
                {location === '/bookmark' ? (
                  <a href="#bookmark" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Wishlist
                  </a>
                ) : (
                  <Link to="/bookmark" onClick={window.scrollTo(0, 0)} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Wishlist
                  </Link>
                )}
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-pink/40 pt-10">
          <p className="text-center text-xs font-medium text-white">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh RCTN-KS09-KEL04
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
