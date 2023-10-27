import './ExploreContainer.css';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [clearDisplay, setClearDisplay] = useState(false);

  const handleNumberClick = (number) => {
    if (clearDisplay) {
      setDisplay(number);
      setClearDisplay(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperatorClick = (op) => {
    setClearDisplay(true);
    setFirstOperand(display);
    setOperator(op);
  };

  const handleEqualsClick = () => {
    const secondOperand = display;
    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
      default:
        break;
    }
    setDisplay(result.toString());
    setClearDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstOperand('');
    setOperator('');
    setClearDisplay(false);
  };
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="12">
            <IonInput className="calculator-display" value={display} readonly={true}></IonInput>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('7')}>7</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('8')}>8</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('9')}>9</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleOperatorClick('+')}>+</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('4')}>4</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('5')}>5</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('6')}>6</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleOperatorClick('-')}>-</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('1')}>1</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('2')}>2</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('3')}>3</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleOperatorClick('*')}>*</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleNumberClick('0')}>0</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={handleClear}>C</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={handleEqualsClick}>=</IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton expand="full" onClick={() => handleOperatorClick('/')}>/</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  );
};

export default ExploreContainer;
