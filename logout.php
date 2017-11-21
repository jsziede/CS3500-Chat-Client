<?php
//removes session variables when user logs out
include "functions.php";
if(isloggedin()) {
	unset($_SESSION['name']);
	unset($_SESSION['password']);
	unset($_SESSION['id']);
	header("location: index.php");
} else {
	header("location: index.php");
}
?>
