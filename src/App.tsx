// import Button from './components/Button/button';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';
function App() {
  return (
    <div className='App'>
      <Menu defaultIndex='2' mode='vertical' defaultOpenMenus={['4']}>
        <MenuItem disabled={true}>231231</MenuItem>
        <MenuItem >231231</MenuItem>
        <MenuItem >231231</MenuItem>
        <MenuItem >231231</MenuItem>

        <SubMenu title='这是一个测试'>
          <MenuItem >231231</MenuItem>
          <MenuItem >231231</MenuItem>
        </SubMenu>
    </Menu>
    </div>
  );
}
export default App;
