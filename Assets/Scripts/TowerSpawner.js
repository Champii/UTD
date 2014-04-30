#pragma strict

public var tower : Transform;

function Start () {

}

function Update () {

}

function SpawnAt (position : Vector3) {
	position.x = position.x - position.x % tower.renderer.bounds.size.x;
	position.y = 0.5;
	position.z = position.z - position.z % tower.renderer.bounds.size.z;
	
	Instantiate(tower, position, transform.rotation);	
}