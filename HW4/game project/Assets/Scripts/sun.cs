using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sun : MonoBehaviour
{
    [SerializeField] GameObject controller;
	[SerializeField] Rigidbody2D mySun;
    [SerializeField] AudioSource audio;
	[SerializeField] float speed=5;
	
	float xMin = -7f, xMax = 7f;
	float yMin = -4.5f, yMax = 4.5f;
    // Start is called before the first frame update
    void Start()
    {
		mySun = GetComponent<Rigidbody2D>();
		mySun.velocity = new Vector2 (Random.Range(xMin,xMax), Random.Range(yMin,yMax));
        if (controller == null)
        {
            controller = GameObject.FindGameObjectWithTag("GameController");
        }
        if (audio == null)
        {
            audio = GetComponent<AudioSource>();
        }
    }

    // Update is called once per frame
    void Update()
    {
        if(transform.position.x <= xMin)
		{
			mySun.velocity = new Vector2 (speed, Random.Range(yMin,yMax));	
		}
		if(transform.position.y <= yMin)
		{
			mySun.velocity = new Vector2 (Random.Range(xMax,xMin), speed);	
		}
		
		if(transform.position.x >= xMax )
		{
			mySun.velocity = new Vector2 (-speed, Random.Range(yMin,yMax));	
		}
		if(transform.position.y >= yMax 
		){
			mySun.velocity = new Vector2 (Random.Range(xMax,xMin), -speed);	
		}
    }

    private void OnTriggerEnter2D (Collider2D collider)
    {
		if (collider.gameObject.tag == "Player")
		{
        controller.GetComponent<scoreData>().UpdateLive();
        AudioSource.PlayClipAtPoint(audio.clip, transform.position);
        Destroy(gameObject);
		controller.GetComponent<spawner>().Spawnsun();
		}
    }
}
