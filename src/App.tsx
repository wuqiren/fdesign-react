import Button from './components/Button/button';
function App() {
  return (
    <div className='App'>
      <Button btnType='primary'>你好</Button>
      
      <Button size='lg' btnType='primary'>你好</Button>
      <Button size='sm' btnType='primary'>你好</Button>

      <Button btnType='default'>你好</Button>
      <Button btnType='danger'>你好</Button>
      <Button btnType='default' disabled>你好</Button>
      <Button disabled={true} btnType='primary'>
        你好
      </Button>

      <Button disabled={true}  href= '1 ' btnType='link'>
      链接
      </Button>
      <Button  href= '1 ' btnType='link'>
      链接1
      </Button>
    </div>
  );
}

export default App;
