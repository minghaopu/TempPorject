$(document).ready(function(e) {
	var book = new Book();


	$("#create").click(function(event) {
		book.create(
			$("input#c_author").val(),
			$("input#c_bookname").val(),
			function(data) {
				//执行成功之后前端执行的函数
			});
	});

	$("#update").click(function(event) {
		book.update(
			$("input#u_id").val(),
			$("input#u_author").val(),
			$("input#u_bookname").val(),
			function(data) {
				//执行成功之后前端执行的函数
			});
	});

	$("#read").click(function(event) {
		book.read($("input#r_id").val(), function(data) {
			//执行成功之后前端执行的函数，可以在此处把得到的数据插入到html中
		});
	});

	$("#delete").click(function(event) {
		book.delete($("input#d_id").val(), function(data) {
			//执行成功之后前端执行的函数
		});
	});

	$("#getList").click(function(event) {
		book.getList(function(data) {
			//执行成功之后前端执行的函数，可以在此处把得到的数据插入到html中
		});
	});

})