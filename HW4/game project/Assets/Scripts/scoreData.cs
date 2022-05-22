using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class scoreData : MonoBehaviour
{
	[SerializeField] int myScore = 0; 
	[SerializeField] Text scoreTxt;
    [SerializeField] Text liveTxt;
	[SerializeField] int live;
	[SerializeField] GameObject g;
	[SerializeField] GameObject a;
	[SerializeField] GameObject b;
    // Start is called before the first frame update
    void Start()
    {
		DisplayScore();
        DisplayLive();
		
    }

    // Update is called once per frame
    void Update()
    {
		if(live==0)
			g.SetActive(true);
		if(Input.GetKeyDown(KeyCode.H))
			a.SetActive(true);
		if(Input.GetKeyDown(KeyCode.N))
			b.SetActive(true);
    }
	public void UpdateScore()
    {
        myScore += 10;
		//Debug.Log("hello");
        DisplayScore();
	}
	public void UpdateLive()
	{
		live -= 1;
		DisplayLive();
	}
	public void DisplayScore()
    {
        scoreTxt.text = "Score: " + myScore;
    }
	public void DisplayLive()
    {
        int liveToDisplay = live;
        liveTxt.text = "Live: " + liveToDisplay;
    }
}
