import './assets/style.scss'
import anime from 'animejs'

const obj = {num: '0'}

document.addEventListener('click', () => {
  anime({
    targets: obj,
    num: 1000,
    round: 1,
    easing: 'linear',
    duration: 3000,
    update: () => {
      const el = document.getElementsByClassName('countdown')
      el[0].innerHTML = obj['num']
    }
  })
})
