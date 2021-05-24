const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 )
camera.position.set( 0, 0, 100 )
camera.lookAt( 0, 0, 0 )

const scene = new THREE.Scene()

const loader = new THREE.ObjectLoader()
loader.load(
    "./obj/source/sketch/final_v01.obj",
    function(obj) {
        scene.add(obj)
    },
    function(xhr) {
        console.log((xhr.loaded/xhr.total*100) +  '% loaded')
    },

    function(err) {
        console.error(err)
    }
)

renderer.render(scene, camera)
