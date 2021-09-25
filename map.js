let my_coord = [140.85844158332296, 38.264911566790786];
let my_avatar = 'https://1.bp.blogspot.com/-LZL7jGWmL3Q/X-FcwoOnE2I/AAAAAAABdEs/qUrY1ClrQrMukkdaEnZK8-Bdob7mOdmQgCNcBGAsYHQ/s1307/onepiece13_crocodile.png';

mapboxgl.accessToken = mapboxgl.accessToken = 'pk.eyJ1IjoieXVzdWtldGFrYWhhc2hpIiwiYSI6ImNrdHphcDhiejB6MG0ydXFobHdmM3k5NTAifQ.Qv1Pz_7zaj3NYy3HOCtPww';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    maxZoom: 25,
    minZoom: 3,
    style: 'mapbox://styles/yusuketakahashi/cktzf9a6t1vyh18pkxakssobh', // style URL
    center: my_coord,
    zoom: 20// starting zoom
});

let coords = [
    [140.87627044608087, 38.26534039847173],
    [140.87080254765888, 38.257785217794954],
];

let avatars = [
    'https://1.bp.blogspot.com/-WoPLgzbefuw/X-FcxFa-YjI/AAAAAAABdE0/42S9V3wWi400mGKLEiB_pQT-dqTKT28kwCNcBGAsYHQ/s1156/onepiece14_enel.png',
    'https://1.bp.blogspot.com/-HPG_x7XPky8/X-FctLTLkKI/AAAAAAABdEE/xs4T8m0FiBAFptXHGQhQ2c9ZmVWtaeQSgCNcBGAsYHQ/s1028/onepiece05_sanji.png',
];

function addImage(name, coord, avatar) {
    map.loadImage(
        avatar,
        (error, image) => {
            if (error) throw error;

            map.addImage('img_' + name, image);

            map.addSource('point_' + name, {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': coord,
                            }
                        }
                    ]
                }
            });

            map.addLayer({
                'id': 'points_' + name,
                'type': 'symbol',
                'source': 'point_' + name,
                'layout': {
                    'icon-image': 'img_' + name,
                    'icon-size': 0.1
                }
            });
        }
    );

}

map.on('load', () => {
    addImage('me', my_coord, my_avatar);
    for (let i = 0; i < coords.length; ++i) {
        addImage(i, coords[i], avatars[i]);
    }
});
