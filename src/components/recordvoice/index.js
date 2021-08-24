import Recoder from './../recorder/index';
import RecordList from './../recordlist/index';

import './index.css';

export default function RecordVoiceView () {
  return (
    <div className="container recordvoice-wrapper">
      <RecordList />
      <Recoder />
    </div>
  );
}