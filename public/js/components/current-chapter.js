import React, { Component } from 'react';

class CurrentChapter extends Component {

 replaceText (tplString, placeholder, val){
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
		for (var a = 0; a < this.props.answers[this.props.whereAmI].length; a++){ 
			chapterText = this.replaceText(chapterText, this.props.answers[this.props.whereAmI][a].type, this.props.answers[this.props.whereAmI][a].value );
		console.log(chapterText);
//	console.log(this.props);
		// console.log('CurrentChapter', {pos:pos, storyInfo:storyInfo}, props.storyInfo[pos], text);
	}
		return (
			<div>
				<div className='current-chapter jumbotron' id='inner'>
					{/* JSON.stringify(props.answers['1A']) */}
					{chapterText}
					{/* {props.storyInfo[props.whereAmI].chapterText} */}
								<div className='options'>
					<button hidden={this.props.storyInfo[currentIndex].optionA === null} data-path='pathA' onClick={this.whereToGo.bind(this)}>
					{this.props.storyInfo[currentIndex].optionA}
					</button>
					<br />
					<button hidden={this.props.storyInfo[currentIndex].optionB === null} data-path='pathB' onClick={this.whereToGo.bind(this)}>{this.props.storyInfo[currentIndex].optionB}</button>
					<button hidden={this.props.storyInfo[currentIndex].optionA !== null}>The End</button>
				</div>
				</div>
			</div>
		);
	};
}

export default CurrentChapter;