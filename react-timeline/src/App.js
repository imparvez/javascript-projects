import React from 'react'
import Timeline from './Timeline'
import data from './timelineData'
import './App.css';

function App() {
    return (
        <div className="App">
            <Timeline data={data} />
        </div>
    )
}

/**
 * Script to fetch data by parsing DOM
 * */


/* var timelineData = [];
for(var i in listArray) {
	var timelineItem = listArray[i];
	var className = listArray[i].className; 
	if(listArray[i].innerHTML !== undefined) { // timeline-item
		var timelineItemContent = listArray[i].children[0]; // timeline-item-content
		var spanBackground = timelineItemContent.children[0].style.background;
		var spanText = timelineItemContent.children[0].textContent;
		var time = timelineItemContent.children[1].textContent;
		var text = timelineItemContent.children[2].textContent;
		var anchorHref = timelineItemContent.children[3].href;
		var anchorText = timelineItemContent.children[3].textContent;
		var timelineObj = {
            "text": text,
            "date": time,
            "category": {
                "tag": spanText,
                "color": spanBackground,
            },
            "link": {
                "url": anchorHref,
                "text": anchorText
            }
        };
		timelineData.push(timelineObj);
	}
} */ 

export default App;