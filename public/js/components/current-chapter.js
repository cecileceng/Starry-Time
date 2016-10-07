import React, { Component } from 'react';

class CurrentChapter extends Component {

 replaceText (tplString, placeholder, val){
	// var city= 'Austin';
	// var tplString = "Some text <city> more text";
	// var placeholder = '<city>';
	// tplString.replace(placeholder, city);
	console.log('replaceText', tplString, placeholder, val)
	return tplString.replace(placeholder, val);
}

 whereToGo (e) {
 	console.log(this.props.whereAmI);
 	for (var k = 0; k < this.props.storyInfo.length; k++) {
 		if (this.props.storyInfo[k].position === this.props.whereAmI) {
 			var hereIAmNow = this.props.storyInfo[k][e.target.getAttribute('data-path')];
 			this.props.nextChapter(hereIAmNow);
 		}
 	}
 // 	this.props.nextChapter(e.target.getAttribute('data-path'))
	// console.log();
	//find out whereAmI =
	//use whereAmI to search through the array until we find position key 
	//stop and take that object to use all the values from it
}
	render() {
		var pos = this.props.storyInfo[0].position;
		// props.storyInfo - is an array of objects
		// we want the object where position==pos
		var currentIndex = 0;
		let i=0,len=this.props.storyInfo.length;
		let storyInfo = null;
		var chapterText = this.props.storyInfo[0].chapterText;
		for(;i<len;i++){
			if (this.props.storyInfo[i].position === this.props.whereAmI) {
				currentIndex = i;
				console.log(i);
				chapterText = this.props.storyInfo[i].chapterText;
			// if(this.props.storyInfo[i].position==pos){
			// 	storyInfo = this.props.storyInfo[i];
			// 	break;
			}
		}

		// let chapterText = storyInfo.chapterText;


		// var storyInfo = props.storyInfo[pos:position];
		var text = this.replaceText(chapterText, this.props.answers[this.props.whereAmI][0].type, this.props.answers[this.props.whereAmI][0].value );

	console.log(this.props);
		// console.log('CurrentChapter', {pos:pos, storyInfo:storyInfo}, props.storyInfo[pos], text);

		return (
			<div>
				<div className='current-chapter jumbotron' id='inner'>
					{/* JSON.stringify(props.answers['1A']) */}
					{text}
					{/* {props.storyInfo[props.whereAmI].chapterText} */}
								<div className='options'>
					<button data-path='pathA' onClick={this.whereToGo.bind(this)}>
					{this.props.storyInfo[currentIndex].optionA}
					</button>
					<br />
					<button data-path='pathB' onClick={this.whereToGo.bind(this)}>{this.props.storyInfo[currentIndex].optionB}</button>
				</div>
				</div>
			</div>
		);
	};
}

export default CurrentChapter;

// modify props.whereAmI on every onClick by calling choose option func in INDEXJS

//onClick ^ modify state w/newKey based on the props.storyInfo[FINDINDEX].pathA