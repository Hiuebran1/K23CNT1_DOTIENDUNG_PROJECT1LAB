

import DTDClassComp from './components/DTDClassComp';
import DTDFunComp from './components/DTDFunComp';
import DTDJsxExpression from './components/DTDjsxExpression';

function DTDApp() {
  return (
    <div className="CONTAINER BORDER mt-3 bg-white">
      <h1>
        React JS Lesson 03 -  Do Tien Dung 
      
      </h1>
      <DTDJsxExpression/>
        <hr/>

      <DTDFunComp/>
      <hr/>
      <DTDClassComp></DTDClassComp>
    </div>
  );
}

export default DTDApp;
