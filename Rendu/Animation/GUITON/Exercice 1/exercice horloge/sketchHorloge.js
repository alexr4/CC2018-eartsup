var secondes, minutes, heures, division, PI ;

 configuration de la fonction ()
{
  createCanvas ( 1000 , 1000 );
  arrière-plan ( 120 , 70 , 100 );
  frameRate ( 3 );
  division =  PI  /  30 ;
}

fonction  draw () {
   translate (largeur / 2 , hauteur / 2 );
  remplir ( 100 , 120 , 255 );
  coup ( 10 , 10 , 10 );
  strokeWeight ( 4 );
  ellipse ( 0 , 0 , 400 , 400 );
  textSize ( 15 );
  textAlign ( CENTRE );
  texte ( ' 12 ' , 0 , - 140 );
  texte ( ' 3 ' , 150 , 5 );
  texte ( ' 6 ' , 0 , 160 );
  texte ( ' 9 ' , - 150 , 5 );
  remplir ( 0 );
  rectMode ( CENTRE );
  pour ( var i =  0 ; i <  60 ; i ++ ) {
    coup ( 50 );
    strokeWeight ( 1 );
    ligne ( 0 , 170 , 0 , 190 );
    tourner ( PI  /  30 );
  }
  pour ( var i =  0 ; i <  12 ; i ++ ) {
    rect ( 0 , 180 , 8 , 20 );
    tourner ( PI  /  6 );
  }

  noStroke ();

 // secondes
 pousser ();
  remplir ( 220 , 80 , 180 );
  secondes =  seconde () * division;
  tourner (secondes);
  rect ( 0 , -  70 , 2 , 140 );
 pop ();

 // minutes
 pousser ();
  remplir ( 255 );
  minutes =  minute () * division;
  tourner (minutes + (secondes / 60 ));
  rect ( 0 , -  68 , 2 , 136 );
 pop ();

 // heures
 pousser ();
  remplir ( 0 );
  heures =  heure () *  PI  /  6 ;
  tourner (heures + (minutes /  12 ))
  rect ( 0 , -  40 , 10 , 80 );
  remplir ( 255 );
pop ();

  remplir ( 50 );
  coup ( 100 , 100 , 100 );
  ellipse ( 0 , 0 , 16 , 16 );
  remplir ( 255 );
  ellipse ( 0 , 0 , 8 , 8 );

}
