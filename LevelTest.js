var partlib = [
    //0: numbers
    [
        'N-', //00
        '1-', //01
        '2-', //02
        '3-', //03
        '4-', //04
        '5-', //05
        '6-', //06
        '7-', //07
        '8-', //08
        '9-', //09
        '10-', //10
        '1,',  //11
        '2,', //12
        '3,',  //13
        '4,', //14
        '5,', //15
        '6,', //16
        '7,', //17
        '8,', //18
        '9,', //19
        '10,', //20
        'N,', //21
    ],

    //1: alkane number prefixes
    [

        'prop-',//00
        'meth', //01
        'eth', //02
        'prop',//03
        'but',//04
        'pent',//05
        'hex',//06
        'hept',//07
        'oct',//08
        'non',//09
        'deca',//10
        'ethan',//11
        'butan',//12
        'oct-',//13
        'but-',//14
    ],

    //2. alkane suffixes
    [
        'ane', //0
        'ene', //01
        'yne',//02
        'en',//03
        'ene',//04
        'yl',//05
        'an-',//06
        'ane-',//07
        'yn',//08
        'yn-',//09
    ],

    //3: side group numbers
    [
        'di', //00
        'tri', //01
        'tetr', //02
    ],

    //4. alkines
    [
        'chloro',//0
        'bromo',//1
        'fluoro',//2
        'chloro',//3
    ],

    //5. Fgroups
    [
        'ol',//0
        'ane',//01
        'one',//02
        'al',//03
        'carboxylic acid',//04
        'heptanoic acid',//05
        'nitrile',//06
        'carbo',//07
        'amine',//08
        'amide',//09
        'amino',//10
        'ether',//11
        'none',//12
        'phen',//13
        'cyclo',//14
        'methyl',//15
        'ethyl',//16
        'methyl-',//17
        'ethyl-',//18
        'hydroxy',//19
    ],
]

function Level1(){
    var m1 = ["http://nomenclature101.com/nom/en/img/mols/23.png", "3,4-dimethylhexane", "013004300515106200"];
    var m2 = ["http://nomenclature101.com/nom/en/img/mols/4.png", "2,2,4-trimethylpentane", '012012004301515105200'];
    var m3 = ["http://nomenclature101.com/nom/en/img/mols/18.png", "2-methylnonane", "002515109200"];
    var m4 = ["http://nomenclature101.com/nom/en/img/mols/1.png","2,2,3-trimethylbutane", '012012003301515104200'];
    var m5 = ["http://nomenclature101.com/nom/en/img/mols/35.png","4-methylnonane", '004515109200'];
    var m6 = ["http://nomenclature101.com/nom/en/img/mols/27.png", "3-ethylhexane", '003516106200'];
    var m7 = ["http://nomenclature101.com/nom/en/img/mols/62.png", "ethylcyclopentane", '516514105200'];
    var m8 = ["http://nomenclature101.com/nom/en/img/mols/29.png", "3-methyl-4-propylheptane", '003517004100205107200'];
    var m9 = ["http://nomenclature101.com/nom/en/img/mols/37.png", "6-ethyl-3,3,4-trimethylnonane", '006518013013004301517109200'];
    var m10 = ["http://nomenclature101.com/nom/en/img/mols/56.png", "butylcyclohexane", '104205514106200'];
    return [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
}

function Level2(){
    var m1 = ['http://nomenclature101.com/nom/en/img/mols/115.png','octan-1-ol', '108206001500'];
    var m2 = ['http://nomenclature101.com/nom/en/img/mols/237.png','trichloromethane', '301400101200'];
    var m3 = ['http://nomenclature101.com/nom/en/img/mols/107.png','2-methylpentane-2,4-diol', '002517105207012004300500'];
    var m4 = ['http://nomenclature101.com/nom/en/img/mols/231.png','2-chloro-2-methylpropane', '002403002515103200'];
    var m5 = ['http://nomenclature101.com/nom/en/img/mols/104.png','2,4-dimethylheptan-4-ol', '004300515107206004500'];
    var m6 = ['http://nomenclature101.com/nom/en/img/mols/103.png','2,2-dimethylpropane-1,3-diol', '002300515103200'];
    var m7 = ['http://nomenclature101.com/nom/en/img/mols/295.png','oct-1-yn-3-ol','113001209003500'];
    var m8 = ['http://nomenclature101.com/nom/en/img/mols/318.png','1,4-dichlorobut-2-yne','004300400114002202'];
    var m9 = ['http://nomenclature101.com/nom/en/img/mols/130.png','hex-3-yne','106003202'];
    var m10 = ['http://nomenclature101.com/nom/en/img/mols/105.png','2-ethylhexane-1,3-diol','002516106207011003300500'];
    return [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
}

function Level3(){
    var m1 = ['http://nomenclature101.com/nom/en/img/mols/269.png','3,7-dimethyloct-6-enal', '013007300515113006203503'];
    var m2 = ['http://nomenclature101.com/nom/en/img/mols/76.png','cyclohexanecarboxylic acid', '514106200504'];
    var m3 = ['http://nomenclature101.com/nom/en/img/mols/186.png','hexan-2-one','106206002502'];
    var m4 = ['http://nomenclature101.com/nom/en/img/mols/116.png','octan-3-ol','108206003500'];
    var m5 = ['http://nomenclature101.com/nom/en/img/mols/65.png','4-dimethylheptanoic acid','004300515505'];
    var m6 = ['http://nomenclature101.com/nom/en/img/mols/155.png','butane-1,4-diamine','104200011004300508'];
    var m7 = ['http://nomenclature101.com/nom/en/img/mols/158.png','hexane-1,6-diamine','106200011006300508'];
    var m8 = ['http://nomenclature101.com/nom/en/img/mols/238.png','3,7-dimethylnonanenitrile','007300515109200506'];
    var m9 = ['http://nomenclature101.com/nom/en/img/mols/198.png','cyclohexanecarbonitrile','514106200507506'];
    var m10 = ['http://nomenclature101.com/nom/en/img/mols/289.png','prop-2-enenitrile','103002201506'];
    return [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
}

/*function Level4(){
    var m1 = ['http://nomenclature101.com/nom/en/img/mols/170.png','N,N-dimethyl-N-phenylamine','000300517000513205508'];
    var m2 = ['http://nomenclature101.com/nom/en/img/mols/168.png','propane-1,3-diamine','103207011003300508'];
    var m3 = ['http://nomenclature101.com/nom/en/img/mols/163.png','N,N-dimethyloctane-1-amine','000300515208207001508'];
    var m4 = ['http://nomenclature101.com/nom/en/img/mols/298.png','2-hydroxybenzamide','002516'];
    var m5 = ['http://nomenclature101.com/nom/en/img/mols/157.png','ethylamine'];
    var m6 = ['http://nomenclature101.com/nom/en/img/mols/184.png','butan-2-one'];
    var m7 = ['http://nomenclature101.com/nom/en/img/mols/172.png','1-phenylethanone'];
    var m8 = ['http://nomenclature101.com/nom/en/img/mols/320.png','2-aminoethanamide'];
    var m9 = ['http://nomenclature101.com/nom/en/img/mols/274.png','prop-2-enamide'];
    var m10 = ['http://nomenclature101.com/nom/en/img/mols/194.png','cyclopentanone'];
    return [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
}

function Level5(){
    var m1 = ['http://nomenclature101.com/nom/en/img/mols/178.png','diphenyl ether'];
    var m2 = ['http://nomenclature101.com/nom/en/img/mols/217.png','2-methylpropyl propanoate'];
    var m3 = ['http://nomenclature101.com/nom/en/img/mols/177.png','methoxybenzene'];
    var m4 = ['http://nomenclature101.com/nom/en/img/mols/220.png','1,2-dimethoxyethane'];
    var m5 = ['http://nomenclature101.com/nom/en/img/mols/218.png','ethyl propanoate'];
    var m6 = ['http://nomenclature101.com/nom/en/img/mols/149.png','N,N-dibutylmethanamide'];
    var m7 = ['http://nomenclature101.com/nom/en/img/mols/175.png','ethyl benzoate'];
    var m8 = ['http://nomenclature101.com/nom/en/img/mols/146.png','ethanamide'];
    var m9 = ['http://nomenclature101.com/nom/en/img/mols/294.png','hex-3-yne-2,5-diol'];
    var m10 = ['http://nomenclature101.com/nom/en/img/mols/118.png','propane-1,2,3-triol'];
    return [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
}

function Level6(){
    var m1 = ['http://nomenclature101.com/nom/en/img/mols/78.png','(E)-2,4-dimethyloct-4-ene'];
    var m2 = ['http://nomenclature101.com/nom/en/img/mols/79.png','(E)-4-methylpent-2-ene'];
    var m3 = ['http://nomenclature101.com/nom/en/img/mols/271.png','(E)-3-phenylprop-2-enal'];
    var m4 = ['http://nomenclature101.com/nom/en/img/mols/258.png','(E)-3,7-dimethylocta-2,6-diene-1-ol'];
    var m5 = ['http://nomenclature101.com/nom/en/img/mols/285.png','1,1,2,2-tetrafluoroethene'];
    var m6 = ['http://nomenclature101.com/nom/en/img/mols/286.png','chloroethene'];
    var m7 = ['http://nomenclature101.com/nom/en/img/mols/82.png','(Z)-but-2-ene'];
    var m8 = ['http://nomenclature101.com/nom/en/img/mols/319.png','1-bromobut-2-yne'];
    var m9 = ['http://nomenclature101.com/nom/en/img/mols/283.png','(E)-1,3-dichloropropene'];
    var m10 = ['http://nomenclature101.com/nom/en/img/mols/302.png','phenylmethanol'];
    return [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
}

function Level7(){
    var m1 = ['http://nomenclature101.com/nom/en/img/mols/129.png','ethyne'];
    var m2 = ['http://nomenclature101.com/nom/en/img/mols/266.png','(Z)-3,7-dimethylocta-2,6-dienal'];
    var m3 = ['http://nomenclature101.com/nom/en/img/mols/329.png','2-methyl-1,3,5-trinitrobenzene'];
    var m4 = ['http://nomenclature101.com/nom/en/img/mols/333.png','(R)-3-hydroxybutanoic acid'];
    var m5 = ['http://nomenclature101.com/nom/en/img/mols/338.png','(R)-3,7-dimethyloct-6-enal'];
    var m6 = ['http://nomenclature101.com/nom/en/img/mols/319.png','1-bromobut-2-yne'];
    var m7 = ['http://nomenclature101.com/nom/en/img/mols/359.png','methyl (s)-3-bromobutanoate'];
    var m8 = ['http://nomenclature101.com/nom/en/img/mols/268.png','2,6-dimethylhept-5-enal'];
    var m9 = ['http://nomenclature101.com/nom/en/img/mols/259.png','(z)-3,7-dimethylocta-2,6-diene-1-ol'];
    var m10 = ['http://nomenclature101.com/nom/en/img/mols/347.png','(R)-octan-3-ol'];
    return [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
}*/

//Function that shuffles array

function shuffle(a){
    var j, x, i;
    for(i = a.length-1; i>0; i--){
        j = Math.floor(Math.random()*(i+1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

//Initialize Level (General)
function LevelGen(x){
    var arr;
    switch(x){
        case 1: arr = Level1();  break;
        case 2:arr = Level2(); break;
        case 3: arr = Level3(); break;
        /*case 4: arr = Level4(); break;
        case 5: arr = Level5(); break;
        case 6: arr = Level6(); break;
        case 7: arr = Level7(); break;*/
     default: return None;
    }
    shuffle(arr);
    return arr;
}

//Splt molecule name into parts
function namesplit(str){
    document.write('i got here </br>');
    var i = 0;
    while(i<str.length){
        var in1 = str[i];
        var in2 = Number(str[i+1]+str[i+2]);
        var part = partlib[in1][in2];
        document.write(part, "</br>");
        i+=3;
    }
    return null;
}

//Displays Molecules (with images) in a sketchy table on an HTML File that is now gone :(
/*totarray = LevelGen(1);
    for(var i=0; i<totarray.length; i++){
    var num = i+1;
    var st4 = 'm'+(num.toString())+'n';
    //var nam = totarray[i][1];
    //document.getElementById(st4).innerHTML = nam;
    var st5 = 'm'+(num.toString())+'i';
    var im = totarray[i][0];
    document.getElementById(st5).setAttribute('src', im);

}
namesplit(totarray[0][2]); */
