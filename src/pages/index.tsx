import type { NextPage } from 'next';
import FormView from '../components/FormView';
import HomeScreen from '../components/HomeScreen';
import ModernServices from '../components/ModernServices';
import WhoIsLuana from '../components/WhoIsLuana';
import Header from '../shared/components/Header';
import Footer from '../shared/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <WhoIsLuana />
      <ModernServices />
      <FormView />
      <Footer />
    </>
  );
};

export default Home;
