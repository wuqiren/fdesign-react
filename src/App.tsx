import Button from './components/Button/button';
function App() {
  return (
    <div className='App'>
      <Button btnType='primary'>你好</Button>
      <Button disabled={true} btnType='primary'>
        你好
      </Button>
    </div>
  );
}

export default App;
