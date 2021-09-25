mapboxgl.accessToken = mapboxgl.accessToken = 'pk.eyJ1IjoieXVzdWtldGFrYWhhc2hpIiwiYSI6ImNrdHphcDhiejB6MG0ydXFobHdmM3k5NTAifQ.Qv1Pz_7zaj3NYy3HOCtPww';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    maxZoom: 20,
    minZoom: 3,
    style: 'mapbox://styles/yusuketakahashi/cktzf9a6t1vyh18pkxakssobh', // style URL
    center: [140.8658317309116, 38.265312521020554],
    zoom: 10// starting zoom
});

let coords = [
    [140.87627044608087, 38.26534039847173],
    [140.87080254765888, 38.257785217794954],
];

let imgs = [
    'https://1.bp.blogspot.com/-WoPLgzbefuw/X-FcxFa-YjI/AAAAAAABdE0/42S9V3wWi400mGKLEiB_pQT-dqTKT28kwCNcBGAsYHQ/s1156/onepiece14_enel.png',
    'https://1.bp.blogspot.com/-WoPLgzbefuw/X-FcxFa-YjI/AAAAAAABdE0/42S9V3wWi400mGKLEiB_pQT-dqTKT28kwCNcBGAsYHQ/s1156/onepiece14_enel.png',
];

map.on('load', () => {
    for (let i = 0; i < coords.length; ++i) {
        map.loadImage(
            imgs[i],
            (error, image) => {
                if (error) throw error;

                map.addImage('img' + i, image);

                map.addSource('point' + i, {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': coords[i],
                                }
                            }
                        ]
                    }
                });

                map.addLayer({
                    'id': 'points' + i,
                    'type': 'symbol',
                    'source': 'point' + i,
                    'layout': {
                        'icon-image': 'img' + i,
                        'icon-size': 0.1
                    }
                });
            }
        );
    }
});
