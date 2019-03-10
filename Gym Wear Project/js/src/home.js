function initialize() {	
//	Get work out from server/BLT
	let workoutArr = 
		[
			{
				name: 'Test Workout',
			},
			{
				name: 'Test Workout',
				period: '60 mins'
			},
		]
//	let workoutArr = JSON.parse(localStorage.getItem('workouts'))
	
//	localStorage.setItem('workouts', JSON.stringify(workoutArr))
//	console.log(JSON.parse(localStorage.getItem('workouts')))
	
	let renderWorkouts = []
	workoutArr.forEach((data,index) => {
		let period = data.period || ''
		renderWorkouts.push(`<li><a href="workout.html" onclick="test(${index})"><div class="ui-marquee ui-marquee-gradient">${data.name}</div> <div class="li-text-sub ui-li-sub-text">${period}</div></a></li>`)
	})
	
	$('#snapList').append(renderWorkouts);
}

function test(index) {
	alert('go to page ' + index);
}