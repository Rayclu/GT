const move = (clicked = false) => {
    const image = document.getElementById('img');
    image.addEventListener('mouseout',() => {
            document.addEventListener('mousemove', target => {
            image.style.top = target.clientY + 'px';// .clientY 
            image.style.left = target.clientX + 'px';// .clientX
            console.log(target);
        });
    })
};