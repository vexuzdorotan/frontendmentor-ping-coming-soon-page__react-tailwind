import './App.css'

import Background from './components/Background'
import Title from './components/Title'
import Subscribe from './components/Subscribe'
import Dashboard from './components/Dashboard'
import Brands from './components/Brands'
import Copyright from './components/Copyright'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Background>
        <Title />
        <Subscribe />

        <Dashboard />

        <Brands />
        <Copyright />
      </Background>
      <Footer />
    </>
  )
}

export default App
