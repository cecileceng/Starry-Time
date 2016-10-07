import React from 'react';

function replaceText( tplString, placeholder, val){
	// var city= 'Austin';
	// var tplString = "Some text <city> more text";
	// var placeholder = '<city>';
	// tplString.replace(placeholder, city);
	console.log('replaceText', tplString, placeholder, val)
	return tplString.replace(placeholder, val);
}

const CurrentChapter = (props) => {


	var pos = props.storyInfo[0].position;
	// props.storyInfo - is an array of objects
	// we want the object where position==pos
	let i=0,len=props.storyInfo.length;
	let storyInfo = null;
	for(;i<len;i++){
		if(props.storyInfo[i].position==pos){
			storyInfo = props.storyInfo[i];
			break;
		}
	}

	let chapterText = storyInfo.chapterText;

	// var storyInfo = props.storyInfo[pos:position];
	var text = replaceText(chapterText, '<Name_of_Town>', props.answers[pos][0].value );

	console.log('CurrentChapter', {pos:pos, storyInfo:storyInfo}, props.storyInfo[pos], text);

	return (
		<div>
			<div className='current-chapter'>
				{/* JSON.stringify(props.answers['1A']) */}

				{ text }

				{/* {props.storyInfo[props.whereAmI].chapterText} */}
			</div>
			<div className='options'>
				{/* {props.storyInfo[props.whereAmI].optionA}  onclick pathA */} 
				<br />
				{/* {props.storyInfo[props.whereAmI].optionB} onclick pathB */}
			</div>
		</div>
	);
};

export default CurrentChapter;

//initially load the right information
// modify props.whereAmI on every onClick by calling choose option func in INDEXJS