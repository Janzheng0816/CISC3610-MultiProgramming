using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class YesorNo : MonoBehaviour
{
	[SerializeField] GameObject b;
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
		if(Input.GetKeyDown(KeyCode.N)){
			b.SetActive(false);
		}
		if(Input.GetKeyDown(KeyCode.Y)){
			SceneManager.LoadScene(0);
		}
    }
}
