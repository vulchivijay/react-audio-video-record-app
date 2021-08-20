import RecorderController from './components/recorder-controller';
import RecordingsList from './components/recordings-list';
import useRecorder from './hooks/useRecorder';

import Header from './components/header';
import Footer from './components/footer';

import './App.css';

function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;
  return (
    <div className="App">
      <Header />
      <div className="container record-wrapper">
        <RecorderController recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
