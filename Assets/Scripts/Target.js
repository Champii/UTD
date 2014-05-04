#pragma strict

public var bullet : GameObject;

private var target : GameObject;
private var fireRate : int = 100;
private var frameCount : int = 0;

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
	if (frameCount == fireRate)
	{
		if (!target)
		{
			GetTarget();
		}
		else
			Fire();
		frameCount = 0;
	}
	frameCount++;
//	{
//		if (Time.time % 10000)
//			Fire();
//	}

}