import React from 'react';
import ItemProject from './components/ItemProject';

function App() {
  return (
    <div>
      <ItemProject 
        tag='Upload' 
        time="11:40 am" 
        title="Comb - Home page.psd"
        author='Ricardo Santos'
        tagBgColor='red'
        tagColor='white'
      >
        <button style={{padding:'8px', backgroundColor:'transparent', border: '1px solid #ededed'}}>view</button>
      </ItemProject>

      <ItemProject 
        tag='Task' 
        time="13:25 am" 
        title="Comb - Home page.psd"
        author='Ricardo Santos'
        tagBgColor='blue'
        tagColor='white'
      >
        <button style={{padding:'8px', backgroundColor:'transparent', border: '1px solid #ededed'}}>view</button>
      </ItemProject>
    </div>
  );
}

export default App;
