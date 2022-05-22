using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawner : MonoBehaviour
{
    const int NUM_COINS = 10;
    [SerializeField] GameObject coin;
	[SerializeField] GameObject sun;

    // Start is called before the first frame update
    void Start()
    {
        Spawncoin();
		Spawnsun();
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void Spawncoin()
    { 
   
        float xMin = -7f, xMax = 7f;
		float yMin = -4f, yMax = 4.5f;
      
        Vector2 position = new Vector2(Random.Range(xMin, xMax), Random.Range(yMin, yMax));
        Instantiate(coin, position, Quaternion.identity);
		
        
    }
	public void Spawnsun()
    { 
   
        float xMin = -7f, xMax = 7f;
		float yMin = -4f, yMax = 4.5f;
      
        Vector2 position = new Vector2(Random.Range(xMin, xMax), Random.Range(yMin, yMax));
        Instantiate(sun, position, Quaternion.identity);
        
    }
}
