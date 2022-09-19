import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] =  useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation,setOperation] = useState('')

  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMultiplicationmNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('X')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleDivisionmNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () =>{
    if(!firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
        break;
        case '-':
          handleMinusNumbers();
        break;
        case 'X':
          handleMultiplicationmNumbers();
        break;
        case '/':
          handleDivisionmNumbers();
        break;
        default: break;
      }
    }
  }

  return (
    <body>
      <Container>
      <h1>Calculadora React</h1>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button  label='9' onClick={() => handleAddNumber('9')}/>
            <Button  label='X' onClick={handleMultiplicationmNumbers}/>
            <Button  label='/' onClick={handleDivisionmNumbers}/>
            <Button  label='C' onClick={handleOnClear}/>
          </Row>
          <Row>
            <Button  label='6' onClick={() => handleAddNumber('6')}/>
            <Button  label='7' onClick={() => handleAddNumber('7')}/>
            <Button  label='8' onClick={() => handleAddNumber('8')}/>
            <Button  label='-' onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button  label='3' onClick={() => handleAddNumber('3')}/>
            <Button  label='4' onClick={() => handleAddNumber('4')}/>
            <Button  label='5' onClick={() => handleAddNumber('5')}/>
            <Button  label='+' onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button  label='0' onClick={() => handleAddNumber('0')}/>
            <Button  label='1' onClick={() => handleAddNumber('1')}/>
            <Button  label='2' onClick={() => handleAddNumber('2')}/>
            <Button  label='=' onClick={handleEquals}/>
          </Row>
        </Content>
        <p>&#x26A0; A calculadora executa apenas uma operação matemática por vez.</p>
      </Container>
    </body>
  );
}

export default App;
