const playList = [
    {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN"
    },
    {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY"
    },
    {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD"
    },
    {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER"
    },
    {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER"
    },
    {
      author: "AC/DC",
      song: "BACK IN BLACK"
    },
    {
      author: "QUEEN",
      song: "WE WILL ROCK YOU"
    },
    {
      author: "METALLICA",
      song: "ENTER SANDMAN"
    }
  ];


// ==============================MODAL===WINDOW================================================

document.querySelector('.open-btn').addEventListener('click', openModalWindow)
document.querySelector('.red-button').addEventListener('click', closeModalWindow)
document.querySelector('.green-button').addEventListener('click', addSongs)

function openModalWindow() {
    document.querySelector('.modal__window').style.display = 'block'
}

function closeModalWindow() {
    document.querySelector('.modal__window').style.display = 'none'
}

// ================================ADD===SONGS================================================

function addSongs() {
    const playListElement = document.querySelector('.playlist')

    for (let i = 0; i < playList.length; i++){
        const item = document.createElement('li')
        item.textContent = `Author: ${playList[i].author}  || Song: "${playList[i].song}"`
        playListElement.appendChild(item)
    }
}


// =================================TRAFFIC==LIGHT=============================================


const trafficLight = document.querySelector('.traffic-light')
const switchButton = document.querySelector('.switch-btn')
let light = 'red'

switchButton.addEventListener('click', () => {
    switch (light) {
        case 'red':
            trafficLight.querySelector('.yellow').style.border = '3px solid white'
            trafficLight.querySelector('.red').style.border = 'none'
            light = 'yellow'
            break
        case 'yellow':
            trafficLight.querySelector('.green').style.border = '3px solid white'
            trafficLight.querySelector('.yellow').style.border = 'none'
            light = 'green'
            break
        case 'green':
            trafficLight.querySelector('.red').style.border = '3px solid white'
            trafficLight.querySelector('.green').style.border = 'none'
            light = 'red'
            break
    }
})
