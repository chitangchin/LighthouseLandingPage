export default function Team() {
  return <div id="TeamComponent">
<div>Our Team</div>
<div id="TheTeam">
    <div id="zaw">
      <img src='/zaw.png' />
      <div>Zaw Win</div>
      <div>
      <img src='/github.png' onClick={()=> {window.open("https://github.com/hbkw510", '_blank')}}/>
      <img src='/linkedin.png' onClick={()=> {window.open("https://www.linkedin.com/in/zawnwin/", '_blank')}}/>
      </div>
    </div>

    <div id="brandon">
      <img src='/brandon.jpg' />
      <div>Brandon Chin</div>
      <div>
      <img src='/github.png' onClick={()=> {window.open("https://www.linkedin.com/in/chitangchin/", '_blank')}}/>
      <img src='/linkedin.png' onClick={()=> {window.open("https://www.linkedin.com/in/chitangchin/", '_blank')}}/>
      </div>
    </div>

    <div id="andy">
      <img src = '/andy.jpg'/>
      <div>Andy Kuang</div>
      <div>
      <img src='/github.png' onClick={()=> {window.open("https://github.com/Aku15", '_blank')}}/>
      <img src='/linkedin.png' onClick={()=> {window.open("https://www.linkedin.com/in/andykuang/", '_blank')}}/>
      </div>
    </div>

    <div id="christian">
      <img src='/christian.jpeg' />
      <div>Christian Springer</div>
      <div>
      <img src='/github.png' onClick={()=> {window.open("https://github.com/christianspringer-ux", '_blank')}}/>
      <img src='/linkedin.png' onClick={()=> {window.open("https://www.linkedin.com/in/christian-springer0/", '_blank')}}/>
      </div>
    </div>
</div>

<br></br>
<br></br>
<br></br>
<div id="icons">
      <img src='/Apollo.png' onClick={()=> {window.open("https://www.apollographql.com/", '_blank')}}/>
      <img src='/kafka.jpg' onClick={()=> {window.open("https://www.confluent.io/", '_blank')}}/>
      <img src='/Nextjs.png' onClick={()=> {window.open("https://nextjs.org/", '_blank')}}/>
      <img src='/GraphQL.png' onClick={()=> {window.open("https://graphql.org/", '_blank')}}/>
      <img src='/prometheus.png' onClick={()=> {window.open("https://prometheus.io/", '_blank')}}/>
    </div>

  </div>
}