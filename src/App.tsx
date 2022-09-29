import { ThemeProvider } from "styled-components"
import { useReducer } from "react"

import { primaryTheme } from "./styles/themes"
import { 
  Main, 
  Title, 
  Screen, 
  ScreenInfo, 
  ButtonsContainer,
  DeleteButton,
  ResetButton,
  ResultButton,
} from "./styles/AppStyles"

enum CalcActionKind {
  ADD_NUMBER = 'ADD_NUMBER',
  OPERATOR = 'OPERATOR',
  RESET = 'RESET',
  DELETE = 'DELETE',
  EVALUATE = 'EVALUATE'
}

type CalcAction = {
  type: CalcActionKind,
  payload?: string
}

type CalcState = {
  currValue: string
}

const initialState = {
  currValue: '',
}

function reducer(state: CalcState, action: CalcAction) {
  switch (action.type) {

    case CalcActionKind.ADD_NUMBER:
      if(!state.currValue){
        return {
          currValue: action.payload
        }
      } else {
        return {
          currValue: state.currValue + action.payload
        }
      }

    case CalcActionKind.OPERATOR:
      if(state.currValue.length < 0){
        return state
      }
      if(!['+', '-', '/', '*'].includes(state.currValue[state.currValue.length - 1])){
        return {
          currValue: `${state.currValue}${action.payload}`
        }
      } else {
        return state
      }
    
    case CalcActionKind.DELETE:
      if(state.currValue.length <= 1){
        return {
          currValue: ''
        }
      } else {
        return {
          currValue: state.currValue.slice(0, -1)
        }
      }
      
    case CalcActionKind.RESET:
      return {
        currValue: ''
      }
    case CalcActionKind.EVALUATE:
      return {
        currValue: eval(state.currValue).toString()
      }
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ThemeProvider theme={primaryTheme}>
      <Main>
        <Title>calc</Title>
        <Screen>
          <ScreenInfo>{state.currValue}</ScreenInfo>
        </Screen>
        <ButtonsContainer>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '7'})}>1</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '8'})}>8</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '9'})}>9</button>
          <DeleteButton onClick={() => dispatch({type: CalcActionKind.DELETE})}>DEL</DeleteButton>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '4'})}>4</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '5'})}>5</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '6'})}>6</button>
          <button onClick={() => dispatch({type: CalcActionKind.OPERATOR, payload: '+'})}>+</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '1'})}>1</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '2'})}>2</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '3'})}>3</button>
          <button onClick={() => dispatch({type: CalcActionKind.OPERATOR, payload: '-'})}>-</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '.'})}>.</button>
          <button onClick={() => dispatch({type: CalcActionKind.ADD_NUMBER, payload: '0'})}>0</button>
          <button onClick={() => dispatch({type: CalcActionKind.OPERATOR, payload: '/'})}>/</button>
          <button onClick={() => dispatch({type: CalcActionKind.OPERATOR, payload: '*'})}>x</button>
          <ResetButton onClick={() => dispatch({type: CalcActionKind.RESET})}>RESET</ResetButton>
          <ResultButton onClick={() => dispatch({type: CalcActionKind.EVALUATE})}>=</ResultButton>
        </ButtonsContainer>
      </Main>
    </ThemeProvider>
  )
}

export default App
