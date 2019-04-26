var db = require('../db');

var chordsList = ['A',' ',' ','B','C','D','E','F','G'];

function transposeChords(input_chords,prime_key, target_key)
{
    var arr = input_chords.split("");
    var tmp = transposing_chords(arr,prime_key,target_key).join("")
    var ret = tmp.replace(/ /g, "_");
    var ret2 = ret.replace(/\n/g, "<br>");

    return ret2;
}

function transposing_chords(input_arr,prime_key, target_key)
{
    var pre_key = 0;
    var tar_key = 0;
    if (prime_key == 'C'){
        pre_key = 1;}
    else if(prime_key == 'Db'){
        pre_key = 2;}
    else if(prime_key == 'C#'){
        pre_key = 2;}
    else if(prime_key == 'D'){
        pre_key = 3;}
    else if(prime_key == 'Eb'){
        pre_key = 4;}
    else if(prime_key == 'D#'){
        pre_key = 4;}
    else if(prime_key == 'E'){
        pre_key = 5;}
    else if(prime_key == 'F'){
        pre_key = 6;}
    else if(prime_key == 'F#'){
        pre_key = 7;}
    else if(prime_key == 'Gb'){
        pre_key = 7;}
    else if(prime_key == 'G'){
        pre_key = 8;}
    else if(prime_key == 'Ab'){
        pre_key = 9;}
    else if(prime_key == 'G#'){
        pre_key = 9;}
    else if(prime_key == 'A'){
        pre_key = 10;}
    else if(prime_key == 'Bb'){
        pre_key = 11;}
    else if(prime_key == 'A#'){
        pre_key = 11;}
    else if(prime_key == 'B'){
        pre_key = 12;}

    if (target_key == 'C'){
        tar_key = 1;}
    else if(target_key == 'Db'){
        tar_key = 2;}
    else if(target_key == 'C#'){
        tar_key = 2;}
    else if(target_key == 'D'){
        tar_key = 3;}
    else if(target_key == 'Eb'){
        tar_key = 4;}
    else if(target_key == 'D#'){
        tar_key = 4;}
    else if(target_key == 'E'){
        tar_key = 5;}
    else if(target_key == 'F'){
        tar_key = 6;}
    else if(target_key == 'F#'){
        tar_key = 7;}
    else if(target_key == 'Gb'){
        tar_key = 7;}
    else if(target_key == 'G'){
        tar_key = 8;}
    else if(target_key == 'Ab'){
        tar_key = 9;}
    else if(target_key == 'G#'){
        tar_key = 9;}
    else if(target_key == 'A'){
        tar_key = 10;}
    else if(target_key == 'Bb'){
        tar_key = 11;}
    else if(target_key == 'A#'){
        tar_key = 11;}
    else if(target_key == 'B'){
        tar_key = 12;}
    
    var key_distance = tar_key - pre_key;
    var new_key_distance = 0;
    if (Math.abs(key_distance) > 6){
       if(key_distance>0){
           new_key_distance = key_distance-12;
       }
       else if(key_distance <0){
           new_key_distance = key_distance -(-12);
       }
    }
    else{
        if(key_distance>0){
           new_key_distance = key_distance-12;
       }
       else if(key_distance <0){
           new_key_distance = key_distance -(-12);
       }
    }
    
    
    for (i=0;i<input_arr.length;i++){
        //C chords:
        if (input_arr[i] == 'C'){
            input_arr[i] = 1;}
        else if(input_arr[i] == 'Cm'){
            input_arr[i] = 0.1;}
        else if(input_arr[i] == 'C6'){
            input_arr[i] = 0.2;}
        else if(input_arr[i] == 'C7'){
            input_arr[i] = 0.3;}
        else if(input_arr[i] == 'C9'){
            input_arr[i] = 0.4;}
        else if(input_arr[i] == 'Cm6'){
            input_arr[i] = 0.5;}
        else if(input_arr[i] == 'Cm7'){
            input_arr[i] = 0.6;}
        else if(input_arr[i] == 'Cmaj7'){
            input_arr[i] = 0.7;}
        else if(input_arr[i] == 'Cdim'){
            input_arr[i] = 0.8;}
        else if(input_arr[i] == 'C+'){
            input_arr[i] = 0.9;}
        else if(input_arr[i] == 'Csus'){
            input_arr[i] = 0.95;}
        //Db chords:
        else if(input_arr[i] == 'Db'){
            input_arr[i] = 2;}
        else if(input_arr[i] == 'Dbm'){
            input_arr[i] = 1.1;}
        else if(input_arr[i] == 'Db6'){
            input_arr[i] = 1.2;}
        else if(input_arr[i] == 'Db7'){
            input_arr[i] = 1.3;}
        else if(input_arr[i] == 'Db9'){
            input_arr[i] = 1.4;}
        else if(input_arr[i] == 'Dbm6'){
            input_arr[i] = 1.5;}
        else if(input_arr[i] == 'Dbm7'){
            input_arr[i] = 1.6;}
        else if(input_arr[i] == 'Dbmaj7'){
            input_arr[i] = 1.7;}
        else if(input_arr[i] == 'Dbdim'){
            input_arr[i] = 1.8;}
        else if(input_arr[i] == 'Db+'){
            input_arr[i] = 1.9;}
        else if(input_arr[i] == 'Dbsus'){
            input_arr[i] = 1.95;}
        //C# chords:
        else if(input_arr[i] == 'C#'){
            input_arr[i] = 2;}
        else if(input_arr[i] == 'C#m'){
            input_arr[i] = 1.5;}
        else if(input_arr[i] == 'C#6'){
            input_arr[i] = 1.2;}
        else if(input_arr[i] == 'C#7'){
            input_arr[i] = 1.3;}
        else if(input_arr[i] == 'C#9'){
            input_arr[i] = 1.4;}
        else if(input_arr[i] == 'C#m6'){
            input_arr[i] = 1.5;}
        else if(input_arr[i] == 'C#m7'){
            input_arr[i] = 1.6;}
        else if(input_arr[i] == 'C#maj7'){
            input_arr[i] = 1.7;}
        else if(input_arr[i] == 'C#dim'){
            input_arr[i] = 1.8;}
        else if(input_arr[i] == 'C#+'){
            input_arr[i] = 1.9;}
        else if(input_arr[i] == 'C#sus'){
            input_arr[i] = 1.95;}
        //D chords:
        else if(input_arr[i] == 'D'){
            input_arr[i] = 3;}
        else if(input_arr[i] == 'Dm'){
            input_arr[i] = 2.1;}
        else if(input_arr[i] == 'D6'){
            input_arr[i] = 2.2;}
        else if(input_arr[i] == 'D7'){
            input_arr[i] = 2.3;}
        else if(input_arr[i] == 'D9'){
            input_arr[i] = 2.4;}
        else if(input_arr[i] == 'Dm6'){
            input_arr[i] = 2.5;}
        else if(input_arr[i] == 'Dm7'){
            input_arr[i] = 2.6;}
        else if(input_arr[i] == 'Dmaj7'){
            input_arr[i] = 2.7;}
        else if(input_arr[i] == 'Ddim'){
            input_arr[i] = 2.8;}
        else if(input_arr[i] == 'D+'){
            input_arr[i] = 2.9;}
        else if(input_arr[i] == 'Dsus'){
            input_arr[i] = 2.95;}
        //Eb chords:
        else if(input_arr[i] == 'Eb'){
            input_arr[i] = 4;}
        else if(input_arr[i] == 'Ebm'){
            input_arr[i] = 3.1;}
        else if(input_arr[i] == 'Eb6'){
            input_arr[i] = 3.2;}
        else if(input_arr[i] == 'Eb7'){
            input_arr[i] = 3.3;}
        else if(input_arr[i] == 'Eb9'){
            input_arr[i] = 3.4;}
        else if(input_arr[i] == 'Ebm6'){
            input_arr[i] = 3.5;}
        else if(input_arr[i] == 'Ebm7'){
            input_arr[i] = 3.6;}
        else if(input_arr[i] == 'Ebmaj7'){
            input_arr[i] = 3.7;}
        else if(input_arr[i] == 'Ebdim'){
            input_arr[i] = 3.8;}
        else if(input_arr[i] == 'Eb+'){
            input_arr[i] = 3.9;}
        else if(input_arr[i] == 'Ebsus'){
            input_arr[i] = 3.95;}
        //D# chords:
        else if(input_arr[i] == 'D#'){
            input_arr[i] = 4;}
        else if(input_arr[i] == 'D#m'){
            input_arr[i] = 3.1;}
        else if(input_arr[i] == 'D#6'){
            input_arr[i] = 3.2;}
        else if(input_arr[i] == 'D#7'){
            input_arr[i] = 3.3;}
        else if(input_arr[i] == 'D#9'){
            input_arr[i] = 3.4;}
        else if(input_arr[i] == 'D#m6'){
            input_arr[i] = 3.5;}
        else if(input_arr[i] == 'D#m7'){
            input_arr[i] = 3.6;}
        else if(input_arr[i] == 'D#maj7'){
            input_arr[i] = 3.7;}
        else if(input_arr[i] == 'D#dim'){
            input_arr[i] = 3.8;}
        else if(input_arr[i] == 'D#+'){
            input_arr[i] = 3.9;}
        else if(input_arr[i] == 'D#sus'){
            input_arr[i] = 3.95;}
        //E chords:
        else if(input_arr[i] == 'E'){
            input_arr[i] = 5;}
        else if(input_arr[i] == 'Em'){
            input_arr[i] = 4.1;}
        else if(input_arr[i] == 'E6'){
            input_arr[i] = 4.2;}
        else if(input_arr[i] == 'E7'){
            input_arr[i] = 4.3;}
        else if(input_arr[i] == 'E9'){
            input_arr[i] = 4.4;}
        else if(input_arr[i] == 'Em6'){
            input_arr[i] = 4.5;}
        else if(input_arr[i] == 'Em7'){
            input_arr[i] = 4.6;}
        else if(input_arr[i] == 'Emaj7'){
            input_arr[i] = 4.7;}
        else if(input_arr[i] == 'Edim'){
            input_arr[i] = 4.8;}
        else if(input_arr[i] == 'E+'){
            input_arr[i] = 4.9;}
        else if(input_arr[i] == 'Esus'){
            input_arr[i] = 4.95;}
        //F chords:
        else if(input_arr[i] == 'F'){
            input_arr[i] = 6;}
        else if(input_arr[i] == 'Fm'){
            input_arr[i] = 5.1;}
        else if(input_arr[i] == 'F6'){
            input_arr[i] = 5.2;}
        else if(input_arr[i] == 'F7'){
            input_arr[i] = 5.3;}
        else if(input_arr[i] == 'F9'){
            input_arr[i] = 5.4;}
        else if(input_arr[i] == 'Fm6'){
            input_arr[i] = 5.5;}
        else if(input_arr[i] == 'Fm7'){
            input_arr[i] = 5.6;}
        else if(input_arr[i] == 'Fmaj7'){
            input_arr[i] = 5.7;}
        else if(input_arr[i] == 'Fdim'){
            input_arr[i] = 5.8;}
        else if(input_arr[i] == 'F+'){
            input_arr[i] = 5.9;}
        else if(input_arr[i] == 'Fsus'){
            input_arr[i] = 5.95;}
        //F# chords:
        else if(input_arr[i] == 'F#'){
            input_arr[i] = 7;}
        else if(input_arr[i] == 'F#m'){
            input_arr[i] = 6.1;}
        else if(input_arr[i] == 'F#6'){
            input_arr[i] = 6.2;}
        else if(input_arr[i] == 'F#7'){
            input_arr[i] = 6.3;}
        else if(input_arr[i] == 'F#9'){
            input_arr[i] = 6.4;}
        else if(input_arr[i] == 'F#m6'){
            input_arr[i] = 6.5;}
        else if(input_arr[i] == 'F#m7'){
            input_arr[i] = 6.6;}
        else if(input_arr[i] == 'F#maj7'){
            input_arr[i] = 6.7;}
        else if(input_arr[i] == 'F#dim'){
            input_arr[i] = 6.8;}
        else if(input_arr[i] == 'F#+'){
            input_arr[i] = 6.9;}
        else if(input_arr[i] == 'F#sus'){
            input_arr[i] = 6.95;}
        //Gb chords:
        else if(input_arr[i] == 'Gb'){
            input_arr[i] = 7;}
        else if(input_arr[i] == 'Gbm'){
            input_arr[i] = 6.1;}
        else if(input_arr[i] == 'Gb6'){
            input_arr[i] = 6.2;}
        else if(input_arr[i] == 'Gb7'){
            input_arr[i] = 6.3;}
        else if(input_arr[i] == 'Gb9'){
            input_arr[i] = 6.4;}
        else if(input_arr[i] == 'Gbm6'){
            input_arr[i] = 6.5;}
        else if(input_arr[i] == 'Gbm7'){
            input_arr[i] = 6.6;}
        else if(input_arr[i] == 'Gbmaj7'){
            input_arr[i] = 6.7;}
        else if(input_arr[i] == 'Gbdim'){
            input_arr[i] = 6.8;}
        else if(input_arr[i] == 'Gb+'){
            input_arr[i] = 6.9;}
        else if(input_arr[i] == 'Gbsus'){
            input_arr[i] = 6.95;}
        //G chords:
        else if(input_arr[i] == 'G'){
            input_arr[i] = 8;}
        else if(input_arr[i] == 'Gm'){
            input_arr[i] = 7.1;}
        else if(input_arr[i] == 'G6'){
            input_arr[i] = 7.2;}
        else if(input_arr[i] == 'G7'){
            input_arr[i] = 7.3;}
        else if(input_arr[i] == 'G9'){
            input_arr[i] = 7.4;}
        else if(input_arr[i] == 'Gm6'){
            input_arr[i] = 7.5;}
        else if(input_arr[i] == 'Gm7'){
            input_arr[i] = 7.6;}
        else if(input_arr[i] == 'Gmaj7'){
            input_arr[i] = 7.7;}
        else if(input_arr[i] == 'Gdim'){
            input_arr[i] = 7.8;}
        else if(input_arr[i] == 'G+'){
            input_arr[i] = 7.9;}
        else if(input_arr[i] == 'Gsus'){
            input_arr[i] = 7.95;}
        //Ab chords:
        else if(input_arr[i] == 'Ab'){
            input_arr[i] = 9;}
        else if(input_arr[i] == 'Abm'){
            input_arr[i] = 8.1;}
        else if(input_arr[i] == 'Ab6'){
            input_arr[i] = 8.2;}
        else if(input_arr[i] == 'Ab7'){
            input_arr[i] = 8.3;}
        else if(input_arr[i] == 'Ab9'){
            input_arr[i] = 8.4;}
        else if(input_arr[i] == 'Abm6'){
            input_arr[i] = 8.5;}
        else if(input_arr[i] == 'Abm7'){
            input_arr[i] = 8.6;}
        else if(input_arr[i] == 'Abmaj7'){
            input_arr[i] = 8.7;}
        else if(input_arr[i] == 'Abdim'){
            input_arr[i] = 8.8;}
        else if(input_arr[i] == 'Ab+'){
            input_arr[i] = 8.9;}
        else if(input_arr[i] == 'Absus'){
            input_arr[i] = 8.95;}
        //G# chords:
        else if(input_arr[i] == 'G#'){
            input_arr[i] = 9;}
        else if(input_arr[i] == 'G#m'){
            input_arr[i] = 8.1;}
        else if(input_arr[i] == 'G#6'){
            input_arr[i] = 8.2;}
        else if(input_arr[i] == 'G#7'){
            input_arr[i] = 8.3;}
        else if(input_arr[i] == 'G#9'){
            input_arr[i] = 8.4;}
        else if(input_arr[i] == 'G#m6'){
            input_arr[i] = 8.5;}
        else if(input_arr[i] == 'G#m7'){
            input_arr[i] = 8.6;}
        else if(input_arr[i] == 'G#maj7'){
            input_arr[i] = 8.7;}
        else if(input_arr[i] == 'G#dim'){
            input_arr[i] = 8.8;}
        else if(input_arr[i] == 'G#+'){
            input_arr[i] = 8.9;}
        else if(input_arr[i] == 'G#sus'){
            input_arr[i] = 8.95;}
        //A chords:
        else if(input_arr[i] == 'A'){
            input_arr[i] = 10;}
        else if(input_arr[i] == 'Am'){
            input_arr[i] = 9.5;}
        else if(input_arr[i] == 'A6'){
            input_arr[i] = 9.2;}
        else if(input_arr[i] == 'A7'){
            input_arr[i] = 9.3;}
        else if(input_arr[i] == 'A9'){
            input_arr[i] = 9.4;}
        else if(input_arr[i] == 'Am6'){
            input_arr[i] = 9.5;}
        else if(input_arr[i] == 'Am7'){
            input_arr[i] = 9.6;}
        else if(input_arr[i] == 'Amaj7'){
            input_arr[i] = 9.7;}
        else if(input_arr[i] == 'Adim'){
            input_arr[i] = 9.8;}
        else if(input_arr[i] == 'A+'){
            input_arr[i] = 9.9;}
        else if(input_arr[i] == 'Asus'){
            input_arr[i] = 9.95;}
        //Bb chords:
        else if(input_arr[i] == 'Bb'){
            input_arr[i] = 11;}
        else if(input_arr[i] == 'Bbm'){
            input_arr[i] = 10.1;}
        else if(input_arr[i] == 'Bb6'){
            input_arr[i] = 10.2;}
        else if(input_arr[i] == 'Bb7'){
            input_arr[i] = 10.3;}
        else if(input_arr[i] == 'Bb9'){
            input_arr[i] = 10.4;}
        else if(input_arr[i] == 'Bbm6'){
            input_arr[i] = 10.5;}
        else if(input_arr[i] == 'Bbm7'){
            input_arr[i] = 10.6;}
        else if(input_arr[i] == 'Bbmaj7'){
            input_arr[i] = 10.7;}
        else if(input_arr[i] == 'Bbdim'){
            input_arr[i] = 10.8;}
        else if(input_arr[i] == 'Bb+'){
            input_arr[i] = 10.9;}
        else if(input_arr[i] == 'Bbsus'){
            input_arr[i] = 10.95;}
        //A# chords:
        else if(input_arr[i] == 'A#'){
            input_arr[i] = 11;}
        else if(input_arr[i] == 'A#m'){
            input_arr[i] = 10.1;}
        else if(input_arr[i] == 'A#6'){
            input_arr[i] = 10.2;}
        else if(input_arr[i] == 'A#7'){
            input_arr[i] = 10.3;}
        else if(input_arr[i] == 'A#9'){
            input_arr[i] = 10.4;}
        else if(input_arr[i] == 'A#m6'){
            input_arr[i] = 10.5;}
        else if(input_arr[i] == 'A#m7'){
            input_arr[i] = 10.6;}
        else if(input_arr[i] == 'A#maj7'){
            input_arr[i] = 10.7;}
        else if(input_arr[i] == 'A#dim'){
            input_arr[i] = 10.8;}
        else if(input_arr[i] == 'A#+'){
            input_arr[i] = 10.9;}
        else if(input_arr[i] == 'A#sus'){
            input_arr[i] = 10.95;}
        //B chords:
        else if(input_arr[i] == 'B'){
            input_arr[i] = 12;}
        else if(input_arr[i] == 'Bm'){
            input_arr[i] = 11.1;}
        else if(input_arr[i] == 'B6'){
            input_arr[i] = 11.2;}
        else if(input_arr[i] == 'B7'){
            input_arr[i] = 11.3;}
        else if(input_arr[i] == 'B9'){
            input_arr[i] = 11.4;}
        else if(input_arr[i] == 'Bm6'){
            input_arr[i] = 11.5;}
        else if(input_arr[i] == 'Bm7'){
            input_arr[i] = 11.6;}
        else if(input_arr[i] == 'Bmaj7'){
            input_arr[i] = 11.7;}
        else if(input_arr[i] == 'Bdim'){
            input_arr[i] = 11.8;}
        else if(input_arr[i] == 'B+'){
            input_arr[i] = 11.9;}
        else if(input_arr[i] == 'Bsus'){
            input_arr[i] = 11.95;}
    }
    
    var c = 10;
    for (i=0;i<input_arr.length;i++){
        if(input_arr[i]>0 && input_arr[i]<12){
            if(input_arr[i]-(-new_key_distance)<=0 || input_arr[i]-(-new_key_distance) >12){
                input_arr[i] = (input_arr[i]*c -(-key_distance*c))/c;
            }
            else{
                input_arr[i] = (input_arr[i]*c -(-new_key_distance*c))/c;
            }
        }
    }
    
    
    for (i=0;i<input_arr.length;i++){
        //C chords:
        if (input_arr[i] == 1){
            input_arr[i] = 'C';}
        else if(input_arr[i] == 0.1){
            input_arr[i] = 'Cm';}
        else if(input_arr[i] == 0.2){
            input_arr[i] = 'C6';}
        else if(input_arr[i] == 0.3){
            input_arr[i] = 'C7';}
        else if(input_arr[i] == 0.4){
            input_arr[i] = 'C9';}
        else if(input_arr[i] == 0.5){
            input_arr[i] = 'Cm6';}
        else if(input_arr[i] == 0.6){
            input_arr[i] = 'Cm7';}
        else if(input_arr[i] == 0.7){
            input_arr[i] = 'Cmaj7';}
        else if(input_arr[i] == 0.8){
            input_arr[i] = 'Cdim';}
        else if(input_arr[i] == 0.9){
            input_arr[i] = 'C+';}
        else if(input_arr[i] == 0.95){
            input_arr[i] = 'Csus';}
        //Db chords:
        else if (input_arr[i] == 2){
            input_arr[i] = 'Db';}
        else if(input_arr[i] == 1.1){
            input_arr[i] = 'Dbm';}
        else if(input_arr[i] == 1.2){
            input_arr[i] = 'Db6';}
        else if(input_arr[i] == 1.3){
            input_arr[i] = 'Db7';}
        else if(input_arr[i] == 1.4){
            input_arr[i] = 'Db9';}
        else if(input_arr[i] == 1.5){
            input_arr[i] = 'Dbm6';}
        else if(input_arr[i] == 1.6){
            input_arr[i] = 'Dbm7';}
        else if(input_arr[i] == 1.7){
            input_arr[i] = 'Dbmaj7';}
        else if(input_arr[i] == 1.8){
            input_arr[i] = 'Dbdim';}
        else if(input_arr[i] == 1.9){
            input_arr[i] = 'Db+';}
        else if(input_arr[i] == 1.95){
            input_arr[i] = 'Dbsus';}
        //C# chords:
        else if (input_arr[i] == 2){
            input_arr[i] = 'C#';}
        else if(input_arr[i] == 1.1){
            input_arr[i] = 'C#m';}
        else if(input_arr[i] == 1.2){
            input_arr[i] = 'C#6';}
        else if(input_arr[i] == 1.3){
            input_arr[i] = 'C#7';}
        else if(input_arr[i] == 1.4){
            input_arr[i] = 'C#9';}
        else if(input_arr[i] == 1.5){
            input_arr[i] = 'C#m6';}
        else if(input_arr[i] == 1.6){
            input_arr[i] = 'C#m7';}
        else if(input_arr[i] == 1.7){
            input_arr[i] = 'C#maj7';}
        else if(input_arr[i] == 1.8){
            input_arr[i] = 'C#dim';}
        else if(input_arr[i] == 1.9){
            input_arr[i] = 'C#+';}
        else if(input_arr[i] == 1.95){
            input_arr[i] = 'C#sus';}
        //D chords:
        else if (input_arr[i] == 3){
            input_arr[i] = 'D';}
        else if(input_arr[i] == 2.1){
            input_arr[i] = 'Dm';}
        else if(input_arr[i] == 2.2){
            input_arr[i] = 'D6';}
        else if(input_arr[i] == 2.3){
            input_arr[i] = 'D7';}
        else if(input_arr[i] == 2.4){
            input_arr[i] = 'D9';}
        else if(input_arr[i] == 2.5){
            input_arr[i] = 'Dm6';}
        else if(input_arr[i] == 2.6){
            input_arr[i] = 'Dm7';}
        else if(input_arr[i] == 2.7){
            input_arr[i] = 'Dmaj7';}
        else if(input_arr[i] == 2.8){
            input_arr[i] = 'Ddim';}
        else if(input_arr[i] == 2.9){
            input_arr[i] = 'D+';}
        else if(input_arr[i] == 2.95){
            input_arr[i] = 'Dsus';}
        //Eb chords:
        else if (input_arr[i] == 4){
            input_arr[i] = 'Eb';}
        else if(input_arr[i] == 3.1){
            input_arr[i] = 'Ebm';}
        else if(input_arr[i] == 3.2){
            input_arr[i] = 'Eb6';}
        else if(input_arr[i] == 3.3){
            input_arr[i] = 'Eb7';}
        else if(input_arr[i] == 3.4){
            input_arr[i] = 'Eb9';}
        else if(input_arr[i] == 3.5){
            input_arr[i] = 'Ebm6';}
        else if(input_arr[i] == 3.6){
            input_arr[i] = 'Ebm7';}
        else if(input_arr[i] == 3.7){
            input_arr[i] = 'Ebmaj7';}
        else if(input_arr[i] == 3.8){
            input_arr[i] = 'Ebdim';}
        else if(input_arr[i] == 3.9){
            input_arr[i] = 'Eb+';}
        else if(input_arr[i] == 3.95){
            input_arr[i] = 'Ebsus';}
        //D# chords:
        else if (input_arr[i] == 4){
            input_arr[i] = 'D#';}
        else if(input_arr[i] == 3.1){
            input_arr[i] = 'D#m';}
        else if(input_arr[i] == 3.2){
            input_arr[i] = 'D#6';}
        else if(input_arr[i] == 3.3){
            input_arr[i] = 'D#7';}
        else if(input_arr[i] == 3.4){
            input_arr[i] = 'D#9';}
        else if(input_arr[i] == 3.5){
            input_arr[i] = 'D#m6';}
        else if(input_arr[i] == 3.6){
            input_arr[i] = 'D#m7';}
        else if(input_arr[i] == 3.7){
            input_arr[i] = 'D#maj7';}
        else if(input_arr[i] == 3.8){
            input_arr[i] = 'D#dim';}
        else if(input_arr[i] == 3.9){
            input_arr[i] = 'D#+';}
        else if(input_arr[i] == 3.95){
            input_arr[i] = 'D#sus';}
        //E chords:
        else if (input_arr[i] == 5){
            input_arr[i] = 'E';}
        else if(input_arr[i] == 4.1){
            input_arr[i] = 'Em';}
        else if(input_arr[i] == 4.2){
            input_arr[i] = 'E6';}
        else if(input_arr[i] == 4.3){
            input_arr[i] = 'E7';}
        else if(input_arr[i] == 4.4){
            input_arr[i] = 'E9';}
        else if(input_arr[i] == 4.5){
            input_arr[i] = 'Em6';}
        else if(input_arr[i] == 4.6){
            input_arr[i] = 'Em7';}
        else if(input_arr[i] == 4.7){
            input_arr[i] = 'Emaj7';}
        else if(input_arr[i] == 4.8){
            input_arr[i] = 'Edim';}
        else if(input_arr[i] == 4.9){
            input_arr[i] = 'E+';}
        else if(input_arr[i] == 4.95){
            input_arr[i] = 'Esus';}
        //F chords:
        else if (input_arr[i] == 6){
            input_arr[i] = 'F';}
        else if(input_arr[i] == 5.1){
            input_arr[i] = 'Fm';}
        else if(input_arr[i] == 5.2){
            input_arr[i] = 'F6';}
        else if(input_arr[i] == 5.3){
            input_arr[i] = 'F7';}
        else if(input_arr[i] == 5.4){
            input_arr[i] = 'F9';}
        else if(input_arr[i] == 5.5){
            input_arr[i] = 'Fm6';}
        else if(input_arr[i] == 5.6){
            input_arr[i] = 'Fm7';}
        else if(input_arr[i] == 5.7){
            input_arr[i] = 'Fmaj7';}
        else if(input_arr[i] == 5.8){
            input_arr[i] = 'Fdim';}
        else if(input_arr[i] == 5.9){
            input_arr[i] = 'F+';}
        else if(input_arr[i] == 5.95){
            input_arr[i] = 'Fsus';}
        //F# chords:
        else if (input_arr[i] == 7){
            input_arr[i] = 'F#';}
        else if(input_arr[i] == 6.1){
            input_arr[i] = 'F#m';}
        else if(input_arr[i] == 6.2){
            input_arr[i] = 'F#6';}
        else if(input_arr[i] == 6.3){
            input_arr[i] = 'F#7';}
        else if(input_arr[i] == 6.4){
            input_arr[i] = 'F#9';}
        else if(input_arr[i] == 6.5){
            input_arr[i] = 'F#m6';}
        else if(input_arr[i] == 6.6){
            input_arr[i] = 'F#m7';}
        else if(input_arr[i] == 6.7){
            input_arr[i] = 'F#maj7';}
        else if(input_arr[i] == 6.8){
            input_arr[i] = 'F#dim';}
        else if(input_arr[i] == 6.9){
            input_arr[i] = 'F#+';}
        else if(input_arr[i] == 6.95){
            input_arr[i] = 'F#sus';}
        //Gb chords:
        else if (input_arr[i] == 7){
            input_arr[i] = 'Gb';}
        else if(input_arr[i] == 6.1){
            input_arr[i] = 'Gbm';}
        else if(input_arr[i] == 6.2){
            input_arr[i] = 'Gb6';}
        else if(input_arr[i] == 6.3){
            input_arr[i] = 'Gb7';}
        else if(input_arr[i] == 6.4){
            input_arr[i] = 'Gb9';}
        else if(input_arr[i] == 6.5){
            input_arr[i] = 'Gbm6';}
        else if(input_arr[i] == 6.6){
            input_arr[i] = 'Gbm7';}
        else if(input_arr[i] == 6.7){
            input_arr[i] = 'Gbmaj7';}
        else if(input_arr[i] == 6.8){
            input_arr[i] = 'Gbdim';}
        else if(input_arr[i] == 6.9){
            input_arr[i] = 'Gb+';}
        else if(input_arr[i] == 6.95){
            input_arr[i] = 'Gbsus';}
        //G chords:
        else if (input_arr[i] == 8){
            input_arr[i] = 'G';}
        else if(input_arr[i] == 7.1){
            input_arr[i] = 'Gm';}
        else if(input_arr[i] == 7.2){
            input_arr[i] = 'G6';}
        else if(input_arr[i] == 7.3){
            input_arr[i] = 'G7';}
        else if(input_arr[i] == 7.4){
            input_arr[i] = 'G9';}
        else if(input_arr[i] == 7.5){
            input_arr[i] = 'Gm6';}
        else if(input_arr[i] == 7.6){
            input_arr[i] = 'Gm7';}
        else if(input_arr[i] == 7.7){
            input_arr[i] = 'Gmaj7';}
        else if(input_arr[i] == 7.8){
            input_arr[i] = 'Gdim';}
        else if(input_arr[i] == 7.9){
            input_arr[i] = 'G+';}
        else if(input_arr[i] == 7.95){
            input_arr[i] = 'Gsus';}
        //Ab chords:
        else if (input_arr[i] == 9){
            input_arr[i] = 'Ab';}
        else if(input_arr[i] == 8.1){
            input_arr[i] = 'Abm';}
        else if(input_arr[i] == 8.2){
            input_arr[i] = 'Ab6';}
        else if(input_arr[i] == 8.3){
            input_arr[i] = 'Ab7';}
        else if(input_arr[i] == 8.4){
            input_arr[i] = 'Ab9';}
        else if(input_arr[i] == 8.5){
            input_arr[i] = 'Abm6';}
        else if(input_arr[i] == 8.6){
            input_arr[i] = 'Abm7';}
        else if(input_arr[i] == 8.7){
            input_arr[i] = 'Abmaj7';}
        else if(input_arr[i] == 8.8){
            input_arr[i] = 'Abdim';}
        else if(input_arr[i] == 8.9){
            input_arr[i] = 'Ab+';}
        else if(input_arr[i] == 8.95){
            input_arr[i] = 'Absus';}
        //G# chords:
        else if (input_arr[i] == 9){
            input_arr[i] = 'G#';}
        else if(input_arr[i] == 8.1){
            input_arr[i] = 'G#m';}
        else if(input_arr[i] == 8.2){
            input_arr[i] = 'G#6';}
        else if(input_arr[i] == 8.3){
            input_arr[i] = 'G#7';}
        else if(input_arr[i] == 8.4){
            input_arr[i] = 'G#9';}
        else if(input_arr[i] == 8.5){
            input_arr[i] = 'G#m6';}
        else if(input_arr[i] == 8.6){
            input_arr[i] = 'G#m7';}
        else if(input_arr[i] == 8.7){
            input_arr[i] = 'G#maj7';}
        else if(input_arr[i] == 8.8){
            input_arr[i] = 'G#dim';}
        else if(input_arr[i] == 8.9){
            input_arr[i] = 'G#+';}
        else if(input_arr[i] == 8.95){
            input_arr[i] = 'G#sus';}
        //A chords:
        else if (input_arr[i] == 10){
            input_arr[i] = 'A';}
        else if(input_arr[i] == 9.1){
            input_arr[i] = 'Am';}
        else if(input_arr[i] == 9.2){
            input_arr[i] = 'A6';}
        else if(input_arr[i] == 9.3){
            input_arr[i] = 'A7';}
        else if(input_arr[i] == 9.4){
            input_arr[i] = 'A9';}
        else if(input_arr[i] == 9.5){
            input_arr[i] = 'Am6';}
        else if(input_arr[i] == 9.6){
            input_arr[i] = 'Am7';}
        else if(input_arr[i] == 9.7){
            input_arr[i] = 'Amaj7';}
        else if(input_arr[i] == 9.8){
            input_arr[i] = 'Adim';}
        else if(input_arr[i] == 9.9){
            input_arr[i] = 'A+';}
        else if(input_arr[i] == 9.95){
            input_arr[i] = 'Asus';}
        //Bb chords:
        else if (input_arr[i] == 11){
            input_arr[i] = 'Bb';}
        else if(input_arr[i] == 10.1){
            input_arr[i] = 'Bbm';}
        else if(input_arr[i] == 10.2){
            input_arr[i] = 'Bb6';}
        else if(input_arr[i] == 10.3){
            input_arr[i] = 'Bb7';}
        else if(input_arr[i] == 10.4){
            input_arr[i] = 'Bb9';}
        else if(input_arr[i] == 10.5){
            input_arr[i] = 'Bbm6';}
        else if(input_arr[i] == 10.6){
            input_arr[i] = 'Bbm7';}
        else if(input_arr[i] == 10.7){
            input_arr[i] = 'Bbmaj7';}
        else if(input_arr[i] == 10.8){
            input_arr[i] = 'Bbdim';}
        else if(input_arr[i] == 10.9){
            input_arr[i] = 'Bb+';}
        else if(input_arr[i] == 10.95){
            input_arr[i] = 'Bbsus';}
        //A# chords:
        else if (input_arr[i] == 11){
            input_arr[i] = 'A#';}
        else if(input_arr[i] == 10.1){
            input_arr[i] = 'A#m';}
        else if(input_arr[i] == 10.2){
            input_arr[i] = 'A#6';}
        else if(input_arr[i] == 10.3){
            input_arr[i] = 'A#7';}
        else if(input_arr[i] == 10.4){
            input_arr[i] = 'A#9';}
        else if(input_arr[i] == 10.5){
            input_arr[i] = 'A#m6';}
        else if(input_arr[i] == 10.6){
            input_arr[i] = 'A#m7';}
        else if(input_arr[i] == 10.7){
            input_arr[i] = 'A#maj7';}
        else if(input_arr[i] == 10.8){
            input_arr[i] = 'A#dim';}
        else if(input_arr[i] == 10.9){
            input_arr[i] = 'A#+';}
        else if(input_arr[i] == 10.95){
            input_arr[i] = 'A#sus';}
        //B chords:
        else if (input_arr[i] == 12){
            input_arr[i] = 'B';}
        else if(input_arr[i] == 11.1){
            input_arr[i] = 'Bm';}
        else if(input_arr[i] == 11.2){
            input_arr[i] = 'B6';}
        else if(input_arr[i] == 11.3){
            input_arr[i] = 'B7';}
        else if(input_arr[i] == 11.4){
            input_arr[i] = 'B9';}
        else if(input_arr[i] == 11.5){
            input_arr[i] = 'Bm6';}
        else if(input_arr[i] == 11.6){
            input_arr[i] = 'Bm7';}
        else if(input_arr[i] == 11.7){
            input_arr[i] = 'Bmaj7';}
        else if(input_arr[i] == 11.8){
            input_arr[i] = 'Bdim';}
        else if(input_arr[i] == 11.9){
            input_arr[i] = 'B+';}
        else if(input_arr[i] == 11.95){
            input_arr[i] = 'Bsus';}
    }
    
    
    
    return input_arr;


}

function transposeTab(songInfo) {
    var input_str = songInfo.Tab;
    var chords = songInfo.chords;
    var prime_key = songInfo.default_key;
    var pre_key = 0;
    var tar_key = 0;
    var target_key_arr = [ 'A','B','C','D','E','F','G','Ab','Bb','Db','Eb','Gb','C#','D#','F#','A#','G#'];
    //["A", songInfo.Tab, songInfo.chords],
    var transposed_tabs_arr = [];

    target_key_arr.forEach(function(target_key){
        var tab_arr = [];
        if (prime_key == 'C') {
            pre_key = 1;
        } else if (prime_key == 'Db') {
            pre_key = 2;
        } else if (prime_key == 'C#') {
            pre_key = 2;
        } else if (prime_key == 'D') {
            pre_key = 3;
        } else if (prime_key == 'Eb') {
            pre_key = 4;
        } else if (prime_key == 'D#') {
            pre_key = 4;
        } else if (prime_key == 'E') {
            pre_key = 5;
        } else if (prime_key == 'F') {
            pre_key = 6;
        } else if (prime_key == 'F#') {
            pre_key = 7;
        } else if (prime_key == 'Gb') {
            pre_key = 7;
        } else if (prime_key == 'G') {
            pre_key = 8;
        } else if (prime_key == 'Ab') {
            pre_key = 9;
        } else if (prime_key == 'G#') {
            pre_key = 9;
        } else if (prime_key == 'A') {
            pre_key = 10;
        } else if (prime_key == 'Bb') {
            pre_key = 11;
        } else if (prime_key == 'A#') {
            pre_key = 11;
        } else if (prime_key == 'B') {
            pre_key = 12;
        }

        if (target_key == 'C') {
            tar_key = 1;
        } else if (target_key == 'Db') {
            tar_key = 2;
        } else if (target_key == 'C#') {
            tar_key = 2;
        } else if (target_key == 'D') {
            tar_key = 3;
        } else if (target_key == 'Eb') {
            tar_key = 4;
        } else if (target_key == 'D#') {
            tar_key = 4;
        } else if (target_key == 'E') {
            tar_key = 5;
        } else if (target_key == 'F') {
            tar_key = 6;
        } else if (target_key == 'F#') {
            tar_key = 7;
        } else if (target_key == 'Gb') {
            tar_key = 7;
        } else if (target_key == 'G') {
            tar_key = 8;
        } else if (target_key == 'Ab') {
            tar_key = 9;
        } else if (target_key == 'G#') {
            tar_key = 9;
        } else if (target_key == 'A') {
            tar_key = 10;
        } else if (target_key == 'Bb') {
            tar_key = 11;
        } else if (target_key == 'A#') {
            tar_key = 11;
        } else if (target_key == 'B') {
            tar_key = 12;
        }

        var key_distance = tar_key - pre_key;

        var mystr = input_str;
        var myarr = mystr.split("");
        for (i = 0; i < myarr.length; i++) {
            if (myarr[i] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                if (myarr[i + 1] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                    if (key_distance > -10 && key_distance < 10) {
                        if ((myarr[i + 1] - -key_distance) >= 10) {
                            myarr[i] += 1;
                            myarr[i + 1] = (myarr[i + 1] - -key_distance) % 10;
                            i += 1;
                        } else if ((myarr[i + 1] - -key_distance) < 10 && (myarr[i + 1] - -key_distance) >= 0) {
                            myarr[i + 1] = myarr[i + 1] - (-key_distance);
                            i += 1;
                        } else if ((myarr[i + 1] - -key_distance) < 0) {
                            myarr[i] = myarr[i] - 1;
                            if (myarr[i] == 0) {
                                myarr[i] = '-';
                            }
                            myarr[i + 1] = myarr[i + 1] - (-10) - (-key_distance);
                            i += 1;
                        }
                    } else if (key_distance == 10) {
                        myarr[i] += 1;
                        i += 1;
                    } else if (key_distance == 11) {
                        myarr[i] += 1;
                        myarr[i] += 1;
                        i += 1;
                    } else if (key_distance == -10) {
                        myarr[i] = myarr[i] - 1;
                        if (myarr[i] == 0) {
                            myarr[i] = '-';
                        }
                        i += 1;
                    } else if (key_distance == -11) {
                        if (myarr[i] = 20) {
                            myarr[i] = '-';
                            myarr[i + 1] = 9;
                        }
                        myarr[i] = myarr[i] - 1;
                        if (myarr[i] == 0) {
                            myarr[i] = '-';
                        }
                        myarr[i + 1] = myarr[i + 1] - 1;
                        i += 1;
                    }
                } else {
                    myarr[i] = myarr[i] - -key_distance;
                }
            }
        }


        Array.prototype.in_array = function (e) {
            var r = new RegExp(',' + e + ',');
            return (r.test(',' + this.join(this.S) + ','));
        };
        var strings = ['A', 'E', 'B', 'D', 'G'];
        for (i = 0; i < myarr.length; i++) {
            if(myarr[i] != '(' && myarr[i] != ')') {
                if (['A', 'E', 'B', 'D', 'G'].in_array(myarr[i])) {
                    if (myarr[i + 1] == "|") {
                        myarr[i] = "<br>" + myarr[i];
                    }

                }
            }


            }

        var transposed_tabs = myarr.join("");
        tab_arr.push(target_key);
        tab_arr.push(transposed_tabs);
        tab_arr.push(transposeChords(chords,prime_key,target_key));
        transposed_tabs_arr.push(tab_arr);
    });


    return transposed_tabs_arr;
}


var dbCalls =
    {
        saveNewSong: function(newSongInfo, callback){
            if(newSongInfo !={}) {
                var sql_insert_song = "INSERT INTO SongsTable(id, song_name, album, artist, default_key) " +
                    "VALUES (NULL, ?, ?, ?, ?);";

                var sql_get_id = "SELECT LAST_INSERT_ID();";

                var sql_insert_tabs = "INSERT INTO TabsTable (id, song_key, Tab) " +
                    "VALUES (?, ?, ?);";

                var sql_insert_chords = "INSERT INTO ChordsTable (id, song_key, chords) " +
                    "VALUES (?, ?, ?);";
                var sql_get_song_info = "SELECT * FROM SongsTable" +
                    " WHERE artist = ? AND album = ? AND song_name = ?";
                var dummy_sql = "SELECT * FROM SongsTable";

                var results;
                db.query(sql_insert_song, [newSongInfo.songName, newSongInfo.album, newSongInfo.artist, newSongInfo.default_key],
                    function (err, results) {
                        if (err) throw err;

                        db.query(sql_get_id, function (err, rows) {
                            var id;
                            for (var i = 0; i < rows.length; i++) {
                                var row = rows[i];
                                id = row["LAST_INSERT_ID()"];
                            }
                            var songKeys = transposeTab(newSongInfo);

                            songKeys.forEach(function (song) {

                                db.query(sql_insert_tabs, [id, song[0], song[1]], function (err, results) {
                                    if (err) throw err;

                                });
                                console.log(song[2]);
                                results = db.query(sql_insert_chords, [id, song[0], song[2]], function (err, results) {
                                    if (err) throw err;
                                    return;
                                });

                            });
                            //db.query(dummy_sql, callback);
                            db.query(sql_get_song_info, [newSongInfo.artist, newSongInfo.album, newSongInfo.songName], callback);
                        });
                        return;
                    });
            }},

        getTabs: function(songInfo, callback)
        {
            var sql_get_tab = "SELECT id, song_key, Tab FROM SongsTable"+
                " INNER JOIN TabsTable USING (id)"+
                " WHERE artist = ? AND album = ? AND song_name = ? AND song_key = ?";
            db.query(sql_get_tab, [songInfo.artist, songInfo.album, songInfo.songName, songInfo.songKey], callback);
        },
        getChords: function(songInfo, callback)
        {
            var sql_get_chords = "SELECT id, song_key, chords FROM SongsTable"+
                " INNER JOIN ChordsTable USING (id)"+
                " WHERE artist = ? AND album = ? AND song_name = ? AND song_key = ?";
            db.query(sql_get_chords, [songInfo.artist, songInfo.album, songInfo.songName, songInfo.songKey], callback);
        },
        getBasicSongInfo: function(search, callback)
        {
            var sql_search = "SELECT * FROM SongsTable "+
                "WHERE song_name = ? OR album = ? OR artist = ?";

            db.query(sql_search, [search.term, search.term, search.term],callback);
        },
        selectAll: function(callback)
        {
            var sql_get_all = "SELECT * FROM SongsTable;"
            db.query(sql_get_all, callback);
        },
        deleteSong: function(songInfo, callback)
        {
            var sql_get_id = "SELECT id FROM SongsTable "+
                " WHERE artist = ? AND album = ? AND song_name = ?";
            var sql_del_song = "DELETE FROM SongsTable"+
                " WHERE id = ?";

            var sql_del_tab = "DELETE From TabsTable WHERE id = ?";
            var sql_del_chord = "DELETE FROM ChordsTable WHERE id = ?";
            db.query(sql_get_id, [songInfo.artist, songInfo.album, songInfo.songName], function(err, rows)
            {
                if (err) throw err;
                var id;
                var row = rows[0];
                id = row["id"];

                db.query(sql_del_tab, [id], function(){
                db.query(sql_del_chord, [id], function(){
                db.query(sql_del_song, [id], callback);
                });
            }
                );

            });
        }
        };

module.exports=dbCalls;

