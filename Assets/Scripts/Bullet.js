#pragma strict

public var target : GameObject;
private var damages : int = 1;

function Start () {
//	Debug.Log(target);
}

function Update () {
//	Debug.Log(target.transform.position);
	if (target != null)
		transform.position = Vector3.Lerp(transform.position, target.transform.position, 0.1);
//	Debug.Log(target);
}

function OnCollisionEnter(collision : Collision) {
	if (collision.gameObject.name == "PseudoSpider(Clone)")
	{
		var monster : MonsterHealth = collision.gameObject.GetComponent("MonsterHealth");
		monster.DeceaseHitPoints(damages);
		Destroy(gameObject);
	}
}