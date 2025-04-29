import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Header />
      <Main />
      <div>
        <AppRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App