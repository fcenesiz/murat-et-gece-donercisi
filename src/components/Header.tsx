
import { useState, useEffect } from 'react';
import './../App.css';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // aşağı kayıyor
        setShowHeader(false);
      } else {
        // yukarı kayıyor
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`header ${showHeader ? 'show' : 'hide'}`}
        style={{
            backgroundImage : "url('header_background_image.jpg')", // url('https://www.corumbeltur.com.tr/wp-content/uploads/2024/09/breadcrumb-sonn-scaled.jpg')
                backgroundSize:  "cover",
                maxWidth: "100vw",
                backgroundPosition: "center",
         }}
    >
        <div className="overlay" />
         <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
          <h1 className='header-primary-text'>
        GECE
        </h1>
        <h1 className='header-secondary-text'>
        Dönercisi
        </h1 >
        </div>
    </div>
  );
};

export default Header;

/*
import { useEffect, useState } from "react";
export default function Header(){
    
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      // Yükseklik 300px → min 100px'e kadar küçülsün
      const minHeight = 0;
      const maxHeight = 300;
      const newHeight = Math.max(minHeight, maxHeight - scrollY);

    return (
        <header
            style={{
                width: "100vw"
            }}
        >
        <div
            style={{
                display: 'flex',
                height: `${newHeight}px`,
                width: "100vw",
                overflow: "hidden",
                transition: "height 0.1s ease-out",
                backgroundColor: "#f0f0f0",
                backgroundImage : "url('/header_background_image.jpg')", // url('https://www.corumbeltur.com.tr/wp-content/uploads/2024/09/breadcrumb-sonn-scaled.jpg')
                backgroundSize:  "cover",
                maxWidth: "100vw",
                backgroundPosition: "center",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
            <h1
             className="header-primary-text"
        >
          GECE
        </h1>
        <h1
             className="header-secondary-text"
        >
          Dönercisi
        </h1>
            </div>
           
         
        
       </div>
            
            <nav>
                <ul style={{flexDirection: "row", display: "flex",}}>
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="/fiyat-listesi">Fiyat Listesi</a></li>
                    <li><a href="#">Hakkında</a></li>
                    <li><a href="#">İletişim</a></li>
                </ul>
            </nav>
        </header>
    )
}


*/