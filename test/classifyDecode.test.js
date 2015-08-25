var classifyDecode = require("../lib/classifyDecode.js")
var should = require('should')



var oneResults = {"oclc":["40730986"],"isbn":[],"issn":[],"possibleOclc":[],"title":"An introduction to Buddhist philosophy : an annotated translation of the Tarkabhāṣā of Mokṣākaragupta : reprint with corrections in the author's hand /","author":"Mokṣākaragupta, 10th cent.","bnumber":14009366,"complete":false,"working":true,"workingStart":0,"foundSomething":true,"resultsLength":1,"results":["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <response code=\"2\"/>\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <work author=\"Mokṣākaragupta, active 10th century\" editions=\"5\" eholdings=\"0\" format=\"Book\" holdings=\"44\" itemtype=\"itemtype-book\" owi=\"2452446008\" title=\"An introduction to Buddhist philosophy : an annotated translation of the Tarkabhāṣā of Mokṣākaragupta : reprint with corrections in the author's hand\">155762443</work>\n  <authors>\n    <author lc=\"n84206144\" viaf=\"51988959\">Mokṣākaragupta, active 10th century</author>\n  </authors>\n  <orderBy>thold desc</orderBy>\n  <input type=\"oclc\">40730986</input>\n  <start>0</start>\n  <maxRecs>25</maxRecs>\n  <editions>\n    <edition author=\"Mokṣākaragupta, active 10th century\" eholdings=\"0\" format=\"Book\" holdings=\"36\" itemtype=\"itemtype-book\" language=\"eng\" oclc=\"40730986\" title=\"An introduction to Buddhist philosophy : an annotated translation of the Tarkabhāṣā of Mokṣākaragupta : reprint with corrections in the author's hand\">\n      <classifications>\n        <class edition=\"21\" ind1=\"0\" ind2=\"4\" sf2=\"21\" sfa=\"181.043\" tag=\"082\"/>\n        <class ind1=\" \" ind2=\"4\" sfa=\"BQ3262.E5\" tag=\"050\"/>\n      </classifications>\n    </edition>\n    <edition author=\"Mokṣākaragupta, active 10th century\" eholdings=\"0\" format=\"Book\" holdings=\"5\" itemtype=\"itemtype-book\" language=\"eng\" oclc=\"246447430\" title=\"An introduction to buddhist philosophy : an annoated translation of the Tarkabhṣ̄ā of Mokṣākaragupta, Reprint with corrections in the author's hand\"/>\n    <edition eholdings=\"0\" format=\"Book\" holdings=\"1\" itemtype=\"itemtype-book\" language=\"eng\" oclc=\"799604113\" title=\"An introduction to Buddhist philosophy : an annotated translation of the Tarkabhāṣā of Mokṣākaragupta : reprint with corrections in the author's hand\">\n      <classifications>\n        <class edition=\"21\" ind1=\"0\" ind2=\"4\" sf2=\"21\" sfa=\"181.043\" tag=\"082\"/>\n        <class ind1=\"1\" ind2=\"4\" sfa=\"BQ3262.E5\" tag=\"050\"/>\n      </classifications>\n    </edition>\n    <edition author=\"Mokṣākaragupta, active 10th century\" eholdings=\"0\" format=\"Book\" holdings=\"1\" itemtype=\"itemtype-book\" language=\"eng\" oclc=\"155762443\" title=\"An introduction to Buddhist philosophy : an annotated translation of the Tarkabhāṣā of Mokṣākaragupta : reprint with corrections in the author's hand\"/>\n    <edition author=\"Mokṣākaragupta, active 10th century\" eholdings=\"0\" format=\"Book\" holdings=\"1\" itemtype=\"itemtype-book\" language=\"eng\" oclc=\"255303594\" title=\"An introduction to buddhist philosophy : an annoated translation of the Tarkabhṣ̄ā of Mokṣākaragupta\"/>\n  </editions>\n  <recommendations>\n    <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=350x200&amp;chd=t:84.090904,15.909091&amp;chtt=All+Editions&amp;chdl=Classified (84.09%)|Unclassified (15.91%)</graph>\n    <fast>\n      <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=475x175&amp;chd=t:86.36364,86.36364&amp;chdl=Buddhist logic|Knowledge, Theory of (Buddhism)</graph>\n      <headings>\n        <heading heldby=\"38\" ident=\"840225\" src=\"fast\">Buddhist logic</heading>\n        <heading heldby=\"38\" ident=\"988205\" src=\"fast\">Knowledge, Theory of (Buddhism)</heading>\n      </headings>\n    </fast>\n    <ddc>\n      <mostPopular holdings=\"37\" nsfa=\"181.043\" sfa=\"181.043\"/>\n      <mostRecent holdings=\"37\" sfa=\"181.043\"/>\n      <latestEdition holdings=\"37\" sf2=\"21\" sfa=\"181.043\"/>\n      <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=350x200&amp;chd=t:84.090904,15.909091&amp;chtt=DDC&amp;chdl=181.043|Unclassified</graph>\n    </ddc>\n    <lcc>\n      <mostPopular holdings=\"37\" nsfa=\"BQ3262.E5\" sfa=\"BQ3262.E5\"/>\n      <mostRecent holdings=\"37\" sfa=\"BQ3262.E5\"/>\n      <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=350x200&amp;chd=t:84.090904,15.909091&amp;chtt=LCC&amp;chdl=BQ3262.E5|Unclassified</graph>\n    </lcc>\n  </recommendations>\n</classify>\n"]}
var oneResults2 = {"oclc":[],"isbn":["3763056386"],"issn":[],"possibleOclc":["40363389"],"title":"Das Weihnachtsmissale der Päpste : feierlicher Mittelpunkt der Christnacht im Petersdom /","author":"Catholic Church.","bnumber":14009453,"complete":false,"working":true,"workingStart":0,"foundSomething":true,"resultsLength":1,"results":["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <response code=\"2\"/>\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <work author=\"Roth, Adalbert\" editions=\"5\" eholdings=\"0\" format=\"Book\" holdings=\"46\" itemtype=\"itemtype-book\" owi=\"35815934\" title=\"Das Weihnachtsmissale der Päpste : feierlicher Mittelpunkt der Christnacht im Petersdom\">162300124</work>\n  <authors>\n    <author lc=\"n85206481\" viaf=\"22365464\">Roth, Adalbert</author>\n  </authors>\n  <orderBy>thold desc</orderBy>\n  <input type=\"isbn\">3763056386</input>\n  <start>0</start>\n  <maxRecs>25</maxRecs>\n  <editions>\n    <edition author=\"Roth, Adalbert\" eholdings=\"0\" format=\"Book\" holdings=\"28\" itemtype=\"itemtype-book\" language=\"ger\" oclc=\"40363389\" title=\"Das Weihnachtsmissale der Päpste : feierlicher Mittelpunkt der Christnacht im Petersdom\">\n      <classifications>\n        <class ind1=\"0\" ind2=\"0\" sfa=\"BX2015.9.C4\" tag=\"050\"/>\n      </classifications>\n    </edition>\n    <edition eholdings=\"0\" format=\"Book\" holdings=\"9\" itemtype=\"itemtype-book\" language=\"ger\" oclc=\"247643208\" title=\"Das Weihnachtsmissale der Päpste : feierlicher Mittelpunkt der Christnacht im Petersdom\">\n      <classifications>\n        <class ind1=\"1\" ind2=\"4\" sfa=\"BX2015.783.R85\" tag=\"050\"/>\n      </classifications>\n    </edition>\n    <edition eholdings=\"0\" format=\"Book\" holdings=\"6\" itemtype=\"itemtype-book\" language=\"ger\" oclc=\"162300124\" title=\"Das Weihnachtsmissale der Päpste : feierlicher Mittelpunkt der Christnacht im Petersdom\"/>\n    <edition author=\"Roth, Adalbert\" eholdings=\"0\" format=\"Book\" holdings=\"2\" itemtype=\"itemtype-book\" language=\"ger\" oclc=\"493411409\" title=\"Das Weihnachtsmissale der Päpste\">\n      <classifications>\n        <class edition=\"22\" ind1=\"0\" ind2=\"4\" sf2=\"22\" sfa=\"090\" tag=\"082\"/>\n      </classifications>\n    </edition>\n    <edition author=\"Roth, Adalbert\" eholdings=\"0\" format=\"Book\" holdings=\"1\" itemtype=\"itemtype-book\" language=\"ger\" oclc=\"749747325\" title=\"Das Weihnachtsmissale der Päpste : feierlicher Mittelpunkt der Christnacht im Petersdom\"/>\n  </editions>\n  <recommendations>\n    <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=350x200&amp;chd=t:84.78261,15.217391&amp;chtt=All+Editions&amp;chdl=Classified (84.78%)|Unclassified (15.22%)</graph>\n    <fast>\n      <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=475x175&amp;chd=t:80.434784,60.869564,60.869564,60.869564,60.869564,60.869564,60.869564,60.869564&amp;chdl=Missals|Liturgics|Manuscripts, Latin (Medieval and modern)|Italy|Vatican City|Alexander VI, Pope, 1431-1503|Catholic Church|Illumination of books and manuscripts, Italian</graph>\n      <headings>\n        <heading heldby=\"37\" ident=\"1023680\" src=\"fast\">Missals</heading>\n        <heading heldby=\"28\" ident=\"1000579\" src=\"fast\">Liturgics</heading>\n        <heading heldby=\"28\" ident=\"1008399\" src=\"fast\">Manuscripts, Latin (Medieval and modern)</heading>\n        <heading heldby=\"28\" ident=\"1204565\" src=\"fast\">Italy</heading>\n        <heading heldby=\"28\" ident=\"1208574\" src=\"fast\">Vatican City</heading>\n        <heading heldby=\"28\" ident=\"18548\" src=\"fast\">Alexander VI, Pope, 1431-1503</heading>\n        <heading heldby=\"28\" ident=\"531720\" src=\"fast\">Catholic Church</heading>\n        <heading heldby=\"28\" ident=\"967315\" src=\"fast\">Illumination of books and manuscripts, Italian</heading>\n      </headings>\n    </fast>\n    <ddc>\n      <mostPopular holdings=\"2\" nsfa=\"090\" sfa=\"090\"/>\n      <mostRecent holdings=\"2\" sfa=\"090\"/>\n      <latestEdition holdings=\"2\" sf2=\"22\" sfa=\"090\"/>\n      <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=350x200&amp;chd=t:4.347826,95.652176&amp;chtt=DDC&amp;chdl=090|Unclassified</graph>\n    </ddc>\n    <lcc>\n      <mostPopular holdings=\"28\" nsfa=\"BX2015.9.C4\" sfa=\"BX2015.9.C4\"/>\n      <mostRecent holdings=\"9\" sfa=\"BX2015.783.R85\"/>\n      <graph>http://chart.apis.google.com/chart?cht=p&amp;chs=350x200&amp;chd=t:60.869564,19.565218,19.565218&amp;chtt=LCC&amp;chdl=BX2015.9.C4|BX2015.783.R85|Unclassified</graph>\n    </lcc>\n  </recommendations>\n</classify>\n"]}

var noMatchWith2Results = {"oclc":[],"isbn":[],"issn":[],"possibleOclc":[],"title":"Divina commedia Inferno : Holkham ms. 514 /","author":"Dante Alighieri, 1265-1321.","bnumber":11505680,"complete":false,"working":true,"workingStart":0,"foundSomething":false,"resultsLength":2,"results":["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <input type=\"title/author\">Divina commedia Inferno : Holkham ms. 514 /|Dante Alighieri, 1265-1321.</input>\n  <response code=\"102\"/>\n</classify>\n","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <input type=\"title\">Divina commedia Inferno : Holkham ms. 514 /</input>\n  <response code=\"102\"/>\n</classify>\n"]}

var multiWorkResults = {"oclc":[],"isbn":["9688201472"],"issn":[],"possibleOclc":[],"title":"Las razones y las obras : gobierno de Miguel de la Madrid : crónica del sexenio, 1982-1988 /","author":"Beltrán, Ulises.","bnumber":11012532,"complete":false,"working":true,"workingStart":0,"foundSomething":false,"resultsLength":2,"results":["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <response code=\"4\"/>\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <workCount>3</workCount>\n  <start>0</start>\n  <maxRecs>25</maxRecs>\n  <orderBy>thold desc</orderBy>\n  <input type=\"isbn\">9688201472</input>\n  <works>\n    <work author=\"Mexico. President (1982- : Madrid Hurtado) | Lajous, Alejandra [Publishing director; Compiler] | Madrid Hurtado, Miguel de la\" editions=\"12\" format=\"Book\" holdings=\"97\" hyr=\"1988\" itemtype=\"itemtype-book\" lyr=\"1984\" owi=\"964291390\" title=\"Las Razones y las obras : gobierno de Miguel de la Madrid : crónica del sexenio, 1982-1988\" wi=\"123169195\"/>\n    <work author=\"Mexico. Secretaría de la Presidencia\" editions=\"5\" format=\"Book\" holdings=\"39\" hyr=\"1997\" itemtype=\"itemtype-book\" lyr=\"1997\" owi=\"42565388\" title=\"Las razones y las obras gobierno de Miguel de la Madrid.\" wi=\"39690638\"/>\n    <work author=\"Mexico. President (1982- : Madrid Hurtado)\" editions=\"3\" format=\"Book\" holdings=\"15\" hyr=\"1985\" itemtype=\"itemtype-book\" lyr=\"1984\" owi=\"552113070\" title=\"Las razones y las obras : gobierno de Miguel de la Madrid : crónica del sexenio 1982-1988, primer año\" wi=\"11758795\"/>\n  </works>\n</classify>\n","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <input type=\"title\">Las razones y las obras : gobierno de Miguel de la Madrid : crónica del sexenio, 1982-1988 /</input>\n  <response code=\"102\"/>\n</classify>\n"]}

var issnMultiworkResults = {"oclc":[],"isbn":[],"issn":["0740-0446"],"possibleOclc":[],"title":"American university studies. Series VII,","author":false,"bnumber":11077668,"complete":false,"working":true,"workingStart":0,"foundSomething":false,"resultsLength":2,"results":["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <response code=\"4\"/>\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <workCount>11</workCount>\n  <start>0</start>\n  <maxRecs>25</maxRecs>\n  <orderBy>thold desc</orderBy>\n  <input type=\"issn\">0740-0446</input>\n  <works>\n    <work author=\"Park, Sangyil\" editions=\"6\" format=\"eBook\" holdings=\"307\" hyr=\"2009\" itemtype=\"itemtype-book-digital\" lyr=\"2008\" owi=\"142470937\" title=\"Korean preaching, Han, and narrative\" wi=\"244661175\"/>\n    <work author=\"McLane-Iles, Betty, 1951-\" editions=\"5\" format=\"Book\" holdings=\"188\" hyr=\"1987\" itemtype=\"itemtype-book\" lyr=\"1987\" owi=\"7653892\" title=\"Uprooting and integration in the writings of Simone Weil\" wi=\"14135018\"/>\n    <work author=\"Piar, Carlos R., 1956-\" editions=\"6\" format=\"Book\" holdings=\"182\" hyr=\"1994\" itemtype=\"itemtype-book\" lyr=\"1993\" owi=\"898194396\" title=\"Jesus and liberation : a critical analysis of the christology of Latin American liberation theology\" wi=\"246685879\"/>\n    <work author=\"Turner, Paul, 1953-\" editions=\"7\" format=\"Book\" holdings=\"151\" hyr=\"1988\" itemtype=\"itemtype-book\" lyr=\"1987\" owi=\"20677170\" title=\"The meaning and practice of confirmation : perspectives from a sixteenth-century controversy\" wi=\"15697764\"/>\n    <work author=\"Langston, Scott M.\" editions=\"5\" format=\"Book\" holdings=\"145\" hyr=\"1998\" itemtype=\"itemtype-book\" lyr=\"1998\" owi=\"366412377\" title=\"Cultic sites in the tribe of Benjamin : Benjaminite prominence in the religion of Israel\" wi=\"313060538\"/>\n    <work author=\"Bridges, James T., 1956-\" editions=\"7\" format=\"Book\" holdings=\"140\" hyr=\"1988\" itemtype=\"itemtype-book\" lyr=\"1986\" owi=\"9761666\" title=\"Human destiny and resurrection in Pannenberg and Rahner\" wi=\"15550483\"/>\n    <work author=\"Douglass, Scot, 1961-\" editions=\"8\" format=\"Book\" holdings=\"117\" hyr=\"2007\" itemtype=\"itemtype-book\" lyr=\"2005\" owi=\"367218837\" title=\"Theology of the gap : Cappadocian language theory and the Trinitarian controversy\" wi=\"159935117\"/>\n    <work author=\"Thomas More, Sister, C.S.J., 1932-\" editions=\"5\" format=\"Book\" holdings=\"110\" hyr=\"1996\" itemtype=\"itemtype-book\" lyr=\"1988\" owi=\"13264896\" title=\"&quot;His witness is true&quot; : John and his interpreters\" wi=\"123322577\"/>\n    <work editions=\"3\" format=\"Book\" holdings=\"85\" hyr=\"1993\" itemtype=\"itemtype-book\" lyr=\"1993\" owi=\"897748455\" title=\"Christian freedom : essays by the faculty of the Saint Meinrad School of Theology\" wi=\"231499488\"/>\n    <work editions=\"5\" format=\"Periodical\" holdings=\"24\" hyr=\"1984\" itemtype=\"itemtype-jrnl\" lyr=\"1984\" owi=\"54591245\" title=\"American university studies.\" wi=\"477137359\"/>\n    <work editions=\"3\" format=\"Periodical\" holdings=\"21\" hyr=\"1988\" itemtype=\"itemtype-jrnl\" lyr=\"1983\" owi=\"54590667\" title=\"American university studies\" wi=\"477137363\"/>\n  </works>\n</classify>\n","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <input type=\"title\">American university studies. Series VII,</input>\n  <response code=\"102\"/>\n</classify>\n"]}

var issnMultiworkResults2 = {"oclc":[],"isbn":[],"issn":["0399-4198"],"possibleOclc":[],"title":"Collection de la Direction des études et recherches d'Électricité de France. ","author":false,"bnumber":11152055,"complete":false,"working":true,"workingStart":0,"foundSomething":false,"resultsLength":2,"results":["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <response code=\"4\"/>\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <workCount>18</workCount>\n  <start>0</start>\n  <maxRecs>25</maxRecs>\n  <orderBy>thold desc</orderBy>\n  <input type=\"issn\">0399-4198</input>\n  <works>\n    <work author=\"Réméniéras, Gaston\" editions=\"44\" format=\"Book\" holdings=\"268\" hyr=\"1986\" itemtype=\"itemtype-book\" lyr=\"1960\" owi=\"344475610\" title=\"L'hydrologie de l'ingénieur.\" wi=\"15205650\"/>\n    <work author=\"Barret, Philippe\" editions=\"11\" format=\"Book\" holdings=\"92\" hyr=\"1987\" itemtype=\"itemtype-book\" lyr=\"1982\" owi=\"21678220\" title=\"Régimes transitoires des machines tournantes électriques\" wi=\"19339394\"/>\n    <work author=\"Chouard, Philippe\" editions=\"12\" format=\"Book\" holdings=\"79\" hyr=\"1979\" itemtype=\"itemtype-book\" lyr=\"1977\" owi=\"890793671\" title=\"Bilan thermique d'une maison solaire : methode de calcul rapide.\" wi=\"256279827\"/>\n    <work author=\"Gibert, René - Jean\" editions=\"4\" format=\"Book\" holdings=\"77\" hyr=\"1988\" itemtype=\"itemtype-book\" lyr=\"1988\" owi=\"298468491\" title=\"Vibrations des structures : interactions avec les fluides, sources de̕xcitation aléatoires\" wi=\"20862603\"/>\n    <work author=\"Raynal, M. (Michel)\" editions=\"4\" format=\"Book\" holdings=\"76\" hyr=\"1991\" itemtype=\"itemtype-book\" lyr=\"1991\" owi=\"24821988\" title=\"La Communication et le temps dans les réseaux et les systèmes répartis\" wi=\"23852010\"/>\n    <work author=\"Bédard, René\" editions=\"7\" format=\"Book\" holdings=\"69\" hyr=\"1979\" itemtype=\"itemtype-book\" lyr=\"1979\" owi=\"18574425\" title=\"Energetique et turbomachines.\" wi=\"256347111\"/>\n    <work author=\"Ecole d'été d'analyse numérique (1986 : Breau-Sans-Nappe, France)\" editions=\"4\" format=\"Book\" holdings=\"60\" hyr=\"1988\" itemtype=\"itemtype-book\" lyr=\"1988\" owi=\"22347956\" title=\"Aspects théoriques et numériques de la dynamique des structures\" wi=\"20424262\"/>\n    <work author=\"Morel, Jacques\" editions=\"6\" format=\"Book\" holdings=\"56\" hyr=\"1992\" itemtype=\"itemtype-book\" lyr=\"1992\" owi=\"29699080\" title=\"Vibrations des machines et diagnostic de leur état mécanique\" wi=\"27080061\"/>\n    <work author=\"Fournie, Robert\" editions=\"6\" format=\"Book\" holdings=\"53\" hyr=\"1986\" itemtype=\"itemtype-book\" lyr=\"1986\" owi=\"1150734776\" title=\"Les Isolants en électrotechnique : concepts et théories\" wi=\"22757928\"/>\n    <work author=\"Cormary, Y.\" editions=\"5\" format=\"Book\" holdings=\"47\" hyr=\"1985\" itemtype=\"itemtype-book\" lyr=\"1985\" owi=\"365050421\" title=\"La thermique des serres\" wi=\"219986581\"/>\n    <work author=\"Frêne, Jean\" editions=\"5\" format=\"Book\" holdings=\"47\" hyr=\"1990\" itemtype=\"itemtype-book\" lyr=\"1990\" owi=\"24675306\" title=\"Lubrification hydrodynamique : paliers et butées\" wi=\"22698252\"/>\n    <work author=\"Fournié, Robert\" editions=\"5\" format=\"Book\" holdings=\"46\" hyr=\"1990\" itemtype=\"itemtype-book\" lyr=\"1990\" owi=\"23989935\" title=\"Les isolants en électrotechnique : essais, mécanismes de dégradation, applications industrielles\" wi=\"22855368\"/>\n    <work author=\"Ecole d'été d'analyse numérique (1983 : Rocquencourt, Yvelines)\" editions=\"6\" format=\"Book\" holdings=\"45\" hyr=\"1985\" itemtype=\"itemtype-book\" lyr=\"1985\" owi=\"155748623\" title=\"Modélisation des phénomeènes de combustion\" wi=\"246866993\"/>\n    <work author=\"Böhle, Fritz\" editions=\"3\" format=\"Book\" holdings=\"30\" hyr=\"1998\" itemtype=\"itemtype-book\" lyr=\"1998\" owi=\"477645512\" title=\"De la manivelle à l'écran : l'évolution de l'expérience sensible des ouvriers lors des changements technologiques\" wi=\"301605256\"/>\n    <work author=\"Persoz, Henri\" editions=\"5\" format=\"Book\" holdings=\"30\" hyr=\"1984\" itemtype=\"itemtype-book\" lyr=\"1984\" owi=\"365120372\" title=\"La planification des reseaux electriques\" wi=\"20090135\"/>\n    <work author=\"École d'été de mécanique des fluides. Journées (1975-10 : Royaumont)\" editions=\"7\" format=\"Book\" holdings=\"28\" hyr=\"1977\" itemtype=\"itemtype-book\" lyr=\"1977\" owi=\"13248796\" title=\"Les Sources froides des centrales électriques\" wi=\"3841676\"/>\n    <work author=\"Launder, B. E. (Brian Edward)\" editions=\"5\" format=\"Book\" holdings=\"11\" hyr=\"1984\" itemtype=\"itemtype-book\" lyr=\"1984\" owi=\"149657652\" title=\"Second-moment closure :  methodology and practice\" wi=\"256090457\"/>\n    <work author=\"Barret, J.-P. (Jean-Paul)\" editions=\"1\" format=\"Periodical\" holdings=\"1\" hyr=\"????\" itemtype=\"itemtype-jrnl\" lyr=\"????\" owi=\"1156670533\" title=\"Simulation des réseaux électriques\" wi=\"757670506\"/>\n  </works>\n</classify>\n","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <input type=\"title\">Collection de la Direction des études et recherches d'Électricité de France.</input>\n  <response code=\"102\"/>\n</classify>\n"]}

var issnMultiworkResults3 = {"oclc":[],"isbn":[],"issn":["0244-9277"],"possibleOclc":[],"title":"Annales de l'Institut de langue et littérature d'oc. ","author":false,"bnumber":11152103,"complete":false,"working":true,"workingStart":0,"foundSomething":false,"resultsLength":2,"results":["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <response code=\"4\"/>\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <workCount>6</workCount>\n  <start>0</start>\n  <maxRecs>25</maxRecs>\n  <orderBy>thold desc</orderBy>\n  <input type=\"issn\">0244-9277</input>\n  <works>\n    <work author=\"Université libre de Bruxelles. Institut de sociologie\" editions=\"23\" format=\"ePeriodical\" holdings=\"635\" hyr=\"1989\" itemtype=\"itemtype-jrnl-digital\" lyr=\"1951\" owi=\"54060363\" title=\"Civilisations\" wi=\"1554814\"/>\n    <work author=\"Conférence internationale sur les sagas (5 : Toulon : 1982) | Boyer, Régis [Editor; Other]\" editions=\"15\" format=\"Book\" holdings=\"85\" hyr=\"1985\" itemtype=\"itemtype-book\" lyr=\"1982\" owi=\"431699159\" title=\"Les sagas de chevaliers = Riddarasögur : actes de la Ve Conférence internationale sur les sagas : Toulon, juillet 1982\" wi=\"22597917\"/>\n    <work editions=\"5\" format=\"Book\" holdings=\"61\" hyr=\"1986\" itemtype=\"itemtype-book\" lyr=\"1985\" owi=\"890383099\" title=\"Les Aspects littéraires du biculturalisme aux Etats-Unis : actes du colloque de 1985\" wi=\"16839438\"/>\n    <work author=\"Université de Paris IV: Paris-Sorbonne. Institut de recherches sur les civilisations de l'Occident moderne. Colloque$ (19e? : 1995)\" editions=\"3\" format=\"Book\" holdings=\"33\" hyr=\"1996\" itemtype=\"itemtype-book\" lyr=\"1996\" owi=\"1162415734\" title=\"Littérature/histoire : regards croisés : XVIIIe colloque de l'Institut de recherches sur les civilisations de l'Occident moderne, 1995, en Sorbonne\" wi=\"301567134\"/>\n    <work author=\"Université de Paris IV: Paris-Sorbonne Institut de recherches sur les civilisations de l'Occident moderne Colloque (17e 1990)\" editions=\"4\" format=\"Book\" holdings=\"31\" hyr=\"1991\" itemtype=\"itemtype-book\" lyr=\"1990\" owi=\"478781231\" title=\"Le concept de révolution\" wi=\"299448286\"/>\n    <work author=\"Université de Paris IV: Paris-Sorbonne. Centre de recherche de littérature et civilisation nord-américaines\" editions=\"2\" format=\"Book\" holdings=\"22\" hyr=\"1981\" itemtype=\"itemtype-book\" lyr=\"1981\" owi=\"3367757\" title=\"Fragments du puzzle américain : colloque du Centre de recherche de littérature et civilisation nord-américaines, 22 et 23 février 1980.\" wi=\"10021351\"/>\n  </works>\n</classify>\n","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<classify xmlns=\"http://classify.oclc.org\">\n  <!--Classify is a product of OCLC Online Computer Library Center: http://classify.oclc.org-->\n  <input type=\"title\">Annales de l'Institut de langue et littérature d'oc.</input>\n  <response code=\"102\"/>\n</classify>\n"]}

describe('Classify Decode', function () {





	
	it('processXML -  should process an OCLC Classify repsonse',function(done){


		classifyDecode.processXML(oneResults.results[0],function(err,result){

			result.response.should.equal(2)
			result.oclcNumber.should.equal(155762443)
			result.editions.should.equal(5)
			result.eholdings.should.equal(0)
			result.format.should.equal('Book')
			result.holdings.should.equal(44)
			result.itemtype.should.equal('itemtype-book')
			result.owi.should.equal(2452446008)

			result.authors[0].lc.should.equal('n84206144')
			result.authors[0].viaf.should.equal(51988959)

			result.inputType.should.equal('oclc')
			result.inputValue.should.equal('40730986')

			result.fast[0].id.should.equal(840225)

			result.ddc.should.equal('181.043')
			result.lcc.should.equal('BQ3262.E5')

			done()


		})

	})

	it('processXML2 -  should process an OCLC Classify repsonse',function(done){


		classifyDecode.processXML(oneResults2.results[0],function(err,result){

			result.response.should.equal(2)
			result.oclcNumber.should.equal(162300124)
			result.editions.should.equal(5)
			result.eholdings.should.equal(0)
			result.format.should.equal('Book')
			result.holdings.should.equal(46)
			result.itemtype.should.equal('itemtype-book')
			result.owi.should.equal(35815934)

			result.authors[0].lc.should.equal('n85206481')
			result.authors[0].viaf.should.equal(22365464)

			result.inputType.should.equal('isbn')
			result.inputValue.should.equal('3763056386')

			result.fast[0].id.should.equal(1023680)

			result.ddc.should.equal('090')
			result.lcc.should.equal('BX2015.9.C4')

			done()


		})

	})
	

	it('processXML3 - multiWorkResults should process an OCLC multiwork Classify repsonse',function(done){


		classifyDecode.processXML(multiWorkResults.results[0],function(err,result){


			result.multiWork.length.should.be.above(0)
			done()


		})

	})


	it('returnData - issnMultiworkResults process the records and depending on values return the correct OCLC info to use or false ',function(done){


		classifyDecode.returnData(issnMultiworkResults,function(results){


			results.addOclcNumberOnly.should.equal(true)

			done()

		})

	})





	it('returnData - issnMultiworkResults3 no title matches process the records and depending on values return the correct OCLC info to use or false ',function(done){


		classifyDecode.returnData(issnMultiworkResults3,function(results){


			results.failure.should.equal(true)

			done()

		})

	})



})
