using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class backToGame : MonoBehaviour
{
	[SerializeField] GameObject o;
    // Start is called before the first frame update
    void Start()
    {
		
    }

    // Update is called once per frame
	void Update()
	{
		StartCoroutine( back());
	}
    IEnumerator back()
    {
		yield return new WaitForSeconds(1);
       if(Input.anyKey){
			o.SetActive(false);
	   }
    }
}
