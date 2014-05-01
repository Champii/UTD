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

	// en bas
	if (map[current.z][current.x + 1] == "4" && (current.x + 1 != last.x || current.z != last.z))
//		next = Vector3(current.z, 0, current.x + 1);
		next = Vector3(current.x + 1, 0, current.z);

	// au dessus
	else if (current.x && map[current.z][current.x - 1] == "4" && (current.x - 1 != last.x || current.z != last.z))
//		next = Vector3(current.z, 0, current.x - 1);
		next = Vector3(current.x - 1, 0, current.z);

	// a droite
	else if (map[current.z + 1][current.x] == "4" && (current.x != last.x || current.z + 1 != last.z))
//		next = Vector3(current.z + 1, 0, current.x);
		next = Vector3(current.x, 0, current.z + 1);

	// a gauche
	else if (current.z && map[current.z - 1][current.x] == "4" && (current.x != last.x || current.z - 1 != last.z))
//		next = Vector3(current.z - 1, 0, current.x);
		next = Vector3(current.x, 0, current.z - 1);

	if (map[next.z][next.x] == "3")
		return Vector3(0, -1, 0);

	return next;
}

function MakeMonserPath (start : Vector3, map : String[]) {
	Debug.Log(map[start.x][start.z]);
	var lastPoint : Vector3 = Vector3(-1, -1, -1);
	var nextPoint : Vector3;
	var currentPoint : Vector3 = start;
	var tmpPoint : Vector3;

	monsterPath.Add(start);
	nextPoint = GetNextPoint(currentPoint, Vector3(-1, -1, -1), map);
	while (nextPoint.y != -1)
	{
		monsterPath.Add(nextPoint);
		lastPoint = currentPoint;
		currentPoint = nextPoint;
		nextPoint = GetNextPoint(currentPoint, lastPoint, map);
	}
	
	Debug.Log(monsterPath);
	monsterPath = SwapPathCoord(monsterPath);
	
}

function SwapPathCoord (arr : Array) : Array {
	
	for (var i = 0; i < arr.length; i++)
	{
		var tmp;
		tmp = arr[i].x;
		arr[i].x = arr[i].z;
		arr[i].z = tmp;
	}
	return (arr);
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
    			monsterSpawner.position = Vector3(z, 0.5, x);
    			MakeMonserPath(Vector3(i, 0, j), lines);
			}
    		if (lines[j][i] == "3") //MainTower
		    	Instantiate(mainTower, Vector3(z, 0.5, x), transform.rotation);
		    	
			x += ground.renderer.bounds.size.x;
    	}
		x = 0;
		z += ground.renderer.bounds.size.z;
    }
}

function Update () {
}

