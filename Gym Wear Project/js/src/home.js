function initialize() {	
//	Get routine from server/BLT
	let routineArr = 
		[
			{
				name: 'Arms & Triceps',
				duration: 3600,
				workouts: 
					[
					 	{
					 		name: 'machine biceps pull',
					 		type: 'rep',
					 		type_count: 20,
					 		duration: 30,
					 		rest_time: 30,
					 		set_count: 4,
					 		body_area: 'biceps',
					 	},
					 	{
					 		name: 'triceps pull',
					 		type: 'time',
					 		type_count: 60,
					 		duration: 30,
					 		rest_time: 30,
					 		set_count: 4,
					 		body_area: 'triceps',
					 	},
					 	{
					 		name: 'shoulder press',
					 		type: 'rep',
					 		type_count: 20,
					 		duration: 30,
					 		rest_time: 30,
					 		set_count: 4,
					 		body_area: 'shoulder',
					 	},
					 	{
					 		name: 'bench press',
					 		type: 'rep',
					 		type_count: 20,
					 		duration: 30,
					 		rest_time: 30,
					 		set_count: 4,
					 		body_area: 'chest',
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
//	let routineArr = JSON.parse(localStorage.getItem('routines'))
	
	localStorage.setItem('routines', JSON.stringify(routineArr))
//	console.log(JSON.parse(localStorage.getItem('routines')))
	
	let renderRoutines = []
	routineArr.forEach((data,index) => {
		let period = data.period || ''
		let routineHtml = 
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
		renderRoutines.push(routineHtml)
	})
	
	$('#snapList').append(renderRoutines);
}

function test(index) {
//	alert('go to page ' + index);
	tau.changePage('#aboutPage')
}