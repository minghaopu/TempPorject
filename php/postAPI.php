<?php 

	error_reporting(E_ALL);
	ini_set('display_errors',1);
	ini_set('session.user_only_cookies', true);
	ini_set('session.cookie_httponly', 1);
	ini_set('session.name', '_KLJ');
	ini_set('session.cookie_lifetime', 84600);
	ini_set('session.gc_maxlifetime', 84600);
	date_default_timezone_set("UTC");

	require_once 'db.php';


	function create ($author, $bookname) {
		$success = true;
		$au = addslashes($author);
		$name = addslashes($bookname);

		$db = new DB();
		$sql = sprintf(CREATE, $au, $name);
		if ($db->_insert($sql) === 1) {
			$success = true;
			$data['id'] = $db->getLastId();
		}else {
			$success = false;
		}
		unset($db);

		echo json_encode($success);

	}

	function update($id, $author, $bookname) {
		$success = true;

		$au = addslashes($author);
		$name = addslashes($bookname);

		$db = new DB();
		$sql = sprintf(UPDATE_BOOK, $au, $name, $id);
		if ($db->_update($sql) === 1) {
			$success = true;
		}else {
			$success = false;
		}
		unset($db);

		echo json_encode($success);

	}
	$function = $_POST['function'];


	switch ($function) {
		case 'create':
			create($_POST['author'], $_POST['bookname']);
			break;
		
		case 'update':
			update($_POST['id'], $_POST['author'], $_POST['bookname']);
			break;
	}


 ?>