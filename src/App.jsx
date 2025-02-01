// App.js
import './App.css';
import Page_1 from './components/page_1';
import Page_2 from './components/page_2';
import Page_3 from './components/page_3';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Page_1 />
      <Page_2 />
      {/* สามารถเพิ่ม Page_3 ได้ถ้าต้องการ */}
    </div>
  );
}

export default App;
