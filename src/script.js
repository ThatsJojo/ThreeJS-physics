import * as THREE from 'three'
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import * as CANNON from 'cannon-es'
import { geometryToShape } from './js/three-conversion-utils.js'

/**
 * Debug
 */
const gui = new dat.GUI()
const debugObject = {}

debugObject.createSphere = () =>
{
    createSphere(
        0.1,
        {
            x: 0.9,
            y: 3,
            z: 0.5
        }
    )
}

gui.add(debugObject, 'createSphere')

debugObject.createBox = () =>
{
    createBox(
        Math.random(),
        Math.random(),
        Math.random(),
        {
            x: (Math.random() - 0.5) * 3,
            y: 3,
            z: (Math.random() - 0.5) * 3
        }
    )
}

gui.add(debugObject, 'createBox')

debugObject.createCurve = () =>
{
    createCurve(
        Math.random(),
        Math.random(),
        Math.random(),
        {
            x: (Math.random() - 0.5) * 3,
            y: 3,
            z: (Math.random() - 0.5) * 3
        }
    )
}
gui.add(debugObject, 'createCurve')

// Reset
debugObject.reset = () =>
{
    for(const object of objectsToUpdate)
    {
        // Remove body
        object.body.removeEventListener('collide', playHitSound)
        world.removeBody(object.body)

        // Remove mesh
        scene.remove(object.mesh)
    }
    
    objectsToUpdate.splice(0, objectsToUpdate.length)
}
gui.add(debugObject, 'reset')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sounds
 */
const hitSound = new Audio('/sounds/hit.mp3')

const playHitSound = (collision) =>
{
    const impactStrength = collision.contact.getImpactVelocityAlongNormal()

    if(impactStrength > 1.5)
    {
        hitSound.volume = Math.random()
        hitSound.currentTime = 0
        hitSound.play()
    }
}

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.png',
    '/textures/environmentMaps/0/nx.png',
    '/textures/environmentMaps/0/py.png',
    '/textures/environmentMaps/0/ny.png',
    '/textures/environmentMaps/0/pz.png',
    '/textures/environmentMaps/0/nz.png'
])

/**
 * Physics
 */
const world = new CANNON.World()
world.broadphase = new CANNON.SAPBroadphase(world)
world.allowSleep = true
world.gravity.set(0, - 9.82, 0)

// Default material
const defaultMaterial = new CANNON.Material('default')
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.1,
        restitution: 0.7
    }
)
world.defaultContactMaterial = defaultContactMaterial

// Floor
const floorShape = new CANNON.Plane()
const floorBody = new CANNON.Body()
floorBody.mass = 0
floorBody.addShape(floorShape)
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(- 1, 0, 0), Math.PI * 0.5) 
world.addBody(floorBody)

/**
 * Utils
 */
const objectsToUpdate = []

// Create sphere
const sphereGeometry = new THREE.SphereGeometry(1, 20, 20)
const sphereMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5
})

const createSphere = (radius, position) =>
{
    // Three.js mesh
    const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
    mesh.castShadow = true
    mesh.scale.set(radius, radius, radius)
    mesh.position.copy(position)
    scene.add(mesh)

    // Cannon.js body
    const shape = new CANNON.Sphere(radius)

    const body = new CANNON.Body({
        mass: 1,
        position: new CANNON.Vec3(0, 3, 0),
        shape: shape,
        material: defaultMaterial
    })
    body.position.copy(position)
    body.addEventListener('collide', playHitSound)
    world.addBody(body)

    // Save in objects
    objectsToUpdate.push({ mesh, body })
}

// Create box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5
})
const createBox = (width, height, depth, position) =>
{
    // Three.js mesh
    const mesh = new THREE.Mesh(boxGeometry, boxMaterial)
    mesh.scale.set(width, height, depth)
    mesh.castShadow = true
    mesh.position.copy(position)
    scene.add(mesh)

    // Cannon.js body
    const shape = new CANNON.Box(new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5))

    const body = new CANNON.Body({
        mass: 1,
        position: new CANNON.Vec3(0, 3, 0),
        shape: shape,
        material: defaultMaterial
    })
    body.position.copy(position)
    body.addEventListener('collide', playHitSound)
    world.addBody(body)

    // Save in objects
    objectsToUpdate.push({ mesh, body })
}

const createCurve3 = (width, height, depth, position) =>
{
    var point1 = new THREE.Vector3(-1, 0, 0);
    var point2 = new THREE.Vector3(-1, 1, 0);
    var point3 = new THREE.Vector3(1, 1, 0);
    var point4 = new THREE.Vector3(1, 0, 0);
    var point5 = new THREE.Vector3(0, -1, 0);

    var curve1 = new THREE.CubicBezierCurve3(point1, point2, point5, point3);
    var curve2 = new THREE.CubicBezierCurve3(point3, point5, point4, point1);

    var curve = new THREE.CurvePath();
    curve.add(curve1);
    curve.add(curve2);

    var shape = new THREE.Shape();
    shape.moveTo(point1.x, point1.y);
    shape.bezierCurveTo(point2.x, point2.y, point5.x, point5.y, point3.x, point3.y); // curva até o ponto extra
    shape.bezierCurveTo(point5.x, point5.y, point4.x, point4.y, point1.x, point1.y); // curva do ponto extra até o ponto inicial

    var extrudeSettings = {
        steps: 1,
        depth: 1,
        bevelEnabled: false
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });

    

    const rampWidth = 10;
    const rampHeight = 2;
    const rampSegments = 100;
    const rampCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-rampWidth / 2, 0, 0),
      new THREE.Vector3(0, rampHeight, rampWidth / 2),
      new THREE.Vector3(rampWidth / 2, 0, 0)
    );
    const rampPoints = rampCurve.getPoints(rampSegments);
    const rampGeometry = new THREE.BufferGeometry().setFromPoints(rampPoints);

    const ramp = new THREE.Mesh(rampGeometry, material);
    scene.add(ramp);
    
    // Cria o array de alturas
    const heights = [];
    for (let i = 0; i < rampSegments; i++) {
      heights.push(rampPoints[i].y);
    }
    
    // Cria o corpo rígido da rampa
    const rampShape = new CANNON.Heightfield(heights, {
      elementSize: rampWidth / rampSegments
    });
    const rampBody = new CANNON.Body({
      mass: 0,
      shape: rampShape
    });
    rampBody.position.set(0, -rampHeight / 2, 0);

    rampBody.position.set(0, 0, 0);
    world.addBody(rampBody);
}


const createCurve = (width, height, depth, position) => {
  var point1 = new THREE.Vector3(-1, 0, 0);
  var point2 = new THREE.Vector3(-1, 1, 0);
  var point3 = new THREE.Vector3(1, 1, 0);
  var point4 = new THREE.Vector3(1, 0, 0);
  var point5 = new THREE.Vector3(0, -1, 0);

  var curve1 = new THREE.CubicBezierCurve3(point1, point2, point5, point3);
  var curve2 = new THREE.CubicBezierCurve3(point3, point5, point4, point1);

  var curve = new THREE.CurvePath();
  curve.add(curve1);
  curve.add(curve2);

  var shape = new THREE.Shape();
  shape.moveTo(point1.x, point1.y);
  shape.bezierCurveTo(point2.x, point2.y, point5.x, point5.y, point3.x, point3.y); // curva até o ponto extra
  shape.bezierCurveTo(point5.x, point5.y, point4.x, point4.y, point1.x, point1.y); // curva do ponto extra até o ponto inicial

  var extrudeSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: false
  };
  var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  var mesh = new THREE.Mesh(geometry, boxMaterial);

  window.zap = geometry

  // Create Cannon Trimesh from THREE.Geometry
  var CANNONGeometry = new CANNON.Trimesh(geometry.attributes.position.array, [0, 1 , 2]);

  // Create CANNON Body with same position and orientation as THREE.Mesh
  var CANNONBody = new CANNON.Body({
    mass: 0,
    quaternion: new CANNON.Quaternion().setFromEuler(mesh.rotation.x, mesh.rotation.y, mesh.rotation.z)
  });

  const size = 1
    const halfExtents = new CANNON.Vec3(size, size, size)
    const boxShape = new CANNON.Box(halfExtents)

  CANNONBody.addShape(CANNONGeometry);






  scene.add(mesh);
}

// Helper function to convert THREE.Geometry to CANNON Trimesh
const geometryToVertices2 = (geometry) => {
  var vertices = [];
  for (var i = 0; i < geometry.attributes.position.array; i++) {
    var vertex = geometry.vertices[i];
    vertices.push(new CANNON.Vec3(vertex.x, vertex.y, vertex.z));
  }
  return vertices;
}

const geometryToIndices = (geometry) => {
  var indices = [];
  for (var i = 0; i < geometry.faces.length; i++) {
    var face = geometry.faces[i];
    indices.push(face.a, face.b, face.c);
  }
  return indices;
}

createCurve(1, 1.5, 2, { x: 0, y: 3, z: 0 })

/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(- 3, 3, 3)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let oldElapsedTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime

    // Update physics
    world.step(1 / 60, deltaTime, 3)
    
    for(const object of objectsToUpdate)
    {
        object.mesh.position.copy(object.body.position)
        object.mesh.quaternion.copy(object.body.quaternion)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()