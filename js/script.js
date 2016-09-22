$(document).ready(function(e) {
	var book = new Book();


	$("#create").click(function(event) {
		book.create(
			$("input#c_author").val(), 
			$("input#c_bookname").val());
	});

	$("#update").click(function(event) {
		book.update(
			$("input#u_id").val(),
			$("input#u_author").val(), 
			$("input#u_bookname").val());
	});

	$("#read").click(function(event) {
		book.read($("input#r_id").val());
	});

	$("#delete").click(function(event) {
		book.delete($("input#d_id").val());
	});

	$("#getList").click(function(event) {
		book.getList(function(data) {
			var row = "<>"
		});
	});

})