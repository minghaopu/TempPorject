var Book = function() {
	this.list = [];
};

Book.prototype.create = function(author, bookname, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/postAPI.php",
		type: "POST",
		data: {
			author: author,
			bookname: bookname,
			function: "create"
		},
		dataType: "json",
		succes: successFn(data),
		error: errorFn(data)

	})
};

Book.prototype.delete = function(id, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/getAPI.php",
		type: "GET",
		data: {
			id: id,
			function: "delete"
		},
		dataType: "json",
		succes: function(argument) {
			console.log(argument);
		},
		error: function() {
			console.log("error");
		}

	})
};


Book.prototype.read = function(id, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/getAPI.php",
		type: "GET",
		data: {
			id: id,
			function: "read"
		},
		dataType: "json",
		succes: function(argument) {
			console.log(argument);
		},
		error: function() {
			console.log("error");
		}

	})
};

Book.prototype.update = function(author, bookname, id, success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/postAPI.php",
		type: "POST",
		data: {
			author: author,
			bookname: bookname,
			id: id,
			function: "update"
		},
		dataType: "json",
		succes: function(argument) {
			console.log(argument);
		},
		error: function() {
			console.log("error");
		}

	})
};

Book.prototype.getList = function(success, error) {
	var successFn = success || function() {};
	var errorFn = error || function() {};
	$.ajax({
		url: "./php/getAPI.php",
		type: "GET",
		data: {
			function: "readbooks"
		},
		dataType: "json",
		succes: function() {
			successFn(arguments)
		},
		error: function() {
			errorFn(arguments)
		}

	})
}