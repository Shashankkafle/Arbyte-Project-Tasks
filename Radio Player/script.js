var body = document.getElementsByTagName("body")[0]
var  id=0,currentPlaying=null
var stop=document.createElement('button')
stop.innerText="STOP"
body.appendChild(stop)
for (let station of data) {
    let container = document.createElement('station')
    // container.innerHTML = `<audio src = ${body.url} onclick=playRadio(${id} id=${id})></audo>`;
    let image = document.createElement('imgageholder')
    image.innerHTML = `<img src ='${station.image}' onerror="this.src='https://cdn-icons-png.flaticon.com/512/3075/3075906.png';">

                        <img>'`;
    let audio = document.createElement('audio')
    audio.setAttribute('id',id.toString())
    audio.setAttribute('src',station.url)

    container.innerHTML = station.name
    let name = document.createElement('audio')
    name.innerHTML=station.name
    container.appendChild(image)
    container.appendChild(name)
    container.appendChild(audio)
    // audio.setAttribute('src',body.url)
    // container.appendChild(audio)
    container.setAttribute('onclick','playRadio('+id+')')

    container.style.cssText = `border-style: solid;
                               margin: 10px 5px 15px 20px;`;


    body.appendChild(container)
    body.appendChild(document.createElement('br'))
    id++
    }

let playRadio=id=>{
        console.log("pprev"+currentPlaying)
        console.log("id"+id)
        if(currentPlaying==null){
            document.getElementById(id).play()
            console.log('played'+id)
            currentPlaying=id
            
        }
        else{
            document.getElementById(currentPlaying).pause()
            console.log('paused'+currentPlaying)
            document.getElementById(id).play()
            currentPlaying=id
            console.log('played'+id)
        }
        
    }

let stopPlayng =()=>{
    document.getElementById(currentPlaying).pause()
    currentPlaying=null
    console.log("stopplaying activeted")
}
stop.onclick = stopPlayng