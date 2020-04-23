'use strict'

const db = require('../server/db')
const {User, Product, Order, OrderProduct} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dummyUsers = [
    {
      name: 'Maximo Stevings',
      email: 'mstevings0@time.com',
      loginId: 'mstevings0',
      password: 'rpZcPt4PFnMT',
      address: '436 Ronald Regan Pass',
      phoneNum: '391-654-8521',
      isAdmin: false
    },
    {
      name: 'Nerissa Sibthorp',
      email: 'nsibthorp1@senate.gov',
      loginId: 'nsibthorp1',
      password: 'BNkl43',
      address: '55 5th Point',
      phoneNum: '730-363-3231',
      isAdmin: true
    },
    {
      name: 'Dulsea Szymon',
      email: 'dszymon2@g.co',
      loginId: 'dszymon2',
      password: 'oSWeHXa1u15h',
      address: '005 Tony Hill',
      phoneNum: '504-549-9345',
      isAdmin: false
    },
    {
      name: 'Urbain Gotthard.sf',
      email: 'ugotthardsf3@google.es',
      loginId: 'ugotthardsf3',
      password: '1fMme3ioAyRs',
      address: '1 Emmet Place',
      phoneNum: '738-227-6082',
      isAdmin: false
    },
    {
      name: 'Guenevere Arter',
      email: 'garter4@scientificamerican.com',
      loginId: 'garter4',
      password: 'x2RmGYX',
      address: '84 Butterfield Alley',
      phoneNum: '835-389-5097',
      isAdmin: false
    },
    {
      name: 'Ronny Polfer',
      email: 'rpolfer5@irs.gov',
      loginId: 'rpolfer5',
      password: 'ecrTqiM',
      address: '66717 Oak Circle',
      phoneNum: '831-411-1951',
      isAdmin: true
    },
    {
      name: 'Harlen Panther',
      email: 'hpanther6@netscape.com',
      loginId: 'hpanther6',
      password: 'aSfBNhDo7n',
      address: '4973 Sunnyside Hill',
      phoneNum: '928-175-0724',
      isAdmin: false
    },
    {
      name: 'Sylas Street',
      email: 'sstreet7@diigo.com',
      loginId: 'sstreet7',
      password: 'tOB6Fjo',
      address: '6 Anthes Hill',
      phoneNum: '517-311-9149',
      isAdmin: true
    },
    {
      name: 'Sioux Simeonov',
      email: 'ssimeonov8@elegantthemes.com',
      loginId: 'ssimeonov8',
      password: 'j9ri6ezTX',
      address: '91150 Jackson Point',
      phoneNum: '853-885-6006',
      isAdmin: true
    },
    {
      name: 'Sayers Hanhart',
      email: 'shanhart9@cocolog-nifty.com',
      loginId: 'shanhart9',
      password: '2bHzJ43TR',
      address: '0 Alpine Center',
      phoneNum: '583-368-5214',
      isAdmin: false
    },
    {
      name: 'Rosalyn MacKeig',
      email: 'rmackeiga@pen.io',
      loginId: 'rmackeiga',
      password: 'OQg99PCYk8',
      address: '35912 Vera Point',
      phoneNum: '125-380-5014',
      isAdmin: true
    },
    {
      name: 'Morgen Mosson',
      email: 'mmossonb@sohu.com',
      loginId: 'mmossonb',
      password: 'pG6DgPb',
      address: '2198 Northview Park',
      phoneNum: '910-110-6761',
      isAdmin: false
    },
    {
      name: 'Brnaba Carolan',
      email: 'bcarolanc@gizmodo.com',
      loginId: 'bcarolanc',
      password: 'StDcxjA',
      address: '3 Scofield Park',
      phoneNum: '672-600-0377',
      isAdmin: false
    },
    {
      name: 'Odelinda Discombe',
      email: 'odiscombed@apple.com',
      loginId: 'odiscombed',
      password: 'y6ATPGbMt7',
      address: '1951 Welch Drive',
      phoneNum: '984-328-8271',
      isAdmin: false
    },
    {
      name: 'Mamie Klampk',
      email: 'mklampke@twitter.com',
      loginId: 'mklampke',
      password: 'dlzxcXK',
      address: '431 Schiller Center',
      phoneNum: '400-872-0614',
      isAdmin: false
    },
    {
      name: 'Byrle Merveille',
      email: 'bmerveillef@symantec.com',
      loginId: 'bmerveillef',
      password: '499sNJz',
      address: '23 Ryan Court',
      phoneNum: '355-809-0888',
      isAdmin: true
    },
    {
      name: 'Lila Ector',
      email: 'lectorg@upenn.edu',
      loginId: 'lectorg',
      password: '37pDMhNO0IJ',
      address: '72416 Buell Alley',
      phoneNum: '570-985-2331',
      isAdmin: false
    },
    {
      name: 'Dillon Bazire',
      email: 'dbazireh@hubpages.com',
      loginId: 'dbazireh',
      password: 'mQK5r0Xr6XO',
      address: '5 Jenna Hill',
      phoneNum: '589-337-9058',
      isAdmin: true
    },
    {
      name: 'Charlotte Brafferton',
      email: 'cbraffertoni@ibm.com',
      loginId: 'cbraffertoni',
      password: 'vbyDIxeMQ',
      address: '3860 Barby Way',
      phoneNum: '549-137-0613',
      isAdmin: true
    },
    {
      name: 'Chloette Seston',
      email: 'csestonj@hc360.com',
      loginId: 'csestonj',
      password: 'NOtbtLVrtL',
      address: '3 Bellgrove Terrace',
      phoneNum: '870-273-6378',
      isAdmin: true
    },
    {
      name: 'Angy Siggins',
      email: 'asigginsk@vkontakte.ru',
      loginId: 'asigginsk',
      password: '8MSk5TxE84',
      address: '866 Goodland Road',
      phoneNum: '957-224-0052',
      isAdmin: false
    },
    {
      name: 'Grete Easman',
      email: 'geasmanl@yahoo.com',
      loginId: 'geasmanl',
      password: 'yR6Crh',
      address: '40092 Golf View Place',
      phoneNum: '761-989-3522',
      isAdmin: true
    },
    {
      name: 'Wiley Bow',
      email: 'wbowm@cornell.edu',
      loginId: 'wbowm',
      password: 'NijGdI',
      address: '422 Waxwing Point',
      phoneNum: '138-705-8299',
      isAdmin: true
    },
    {
      name: 'Jayme Greenway',
      email: 'jgreenwayn@army.mil',
      loginId: 'jgreenwayn',
      password: 'U3Dxjl',
      address: '55 Maryland Lane',
      phoneNum: '842-238-0416',
      isAdmin: false
    },
    {
      name: 'Alanah Kitchenham',
      email: 'akitchenhamo@fc2.com',
      loginId: 'akitchenhamo',
      password: 'NVVx90R7wXz',
      address: '09 Sullivan Street',
      phoneNum: '197-668-5660',
      isAdmin: false
    },
    {
      name: 'Magda Fotheringham',
      email: 'mfotheringhamp@simplemachines.org',
      loginId: 'mfotheringhamp',
      password: '8FnGecE',
      address: '250 Hermina Park',
      phoneNum: '247-499-3876',
      isAdmin: false
    },
    {
      name: 'Franciska Camm',
      email: 'fcammq@free.fr',
      loginId: 'fcammq',
      password: 'nQTasZqS',
      address: '0 Granby Circle',
      phoneNum: '124-189-7339',
      isAdmin: true
    },
    {
      name: 'Lester Vaughan',
      email: 'lvaughanr@state.gov',
      loginId: 'lvaughanr',
      password: '5oEMRf',
      address: '521 Lukken Trail',
      phoneNum: '420-554-1030',
      isAdmin: false
    },
    {
      name: 'Ignaz Bulfoot',
      email: 'ibulfoots@surveymonkey.com',
      loginId: 'ibulfoots',
      password: 'ednJYNKweiw',
      address: '583 Anderson Place',
      phoneNum: '639-346-5399',
      isAdmin: false
    },
    {
      name: 'Rodolphe Webby',
      email: 'rwebbyt@dyndns.org',
      loginId: 'rwebbyt',
      password: 'd5PVbCF24l',
      address: '0 1st Lane',
      phoneNum: '234-921-9857',
      isAdmin: false
    },
    {
      name: 'Ennis Douty',
      email: 'edoutyu@nifty.com',
      loginId: 'edoutyu',
      password: 'ZGQ6hFHt5iGY',
      address: '82775 Caliangt Way',
      phoneNum: '586-556-0484',
      isAdmin: false
    },
    {
      name: 'Pam Bradshaw',
      email: 'pbradshawv@epa.gov',
      loginId: 'pbradshawv',
      password: 'dcHRBg9i',
      address: '380 Messerschmidt Point',
      phoneNum: '218-312-7793',
      isAdmin: true
    },
    {
      name: 'Benedick Adshead',
      email: 'badsheadw@oaic.gov.au',
      loginId: 'badsheadw',
      password: 'vHm9jdNAP',
      address: '6020 Beilfuss Trail',
      phoneNum: '587-136-5924',
      isAdmin: false
    },
    {
      name: 'Randi Cory',
      email: 'rcoryx@army.mil',
      loginId: 'rcoryx',
      password: 'xa4GI2PD941Z',
      address: '925 Stang Trail',
      phoneNum: '203-665-7635',
      isAdmin: true
    },
    {
      name: 'Hilary Cudiff',
      email: 'hcudiffy@mapy.cz',
      loginId: 'hcudiffy',
      password: 'tIx6HxQudz',
      address: '47 Talmadge Crossing',
      phoneNum: '510-374-6044',
      isAdmin: true
    },
    {
      name: 'Wash Gally',
      email: 'wgallyz@ow.ly',
      loginId: 'wgallyz',
      password: 'p5vOTupWfpU6',
      address: '513 Orin Court',
      phoneNum: '100-756-6618',
      isAdmin: false
    },
    {
      name: 'Meggie Civitillo',
      email: 'mcivitillo10@wunderground.com',
      loginId: 'mcivitillo10',
      password: 'gTNpjsFC6VX',
      address: '20073 Jenifer Court',
      phoneNum: '331-964-5162',
      isAdmin: false
    },
    {
      name: 'Arleta Manhare',
      email: 'amanhare11@reverbnation.com',
      loginId: 'amanhare11',
      password: 'GAFkZ8',
      address: '517 Birchwood Plaza',
      phoneNum: '279-176-9121',
      isAdmin: true
    },
    {
      name: 'Hildagard Seif',
      email: 'hseif12@huffingtonpost.com',
      loginId: 'hseif12',
      password: '9MVpBknK',
      address: '25056 Maryland Hill',
      phoneNum: '798-354-1554',
      isAdmin: true
    },
    {
      name: 'Keeley Coddington',
      email: 'kcoddington13@ebay.com',
      loginId: 'kcoddington13',
      password: 'RPX2KsN6JwH',
      address: '1 Coolidge Way',
      phoneNum: '801-886-2859',
      isAdmin: false
    },
    {
      name: 'Lazar Andrus',
      email: 'landrus14@irs.gov',
      loginId: 'landrus14',
      password: 'MQzlDUGO',
      address: '4 Blue Bill Park Alley',
      phoneNum: '533-606-8748',
      isAdmin: false
    },
    {
      name: 'Emmery Hoggetts',
      email: 'ehoggetts15@china.com.cn',
      loginId: 'ehoggetts15',
      password: '0DLRDG9E9dmO',
      address: '90 Rockefeller Road',
      phoneNum: '315-887-1057',
      isAdmin: true
    },
    {
      name: 'Herby Rawlence',
      email: 'hrawlence16@artisteer.com',
      loginId: 'hrawlence16',
      password: '1AHEF4x',
      address: '600 Mallory Junction',
      phoneNum: '537-939-0628',
      isAdmin: true
    },
    {
      name: 'Jerrilee Capin',
      email: 'jcapin17@nasa.gov',
      loginId: 'jcapin17',
      password: 'EqRL5okV',
      address: '0 Shoshone Way',
      phoneNum: '277-139-8076',
      isAdmin: true
    },
    {
      name: 'Wit Ackeroyd',
      email: 'wackeroyd18@paypal.com',
      loginId: 'wackeroyd18',
      password: 'JXYjsSA8wLQi',
      address: '534 Birchwood Junction',
      phoneNum: '213-914-6204',
      isAdmin: true
    },
    {
      name: 'Mahmoud Benneton',
      email: 'mbenneton19@phpbb.com',
      loginId: 'mbenneton19',
      password: 'e6lq7EOGHAX5',
      address: '6491 Donald Street',
      phoneNum: '785-500-2949',
      isAdmin: false
    },
    {
      name: 'Magda De la Yglesias',
      email: 'mde1a@google.co.jp',
      loginId: 'mde1a',
      password: 'woi2dSYnEC0r',
      address: '5 Southridge Point',
      phoneNum: '362-537-6570',
      isAdmin: false
    },
    {
      name: 'Farica Bankes',
      email: 'fbankes1b@amazon.com',
      loginId: 'fbankes1b',
      password: 'xyJImlD',
      address: '5 Novick Alley',
      phoneNum: '627-406-6960',
      isAdmin: false
    },
    {
      name: 'Huntlee Yekel',
      email: 'hyekel1c@usatoday.com',
      loginId: 'hyekel1c',
      password: '2siwno',
      address: '48 Muir Trail',
      phoneNum: '176-262-0385',
      isAdmin: true
    },
    {
      name: 'Caroljean Raubenheimer',
      email: 'craubenheimer1d@fc2.com',
      loginId: 'craubenheimer1d',
      password: 'vvCrrOzsnJt',
      address: '1858 Hallows Road',
      phoneNum: '502-823-0482',
      isAdmin: true
    },
    {
      name: 'Gar Aust',
      email: 'gaust1e@addtoany.com',
      loginId: 'gaust1e',
      password: '6zcHzZ0RlZU',
      address: '954 2nd Court',
      phoneNum: '428-142-6195',
      isAdmin: false
    },
    {
      name: 'Aldon Kennally',
      email: 'akennally1f@yahoo.co.jp',
      loginId: 'akennally1f',
      password: 'QaWq2XWg',
      address: '7 Manley Hill',
      phoneNum: '815-396-6283',
      isAdmin: true
    },
    {
      name: 'Welbie Hymers',
      email: 'whymers1g@cyberchimps.com',
      loginId: 'whymers1g',
      password: 'wxPMJK8',
      address: '35 Wayridge Lane',
      phoneNum: '918-142-4571',
      isAdmin: true
    },
    {
      name: 'Sacha Webberley',
      email: 'swebberley1h@tripadvisor.com',
      loginId: 'swebberley1h',
      password: 'MdXFTvyh',
      address: '2 Dawn Lane',
      phoneNum: '469-541-2122',
      isAdmin: false
    },
    {
      name: 'Jdavie Tilling',
      email: 'jtilling1i@blogspot.com',
      loginId: 'jtilling1i',
      password: 'qecHPrtn',
      address: '67111 Macpherson Street',
      phoneNum: '253-160-1336',
      isAdmin: true
    },
    {
      name: 'Jenilee Camosso',
      email: 'jcamosso1j@hubpages.com',
      loginId: 'jcamosso1j',
      password: 'cVTpVS',
      address: '5 Arapahoe Place',
      phoneNum: '730-576-8851',
      isAdmin: false
    },
    {
      name: 'Chaunce Pleuman',
      email: 'cpleuman1k@freewebs.com',
      loginId: 'cpleuman1k',
      password: 'shswImagR',
      address: '0284 Fair Oaks Junction',
      phoneNum: '691-193-1232',
      isAdmin: true
    },
    {
      name: 'Nils Oley',
      email: 'noley1l@live.com',
      loginId: 'noley1l',
      password: 'pQ2JKgEpfZb',
      address: '18 Clyde Gallagher Crossing',
      phoneNum: '148-717-3476',
      isAdmin: false
    },
    {
      name: 'Hymie Rowston',
      email: 'hrowston1m@live.com',
      loginId: 'hrowston1m',
      password: 'QqOSERenbh3p',
      address: '61 Dapin Road',
      phoneNum: '418-794-5286',
      isAdmin: false
    },
    {
      name: 'Dayle Mixter',
      email: 'dmixter1n@time.com',
      loginId: 'dmixter1n',
      password: 'ok3DVa4Wmq7',
      address: '7 Vahlen Place',
      phoneNum: '299-151-5532',
      isAdmin: true
    },
    {
      name: 'Amerigo Stow',
      email: 'astow1o@netscape.com',
      loginId: 'astow1o',
      password: 'kkxsaneBsS',
      address: '33 Trailsway Junction',
      phoneNum: '890-724-5271',
      isAdmin: false
    },
    {
      name: 'Em Skuse',
      email: 'eskuse1p@buzzfeed.com',
      loginId: 'eskuse1p',
      password: 'epc2dqX8g',
      address: '22488 Larry Circle',
      phoneNum: '274-118-3294',
      isAdmin: false
    },
    {
      name: 'Dasha Woolfall',
      email: 'dwoolfall1q@altervista.org',
      loginId: 'dwoolfall1q',
      password: 'ROEl3zuXN',
      address: '2 Declaration Crossing',
      phoneNum: '533-814-5239',
      isAdmin: false
    },
    {
      name: 'Griff Ludovici',
      email: 'gludovici1r@prlog.org',
      loginId: 'gludovici1r',
      password: 'iW9TNl',
      address: '679 Cardinal Way',
      phoneNum: '589-619-9486',
      isAdmin: true
    },
    {
      name: 'Selig Chadwin',
      email: 'schadwin1s@geocities.jp',
      loginId: 'schadwin1s',
      password: 'LegJF4',
      address: '08744 Springs Court',
      phoneNum: '236-601-0193',
      isAdmin: true
    },
    {
      name: 'Carline Nelligan',
      email: 'cnelligan1t@tripod.com',
      loginId: 'cnelligan1t',
      password: 'q5IjpYr',
      address: '2 Jenifer Trail',
      phoneNum: '448-866-7838',
      isAdmin: false
    },
    {
      name: 'Kip Crannage',
      email: 'kcrannage1u@alexa.com',
      loginId: 'kcrannage1u',
      password: 'uEHNth7Rd',
      address: '27947 Montana Avenue',
      phoneNum: '629-923-6969',
      isAdmin: true
    },
    {
      name: 'Russell Heady',
      email: 'rheady1v@youtu.be',
      loginId: 'rheady1v',
      password: 'ipCtkUBr',
      address: '673 Messerschmidt Park',
      phoneNum: '468-341-3159',
      isAdmin: false
    },
    {
      name: 'Javier Leamy',
      email: 'jleamy1w@stumbleupon.com',
      loginId: 'jleamy1w',
      password: 'nqWvgAXWHw7v',
      address: '76 Grover Avenue',
      phoneNum: '275-939-2424',
      isAdmin: false
    },
    {
      name: 'Holly Bradder',
      email: 'hbradder1x@businessweek.com',
      loginId: 'hbradder1x',
      password: 'vPvU4L',
      address: '06658 Scott Court',
      phoneNum: '694-664-6331',
      isAdmin: true
    },
    {
      name: 'Rustin Collcott',
      email: 'rcollcott1y@bloomberg.com',
      loginId: 'rcollcott1y',
      password: 'qym4Cs',
      address: '4551 Sunnyside Point',
      phoneNum: '775-312-5199',
      isAdmin: true
    },
    {
      name: 'Chrissie Peaseman',
      email: 'cpeaseman1z@hexun.com',
      loginId: 'cpeaseman1z',
      password: 'Y7JGGJNJU',
      address: '51 Erie Road',
      phoneNum: '315-505-9254',
      isAdmin: false
    },
    {
      name: 'Lanie Meran',
      email: 'lmeran20@earthlink.net',
      loginId: 'lmeran20',
      password: 'ass33tFYD',
      address: '7330 Summit Street',
      phoneNum: '281-585-7666',
      isAdmin: false
    },
    {
      name: 'Gaye Teeney',
      email: 'gteeney21@pagesperso-orange.fr',
      loginId: 'gteeney21',
      password: 'VulrOH',
      address: '034 Hallows Avenue',
      phoneNum: '172-331-2652',
      isAdmin: false
    },
    {
      name: 'Nana Olenov',
      email: 'nolenov22@ucla.edu',
      loginId: 'nolenov22',
      password: '3Qwx1w2',
      address: '9 Oriole Avenue',
      phoneNum: '820-441-9659',
      isAdmin: false
    },
    {
      name: 'Ado Staves',
      email: 'astaves23@unicef.org',
      loginId: 'astaves23',
      password: '1HrBUMMbJw',
      address: '8 Knutson Avenue',
      phoneNum: '591-645-4737',
      isAdmin: false
    },
    {
      name: 'Mallorie Grumell',
      email: 'mgrumell24@comcast.net',
      loginId: 'mgrumell24',
      password: 'zHW2vv9e4ous',
      address: '56 Rutledge Avenue',
      phoneNum: '179-471-9509',
      isAdmin: true
    },
    {
      name: 'Roderigo Duplain',
      email: 'rduplain25@webeden.co.uk',
      loginId: 'rduplain25',
      password: 'AKdJqFGbGpg',
      address: '487 Golf Avenue',
      phoneNum: '789-568-1418',
      isAdmin: true
    },
    {
      name: 'Alain Riccione',
      email: 'ariccione26@sitemeter.com',
      loginId: 'ariccione26',
      password: 'tFPothZnlr',
      address: '781 Nevada Plaza',
      phoneNum: '570-161-9611',
      isAdmin: true
    },
    {
      name: 'Deerdre Ygou',
      email: 'dygou27@php.net',
      loginId: 'dygou27',
      password: 'FlN9hWud',
      address: '5 Nova Hill',
      phoneNum: '257-700-0394',
      isAdmin: false
    },
    {
      name: 'Tansy Carvell',
      email: 'tcarvell28@privacy.gov.au',
      loginId: 'tcarvell28',
      password: 'rdmGTW',
      address: '9 Duke Place',
      phoneNum: '570-206-8051',
      isAdmin: false
    },
    {
      name: 'Delaney MacLleese',
      email: 'dmaclleese29@harvard.edu',
      loginId: 'dmaclleese29',
      password: 'sQMfwBDJj',
      address: '59756 Amoth Circle',
      phoneNum: '769-108-8742',
      isAdmin: false
    },
    {
      name: 'Tedi Aleswell',
      email: 'taleswell2a@google.com.au',
      loginId: 'taleswell2a',
      password: 'Ens5paS0r4B',
      address: '64722 Heffernan Avenue',
      phoneNum: '707-306-0577',
      isAdmin: true
    },
    {
      name: 'Rutledge Kluger',
      email: 'rkluger2b@microsoft.com',
      loginId: 'rkluger2b',
      password: 'EWz7Pn2TeWz',
      address: '09 Pearson Park',
      phoneNum: '314-367-5094',
      isAdmin: false
    },
    {
      name: 'Demetris Hardwin',
      email: 'dhardwin2c@rakuten.co.jp',
      loginId: 'dhardwin2c',
      password: '3egVoJ',
      address: '5471 Susan Drive',
      phoneNum: '178-893-4786',
      isAdmin: true
    },
    {
      name: 'Delmar Celez',
      email: 'dcelez2d@t-online.de',
      loginId: 'dcelez2d',
      password: 's4lHOc',
      address: '4 Buhler Court',
      phoneNum: '768-251-2295',
      isAdmin: true
    },
    {
      name: 'Vera Figliovanni',
      email: 'vfigliovanni2e@auda.org.au',
      loginId: 'vfigliovanni2e',
      password: 'EYeNwd',
      address: '9 Clarendon Center',
      phoneNum: '187-700-1603',
      isAdmin: false
    },
    {
      name: 'Sosanna Suttling',
      email: 'ssuttling2f@icio.us',
      loginId: 'ssuttling2f',
      password: 'tPUybeWV',
      address: '5973 Manufacturers Alley',
      phoneNum: '864-161-1869',
      isAdmin: true
    },
    {
      name: 'Karalynn Banthorpe',
      email: 'kbanthorpe2g@is.gd',
      loginId: 'kbanthorpe2g',
      password: '8l41S9tX3j5',
      address: '05 Fordem Avenue',
      phoneNum: '122-458-2051',
      isAdmin: true
    },
    {
      name: 'Liz Benedetti',
      email: 'lbenedetti2h@ezinearticles.com',
      loginId: 'lbenedetti2h',
      password: '9bOaDuL0Lj',
      address: '45 Namekagon Pass',
      phoneNum: '551-652-8163',
      isAdmin: true
    },
    {
      name: 'Paulette Dwane',
      email: 'pdwane2i@blog.com',
      loginId: 'pdwane2i',
      password: 'GUlv7Kj4eG',
      address: '68497 Derek Avenue',
      phoneNum: '544-428-9238',
      isAdmin: false
    },
    {
      name: 'Luciano Hove',
      email: 'lhove2j@opera.com',
      loginId: 'lhove2j',
      password: 'g2RpHl1zJEbe',
      address: '2 Delaware Court',
      phoneNum: '869-625-1259',
      isAdmin: true
    },
    {
      name: 'Elizabeth Le Floch',
      email: 'ele2k@soup.io',
      loginId: 'ele2k',
      password: 'd5WWB7a9',
      address: '6 Sloan Trail',
      phoneNum: '969-679-5185',
      isAdmin: false
    },
    {
      name: 'Ade Piers',
      email: 'apiers2l@fotki.com',
      loginId: 'apiers2l',
      password: 'H5tNvj80',
      address: '2700 Prentice Circle',
      phoneNum: '768-758-6020',
      isAdmin: true
    },
    {
      name: 'Carey Ramard',
      email: 'cramard2m@bloomberg.com',
      loginId: 'cramard2m',
      password: 'uh3kB6ZBFl',
      address: '322 Coleman Hill',
      phoneNum: '746-302-4535',
      isAdmin: false
    },
    {
      name: 'Eldridge Rubroe',
      email: 'erubroe2n@drupal.org',
      loginId: 'erubroe2n',
      password: 'dmGnAVt',
      address: '2404 Riverside Alley',
      phoneNum: '249-313-4256',
      isAdmin: false
    },
    {
      name: 'Larisa Ariss',
      email: 'lariss2o@icq.com',
      loginId: 'lariss2o',
      password: 'JbSqg3soE',
      address: '41049 Upham Drive',
      phoneNum: '645-247-7743',
      isAdmin: true
    },
    {
      name: 'Padgett Dreng',
      email: 'pdreng2p@google.cn',
      loginId: 'pdreng2p',
      password: 'otRg3bWAS',
      address: '43999 Union Park',
      phoneNum: '767-726-6267',
      isAdmin: true
    },
    {
      name: 'Wernher Hefford',
      email: 'whefford2q@tinyurl.com',
      loginId: 'whefford2q',
      password: '9Pp3sOaCw',
      address: '40 Meadow Ridge Crossing',
      phoneNum: '881-340-6173',
      isAdmin: true
    },
    {
      name: 'Jeanie Lenton',
      email: 'jlenton2r@wordpress.com',
      loginId: 'jlenton2r',
      password: 'e97AMR8k7',
      address: '07069 Jay Circle',
      phoneNum: '517-110-4147',
      isAdmin: true
    }
  ]

  const users = await Promise.all([User.bulkCreate(dummyUsers)])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const products = [
    {
      name:
        'HomePop Parsons Classic Upholstered Accent Dining Chair, Set of 2, Gray',
      description:
        'Set of 2 chairs Patina Gray wood finished legs assemble required',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71%2B%2Bbg5LazL._AC_SL1500_.jpg',
      price: 135.99,
      size: 'regular',
      color: 'Gray',
      quantity: '25',
      isActive: true
    },
    {
      name: 'mecor Modern Armless Accent',
      description:
        'Chairs Set of 2, Upholstered Fabric Dining Chairs w/Solid Wood Legs for Dining Living Room Sofa (Letter-Print, Beige)',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81sqw7rbggL._AC_SL1500_.jpg',
      price: 129.99,
      size: 'regular',
      color: 'Gray',
      quantity: '25',
      isActive: true
    },
    {
      name: 'Upholstered Fabric Dining Chairs',
      description:
        'Upholstered Fabric Dining Chairs with Button-Tufted Details (Gray)',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71mkytn2NkL._AC_SL1500_.jpg',
      price: 146.99,
      size: 'regular',
      color: 'Gray',
      quantity: '25',
      isActive: true
    },
    {
      name: 'Yaheetech Dining Chair Living Dining Room PU',
      description:
        'Cushion Diner Chair Kitchen Dining Chairs with Solid Wood Legs Set of 4, Brown',
      category: 'Dining Room',
      imageUrl:
        'https://www.amazon.com/Yaheetech-Dining-Living-Cushion-Kitchen/dp/B081KZH2TM/ref=sr_1_9?crid=3KBXGAHAGMYL7&dchild=1&keywords=dining+room+chairs&qid=1587444267&s=home-garden&sprefix=dining+room%2Cgarden%2C140&sr=1-9',
      price: 135.99,
      size: 'regular',
      color: 'Brown',
      quantity: '25',
      isActive: true
    },

    {
      name: 'Huaki Modern Dining Chairs, Mid - Century',
      description:
        'Style Birds Nest Dining Room Chair for Home Kitchen Living Room Indoor Outdoor Black, Set of 4',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61Cp0anAodL._AC_SL1000_.jpg',
      price: 129.99,
      size: 'regular',
      color: 'Black',
      quantity: '25',
      isActive: true
    },

    {
      name:
        'Yaheetech Dining Room Chairs Kitchen Living Room Chairs Vanity  Makeup  Leisure',
      description:
        'Accent Upholstered Side Chairs with Soft Velvet Seat Backrest and Adjustable Wooden Style Metal Legs Set of 2, Pink',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61RAjTL%2BJDL._AC_SL1500_.jpg',
      price: 94.98,
      size: 'regular',
      color: 'Pink',
      quantity: '25',
      isActive: true
    },

    {
      name: 'Signature Design by Ashley - Glambrey Dining Room Chair Set',
      description: ' Scrolled Metal Accents - Set of 4 - Brown',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/7156tDkdKjL._AC_SL1500_.jpg',
      price: 197.0,
      size: 'regular',
      color: 'Brown',
      quantity: '25',
      isActive: true
    },

    {
      name:
        'Sole Designs The Julia Collection Contemporary Style Fabric Upholstered Armless Dining Side Chairs(Set of 2), Ruby',
      description:
        'SIZED TO PERFECTION, EVERLASTING CONSTRUCTION, CONTEMPORARY CHIC STYLE, DESIGNED WITH COMFORT IN MIND: PURCHASE WITH CONFIDENCE',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91aCIofrUkL._AC_SL1500_.jpg',
      price: 344.99,
      size: 'regular',
      color: 'Ruby',
      quantity: '25',
      isActive: true
    },

    {
      name:
        'BIRDROCK HOME Crossback Side Chairs - 2pc - Delivered Fully Assembled(Mahogany, Upholstered Side Chair)',
      description:
        'Modern design crafted from solid wood with a rich distressed finish and an elegant neutral upholstered seat',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71vQBiRncmL._AC_SL1500_.jpg',
      price: 245.92,
      size: 'regular',
      color: 'Mahogany',
      quantity: '25',
      isActive: true
    },

    {
      name: 'Inspire Q Wilmington II Window Back Wood Dining Side Chairs',
      description:
        'Set includes: Two(2) Wood Dining Chairs, Window back design, Distressed antique finishes',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91fH9vX1xFL._AC_SL1500_.jpg',
      price: 154.79,
      size: 'regular',
      color: 'Sage',
      quantity: '25',
      isActive: true
    }
  ]

  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )
  console.log(`seeded ${products.length} products`)
  console.log(`products seeded successfully`)

  const dummyOrders = [
    {userId: 1},
    {userId: 2},
    {userId: 3},
    {userId: 4},
    {userId: 5}
  ]
  const orders = await Promise.all([Order.bulkCreate(dummyOrders)])

  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)

  const dummyOrderProducts = [
    {
      // unitPrice: 13599,
      quantity: 4,
      orderId: 1,
      productId: 1
    },
    {
      // unitPrice: 12999,
      quantity: 4,
      orderId: 1,
      productId: 2
    },
    {
      // unitPrice: 14699,
      quantity: 4,
      orderId: 3,
      productId: 3
    },
    {
      // unitPrice: 13599,
      quantity: 4,
      orderId: 3,
      productId: 4
    },
    {
      // unitPrice: 12999,
      quantity: 4,
      orderId: 3,
      productId: 5
    }
  ]

  const orderProducts = await Promise.all([
    OrderProduct.bulkCreate(dummyOrderProducts)
  ])

  console.log(`seeded ${orderProducts.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
