function initialize() {	
//	Get work out from server/BLT
	let workoutArr = 
		[
			{
				name: 'Arms & Triceps',
				duration: 3600,
				workouts: 
					[
					 	{
					 		name: 'Machine Biceps Pull',
					 		type: 'rep',
					 		duration: 30,
					 		rest_time: 30,
					 		body_area: 'biceps',
					 	},
					 	{
					 		name: 'Triceps Pull',
					 		type: 'rep',
					 		duration: 30,
					 		rest_time: 30,
					 		body_area: 'triceps',
					 	},
					 	{
					 		name: 'Machine Biceps Pull',
					 		type: 'rep',
					 		duration: 30,
					 		rest_time: 30,
					 		body_area: 'biceps',
					 	},
			        ]
			},
			{
				name: 'Test Workout',
				period: '60 mins'
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
		let workoutHtml = 
			`
				<li class="home-routines">
					<a onclick="test(${index})">
						<div class="home-routine-info">
							<div class="home-routine-info-icon"/>
								<div class="ui-marquee ui-marquee-gradient home-routines-name">${data.name}</div>
						</div>
						<div class="li-text-sub ui-li-sub-text">${period}</div>
					</a>
				</li>
			`
		renderWorkouts.push(workoutHtml)
	})
	
	$('#snapList').append(renderWorkouts);
}

function test(index) {
//	alert('go to page ' + index);
	tau.changePage('#aboutPage')
}