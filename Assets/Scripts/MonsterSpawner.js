#pragma strict

public var monster : GameObject;
public var spawner : Transform;
private var waves_numbers = new int[2];
private var waves_monsters = new String[2];

private var actualWave : int = 0;
private var waveTime : int = 15;
private var waveTimer : float = 0;
private var spawnedMonsters : int = 0;

function Start () {
	waveTimer = Time.time;
	waves_numbers[0] = 5;
	waves_numbers[1] = 10;
}

function Spawn () {
	Instantiate(monster, spawner.position, spawner.rotation);
}

function SpawnWave()
{
	if (spawnedMonsters < waves_numbers[actualWave])
	{
      yield WaitForSeconds(2);
      Spawn();
      spawnedMonsters++;
      StartCoroutine("SpawnWave");
	}
	else
		spawnedMonsters = 0;
}

function Update () {
	if (Time.time - waveTimer >= waveTime)
	{
		waveTimer = Time.time;
		StartCoroutine("SpawnWave");

	}
}
