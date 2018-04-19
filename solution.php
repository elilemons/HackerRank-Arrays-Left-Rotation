<?php

$handle = fopen ("php://stdin","r");
fscanf($handle,"%d %d",$n,$k);
$a_temp = fgets($handle);
$a = explode(" ",$a_temp);
array_walk($a,'intval');

// O(n)
echo implode(' ', array_merge(array_splice($a, $k), $a));

// Brute force, O(n^2)
// echo implode(' ', switchy($n, $k, $a));

// function switchy($n, $k, $a) {
//     $i = 0;
//     do {
//         array_push($a, array_shift($a));
//     } while(++$i < $k);
//     return $a;
// }
?>