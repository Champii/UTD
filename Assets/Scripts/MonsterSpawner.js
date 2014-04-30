#pragma strict

public var monster : GameObject;
public var spawner : Transform;

function Start () {

}

function Spawn () {
	Instantiate(monster, spawner.position, spawner.rotation);
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Space))
		Instantiate(monster, spawner.position, spawner.rotation);
}
