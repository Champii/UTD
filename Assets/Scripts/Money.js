#pragma strict

public var money : int;

function Start () {
	money = 10;
}

function Update () {

}

function Gain (amount : int) {
	money += amount;
}

function Buy (amount : int) : boolean {
	if (amount <= money)
	{
		money -= amount;
		return true;
	}
	return false;
}
