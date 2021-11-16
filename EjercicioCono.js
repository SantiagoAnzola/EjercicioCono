
//Funcion principal
function init() {
    
    // SCENE
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
    
      //Se genera el render para recargar los cambios de la escena
      var renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(new THREE.Color(0x000000));
      renderer.setSize(window.innerWidth, window.innerHeight);
      //Se generan los ejes
      var axes = new THREE.AxesHelper(20);
      scene.add(axes); //Se añaden los ejes

    // CONE
    
    var coneGeo = new THREE.ConeGeometry(1,1,10,0),//(Base, altura,segmentos radiales, segmentos de altura) del cono
    coneMaterial = new THREE.MeshStandardMaterial({ color: 0xe80000  }),
    cone = new THREE.Mesh(coneGeo, coneMaterial);
 
    // add cone to the scene
    scene.add(cone);//Se agrega el cono a la escena 
    cone.geometry.rotateZ(-Math.PI * 0.5);//Rotaciion del cono inicial
    cone.translateX(0.5);//Posicion en x inicial
    //Posicion inicial del cono

    cone.scale.set(3,1,1);//Nuevo tamaño del cono con base 1 y altura 3
    cone.rotateZ(-Math.PI/9.8);//Rotación solicitada
   cone.translateX(1);//Posicion en x final
    cone.translateY(0.85);//Posicion y final
    
    dim=1;
    // CAMERA
    light = new THREE.PointLight(0xffff00);

    light.position.set(-10 * dim, -10 * dim, 15 * dim); //  Localización de la luz
    scene.add(light); //Se añade la luz a la escena
  
    // posicion on de la camara
   // camera.position.set(-1 * dim, 1 * dim, 6 * dim); //3, 5, 10
    camera.position.set(0 , 2 * dim, 8* dim);
    camera.lookAt(scene.position);
 
    document.getElementById("webgl-output").appendChild(renderer.domElement);
    renderer.render(scene, camera);
  }
  