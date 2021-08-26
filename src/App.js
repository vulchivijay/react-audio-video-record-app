import { connect } from 'react-redux'

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

const mapStateToProps = state => {
  return {...state}
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
