#pragma strict

public var main : GameObject;
public var monsterSpawner : GameObject;

private var monsterSpawnerScript : MonsterSpawner;
private var towerSpawnerScript : TowerSpawner;
private var menuVisible : boolean = false;

private var moneyScript : Money;

function Awake () {
	monsterSpawnerScript = monsterSpawner.GetComponent(MonsterSpawner);
	towerSpawnerScript = main.GetComponent(TowerSpawner);
	moneyScript = GameObject.Find("Main Camera").GetComponent(Money);
}

function Start () {
}

function Update() {
}

function OnGUI() {

	GUI.Box (Rect(0, 0, Screen.width, 30), "");
	
	
	GUI.Label (Rect(0, 0, 100, 20), "Wave : " + (monsterSpawnerScript.actualWave + 1));

	GUI.Label (Rect(100, 0, 200, 20), "Next wave in : " + Mathf.FloorToInt(monsterSpawnerScript.waveTime - (Time.time - monsterSpawnerScript.waveTimer)));

	GUI.Label (Rect(Screen.width - 200, 0, 100, 20), "Money : " + moneyScript.money);

	GUI.Label (Rect(Screen.width - 100, 0, 100, 20), "Life : 10");


}
