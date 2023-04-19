import {  useState } from 'react';
import './App.css';


const button_values = [
  [7,8,9, '\u00D7'],
  [4,5,6,'\u002D'],
  [1,2,3,'\u002B']
]



function App() {

  const [result, setResult ] = useState('')
  const [displayNumber, setDisplayNumber] = useState('')
  const [operation, setOperation] = useState('')


  const operationHandler = (operationSymbol) => {
    if (displayNumber !== '' ) {
      setOperation(operationSymbol)
      setResult(displayNumber)
      setDisplayNumber('')
    }
  }


  const getResult =  () => {
    if (operation !== '' ) {
      let output
      switch (operation) {
        case '\u00D7' :
          output  = String(parseFloat(result) * parseFloat(displayNumber))
          setResult(output);
          setDisplayNumber(output);
          setOperation('');
          break;
        case '\u002D':
          output = String(parseFloat(result) - parseFloat(displayNumber))
          setResult(output);
          setDisplayNumber(output);
          setOperation('');
          break;
        case '\u002B':
          output = String(parseFloat(result) + parseFloat(displayNumber))
          setResult(output);
          setDisplayNumber(output);
          setOperation('');
          break;
        case '\u00F7' :
          output = String(parseFloat(result) / parseFloat(displayNumber))
          setResult(output);
          setDisplayNumber(output);
          setOperation('');
          break;
        default: 
          console.log('')
      }
    }
  }



  const addDot = () => {
    if (displayNumber === '' ) {
      setDisplayNumber('0.')
    } else {
      setDisplayNumber(displayNumber.includes('.') ? displayNumber + '' : displayNumber + '.')
    }
  }


  const clear = () => {
    setOperation('')
    setResult('')
    setDisplayNumber('')
  }


  const slice = () => {
    if (displayNumber !== '') {
      setDisplayNumber(displayNumber.toString().slice(0,-1))
    }
  }



  

  return (
      <div className="container">
        <div className="calculator__wrapper d-flex justify-content-center align-items-center" >
          <div className="calculator rounded-1 p-3">
            <div className="row g-2">
              {/* Start Result line */}
              <div className="col-12">
                <div className="calculator__result text-end py-3">
                  <h2>
                    {
                      displayNumber === '' ? '0' : displayNumber
                    }
                  </h2>
                </div>
              </div>
              {/* Start first line  */}
              <div 
                className="col-6"
                onClick={() => clear()}>
                <p className='m-0 text-center bg-light-blue rounded-1 py-2 text-black'>
                  Clear
                </p>
              </div>
              <div 
                className="col-3"
                onClick={() => slice()}>
                <p className='m-0 text-center bg-light-blue rounded-1 py-2 text-black '>
                  C
                </p>
              </div>
              <div 
                className="col-3"
                onClick={() => operationHandler('\u00F7')}>
                <p className='m-0 text-center bg-light-blue rounded-1 py-2'>
                  {'\u00F7'}
                </p>
              </div>
              {/* Start Second line */}
              {
                button_values.map((item) => (
                  <>
                  <div 
                    className="col-3"
                    onClick={() => setDisplayNumber(displayNumber.toString() + item[0] ) }>
                    <p className='m-0 bg-deep-navy-blue text-center rounded-1 py-2'>
                      {item[0]}
                    </p>
                  </div>
                  <div 
                    className="col-3 text-center"
                    onClick={() => setDisplayNumber(displayNumber.toString() + item[1] ) }>
                    <p className='m-0 bg-deep-navy-blue text-center rounded-1 py-2'>
                      {item[1]}
                    </p>
                  </div>
                  <div 
                    className="col-3 text-center"
                    onClick={() => setDisplayNumber(displayNumber.toString() + item[2])}>
                    <p className='m-0 bg-deep-navy-blue text-center rounded-1 py-2'>
                      {item[2]}
                    </p>
                  </div>
                  <div 
                    className="col-3 text-center"
                    onClick={() => operationHandler(item[3])}>
                    <p className='m-0 bg-light-blue text-center rounded-1 py-2'>
                      {item[3]}
                    </p>
                  </div>
                  
                  </>
                ))
              }
              {/* Start Latest line  */}
              <div 
                className="col-3"
                onClick={() => setDisplayNumber(displayNumber === '' ? '' : displayNumber + '0' ) }>
                <p className='m-0 text-center bg-deep-navy-blue rounded-1 py-2 text-white'>
                  0
                </p>
              </div>
              <div 
                className="col-3"
                onClick={() => addDot()}>
                <p className='m-0 text-center bg-deep-navy-blue rounded-1 py-2 text-white '
                  >
                  .
                </p>
              </div>
              <div 
                className="col-6"
                onClick={() => getResult()}>
                <p className='m-0 text-center bg-light-blue rounded-1 py-2 text-black'>
                  {'\u003D'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
