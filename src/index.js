import React from 'react';
import ReactDom from 'react-dom';
import Card from "./Card";
import "./index.css";
import Sdata from './Sdata';

ReactDom.render(
 <>
 <h1 className="heading_style">LIST OF NETFLIX SERIES</h1>
 <Card 
  imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].links}
 />
<Card 
  imgsrc="https://dark.netflix.io/share/global.png"
  title="A Netflix Original Series"
  sname="DARK"
  link="https://www.netflix.com/in/title/80100172"
/>

<Card
imgsrc="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review.jpg"
  title="A Netflix Original Series"
  sname="EXTRA CALICULAR"
  link="https://www.netflix.com/in/title/80990668"
 />

<Card imgsrc="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/05/25/938590-money-heist.png?im=Resize=(400,229)"
  title="A Netflix Original Series"
  sname="MONEY HEIST"
  link="https://www.netflix.com/in/title/80192098"
/>

<Card imgsrc="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608"
  title="A Netflix Original Series"
  sname="STRANGER THINGS"
  link="https://www.netflix.com/in/title/80057281"
/>

 </>,
  document.getElementById('root')
);