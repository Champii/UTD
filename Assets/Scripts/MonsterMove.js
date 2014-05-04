#pragma strict

var endPoint : Vector3;
var duration : float = 1.0;

private var mapScript : Map;
 
private var startPoint : Vector3;
private var startTime : float;
private var route = new Array(Vector3(10,0,10), Vector3(-10,0,-10));
private var actualPosition : int=-1;
private var hitPoints : int = 2;
 
function Start() {
	mapScript = GameObject.Find("Main").GetComponent(Map);
	route = mapScript.monsterPath;
    startPoint = GameObject.Find("MonsterSpawner").transform.position;
    startTime = Time.time;
}
 
function Update () {

	if (actualPosition < (route.length - 1))
	{
		if (route[actualPosition + 1] == transform.position) {
			startTime = Time.time;
			actualPosition++;
		}
		else {
			var position = (actualPosition == -1) ? startPoint : route[actualPosition];
			transform.position = Vector3.Lerp(position, route[actualPosition + 1], 
			(Time.time - startTime) / duration);
    		animation.Play("walk");
		}
	}
	else {
		death();
	}
}

function deceaseHitPoints(damages : int)
{
	hitPoints -= damages;
	if (hitPoints <= 0)
		death();
}

function death()
{
	animation.Play("death");
	Destroy(this);
	Destroy(gameObject, 1);

}

function OnCollisionEnter(collision : Collision) {

}
