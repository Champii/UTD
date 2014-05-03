#pragma strict

public var target : GameObject;

function Start () {
//	Debug.Log(target);
}

function Update () {
//	Debug.Log(target.transform.position);
	transform.position = Vector3.Lerp(transform.position, target.transform.position, 0.1);
//	Debug.Log(target);
}
function OnEnterCollision(other : Collision) {
	Debug.Log("COLLISIONNNNNNN");
	Debug.Log(other);
}