import System.IO;

/* MAP = 
	0 = vide
	1 = pas vide
	2 = monsterSpawner
	3 = Main tower
	4 = Path
*/

public var fileName = "map.txt";
public var ground : GameObject;
public var monsterSpawner : Transform;
public var mainTower : GameObject;

public var monsterPath = new Array();

function GetNextPoint (current : Vector3, last : Vector3, map : String[]) : Vector3 {

	var next : Vector3 = Vector3(0, -1, 0);
	
	Debug.Log("Current = ");
	Debug.Log(current);
	Debug.Log("last = ");
	Debug.Log(last);


	if (map[current.z][current.x + 1] == "4" && (current.x != last.x && current.z != last.z))
	{
		next = Vector3(current.x + 1, 0, current.z);
		Debug.Log(map[current.z][current.x + 1]);

	}
	else if (current.x && map[current.z][current.x - 1] == "4" && (current.x != last.x && current.z != last.z))
	{
		next = Vector3(current.x - 1, 0, current.z);
		Debug.Log(map[current.z][current.x - 1]);

	}
		
	else if (map[current.z + 1][current.x + 1] == "4" && (current.x != last.x && current.z != last.z))
		next = Vector3(current.x + 1, 0, current.z + 1);
	else if (map[current.z + 1][current.x] == "4" && (current.x != last.x && current.z != last.z))
		next = Vector3(current.x, 0, current.z + 1);
	else if (current.x && map[current.z + 1][current.x - 1] == "4" && (current.x != last.x && current.z != last.z))
		next = Vector3(current.x - 1, 0, current.z + 1);

	else if (current.z && map[current.z - 1][current.x + 1] == "4" && (current.x != last.x && current.z != last.z))
		next = Vector3(current.x + 1, 0, current.z - 1);
	else if (current.z && map[current.z - 1][current.x] == "4" && (current.x != last.x && current.z != last.z))
		next = Vector3(current.x + 1, 0, current.z - 1);
	else if (current.z && current.x && map[current.z - 1][current.x - 1] == "4" && (current.x != last.x && current.z != last.z))
		next = Vector3(current.x + 1, 0, current.z - 1);

	Debug.Log("NEXT");
	Debug.Log(next);

	if (map[next.z][next.x] == "3")
		return Vector3(0, -1, 0);

	return next;
}

function MakeMonserPath (start : Vector3, map : String[]) : Vector3[] {
	Debug.Log(map[start.x][start.z]);
	var lastPoint : Vector3 = Vector3(-1, -1, -1);
	var nextPoint : Vector3;
	var currentPoint : Vector3 = start;

	monsterPath.Add(start);
	nextPoint = GetNextPoint(currentPoint, Vector3(-1, -1, -1), map);
	Debug.Log(nextPoint);
	while (nextPoint.y != -1)
	{
		monsterPath.Add(nextPoint);
		lastPoint = currentPoint;
		currentPoint = nextPoint;
		nextPoint = GetNextPoint(currentPoint, lastPoint, map);
		Debug.Log(nextPoint);

	}
	
	Debug.Log(monsterPath);
	
}

function Start () {
    var sr = new StreamReader(Application.dataPath + "/" + fileName);
    var fileContents = sr.ReadToEnd();
    sr.Close();
 
 	var x = 0;
 	var z = 0;
    var lines = fileContents.Split("\n"[0]);
    for (var j = 0; j < lines.length; j++)
    {
    	for (var i = 0; i < lines.length; i++)
    	{
    		if (lines[j][i] != "0") //Ground
		    	Instantiate(ground, Vector3(x, 0, z), transform.rotation);
    		if (lines[j][i] == "2") //MonsterSpawner
    		{
    			monsterSpawner.position = Vector3(x, 0.5, z);
    			MakeMonserPath(Vector3(j, 0, i), lines);
			}
    		if (lines[j][i] == "3") //MainTower
		    	Instantiate(mainTower, Vector3(x, 0.5, z), transform.rotation);
		    	
			x += ground.renderer.bounds.size.x;
    	}
		x = 0;
		z += ground.renderer.bounds.size.z;
    }
}

function Update () {
}

