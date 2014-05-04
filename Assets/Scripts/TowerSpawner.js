#pragma strict

public var tower : Transform;

public var towerCost : int = 10;

function Start () {

}

function Update () {

}

function SpawnAt (position : Vector3) {
//	position.x = position.x - position.x % tower.renderer.bounds.size.x;
	position.y = 0.1;
//	position.z = position.z - position.z % tower.renderer.bounds.size.z;
	 	
	var mytower = Instantiate(tower, position, transform.rotation);
	
	var targetSize : float = 1.0;
	var scale : Vector3;
 
	scale.z = (targetSize * mytower.transform.localScale.z) / tower.renderer.bounds.size.z;
	scale.x = (targetSize * mytower.transform.localScale.x) / tower.renderer.bounds.size.x;
	scale.y = (targetSize * mytower.transform.localScale.z) / tower.renderer.bounds.size.z;
 	mytower.transform.localScale = scale;

 	position.x = position.x - position.x % tower.renderer.bounds.size.x;
	position.y = 1.5;
	position.z = position.z - position.z % tower.renderer.bounds.size.z;

 	 	 	
}