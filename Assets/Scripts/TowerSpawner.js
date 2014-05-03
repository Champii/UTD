#pragma strict

public var tower : Transform;

function Start () {

}

function Update () {

}

function SpawnAt (position : Vector3) {
//	position.x = position.x - position.x % tower.renderer.bounds.size.x;
//	position.y = 0.1;
//	position.z = position.z - position.z % tower.renderer.bounds.size.z;
	 	
	var mytower = Instantiate(tower, position, transform.rotation);
	
	var targetSize : float = 1.0;
	var scale : Vector3;
 
	scale.z = (targetSize * mytower.transform.localScale.z) / tower.renderer.bounds.size.z;
	scale.x = (targetSize * mytower.transform.localScale.x) / tower.renderer.bounds.size.x;
	scale.y = (targetSize * mytower.transform.localScale.z) / tower.renderer.bounds.size.z;
 	mytower.transform.localScale = scale;
 	
	Debug.Log('x = ' + mytower.renderer.bounds.size.x);
	Debug.Log('z = ' + mytower.renderer.bounds.size.z);
	Debug.Log(scale);

 		position.x = position.x - position.x % tower.renderer.bounds.size.x;
	position.y = 0.1;
	position.z = position.z - position.z % tower.renderer.bounds.size.z;

 	 	 	
}