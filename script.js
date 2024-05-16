// Begin script
// Create a scene
const scene = new THREE.Scene();
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -40, 60, -10 );
// Create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Create a geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Create a material
const material = new THREE.MeshBasicMaterial({color: 0xff00ff, wireframe: true});
// Create a mesh
const mesh = new THREE.Mesh(geometry, material);
// Add the mesh to the scene
scene.add(mesh);
// Create a renderer
const renderer = new THREE.WebGLRenderer();
// Set the size
renderer.setSize(window.innerWidth, window.innerHeight);
// Append to the DOM
document.body.appendChild(renderer.domElement);
// Position the camera
camera.position.z = 15;
camera.position.x = 3;
camera.position.y = 3;
// Animate the scene
function animate() {
    requestAnimationFrame( animate );
    //mesh.rotation.x += 0.05;
    //mesh.rotation.y += 0.05;
    renderer.render( scene, camera );
};
animate();
// End script