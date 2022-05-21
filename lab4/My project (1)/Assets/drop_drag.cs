using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class drop_drag : MonoBehaviour
{
  private bool isdrag;
  public void OnMouseDown()
  {
	  isdrag = true;
  }
  public void OnMouseUp()
  {
	  isdrag = false;
  }

    // Update is called once per frame
    void Update()
    {
		if(isdrag)
		{
			Vector2 position= Camera.main.ScreenToWorldPoint(Input.mousePosition)-transform.position;
			transform.Translate(position);
		}
    }
}
