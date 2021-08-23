import Header from './components/header/index';
import RecordVoiceView from './components/recordvoice/index';
import Footer from './components/footer/index';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <RecordVoiceView />
      <Footer />
    </div>
  );
}

export default App;
