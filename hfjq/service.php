<?php
	//echo $_POST["txtFirstName"];
	//echo $_POST['txtLastName'];
	//print_r($_POST);
if($_POST){
	if($_POST['action'] == 'addRunner') {
		$fname = htmlspecialchars($_POST['txtFirstName']);
		$lname = htmlspecialchars($_POST['txtLastName']);
		$gender = htmlspecialchars($_POST['ddlGender']);
		$minutes = htmlspecialchars($_POST['txtMinutes']);
		$seconds = htmlspecialchars($_POST['txtSeconds']);
		if(preg_match('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname)) { 
		//i表示大小写不敏感的搜索 ^位于[]内第一个时表示取反 \w任意单词字符 \s任意空白字符
			fail('Invalid name provided');
		}
		if( empty($fname) || empty($lname) )
			fail('Please enter a first and last name.');
		if( empty($gender) )
			fail('Please select a gender.');
		if( empty($minutes) || empty($seconds) )
			fail('Please enter minutes and seconds.');
			
		$time = $minutes.":".$seconds;
		
		$query = "insert into runners set first_name='$fname', last_name='$lname', gender='$gender', finish_time='$time'";
		//只有双引号里会自动把变量名变为它的值，单引号里不做转义！！也可以写作"{$fname} is XXX"使得看起来明显一些
		$result = db_connection($query);
		
		if($result) {
			$msg = "Runner: ".$fname." ".$lname." added successfully";
			success($msg);
		} else {
			fail('Insert failed.');
		}
		exit;
	}
}
	
	
if($_GET){
	if($_GET['action'] == 'getRunners') {
		$query = "select first_name, last_name, gender, finish_time from runners order by finish_time asc";
		$result = db_connection($query);
	
		$runners = array();
	
		while($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
			array_push($runners,
				array(
					'fname' => $row['first_name'],
					'lname' => $row['last_name'],
					'gender' => $row['gender'],
					'time' => $row['finish_time']
				)
			);
		}
		echo json_encode(array('runners'=>$runners));
		exit;
	}
}
	
	function db_connection($query){
		mysql_connect('127.0.0.1','root','shangliu') or die('Could not connect to database.');
		mysql_select_db('hfjq_race_info');
		return mysql_query($query);
	}
	
	function fail($message) {
		die(json_encode(array(
			'status' => 'fail',
			'message' => $message
		)));
	}
	
	function success($message) {
		die(json_encode(array(
			'status' => 'success',
			'message' => $message
		)));
	}
?>










