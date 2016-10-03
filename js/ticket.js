		var data=[
			{
				"name": "Inception",
				"date": "Sep, 2020",
				"price": 30,
				"sold":false,
				"ticketLeft":5
			},
			{
				"name": "Interstella",
				"date": "Sep, 2020",
				"price": 50,
				"sold":false,
				"ticketLeft":5
			},
			{
				"name": "LePrestige",
				"date": "Sep, 2020",
				"price": 10,
				"sold":false,
				"ticketLeft":5
			}
		];

		// for (var i = 0; i < data.length; i++) {
		// 	if(data[i].price>=10){
		// 		if(data[i].sold){
		// 			var button="<button disabled>Purchase</button>";
		// 		}else{
		// 			var button="<button>Purchase</button>";
		// 		}
		// 		var tableRow = "<tr>"+
		// 		"<td>"+ data[i].name+"</td>"+
		// 		"<td>"+ data[i].date+"</td>"+
		// 		"<td>"+ data[i].price+"</td>"+
		// 		"<td>"+button+"</td>"+
		// 		"</tr>";
		// // table tbody is the parent of tablerow
		// $('table tbody').append(tableRow);
		// }

		// }
		function buyTicket(i){
			console.log(i);
			// data[i].sold=true;
			data[i].ticketLeft--;
		
			if(data[i].ticketLeft===0){
				data[i].sold=true;
			}

			loadData(data);

		}

		function loadData(d){

		$(".table-data").remove();

		for (var i = 0; i < d.length; i++) {
			if(d[i].price>=10){
				if(d[i].sold){
					var button="<button disabled>Sold Out</button>";
				}else{
					var button="<button onClick='buyTicket("+ i +")'>Purchase</button>";
				}
				var tableRow = "<tr class='table-data'>"+
				"<td>"+ data[i].name+"</td>"+
				"<td>"+ data[i].date+"</td>"+
				"<td>"+ data[i].price+"</td>"+
				"<td>"+button+"</td>"+
				"<td>"+data[i].ticketLeft+"</td>"+
				"</tr>";
		// table tbody is the parent of tablerow
		$('table tbody').append(tableRow);
		}

		}
	}

	loadData(data);
