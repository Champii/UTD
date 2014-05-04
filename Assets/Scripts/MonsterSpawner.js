#pragma strict

public var monster : GameObject;
public var spawner : Transform;

public var waveTimer : float = 0;

private var waves_numbers = new int[2];
private var waves_monsters = new String[2];

public var actualWave : int = 0;
public var waveTime : int = 15;
private var spawnedMonsters : int = 0;

function Start () {
	waveTimer = Time.time;
	waves_numbers[0] = 5;
	waves_numbers[1] = 10;
}

function Spawn () {
	Instantiate(monster, transform.position, transform.rotation);
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
