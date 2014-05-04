#pragma strict

public var main : GameObject;

private var towerSpawnerScript : TowerSpawner;
private var menuVisible : boolean = false;
private var objectHit : GameObject;
private var mousePos : Vector2;

private var moneyScript : Money;

function Awake () {
	towerSpawnerScript = main.GetComponent(TowerSpawner);
	moneyScript = GetComponent(Money);
}

function Start () {
	 var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
	 lineRenderer.material.color = Color.black;
	 lineRenderer.SetWidth(0.1,0.1);
	 lineRenderer.SetVertexCount(5);
}

function Update () {

	if (!menuVisible)
	{
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		
		if (Physics.Raycast (ray, hit, 100))
		{
			var objectHit = hit.collider.gameObject;
		
			var lineRenderer : LineRenderer = GetComponent(LineRenderer);
			
			var pos : Vector3 = objectHit.transform.position;

			pos.x -= 0.5;
			pos.z -= 0.5;

			lineRenderer.SetPosition(0, pos);
			pos.x += objectHit.renderer.bounds.size.x;
			lineRenderer.SetPosition(1, pos);
			pos.z += objectHit.renderer.bounds.size.z;
			lineRenderer.SetPosition(2, pos);
			pos.x -= objectHit.renderer.bounds.size.x;
			lineRenderer.SetPosition(3, pos);
			pos.z -= objectHit.renderer.bounds.size.z;
			lineRenderer.SetPosition(4, pos);

		}
	}
}

function OnGUI () {
	
	if (Input.GetMouseButtonDown(1))
	{
		menuVisible = true;
		mousePos = Input.mousePosition;
	}

	if (menuVisible)
	{
		var ray = Camera.main.ScreenPointToRay(mousePos);
		var hit : RaycastHit;
		
		if (Physics.Raycast (ray, hit, 100))
		{
			var objectHit = hit.collider.gameObject;
//			Debug.Log(objectHit.name);
			GUI.Box (Rect(mousePos.x, Screen.height - mousePos.y, 100, 100), "Context Menu");

			if (objectHit.name == "Ground(Clone)")
			{
				if (GUI.Button(Rect(mousePos.x + 10, Screen.height - mousePos.y + 20, 80, 20), "Place Tower"))
				{
					if (moneyScript.Buy(towerSpawnerScript.towerCost))
						towerSpawnerScript.SpawnAt(objectHit.transform.position);
					menuVisible = false;
				}
			}
			else
			{
				if (GUI.Button(Rect(mousePos.x + 10, Screen.height - mousePos.y + 20, 80, 20), "Close"))
					menuVisible = false;
			}

		}
	}

}
