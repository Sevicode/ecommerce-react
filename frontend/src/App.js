import './index.css';
import Header from './components/Header';
import StaticBanner from './components/StaticBanner';
import Footer from './components/Footer';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


function App() {
  return (
    <Auth0ProviderWithHistory>
      <Header />
      <StaticBanner />
      <Footer />
     
    </Auth0ProviderWithHistory>
  );
}

export default App;
