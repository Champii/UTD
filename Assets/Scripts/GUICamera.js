#pragma strict

public var main : GameObject;
public var monsterSpawner : GameObject;

private var monsterSpawnerScript : MonsterSpawner;
private var towerSpawnerScript : TowerSpawner;
private var menuVisible : boolean = false;

function Awake () {
	monsterSpawnerScript = monsterSpawner.GetComponent(MonsterSpawner);
	towerSpawnerScript = main.GetComponent(TowerSpawner);
}

function Start () {
}

function Update() {
}

function OnGUI() {

	if (GUI.Button(Rect(0, 0, 60, 20), "Spawn !"))
		monsterSpawnerScript.Spawn();

	if (menuVisible)
	{
		GUI.Box (Rect(0, Screen.height - 100, Screen.width, 100), "Loader Menu");

		if (GUI.Button(Rect(0, Screen.height - 20, 20, 20), "-"))
			menuVisible = !menuVisible;
			
		if (GUI.Button(Rect(30, Screen.height - 90, 80, 80), "Tower 1"))
		{

		}

		if (GUI.Button(Rect(120, Screen.height - 90, 80, 80), "Tower 2"))
			;
		if (GUI.Button(Rect(210, Screen.height - 90, 80, 80), "Tower 3"))
			;

	}
	else
	{
		if (GUI.Button(Rect(0, Screen.height - 20, 20, 20), "+"))
			menuVisible = !menuVisible;
	}
}
