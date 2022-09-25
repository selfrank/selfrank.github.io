new hoverEffect({
    parent: document.querySelector('.img'),
    image1: './neon-blur-1-1172436.jpg',
    image2: './neon-blur-1-1172436.jpg',
    displacementImage:'./displacementImage2.jpg'
})  

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))