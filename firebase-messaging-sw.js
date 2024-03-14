importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');


const detti = [
    {
        "detto": "Cas r sunator n,nz son",
        "traduzione": "Casa di suonatori non si suona.",
        "significato": "",
        "id": 0
    },
    {
        "detto": "Megghj nu vind r tott ca l carvott",
        "traduzione": "Meglio una corrente che gli spifferi",
        "significato": "",
        "id": 1
    },
    {
        "detto": "Vai acchiann erva vind",
        "traduzione": "Và cercando l'erba vento (parietaria)",
        "significato": "chi cerca donne.",
        "id": 2
    },
    {
        "detto": "Accas u fegghj quonn vu e la fegghj quonn pui",
        "traduzione": "Sposa il figlio quando vuoi e la figlia quando puoi",
        "significato": "",
        "id": 3
    },
    {
        "detto": "A ogn ucidd u neir soi iè bell",
        "traduzione": "Ad ogni uccello il suo nido è bello",
        "significato": "",
        "id": 4
    },
    {
        "detto": "S'è fatt a stosc'n",
        "traduzione": "S'è fatto come una tartaruga",
        "significato": "Riferito a chi è così ubriaco da non riuscire ad alzarsi (come le tartarughe cadute di spalle)",
        "id": 5
    },
    {
        "detto": "C ten a cap r cer n scess allu sol",
        "traduzione": "Chi ha la testa di cera non deve andare al sole",
        "significato": "",
        "id": 6
    },
    {
        "detto": "Mal n,nfà e paeur n,navè",
        "traduzione": "Chi non fa male non ha paura",
        "significato": "",
        "id": 7
    },
    {
        "detto": "s nu cacacart",
        "traduzione": "Essere uno che usa la carta igienica",
        "significato": "persone che si possono permettere l'uso della carta igienica (inquadrata sempre nel contesto di una cinquantina di anni fa).",
        "id": 8
    },
    {
        "detto": "U cuon ca s'è ars s'appaeur r l'acqua fredd",
        "traduzione": "Il cane che si è scottato ha paura dell'acqua fredda",
        "significato": "",
        "id": 9
    },
    {
        "detto": "Preta moss n'n fac u lepp",
        "traduzione": "La pietra smossa non fa il muschio",
        "significato": "",
        "id": 10
    },
    {
        "detto": "Alla porta chieus u riovl vot l spadd",
        "traduzione": "Alla porta chiusa il diavolo volge le spalle",
        "significato": "",
        "id": 11
    },
    {
        "detto": "U mel s fac allcchà pcchè iè rouc",
        "traduzione": "Il miele si fa leccare perché è dolce",
        "significato": "",
        "id": 12
    },
    {
        "detto": "Ogn cas ten nu remc rott",
        "traduzione": "Ogni casa ha una tegola rotta",
        "significato": "",
        "id": 13
    },
    {
        "detto": "L cumbitt mocc all purc",
        "traduzione": "I confetti in bocca ai maiali",
        "significato": "Dare a chi non apprezza.",
        "id": 14
    },
    {
        "detto": "Preim ca taggia ave' ros e fior taggia tne', ropp ca taggj aveut ngul a mamt ca t'ha crsceut",
        "traduzione": "Prima che ti devo avere ti devo mantenere a rose e fiori, dopo che ti ho avuta in culo a tua madre che ti ha cresciuta.",
        "significato": "",
        "id": 15
    },
    {
        "detto": "Pttor e pttasand vann chiò dret ka nnand",
        "traduzione": "Pittori e pittasanti vanno più indietro che avanti.",
        "significato": "",
        "id": 16
    },
    {
        "detto": "S r salviett",
        "traduzione": "Essere di salvietta",
        "significato": "andare a pranzi sontuosi o ufficiali.",
        "id": 17
    },
    {
        "detto": "t mangh,n diciannov sold ch fà na lir",
        "traduzione": "Mancare diciannove soldi per fare una lira",
        "significato": "essere povero.",
        "id": 18
    },
    {
        "detto": "Quonn aut nn hai c mgghiert t colc",
        "traduzione": "Quando non hai altro vai a dormire (giaci) con tua moglie",
        "significato": "",
        "id": 19
    },
    {
        "detto": "Tagg turt l'acqua all mleun?",
        "traduzione": "Ti ho deviato l'acqua ai meloni?",
        "significato": "Quando uno non ti saluta più. Deviare l'acqua alle angurie era uno sgarro.",
        "id": 20
    },
    {
        "detto": "U vogghij vre', u vogghij assaggia', quonn ie' a Pasqu t vogghij spuso'",
        "traduzione": "Lo voglio vedere, lo voglio assaggiare, quando è Pasqua ti voglio sposare.",
        "significato": "Ovvio il riferimento ;-)",
        "id": 21
    },
    {
        "detto": "Cum vaia vaj e cum vena ven",
        "traduzione": "Come và và e come viene viene",
        "significato": "",
        "id": 22
    },
    {
        "detto": "Stai cum na mlogn",
        "traduzione": "Sei come un tasso",
        "significato": "",
        "id": 23
    },
    {
        "detto": "C stai assaj ndà cas r laut rvend frstir ndà casa soi",
        "traduzione": "Chi sta troppo nella casa altrui diventa forestiero nella propria",
        "significato": "",
        "id": 24
    },
    {
        "detto": "Tin l'ucchij quond u spurt e nn vir u cambanar<?>",
        "traduzione": "Hai gli occhi quanto <?> e non vedi il campanile",
        "significato": "",
        "id": 25
    },
    {
        "detto": "Adda scè a bacià u per a g,s,crest",
        "traduzione": "Deve baciare il piede a Gesù. (venerdì santo si fa il giro delle chiese)",
        "significato": "",
        "id": 26
    },
    {
        "detto": "Scinr e npeut, quond fai sò tutt prdeut",
        "traduzione": "Generi e nipoti, quello che fai per loro è tutto sprecato",
        "significato": "",
        "id": 27
    },
    {
        "detto": "U pccot cunfssot iè minz p,rdunot",
        "traduzione": "Il peccato confessato è perdonato a metà",
        "significato": "",
        "id": 28
    },
    {
        "detto": "U ciocc bllamor a c ver s nnammor",
        "traduzione": "L'asino di Bellamore chi vede si innamora",
        "significato": "",
        "id": 29
    },
    {
        "detto": "all fess risponn a orarij",
        "traduzione": "Ai 'fessi' rispondo ad orario",
        "significato": "far cadere la conversazione con una persona manifestamente sgradita.",
        "id": 30
    },
    {
        "detto": "U ciocc r cind patreun",
        "traduzione": "l'asino di cento padroni",
        "significato": "Si potrebbe interpretare come chi è voltafaccia, opportunista, ecc.",
        "id": 31
    },
    {
        "detto": "Attind attind angapp u cul sforr a vind",
        "traduzione": "Facendo molta attenzione affinchè il culo non perda aria.",
        "significato": "",
        "id": 32
    },
    {
        "detto": "Mang ca t mang a robba toj t mang",
        "traduzione": "Mangia che mangi, la roba tua mangi.",
        "significato": "",
        "id": 33
    },
    {
        "detto": "Eccè è sc,cattat u leup allu vosch",
        "traduzione": "Eccè è morto il lupo al bosco.",
        "significato": "Cosa eccezionale.",
        "id": 34
    },
    {
        "detto": "cas r'affett, pan accattat",
        "traduzione": "Casa in fitto, pane acquistato",
        "significato": "l'economia di una casa in fitto permette di mangiare; oppure meglio mangiare che avere una casa propria (quando ci sono pochi soldi).",
        "id": 35
    },
    {
        "detto": "Quala ballat tala sunat",
        "traduzione": "Quale ballata, tale suonata",
        "significato": "",
        "id": 36
    },
    {
        "detto": "A mazz a mazz sò tutt na razz",
        "traduzione": "A mazzi a mazzi sono tutti uguali.",
        "significato": "",
        "id": 37
    },
    {
        "detto": "N riesc a mmett nzemml quott ov ndà nu piott",
        "traduzione": "Non riuscire a mettere insieme quattro uova in un piatto",
        "significato": "quando uno è manifestamente incapace.",
        "id": 38
    },
    {
        "detto": "Eccè, hai pers u pan allu forn?",
        "traduzione": "Cosa è successo? Hai perso il pane al forno?",
        "significato": "Quando uno è triste.",
        "id": 39
    },
    {
        "detto": "C,caccià a zokkl ardett u pagghiar",
        "traduzione": "Per cacciare la zoccola bruciò il pagliaio",
        "significato": "Quando si usano metodi eccessivi.",
        "id": 40
    },
    {
        "detto": "Nda vocca chieus n trasn l mosch",
        "traduzione": "Nella bocca chiusa non entrano le mosche",
        "significato": "",
        "id": 41
    },
    {
        "detto": "U riovl quonn t'accarezz vol l'anm",
        "traduzione": "Il diavolo quando ti fa una carezza vuole l'anima",
        "significato": "",
        "id": 42
    },
    {
        "detto": "a femn iè cum a cauror: fac a stezz",
        "traduzione": "La donna è come il paiolo: gocciola",
        "significato": "",
        "id": 43
    },
    {
        "detto": "Pass ca cap ru leup",
        "traduzione": "Passare con la testa del lupo",
        "significato": "Anticamente coloro che uccidevano i lupi (ritenuti nocivi) passavano da i vari contadini a riscuotere la taglia.",
        "id": 44
    },
    {
        "detto": "Batt u firr quonn iè caur",
        "traduzione": "Batti il ferro quando è caldo",
        "significato": "",
        "id": 45
    },
    {
        "detto": "Amm allitt, vrazz mbitt",
        "traduzione": "Gambe sul letto, braccia sul petto",
        "significato": "L'arte del riposo sul letto.",
        "id": 46
    },
    {
        "detto": "Passat u sond, passat a fest",
        "traduzione": "Passato il santo, passata la festa",
        "significato": "",
        "id": 47
    },
    {
        "detto": "Va ch chidd meggh r te e fall l spes",
        "traduzione": "Vai con quelli migliori di te e fagli le spese",
        "significato": "",
        "id": 48
    },
    {
        "detto": "Bllez e paccej s fann cunbagnej",
        "traduzione": "Bellezza e pazzia si fanno compagnia",
        "significato": "",
        "id": 49
    },
    {
        "detto": "Sajett tadda mnuzzò",
        "traduzione": "La saetta ti deve colpire",
        "significato": "(E' una sentenza, nel senso dialettale)",
        "id": 50
    },
    {
        "detto": "Quonn a bborz a bborz e quonn a lleun a lleun",
        "traduzione": "Quando a borse a borse e quando a legna a legna",
        "significato": "Quando uno è impegnato a fare una cosa non bada alle altre e rischia di prenderlo nel .......",
        "id": 51
    },
    {
        "detto": "Na stezz r fel fac amar u mel",
        "traduzione": "Una goccia di fiele rende amaro il miele",
        "significato": "",
        "id": 52,
        "related": [
            195
        ]
    },
    {
        "detto": "Spost cauror ca s no m teng",
        "traduzione": "Spostati paiolo altrimenti mi tingo",
        "significato": "",
        "id": 53
    },
    {
        "detto": "Sold sparagnat doi vot uaragnat",
        "traduzione": "Soldi risparmiati due volte guadagnati",
        "significato": "",
        "id": 54
    },
    {
        "detto": "C zapp veiv aq, c pot veiv mir",
        "traduzione": "Chi zappa beve acqua, chi pota beve vino",
        "significato": "deve essere inquadrato nell'ottica degli antichi contadini. Ribadisce la differenza di classe tra il potatore (che lavora di fino) ed il misero zappatore.",
        "id": 55
    },
    {
        "detto": "Ropp arrubot mttett l firr alla fnestr",
        "traduzione": "Dopo il furto mise i ferri alla finestra",
        "significato": "Prendere tardi dei provvedimenti.",
        "id": 56
    },
    {
        "detto": "Acqua currend n port vlen",
        "traduzione": "Acqua corrente non porta veleno",
        "significato": "",
        "id": 57
    },
    {
        "detto": "C scupptresc all'arij ngap torn",
        "traduzione": "Chi spunta in aria gli torna in testa",
        "significato": "",
        "id": 58
    },
    {
        "detto": "Lev a castagn ru fuch ca amm ra att",
        "traduzione": "Toglie le castagne dal fuoco con la zampa del gatto",
        "significato": "",
        "id": 59
    },
    {
        "detto": "Scè a bacià u cueul allu partaall",
        "traduzione": "Baciare il culo all'arancia.",
        "significato": "",
        "id": 60
    },
    {
        "detto": "Iè megghj a scè ndu paraveis strazzat ca ndù mbirn r,camat",
        "traduzione": "E' meglio andare nel paradiso strappato che nell'inferno ricamato",
        "significato": "",
        "id": 61
    },
    {
        "detto": "Cioccia vecch, pddetra par",
        "traduzione": "Asina vecchia, sembra una puledra",
        "significato": "",
        "id": 62
    },
    {
        "detto": "S ndà casa mej n vness u cul mej n vress",
        "traduzione": "Se non venisse in casa mia non vedrebbe il mio culo",
        "significato": "Le serpi che vengono in casa e spifferano i fatti propri.",
        "id": 63
    },
    {
        "detto": "Per tonn, per spaccat, stann bbun quonn sò attaccat",
        "traduzione": "Piede tondo, piede spaccato stanno bene se legati",
        "significato": "Proverbio di origine pastorale. Il piede tondo sono gli equini, i piedi spaccati sono bovini, ovini e caprini.",
        "id": 64
    },
    {
        "detto": "Cap rott e carc,rat",
        "traduzione": "Testa rotta e carcerato",
        "significato": "Perdere capra e cavoli.",
        "id": 65
    },
    {
        "detto": "S ggeu addà a sseis allu pesc",
        "traduzione": "Andare ad aspettare (comprare) il pesce al porto",
        "significato": "quando uno si alza presto.",
        "id": 66
    },
    {
        "detto": "C soffr c'amor n send dlor",
        "traduzione": "Chi soffre per amore non prova dolore",
        "significato": "",
        "id": 67
    },
    {
        "detto": "L vuoi r Tolv ca s'appzzcai Sand Chierc",
        "traduzione": "I guai di Tolve che s'incendiò San Chirico",
        "significato": "",
        "id": 68
    },
    {
        "detto": "Vecchia addein ngrass a cucein",
        "traduzione": "Vecchia gallina ingrassa la cucina.",
        "significato": "",
        "id": 69
    },
    {
        "detto": "Na vot all'ann pass u cuos a tavl",
        "traduzione": "Una volta l'anno c'è il formaggio a tavola",
        "significato": "",
        "id": 70
    },
    {
        "detto": "Vegn ndà vegn, cas assul",
        "traduzione": "Vigne in comunità, casa isolata",
        "significato": "Affari in comune, abitazione per proprio conto.",
        "id": 71
    },
    {
        "detto": "C vol u mol r l'aut codd soi iè allu cust",
        "traduzione": "Chi vuole il male degli altri, il suo è vicino",
        "significato": "",
        "id": 72
    },
    {
        "detto": "Porta chieus ves,ta fatt",
        "traduzione": "Porta chiusa visita fatta",
        "significato": "Quando uno trova la porta chiusa è come se avesse fatta la visita.",
        "id": 73
    },
    {
        "detto": "Privt purc e can, semb c'a mazza mman",
        "traduzione": "Preti, porci e cani sempre con il bastone tra le mani",
        "significato": "",
        "id": 74
    },
    {
        "detto": "Tutt quonn n,mbonn avè a vegn ndà chiazz",
        "traduzione": "Non tutti possono avere la vigna in piazza",
        "significato": "Nessuno può avere il lavoro nel paese, qualcuno deve pure emigrare.",
        "id": 75
    },
    {
        "detto": "U mol ven accavadd e s n vai all'appir",
        "traduzione": "Il male viene a cavallo e va via a piedi",
        "significato": "",
        "id": 76
    },
    {
        "detto": "L'art r Brangalass: mang, veiv e stai alla spass",
        "traduzione": "l'arte di Brancalasso: mangiare, dormire e non fare niente.",
        "significato": "",
        "id": 77
    },
    {
        "detto": "Min a pret e asconn a man",
        "traduzione": "Butta la pietra e nascondi il braccio",
        "significato": "",
        "id": 78
    },
    {
        "detto": "Eccè vin ru teit",
        "traduzione": "Ecchè vieni da Tito",
        "significato": "Per dire quando uno viene da lontano.",
        "id": 79
    },
    {
        "detto": "Marz men u fior e masc s pegghj l'onor",
        "traduzione": "Marzo fa il fiore e maggio si prende il frutto.",
        "significato": "",
        "id": 80
    },
    {
        "detto": "A ppitt fac rspitt",
        "traduzione": "La salita fa dispetto.",
        "significato": "",
        "id": 81
    },
    {
        "detto": "S ggeut a vvolp",
        "traduzione": "Andare a volpi",
        "significato": "per la caccia alla volpe si andava all'alba per cui si dice così ad uno che è assonnato.",
        "id": 82
    },
    {
        "detto": "Stai kum na cochl",
        "traduzione": "Si dice di una ragazza quando è bella \"tonda\".",
        "significato": "",
        "id": 83
    },
    {
        "detto": "Quonn a volp pr,d,chesc attind attind",
        "traduzione": "Quando la volpe predica prestate attenzione",
        "significato": "",
        "id": 84
    },
    {
        "detto": "Ess parapatt e pac",
        "traduzione": "Quando si sistema una cosa.",
        "significato": "",
        "id": 85
    },
    {
        "detto": "Sa fatej era bon a facevn l can",
        "traduzione": "Se il lavoro era una cosa buona lavoravano i cani.",
        "significato": "",
        "id": 86
    },
    {
        "detto": "U sciorg chiò s mov e chiò s'azzecch",
        "traduzione": "Il sorcio più si muove e più si incolla",
        "significato": "Riferito alla usanza di farli incollare sui cartoni per catturarli",
        "id": 87
    },
    {
        "detto": "C ten cuscenz n tten vr,gogn",
        "traduzione": "Chi ha coscienza non ha vergogna",
        "significato": "",
        "id": 88
    },
    {
        "detto": "Chidd r for s'a vern lor",
        "traduzione": "Quelli di fuori fanno da se",
        "significato": "",
        "id": 89
    },
    {
        "detto": "Quonn crest raj a farein u riovl lev a codd",
        "traduzione": "Quando Dio da la farina il diavolo toglie il sacco",
        "significato": "",
        "id": 90
    },
    {
        "detto": "Cundrott fatt ndà cas pegghjl e vasl",
        "traduzione": "Contratto fatto in casa prendilo e bacialo.",
        "significato": "",
        "id": 91
    },
    {
        "detto": "Appezzch nu c,rog,n a g,s,crest e naut allu riovl",
        "traduzione": "Accendi un cero a Gesù ed uno al diavolo",
        "significato": "",
        "id": 92
    },
    {
        "detto": "Crap, crapitt e zemmr sò tutt na razz",
        "traduzione": "Capre, capretti e caproni sono tutti una razza",
        "significato": "Tutta l'erba un fascio.",
        "id": 93
    },
    {
        "detto": "Quonn a pecur fac bee perd u vccon",
        "traduzione": "quando la pecore bela perde il boccone",
        "significato": "",
        "id": 94
    },
    {
        "detto": "Vnneut, frneut",
        "traduzione": "Venduto, finito.",
        "significato": "",
        "id": 95
    },
    {
        "detto": "C'adda fa u tradimend? O n'amic o nu parend",
        "traduzione": "Chi può tradire? O un amico o un parente",
        "significato": "",
        "id": 96
    },
    {
        "detto": "Piacer scett all'Amerch ch n fà l favor",
        "traduzione": "Il signor Piacere andò in America per non fare i favori.",
        "significato": "",
        "id": 97
    },
    {
        "detto": "Nda cas ru scarpar l scarp rott",
        "traduzione": "In casa del calzolaio le scarpe rotte.",
        "significato": "",
        "id": 98
    },
    {
        "detto": "Attakk u ciocc add vvol u patreun",
        "traduzione": "Lega l'asino dove vuole il padrone",
        "significato": "il cliente ha sempre ragione (paga lui, quindi...)",
        "id": 99
    },
    {
        "detto": "vai arranghiè u rreit",
        "traduzione": "Andare a mangiare",
        "significato": "ovvio.",
        "id": 100
    },
    {
        "detto": "C s'asconn dret u resct par a tutto quond",
        "traduzione": "Chi si nasconde dietro al dito compare a tutti",
        "significato": "",
        "id": 101
    },
    {
        "detto": "T chiam a copp e rsponn a dnar",
        "traduzione": "Ti chiamo a coppe e rispondi a denari",
        "significato": "Quando ti chiedono una cosa e capisci un'altra.",
        "id": 102
    },
    {
        "detto": "Zocchr e acq r ros n'ha uastat mai nsceuna cos",
        "traduzione": "Zucchero ed acqua di rosa non guastano mai niente.",
        "significato": "",
        "id": 103
    },
    {
        "detto": "S tin a casa gross enghjl r spein",
        "traduzione": "Se hai la casa grossa riempila di spine",
        "significato": "Casa grande molti ospiti, allora devi provvedere a tenerli lontani.",
        "id": 104
    },
    {
        "detto": "A grass cucein a mserj iè vcein",
        "traduzione": "La grassa cucina la miseria è vicina",
        "significato": "",
        "id": 105
    },
    {
        "detto": "Panza chien n crer u rsceun",
        "traduzione": "Chi ha la pancia piena non crede chi è digiuno",
        "significato": "",
        "id": 106
    },
    {
        "detto": "Ha dett mammarann liv u zich e mett u grann",
        "traduzione": "Ha detto nonna togli il bambino e metti l'adulto",
        "significato": "il rispetto per gli anziani.",
        "id": 107
    },
    {
        "detto": "Torct vgntidd fin a quonn s' tnridd",
        "traduzione": "Piegati fuscello fin quando sei tenero",
        "significato": "Proverbio pedagogico, i bambini vanno educati da piccoli.",
        "id": 108
    },
    {
        "detto": "N'ucchj alla att e n'ucchj a fresc u pesc",
        "traduzione": "Un'occhio al gatto ed un occhio a friggere il pesce",
        "significato": "",
        "id": 109
    },
    {
        "detto": "Quonn u panar vaj e ven l'amcezij s manden",
        "traduzione": "Quando il paniere va e viene l'amicizia si mantiene",
        "significato": "",
        "id": 110
    },
    {
        "detto": "A ra dd,n vin a rà mber u potr",
        "traduzione": "Da dove arrivi, da Piè del Prato?",
        "significato": "Quando uno arriva stanco e trafelato.",
        "id": 111
    },
    {
        "detto": "U vsteit iè neur, l'anm iè trest, frekn u popl a nom r crest",
        "traduzione": "Il vestito è nero, l'anima è triste, fregano il popolo a nome di Cristo",
        "significato": "E' riferito a preti e monache.",
        "id": 112
    },
    {
        "detto": "a carn s scett e l can mor,n r fam",
        "traduzione": "La carne si spreca ed i cani muoiono di fame",
        "significato": "chi troppo e chi niente.",
        "id": 113
    },
    {
        "detto": "Tadda vnè a occia sren",
        "traduzione": "Ti deve venire un colpo",
        "significato": "",
        "id": 114
    },
    {
        "detto": "Add cachn l vacch n,nd pegghj nind; add ddorm s pegghj u malvind",
        "traduzione": "Dove cacano le mucche non si prende niente, dove dormono si prende il Malvento (generica realzione cutanea allergica).",
        "significato": "",
        "id": 115
    },
    {
        "detto": "Gend senza fegghj nè parer nè cunzegghj",
        "traduzione": "Gente che non ha figli nè pareri nè consigli",
        "significato": "diffidare da chi non ha figli.",
        "id": 116
    },
    {
        "detto": "Crest mann u fredd mbas all pann",
        "traduzione": "Dio manda il freddo in base ai panni",
        "significato": "",
        "id": 117
    },
    {
        "detto": "U ciocc arrach a pagghj e lu ciocc sa mang",
        "traduzione": "L'asino trasporta la paglia e l'asino la mangia",
        "significato": "",
        "id": 118
    },
    {
        "detto": "C veiv fateji",
        "traduzione": "Chi beve, lavora",
        "significato": "",
        "id": 119
    },
    {
        "detto": "Sadda mett a ppar a par a sciammerch cu scarpar",
        "traduzione": "Si deve mettere a confronto una donnaccia con il calzolaio",
        "significato": "Confronto tra una cosa che non vale ed uno che vale.",
        "id": 120
    },
    {
        "detto": "L pecur arrocchj e l fess a coppj",
        "traduzione": "Le pecore in gruppo ed i fessi a coppia",
        "significato": "",
        "id": 121
    },
    {
        "detto": "C vol abbà u vcein prest a ser e prest u matein",
        "traduzione": "Chi vuole gabbare il vicino presto la sera e presto il mattino.",
        "significato": "",
        "id": 122
    },
    {
        "detto": "C s'assumeggj s pegghj",
        "traduzione": "Chi si somiglia si piglia",
        "significato": "",
        "id": 123
    },
    {
        "detto": "S so purc tornn",
        "traduzione": "Se sono maiali torneranno",
        "significato": "",
        "id": 124
    },
    {
        "detto": "Quonn squoggh a nev l stronz enzn arà for",
        "traduzione": "Quando si scioglie la neve gli stronzi escono fuori",
        "significato": "tutti i nodi vengono al pettine; la vera natura delle persone viene sempre fuori.",
        "id": 125
    },
    {
        "detto": "S ggeut affagliand",
        "traduzione": "",
        "significato": "non avere niente.",
        "id": 126
    },
    {
        "detto": "Và a ppscià a pagghh annatavann",
        "traduzione": "Vai a pisciare la paglia da qualche altra parte",
        "significato": "vai a rompere le scatole da qualche altra parte.",
        "id": 127
    },
    {
        "detto": "S cum nu ciocc vzieus",
        "traduzione": "Essere come un asino vizioso",
        "significato": "Quando uno non vuole far niente.",
        "id": 128
    },
    {
        "detto": "Quonn chiov n secca nind",
        "traduzione": "Quando piove non secca niente",
        "significato": "",
        "id": 129
    },
    {
        "detto": "S ggeut fiacc",
        "traduzione": "",
        "significato": "quando uno non ottiene niente.",
        "id": 130
    },
    {
        "detto": "Adda rreiv chiand u zaccon",
        "traduzione": "Dove arrivo pianto il paletto",
        "significato": "",
        "id": 131
    },
    {
        "detto": "U zeit e la zeit Angolozz e Margareit",
        "traduzione": "Il fidanzato e la fidanzata, Angelo e Margarita",
        "significato": "Per sfottere due romanticoni che vanno mano nella mano.",
        "id": 132
    },
    {
        "detto": "A dd faj l leun rumon l sc,kherd",
        "traduzione": "Dove si tagliano gli alberi restano i trucioli",
        "significato": "",
        "id": 133
    },
    {
        "detto": "Attind alla att ca nnand t'allesc e dret t gratt",
        "traduzione": "Attendo al gatto che davanti ti liscia e dietro ti gratta",
        "significato": "",
        "id": 134
    },
    {
        "detto": "Aost cap r virn",
        "traduzione": "Agosto inizio dell'inverno",
        "significato": "",
        "id": 135
    },
    {
        "detto": "Su ciocc n mmen a col a tre ann nà men chiò",
        "traduzione": "Se l'asino non ha la coda a tre anni non gli cresce più",
        "significato": "Le cose se non si hanno dopo un certo tempo non si hanno più.",
        "id": 136
    },
    {
        "detto": "Cett, cett sett purc ndà l faf",
        "traduzione": "zitto zitto, sette maiali nelle fave",
        "significato": "",
        "id": 137
    },
    {
        "detto": "Sparagn sparagn u cul s'arrafagn",
        "traduzione": "risparmiando risparmiando il culo si stringe",
        "significato": "non sempre conviene fare un'eccessiva economia.",
        "id": 138
    },
    {
        "detto": "T canosc c,ras",
        "traduzione": "Ti conosco ciliegia",
        "significato": "Ti conosco bene.",
        "id": 139
    },
    {
        "detto": "Sogra c,cat nora furtunot",
        "traduzione": "Suocera cieca, nuora fortunata",
        "significato": "",
        "id": 140
    },
    {
        "detto": "Alla cas r l plttorn iè semb fest",
        "traduzione": "A casa dei poltroni è sempre festa",
        "significato": "",
        "id": 141
    },
    {
        "detto": "So mnenn, uoj mnenn, so grann uoj grann",
        "traduzione": "Sono piccoli guai piccoli, sono grandi guai grandi.",
        "significato": "",
        "id": 142
    },
    {
        "detto": "a bband r curlet, invec r scè nnand vai ndret",
        "traduzione": "La banda di Coleto invece di andare avanti và indietro",
        "significato": "invece di progredire si peggiora.",
        "id": 143
    },
    {
        "detto": "Quonn chiov e men vind u cacciator n,nz abboscch nind",
        "traduzione": "Quando piove e tira vento il cacciatore non becca niente.",
        "significato": "",
        "id": 144,
        "related": [196]
    },
    {
        "detto": "U cuon ru vccir iè lord r sangu e ca panza vacand",
        "traduzione": "Il cane del macellaio è sporco di sangue ma digiuno",
        "significato": "le apparenze ingannano.",
        "id": 145
    },
    {
        "detto": "A nott parl chian u iurn uordt attorn",
        "traduzione": "La notte parla piano ed il giorno guardati intorno",
        "significato": "",
        "id": 146
    },
    {
        "detto": "U litt s chiam ros.... n,nz dorm s ripos",
        "traduzione": "Il letto si chiama Rosa, non si dorme ma si riposa",
        "significato": "",
        "id": 147
    },
    {
        "detto": "L'omn si ver mbacc a men,l",
        "traduzione": "L'uomo si vede a confronto con l'albero del mandorlo",
        "significato": "il legno del mandorlo è notoriamente duro. L'uomo che lo riusciva ad abbattere con l'ascia era 'buono'.",
        "id": 148
    },
    {
        "detto": "Apr l'ucchij e serr u cueul",
        "traduzione": "Apri gli occhi e chiudi il culo: attento alle fregature.",
        "significato": "",
        "id": 149
    },
    {
        "detto": "Frosc r scopa nov u rriovl s' nnammor",
        "traduzione": "Fruscio di scopa nuova il diavolo si innamora.",
        "significato": "",
        "id": 150
    },
    {
        "detto": "C ten a cap r vetr n mnass l pret",
        "traduzione": "Chi ha la testa di vetro non deve lanciare le pietre",
        "significato": "",
        "id": 151
    },
    {
        "detto": "Fuk r pagghj a ciocc t'arragghj",
        "traduzione": "Fuoco di paglia l'asino raglia.",
        "significato": "",
        "id": 152
    },
    {
        "detto": "Rspett u cuon ca mor ru patreun",
        "traduzione": "Rispetta il cane per il padrone",
        "significato": "",
        "id": 153
    },
    {
        "detto": "Kokk mia kokk, pozz care' add n cand, pozz care' e pozz sckatta' demm quand'ann aggia' camba'",
        "traduzione": "Gufo mio gufo, possa tu cadere dove non canti, possa tu cadere e possa tu morire ma dimmi quanti anni devo vivere.",
        "significato": "",
        "id": 154
    },
    {
        "detto": "S'arrcord a vegn nda chiazz",
        "traduzione": "Si ricorda la vigna in piazza",
        "significato": "Una cosa indietro negli anni.",
        "id": 155
    },
    {
        "detto": "Iè brott cum u rebbt",
        "traduzione": "E' brutto come il debito",
        "significato": "",
        "id": 156
    },
    {
        "detto": "L ciocc s screrrn e l varreil s rombn",
        "traduzione": "Gli asini litigano e le botti si rompono",
        "significato": "",
        "id": 157
    },
    {
        "detto": "Passa osc e vena craj",
        "traduzione": "Passa oggi e viene domani.",
        "significato": "",
        "id": 158
    },
    {
        "detto": "C zapp e c vrnegn",
        "traduzione": "Chi zappa e chi vendemmia.",
        "significato": "",
        "id": 159
    },
    {
        "detto": "C mor ch l fong fess ciu chiong",
        "traduzione": "E' scemo chi si addolora per la morte di uno avvelenato dai funghi",
        "significato": "",
        "id": 160
    },
    {
        "detto": "Tanda vot vai u secch all'acq fin a quonn s romb",
        "traduzione": "Tante volte va il secchio all'acqua fin quando si rompe",
        "significato": "",
        "id": 161
    },
    {
        "detto": "Ah! Rcett Ronna Lell quonn acchiàtt u cuon a att e la fegghia ngend",
        "traduzione": "Ah! disse Donna Lella quando trovò il cane, il gatto e la figlia in stato interessante.",
        "significato": "",
        "id": 162
    },
    {
        "detto": "L'art r l pacc",
        "traduzione": "Fare l'arte dei pazzi.",
        "significato": "",
        "id": 163
    },
    {
        "detto": "Cum g,s,crest ta mann ta pegghj",
        "traduzione": "Come Dio la manda la prendi",
        "significato": "Non si può fare niente contro il fato.",
        "id": 164
    },
    {
        "detto": "E' chiuveut e nvcat tutt l rott sò apparat",
        "traduzione": "Piove e nevica ma tutto si aggiusta",
        "significato": "Quando ci sono dissidi tra persone che rapidamente si sanano.",
        "id": 165
    },
    {
        "detto": "Aveut a grazzj abbat u sond",
        "traduzione": "Ricevuta la grazia gabbato il santo",
        "significato": "",
        "id": 166
    },
    {
        "detto": "Raccomonn a pecur allu leup",
        "traduzione": "Raccomandare la pecora al lupo",
        "significato": "",
        "id": 167
    },
    {
        "detto": "S ggeut a t,rà a sc,rpnat",
        "traduzione": "",
        "significato": "quando uno è stanco.",
        "id": 168
    },
    {
        "detto": "Scapl ss voj e damm ssa rat",
        "traduzione": "Togli questi buoi e dammi l'aratro.",
        "significato": "Quando a uno serve qualcosa.",
        "id": 169
    },
    {
        "detto": "A capa bell iè senza crvidd",
        "traduzione": "La testa bella è senza cervello",
        "significato": "",
        "id": 170
    },
    {
        "detto": "Iè ciut cum na gnagn r cirr",
        "traduzione": "E' scemo come una ghianda di cerro.",
        "significato": "",
        "id": 171
    },
    {
        "detto": "Fest, maltimb e frstir alla cas",
        "traduzione": "Festa, maltempo e forestieri a casa",
        "significato": "Il massimo della sfiga.",
        "id": 172
    },
    {
        "detto": "Scè olm",
        "traduzione": "Andare olmo",
        "significato": "Non avere niente, non bere. È da ricollegarsi al gioco della birra.",
        "id": 173
    },
    {
        "detto": "Can e cafeun lassn a porta apert",
        "traduzione": "Cani e cafoni lasciano la porta aperta",
        "significato": "Per dare del cafone a qualcuno che non ha chiuso la porta dietro di se, facendogli notare che oltre a loro solo chi non è in grado di chiudere la porta (come i cani) non lo fa ",
        "id": 174
    },
    {
        "detto": "C t vol ben chiò ra mamm u cor t ngann",
        "traduzione": "Chi ti vuol bene più della mamma inganna il tuo cuore",
        "significato": "",
        "id": 175
    },
    {
        "detto": "Scè a mnà a sarach mmocc a san bangrazij",
        "traduzione": "Mettere la sardina in bocca a San Pancrazio",
        "significato": "Quando non piove bisogna far venire sete a San Pancrazio.",
        "id": 176
    },
    {
        "detto": "U cuon affamt n,nz appaeur ru baston",
        "traduzione": "Il cane che ha fame non ha paura del bastone",
        "significato": "",
        "id": 177
    },
    {
        "detto": "U mir bbun s venn senza frasch",
        "traduzione": "Il vino buono si vende senza frasche.",
        "significato": "",
        "id": 178
    },
    {
        "detto": "Curreit fiumicidd addà a scoss allu mar",
        "traduzione": "Correte ruscelli a dare la scossa al mare",
        "significato": "",
        "id": 179
    },
    {
        "detto": "Hai ll,ndat a vregghj",
        "traduzione": "Lasciare le briglie",
        "significato": "Sbizzarrirsi.",
        "id": 180
    },
    {
        "detto": "Parind e cuggein s fann ch preim",
        "traduzione": "parenti e cugini si fanno per primi",
        "significato": "Il fare ha un ovvio significato.",
        "id": 181
    },
    {
        "detto": "Crest rai a croc a c ten l spadd chiò gross",
        "traduzione": "Dio dà la croce a chi ha le spalle più grosse",
        "significato": "",
        "id": 182
    },
    {
        "detto": "Pegghj u bun quonn l'hai ca u mal n mmanca mai",
        "traduzione": "Prendi il buono quando c'è perchè il male non scarseggia",
        "significato": "Versione tricaricese del carpe diem.",
        "id": 183
    },
    {
        "detto": "C battezz, patrezz",
        "traduzione": "",
        "significato": "Chi fa da padrino fa anche da padre",
        "id": 184
    },
    {
        "detto": "Quonn a panz iè vacand n,nz son e n,nz cand, quonn a panz iè chien bbon tann s cand e s son",
        "traduzione": "Quando la pancia è vuota non si suona e non si canta, quando la pancia è piena a sufficienza si canta e si suona",
        "significato": "",
        "id": 185
    },
    {
        "detto": "Ciocc vicchj e meul vicchj vann a murè alla cas r l fess",
        "traduzione": "Asini e muli vecchi muoiono alla case degli scemi",
        "significato": "chi non è attento fa cattivi affari (come comprare un mulo che poi ti muore)",
        "id": 186
    },
    {
        "detto": "O t mang sta mnestr o t min ra fnestr",
        "traduzione": "O ti mangi questa minestra o ti butti dalla finestra",
        "significato": "",
        "id": 187
    },
    {
        "detto": "Prumett cert e n vin men s,cheur",
        "traduzione": "Prometti con certezza e non potrai mantenerlo",
        "significato": "",
        "id": 188
    },
    {
        "detto": "Rcett u poppl alla faf, timb ng vol ma u prteus t'aggia fà",
        "traduzione": "Disse il verme della fava, dammi tempo ma il buco te lo faccio",
        "significato": "Con la pazienza si ottiene tutto. Altro significato sessuale (spiegazione intuibile).",
        "id": 189
    },
    {
        "detto": "K mangiart u pon r stu cummend aia fa tand ndu cul ftend",
        "traduzione": "Per magiare il pane di questo convento devi farti un mazzo così.",
        "significato": "",
        "id": 190
    },
    {
        "detto": "U supirchj romb l cupirchj",
        "traduzione": "Il di più rompe i coperchi",
        "significato": "",
        "id": 191
    },
    {
        "detto": "fà a mort ru picur",
        "traduzione": "Fare la morte della pecora",
        "significato": "fare una brutta morte.",
        "id": 192
    },
    {
        "detto": "Nn vu e nn lass",
        "traduzione": "Non ne vuoi e non ne lasci",
        "significato": "",
        "id": 193
    },
    {
        "detto": "Quott r foggh e cengh r mnestr",
        "traduzione": "Quattro di verdure e cinque di minestra",
        "significato": "L'arte di arrangiarsi come si può",
        "id": 194
    },
    {
        "detto": "C n'acn r sal prdett a mnestr",
        "traduzione": "Per un pizzico di sale perse l'intera minestra",
        "significato": "",
        "id": 195,
        "related": [
            52
        ]
    },
    {
        "detto": "Quonn chiov e men vind u cacciator stai all'abbind",
        "traduzione": "Quando piove e tira vento il cacciatore sta a riposo",
        "significato": "",
        "id": 196,
        "related": [144]
    }
]


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyArxk42aqueMXlrzx163cskyu_HqXbJ7nw",
    authDomain: "detti-tricaricesi.firebaseapp.com",
    projectId: "detti-tricaricesi",
    storageBucket: "detti-tricaricesi.appspot.com",
    messagingSenderId: "122148054857",
    appId: "1:122148054857:web:cf7dfe33c2926c1bb7dc98",
    measurementId: "G-6BXMDTYNSC"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


function open(event, url) {
    event.waitUntil(async function () {
        if ('openWindow' in clients) {
            await clients.openWindow(url)
        }
    }());
}

self.addEventListener("notificationclick", (notificationEvent) => {
    console.log(notificationEvent);
    notificationEvent.notification.close();
    open(notificationEvent, `${self.origin}/#/`);
});


function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - startOfYear.getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.floor(diff / oneDay);
}

messaging.onBackgroundMessage((payload) => {
    const todayIndex = getDayOfYear(new Date()) % detti.length;
    const dettoOfToday = detti.filter(d => d.id === todayIndex)[0];

    const notificationTitle = 'Detto di oggi';
    const notificationOptions = {
        body: dettoOfToday.detto,
        icon: `/pwa/pwa-64x64.png`,
        badge: `/pwa/pwa-64x64.png`,
    };

    return self.registration.getNotifications().then(
        (notifications) => {
            notifications.forEach((notification) => {
                notification.close();
            });
            self.registration.showNotification(notificationTitle, notificationOptions);
        });
});
