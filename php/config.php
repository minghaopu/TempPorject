<?php 
	/*
	 *	Database Configuration
	 */
	define('DB_HOST', 'localhost'); 	// server name
	define('DB_USER','root');			// server username
	define('DB_PASSWORD','0conceit'); 	// server password
	define('DB_NAME','bookdb'); 		// dabase name
	define('DB_CHARSET', 'utf8');	
	define('DB_PORT', '3306');


	/*
	 *	Book SQL
	 */


	// read
	define("READ", "SELECT * FROM Books WHERE id='%s'");

	// read books
	define("READ_BOOKS", "SELECT * FROM Books");

	// create
	define("CREATE", "INSERT INTO Books (author, bookname) VALUES ('%s', '%s')");

	//update
	define("UPDATE_BOOK", "UPDATE Books SET author='%s', bookname='%s' WHERE id='%s'");

	// delete
	define("DELETE_BOOK", "DELETE FROM Books WHERE id='%s'");

	define("LIFETIME", 24*3600)
?>