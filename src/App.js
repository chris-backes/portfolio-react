import './App.css';
import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [page, setPage] = useState('');

  const renderPage = (currentPage) => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <>
      <body>
      <Header setPage={setPage}/>
      <main>
        {renderPage(page)}
      </main>
      <Footer />
      </body>
    </>
  );
}

export default App;
