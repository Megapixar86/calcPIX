// Создать сцену
const scene = new THREE.Scene();
//установить цвет фона
scene.background = new THREE.Color( 0xdef5c7 );
//установить источни овещения
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 30, 40, 30 );
spotLight.castShadow = true;
scene.add(spotLight );
// создать камеру
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = -30;
camera.position.y = 20;
camera.position.z = 30;
camera.lookAt(scene.position);

// создать куб
const geometry = new THREE.BoxGeometry(4, 4, 4);
const material = new THREE.MeshBasicMaterial({color: 0xff00ff, wireframe: true});
const material2 = new THREE.MeshBasicMaterial({color: 0xff00ff});
const material3 = new THREE.MeshLambertMaterial({color: 0xff00ff});
const material4 = new THREE.MeshLambertMaterial({color: 0x87cefa});
const cub = new THREE.Mesh(geometry, material3);
cub.position.x = -4;
cub.position.y = 3;
cub.position.z = 0;
cub.castShadow = true;
scene.add(cub);
// создать план
const planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x87cefa});
const plane = new THREE.Mesh(planeGeometry, material4);
plane.rotation.x=-0.5*Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
plane.receiveShadow = true;
scene.add(plane);
// создать сферу
const geom_shere = new THREE.SphereGeometry(1, 8, 8);
const shere = new THREE.Mesh(geom_shere, material3);
shere.position.x = 20
shere.position.y = 4
shere.position.z = 2
shere.castShadow = true;
scene.add(shere);
// загрузка
const loader = new THREE.GLTFLoader();
let obj = null;
loader.load('https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf', function(gltf) {
  obj = gltf.scene;
  obj.position.x = 10
  obj.position.y = 2
  obj.position.z = 0
  obj.castShadow = true;
  scene.add(obj);
});
// создать оси
const axesHelper = new THREE.AxesHelper( 10 );
const grid = new THREE.GridHelper(100, 20);
scene.add( axesHelper );
scene.add( grid );
// Создать renderer
const renderer = new THREE.WebGLRenderer();
// Установить size
renderer.setSize(window.innerWidth, window.innerHeight);
// разрешим тени
renderer.shadowMapEnabled = true;
// Добавить в элементу DOM
document.body.appendChild(renderer.domElement);
// контроль камеры

//const cameraControls = new OrbitControls( camera, renderer.domElement );
controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true;
//controls.dampingFactor = 0.05;
//controls.screenSpacePanning = false;
//controls.minDistance = 100;
//controls.maxDistance = 500;
//controls.maxPolarAngle = Math.PI / 2;
//cameraControls.addEventListener( 'change', render );
let step  = 0;
// Анимация
function animate() {
    step+=0.01;
    requestAnimationFrame( animate );
    //cub.rotation.x += 0.05;
    //cub.rotation.y += 0.05;
    shere.position.x = 20+( 10*(Math.cos(step)));
	shere.position.y = 2 +( 10*Math.abs(Math.sin(step)));
    renderer.render( scene, camera );
};
animate();
// End script