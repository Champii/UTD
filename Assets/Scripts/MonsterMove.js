#pragma strict

var endPoint : Vector3;
var duration : float = 1.0;
 
private var startPoint : Vector3;
private var startTime : float;
private var route = new Array(Vector3(10,0,10), Vector3(-10,0,-10));
private var actualPosition : int=-1;
 
function Start() {
    startPoint = transform.position;
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
		animation.Play("death");
		Destroy(this);
		Destroy(gameObject, 1);
	}
}