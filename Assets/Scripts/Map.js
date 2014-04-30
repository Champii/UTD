import System.IO;

public var fileName = "map.txt";
public var ground : GameObject;
public var monsterSpawner : Transform;

function Start () {
    var sr = new StreamReader(Application.dataPath + "/" + fileName);
    var fileContents = sr.ReadToEnd();
    sr.Close();
 
 	var x = 0;
 	var z = 0;
    var lines = fileContents.Split("\n"[0]);
    for (line in lines)
    {
    	for (var i = 0; i < line.length; i++)
    	{
    		if (line[i] != "0") //Ground
		    	Instantiate(ground, Vector3(x, 0, z), transform.rotation);
    		if (line[i] == "2") //MonsterSpawner
    			monsterSpawner.position = Vector3(x, 0.5, z);
		    	
			x += ground.renderer.bounds.size.x;
    	}
		x = 0;
		z += ground.renderer.bounds.size.z;
    }
}

function Update () {
}

