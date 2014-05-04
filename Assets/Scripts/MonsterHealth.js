#pragma strict

private var hitPoints : int = 2;
private var deathGain : int = 2;

private var moneyScript : Money;
private var monsterMoveScript : MonsterMove;

function Start () {
	moneyScript = GameObject.Find("Main Camera").GetComponent(Money);
	monsterMoveScript = GetComponent(MonsterMove);
}

function Update () {

}

function DeceaseHitPoints(damages : int)
{
	hitPoints -= damages;
	if (hitPoints <= 0)
		Death();
}

function Death()
{
	moneyScript.Gain(deathGain);
	animation.Play("death");
	Destroy(this);
	Destroy(monsterMoveScript);

	Destroy(gameObject, 1);

}