let scene,camera,renderer,controls,cube;

function log(m){
  const el=document.getElementById("debugLog");
  el.textContent+=m+"\n";
  el.scrollTop=el.scrollHeight;
}

document.addEventListener("DOMContentLoaded", ()=>{
  log("DOM Ready");

  if(typeof THREE === "undefined"){ log("THREE missing!"); return; }
  log("THREE OK");

  init3D();
});

function init3D(){
  const container=document.getElementById("canvas-container");
  const width=container.clientWidth;
  const height=container.clientHeight;
  log("Canvas size = " + width + " x " + height);

  scene=new THREE.Scene();
  camera=new THREE.PerspectiveCamera(45, width/height, 1, 2000);
  camera.position.set(300,300,300);

  renderer=new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(width,height);
  container.appendChild(renderer.domElement);

  controls=new THREE.OrbitControls(camera,renderer.domElement);

  let geo=new THREE.BoxGeometry(50,50,50);
  let mat=new THREE.MeshNormalMaterial();
  cube=new THREE.Mesh(geo,mat);
  scene.add(cube);

  animate();
  log("init3D() done");
}

function animate(){
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  renderer.render(scene,camera);
}
