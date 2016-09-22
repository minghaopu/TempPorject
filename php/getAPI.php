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


	function deletebook ($id) {
		$success = false;


		$db = new DB();
		$sql = sprintf(DELETE_BOOK, $id);

		if ($db->_delete($sql) === 1) {
			$success = true;
		}

		unset($db);

		echo json_encode($success);
	}

	function readbooks() {
		$data = array();
		$errorcode = -1;

		$db = new DB(); // connect db

		$sql = sprintf(READ_BOOKS);
		$result = $db->query($sql);
		$data['list'] = $result->rows;

		unset($db);	// unconnect db

		echo json_encode($data);

	}

	function read($id) {

		$success = true;
		$data = null;

		
		$db = new DB();
		$sql = sprintf(READ, $id);

		$result = $db->query($sql);

		if ($result->num_rows !== 0) {
			$success = true;
			$errorcode = -1;
			$data = $result->row;
		}else {
			$success = false;
		}

		unset($db);

		if ($success) {
			echo json_encode($data);
		} else {
			echo json_encode($success);
		}

	}

	$function = $_GET['function'];

	switch ($function) {
		case 'delete':
			deletebook($_GET['id']);
			break;
		
		case 'read':

			read($_GET['id']);
			break;
		case 'readbooks':
			readbooks();
			break;
	}


 ?>