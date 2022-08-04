import Button from './components/Button/button';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div className='App'>

      <Menu>
        <MenuItem index={0}>231231</MenuItem>
        <MenuItem index={1}>231231</MenuItem>

        <MenuItem index={2}>231231</MenuItem>

    </Menu>


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
