using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class startOver : MonoBehaviour
{
	[SerializeField] GameObject k;
    // Start is called before the first frame update
    void Start()
    {
        k.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.N))
			SceneManager.LoadScene(0);
			
    }
}
