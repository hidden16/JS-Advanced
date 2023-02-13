function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', mouseOver);

    function mouseOver(event){
        const percentage = Math.floor(event.offsetX / 3);
        document.getElementById('result').textContent = percentage + '%';
    }
}