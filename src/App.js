import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import Internship from  './components/Internship';
import Courses from  './components/Courses';
import Skills from  './components/Skills';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Internship resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Courses resumeData={resumeData}/>




        {/*<ContactUs resumeData={resumeData}/>*/}
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
