var lefttArrow = window.document.getElementById('left-arrow')
var rightArrow = window.document.getElementById('right-arrow')
var leonardo = window.document.getElementById('leonardo')
var bruna = window.document.getElementById('bruna')
var samantha = window.document.getElementById('samantha')

function RightSlide() {
    leonardo.style = 'display:none'
    samantha.style = 'display:flex'
    lefttArrow.style = 'display:flex'
    rightArrow.style = 'display:none'
}

function LeftSlide() {
    leonardo.style = 'display:flex'
    samantha.style = 'display:none'
    lefttArrow.style = 'display:none'
    rightArrow.style = 'display:flex'
}
