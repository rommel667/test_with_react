import React from 'react'
import Header from './components/Header'
import './app.scss'
import Headline from './components/Headline'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Post" description="Click button to render post" />
      </section>

    </div>
  );
}

export default App;
