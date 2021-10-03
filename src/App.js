import React from 'react';
import Content from './components/Content';
import Footer from './shared/Footer';
import Header from './shared/Header';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
