#pragma strict

private var cameraSensitivity : float = 90;
private var climbSpeed : float = 4;
private var normalMoveSpeed : float = 10;
private var slowMoveFactor : float = 0.25f;
private var fastMoveFactor : float = 3;

private var rotationX : float = 0.0f;
private var rotationY : float = 0.0f;

function Start ()
{
}

function Update ()
{

	if (Input.GetMouseButton(0))
	{
		rotationX += Input.GetAxis("Mouse X") * cameraSensitivity * Time.deltaTime;
		rotationY += Input.GetAxis("Mouse Y") * cameraSensitivity * Time.deltaTime;
		rotationY = Mathf.Clamp (rotationY, -90, 90);

		transform.localRotation = Quaternion.AngleAxis(rotationX, Vector3.up);
		transform.localRotation *= Quaternion.AngleAxis(rotationY, Vector3.left);
	}

 	if (Input.GetKey (KeyCode.LeftShift) || Input.GetKey (KeyCode.RightShift))
 	{
		transform.position += transform.forward * (normalMoveSpeed * fastMoveFactor) * Input.GetAxis("Vertical") * Time.deltaTime;
		transform.position += transform.right * (normalMoveSpeed * fastMoveFactor) * Input.GetAxis("Horizontal") * Time.deltaTime;
 	}
 	else if (Input.GetKey (KeyCode.LeftControl) || Input.GetKey (KeyCode.RightControl))
 	{
		transform.position += transform.forward * (normalMoveSpeed * slowMoveFactor) * Input.GetAxis("Vertical") * Time.deltaTime;
		transform.position += transform.right * (normalMoveSpeed * slowMoveFactor) * Input.GetAxis("Horizontal") * Time.deltaTime;
 	}
 	else
 	{
 		transform.position += transform.forward * normalMoveSpeed * Input.GetAxis("Vertical") * Time.deltaTime;
		transform.position += transform.right * normalMoveSpeed * Input.GetAxis("Horizontal") * Time.deltaTime;
 	}


	if (Input.GetKey (KeyCode.Q)) {transform.position += transform.up * climbSpeed * Time.deltaTime;}
	if (Input.GetKey (KeyCode.E)) {transform.position -= transform.up * climbSpeed * Time.deltaTime;}

}