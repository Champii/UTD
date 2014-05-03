#pragma strict

public var bullet : GameObject;

private var target : GameObject;

function Start () {

}

function GetTarget () {
	var hitColliders = Physics.OverlapSphere(GetComponentInChildren(Renderer).transform.position, 2);
	for (var i = 0; i < hitColliders.length; i++)
		if (hitColliders[i].name == "PseudoSpider(Clone)")
		{
//			Debug.Log(hitColliders[i].name);
			target = hitColliders[i].gameObject;
			Fire();
			return ;
		}
}

function Fire () {
	var bullet = Instantiate(bullet, transform.position, Quaternion.identity);
	var bulletScript = bullet.GetComponent(Bullet);
	bulletScript.target = target;
}

function Update () {

	if (!target)
	{
		GetTarget();
	}
//	else
//	{
//		if (Time.time % 10000)
//			Fire();
//	}

}