(()=> {
    const contPadding = 0;// left + right, px
    const contSelector = '.tile-gallery-down';
    const itemSelector = '.tile-gallery-down .thumbnail-album';
    const timeGap = 600; // ms

    window.addEventListener('load', (event)  => {

        let cont = document.querySelector(contSelector);
        let items = cont.querySelectorAll(itemSelector);
        let contH;

        let setContH = ()=> {
            let contW = cont.clientWidth - contPadding;
            let itemsArea = 0;
            for (let item of items) {
                itemsArea += item.clientWidth * item.clientHeight;
            }
            contH = itemsArea / contW + 140;
            cont.style.height = `${contH}px`;
        };

        setContH();

        window.addEventListener('resize', ()=> {
            let timeoutSet = setTimeout(setContH, timeGap);
        });

    })

})();

