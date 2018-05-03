(()=> {
    const maxRowH = 300; //px
    const itemPadding = 4; // left+ right, px
    const contPadding = 0;// left + right, px
    const timeGap = 1500; //ms
    const contSelector = '.tile-gallery';
    const itemSelector = '.tile-gallery .thumbnail-album img';

    window.addEventListener('load', (event)  => {
        let cont = document.querySelector(contSelector);

        let contW = cont.clientWidth - contPadding;
        let items = cont.querySelectorAll(itemSelector);
        let itemNH, itemNW;
        let itemK=[];
        for (let i=0; i<items.length; i++) {
            itemK[i] = items[i].naturalWidth / items[i].naturalHeight;
        }

        let buildTileGallery = () => {
            // for (let item of items) {
            //     item.style.opacity = "0";
            // }
            let startItemInd = 0;
            let itemNum, summK, ind, rowH;

            do {
                itemNum = 0;
                summK = 0;
                ind = startItemInd;
                do {
                    itemNum++;
                    summK += itemK[ind];
                    rowH = (contW-itemPadding*itemNum)/summK;
                    ind++;
                } while (rowH > maxRowH && ind < items.length);

                if (rowH > maxRowH) rowH = maxRowH;

                for (let i=startItemInd; i<ind; i++) {
                    items[i].style.height = `${rowH}px`;
                }
                startItemInd = ind;
            } while (ind < items.length);

            let opasity1 = ()=> {
                for (let item of items) item.style.opacity = "1";
            };

            // let appear = setTimeout(opasity1, timeGap);

        };

        buildTileGallery();

        window.addEventListener('resize', ()=> {
            contW = cont.clientWidth - contPadding;
            buildTileGallery();
        });
    })

})();

