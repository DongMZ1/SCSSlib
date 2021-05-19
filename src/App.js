import logo from './logo.svg';
import './App.css';
import './SCSS/button.scss'
import './SCSS/navitem.scss'
import './SCSS/card.scss'
import image1 from './1.jpg'

function App() {
  return (
    <>
      <br />
      <div className="body">
      <div className="link_swap">hover me</div>
      <div onClick={()=>{}} className="link_rotate">hover me</div>
      <div onClick={()=>{}} className="link_creative_1" >hover me</div>
      <div onClick={()=>{}} className="link_button_stretch" >hover me</div>
      <div onClick={()=>{}} className="link_glowing" >hover me</div>
      <div onClick={()=>{}} className="link_twolayerswap" >hover me</div>
      <div onClick={()=>{}} className="link_scale" >hover me</div>

      <div onClick={()=>{}} className="link_circularswapping" >hover me</div>
      <div onClick={()=>{}} className="link_swaplefttoright" >hover me</div>
      <div onClick={()=>{}} className="link_bordergrow" >hover me</div>
      <div onClick={()=>{}} className="link_firstletterrotate" ><span>H</span>over me</div>
      <div onClick={()=>{}} className="link_creativeswap1" >hover me</div>
      <div onClick={()=>{}} className="navitem_grow_border" >hover me</div>
      <div onClick={()=>{}} className="navitem_backgroundborder">hover me</div>
      <div onClick={()=>{}} className="navitem_underline" >hover me</div>
      <div onClick={()=>{}} className="navitem_rotate" >hover me</div>
      <div onClick={()=>{}} className="navitem_twoborder_background" >hover me</div>
      </div>	
      </>
  );
}

export default App;
