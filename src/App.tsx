import {useState} from 'react'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
// import SubMenu from './components/Menu/subMenu';
import { fas} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
// import Transition from './components/Transition/transition'
// import Button from './components/Button/button';
import Input from './components/Input/input'
library.add(fas)
function App() {
  const [show,setShow]= useState(true)
  return (
    <div className='App'>
      <Input style={{width:'300px'}} placeholder='dsadsadsa'/>
      {/* <Menu defaultIndex='2'  defaultOpenMenus={['42']}>
        <MenuItem disabled={true}>231231</MenuItem>
        <MenuItem >231231</MenuItem>
        <MenuItem >231231</MenuItem>
        <MenuItem >231231</MenuItem>

        <SubMenu title='这是一个测试'>
          <MenuItem >231231</MenuItem>
          <MenuItem >231231</MenuItem>
        </SubMenu>
    </Menu>
    <Button size='lg' onClick={()=>setShow(!show)}>dsadasda</Button>
    <Transition in={show} timeout={300} animation='zoom-in-left'>
      <div>
    <p>电视剧啊好的几哈家肯德基卡</p>
    <p>电视剧啊好的几哈家肯德基卡</p>
    <p>电视剧啊好的几哈家肯德基卡</p>
    <p>电视剧啊好的几哈家肯德基卡</p>

    <p>电视剧啊好的几哈家肯德基卡</p>
    </div>
    </Transition>

    <Transition in={show} timeout={300} animation='zoom-in-left'>
    <Button size='lg'>大萨达所大</Button>
    </Transition> */}
    </div>
  );
}
export default App;
