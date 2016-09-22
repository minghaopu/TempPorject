$(document).ready(function(e) {
	var book = new Book();

	var createList = function(list) {
		if (list.length != 0) {
			var listDom = $("#list-content");
			listDom.empty();
			for (var i = 0; i < list.length; i++) {
				var rowHtml = "<div class=\"row\"><span class=\"id\">" + list[i].id + "</span>";
				rowHtml += "<span class=\"author\">" + list[i].author + "</span>";
				rowHtml += "<span class=\"bookname\">" + list[i].bookname + "</span></div>";
				listDom.append(rowHtml);
			}
		}
	}
	$("#create").click(function(event) {
		book.create(
			$("input#c_author").val(),
			$("input#c_bookname").val(),
			function() {
				book.getList(function(data) {
					createList(data.list)
				})
				$("input#c_author").val('');
				$("input#c_bookname").val('');
			});
	});

	$("#update").click(function(event) {
		book.update(
			$("input#u_id").val(),
			$("input#u_author").val(),
			$("input#u_bookname").val(),
			function(data) {
				book.getList(function(data) {
					createList(data.list)
				})
			});
	});

	$("#read").click(function(event) {
		book.read($("input#r_id").val(), function(data) {
			$("input#r_author").val(data.author);
			$("input#r_bookname").val(data.bookname);
		});
	});

	$("#delete").click(function(event) {
		book.delete($("input#d_id").val(), function(data) {
			book.getList(function(data) {
				createList(data.list)
			})
		});
	});

	$("#getList").click(function(event) {
		book.getList(function(data) {
			createList(data.list);
		});
	});

})