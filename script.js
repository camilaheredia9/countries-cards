const containerCards = document.getElementById("container-cards");

const countries = 
[
    {
    "name": {
    "common": "Barbados",
    "official": "Barbados",
    "nativeName": {
    "eng": {
    "official": "Barbados",
    "common": "Barbados"
    }
    }
    },
    "tld": [
    ".bb"
    ],
    "cca2": "BB",
    "ccn3": "052",
    "cca3": "BRB",
    "cioc": "BAR",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "BBD": {
    "name": "Barbadian dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+1",
    "suffixes": [
    "246"
    ]
    },
    "capital": [
    "Bridgetown"
    ],
    "altSpellings": [
    "BB"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "languages": {
    "eng": "English"
    },
    "translations": {
    "ara": {
    "official": "باربادوس",
    "common": "باربادوس"
    },
    "bre": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "ces": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "cym": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "deu": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "est": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "fin": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "fra": {
    "official": "Barbade",
    "common": "Barbade"
    },
    "hrv": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "hun": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "ita": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "jpn": {
    "official": "バルバドス",
    "common": "バルバドス"
    },
    "kor": {
    "official": "바베이도스",
    "common": "바베이도스"
    },
    "nld": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "per": {
    "official": "باربادوس",
    "common": "باربادوس"
    },
    "pol": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "por": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "rus": {
    "official": "Барбадос",
    "common": "Барбадос"
    },
    "slk": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "spa": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "swe": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "tur": {
    "official": "Barbados",
    "common": "Barbados"
    },
    "urd": {
    "official": "بارباڈوس",
    "common": "بارباڈوس"
    },
    "zho": {
    "official": "巴巴多斯",
    "common": "巴巴多斯"
    }
    },
    "latlng": [
    13.16666666,
    -59.53333333
    ],
    "landlocked": false,
    "area": 430,
    "demonyms": {
    "eng": {
    "f": "Barbadian",
    "m": "Barbadian"
    },
    "fra": {
    "f": "Barbadienne",
    "m": "Barbadien"
    }
    },
    "flag": "🇧🇧",
    "maps": {
    "googleMaps": "https://goo.gl/maps/2m36v8STvbGAWd9c7",
    "openStreetMaps": "https://www.openstreetmap.org/relation/547511"
    },
    "population": 287371,
    "fifa": "BRB",
    "car": {
    "signs": [
    "BDS"
    ],
    "side": "left"
    },
    "timezones": [
    "UTC-04:00"
    ],
    "continents": [
    "North America"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/bb.png",
    "svg": "https://flagcdn.com/bb.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/bb.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/bb.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    13.1,
    -59.62
    ]
    },
    "postalCode": {
    "format": "BB#####",
    "regex": "^(?:BB)*(\\d{5})$"
    }
    },
    {
    "name": {
    "common": "British Indian Ocean Territory",
    "official": "British Indian Ocean Territory",
    "nativeName": {
    "eng": {
    "official": "British Indian Ocean Territory",
    "common": "British Indian Ocean Territory"
    }
    }
    },
    "tld": [
    ".io"
    ],
    "cca2": "IO",
    "ccn3": "086",
    "cca3": "IOT",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
    "USD": {
    "name": "United States dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+2",
    "suffixes": [
    "46"
    ]
    },
    "capital": [
    "Diego Garcia"
    ],
    "altSpellings": [
    "IO"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "languages": {
    "eng": "English"
    },
    "translations": {
    "ara": {
    "official": "إقليم المحيط الهندي البريطاني",
    "common": "إقليم المحيط الهندي البريطاني"
    },
    "bre": {
    "official": "Tiriad breizhveurat Meurvor Indez",
    "common": "Tiriad breizhveurat Meurvor Indez"
    },
    "ces": {
    "official": "Britské indickooceánské území",
    "common": "Britské indickooceánské území"
    },
    "cym": {
    "official": "Tiriogaeth Brydeinig Cefnfor India",
    "common": "Tiriogaeth Brydeinig Cefnfor India"
    },
    "deu": {
    "official": "Britisches Territorium im Indischen Ozean",
    "common": "Britisches Territorium im Indischen Ozean"
    },
    "est": {
    "official": "Briti India ookeani ala",
    "common": "Briti India ookeani ala"
    },
    "fin": {
    "official": "Brittiläinen Intian valtameren alue",
    "common": "Brittiläinen Intian valtameren alue"
    },
    "fra": {
    "official": "Territoire britannique de l' océan Indien",
    "common": "Territoire britannique de l'océan Indien"
    },
    "hrv": {
    "official": "British Indian Ocean Territory",
    "common": "Britanski Indijskooceanski teritorij"
    },
    "hun": {
    "official": "Brit Indiai-óceáni Terület",
    "common": "Brit Indiai-óceáni Terület"
    },
    "ita": {
    "official": "Territorio britannico dell'Oceano Indiano",
    "common": "Territorio britannico dell'oceano indiano"
    },
    "jpn": {
    "official": "イギリス領インド洋地域",
    "common": "イギリス領インド洋地域"
    },
    "kor": {
    "official": "인도 공화국",
    "common": "인도"
    },
    "nld": {
    "official": "Brits Indische Oceaan Territorium",
    "common": "Britse Gebieden in de Indische Oceaan"
    },
    "per": {
    "official": "قلمرو بریتانیا در اقیانوس هند",
    "common": "قلمرو بریتانیا در اقیانوس هند"
    },
    "pol": {
    "official": "Brytyjskie Terytorium Oceanu Indyjskiego",
    "common": "Brytyjskie Terytorium Oceanu Indyjskiego"
    },
    "por": {
    "official": "British Indian Ocean Territory",
    "common": "Território Britânico do Oceano Índico"
    },
    "rus": {
    "official": "Британская территория Индийского океана",
    "common": "Британская территория в Индийском океане"
    },
    "slk": {
    "official": "Britské indickooceánske územie",
    "common": "Britské indickooceánske územie"
    },
    "spa": {
    "official": "Territorio Británico del Océano Índico",
    "common": "Territorio Británico del Océano Índico"
    },
    "swe": {
    "official": "Brittiska territoriet i Indiska Oceanen",
    "common": "Brittiska territoriet i Indiska Oceanen"
    },
    "tur": {
    "official": "Britanya Hint Okyanusu Toprakları",
    "common": "Britanya Hint Okyanusu Toprakları"
    },
    "urd": {
    "official": "برطانوی بحرہند خطہ",
    "common": "برطانوی بحرہند خطہ"
    },
    "zho": {
    "official": "英属印度洋领地",
    "common": "英属印度洋领地"
    }
    },
    "latlng": [
    -6,
    71.5
    ],
    "landlocked": false,
    "area": 60,
    "demonyms": {
    "eng": {
    "f": "Indian",
    "m": "Indian"
    }
    },
    "flag": "🇮🇴",
    "maps": {
    "googleMaps": "https://goo.gl/maps/bheNucgekVEYozoi6",
    "openStreetMaps": "https://www.openstreetmap.org/relation/1993867"
    },
    "population": 3000,
    "car": {
    "signs": [
    "GB"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+06:00"
    ],
    "continents": [
    "Asia"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/io.png",
    "svg": "https://flagcdn.com/io.svg"
    },
    "coatOfArms": {},
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -7.3,
    72.4
    ]
    }
    },
    {
    "name": {
    "common": "Republic of the Congo",
    "official": "Republic of the Congo",
    "nativeName": {
    "fra": {
    "official": "République du Congo",
    "common": "République du Congo"
    },
    "kon": {
    "official": "Repubilika ya Kongo",
    "common": "Repubilika ya Kongo"
    },
    "lin": {
    "official": "Republíki ya Kongó",
    "common": "Republíki ya Kongó"
    }
    }
    },
    "tld": [
    ".cg"
    ],
    "cca2": "CG",
    "ccn3": "178",
    "cca3": "COG",
    "cioc": "CGO",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "XAF": {
    "name": "Central African CFA franc",
    "symbol": "Fr"
    }
    },
    "idd": {
    "root": "+2",
    "suffixes": [
    "42"
    ]
    },
    "capital": [
    "Brazzaville"
    ],
    "altSpellings": [
    "CG",
    "Congo",
    "Congo-Brazzaville"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "languages": {
    "fra": "French",
    "kon": "Kikongo",
    "lin": "Lingala"
    },
    "translations": {
    "ara": {
    "official": "جمهورية الكونغو",
    "common": "جمهورية الكونفو"
    },
    "bre": {
    "official": "Republik Kongo",
    "common": "Kongo-Brazzaville"
    },
    "ces": {
    "official": "Konžská republika",
    "common": "Kongo"
    },
    "cym": {
    "official": "Gweriniaeth y Congo",
    "common": "Gweriniaeth y Congo"
    },
    "deu": {
    "official": "Republik Kongo",
    "common": "Kongo"
    },
    "est": {
    "official": "Kongo Vabariik",
    "common": "Kongo Vabariik"
    },
    "fin": {
    "official": "Kongon tasavalta",
    "common": "Kongo-Brazzaville"
    },
    "fra": {
    "official": "République du Congo",
    "common": "Congo"
    },
    "hrv": {
    "official": "Republika Kongo",
    "common": "Kongo"
    },
    "hun": {
    "official": "Kongói Köztársaság",
    "common": "Kongói Köztársaság"
    },
    "ita": {
    "official": "Repubblica del Congo",
    "common": "Congo"
    },
    "jpn": {
    "official": "コンゴ共和国",
    "common": "コンゴ共和国"
    },
    "kor": {
    "official": "콩고",
    "common": "콩고"
    },
    "nld": {
    "official": "Republiek Congo",
    "common": "Congo"
    },
    "per": {
    "official": "جمهوری برازاویل کُنگو",
    "common": "جمهوری کُنگو"
    },
    "pol": {
    "official": "Republika Konga",
    "common": "Kongo"
    },
    "por": {
    "official": "República do Congo",
    "common": "Congo"
    },
    "rus": {
    "official": "Республика Конго",
    "common": "Республика Конго"
    },
    "slk": {
    "official": "Konžská republika",
    "common": "Kongo"
    },
    "spa": {
    "official": "República del Congo",
    "common": "Congo"
    },
    "swe": {
    "official": "Republiken Kongo",
    "common": "Kongo-Brazzaville"
    },
    "tur": {
    "official": "Kongo Cumhuriyeti",
    "common": "Kongo Cumhuriyeti"
    },
    "urd": {
    "official": "جمہوریہ کانگو",
    "common": "جمہوریہ کانگو"
    },
    "zho": {
    "official": "刚果共和国",
    "common": "刚果"
    }
    },
    "latlng": [
    -1,
    15
    ],
    "landlocked": false,
    "borders": [
    "AGO",
    "CMR",
    "CAF",
    "COD",
    "GAB"
    ],
    "area": 342000,
    "demonyms": {
    "eng": {
    "f": "Congolese",
    "m": "Congolese"
    },
    "fra": {
    "f": "Congolaise",
    "m": "Congolais"
    }
    },
    "flag": "🇨🇬",
    "maps": {
    "googleMaps": "https://goo.gl/maps/Phf5dDDKdfCtuBTb6",
    "openStreetMaps": "https://www.openstreetmap.org/relation/192794"
    },
    "population": 5657000,
    "gini": {
    "2011": 48.9
    },
    "fifa": "CGO",
    "car": {
    "signs": [
    "RCB"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+01:00"
    ],
    "continents": [
    "Africa"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/cg.png",
    "svg": "https://flagcdn.com/cg.svg"
    },
    "coatOfArms": {},
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -4.25,
    15.28
    ]
    }
    },
    {
    "name": {
    "common": "Brazil",
    "official": "Federative Republic of Brazil",
    "nativeName": {
    "por": {
    "official": "República Federativa do Brasil",
    "common": "Brasil"
    }
    }
    },
    "tld": [
    ".br"
    ],
    "cca2": "BR",
    "ccn3": "076",
    "cca3": "BRA",
    "cioc": "BRA",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "BRL": {
    "name": "Brazilian real",
    "symbol": "R$"
    }
    },
    "idd": {
    "root": "+5",
    "suffixes": [
    "5"
    ]
    },
    "capital": [
    "Brasília"
    ],
    "altSpellings": [
    "BR",
    "Brasil",
    "Federative Republic of Brazil",
    "República Federativa do Brasil"
    ],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
    "por": "Portuguese"
    },
    "translations": {
    "ara": {
    "official": "جمهورية البرازيل الاتحادية",
    "common": "البرازيل"
    },
    "bre": {
    "official": "Republik Kevreel Brazil",
    "common": "Brazil"
    },
    "ces": {
    "official": "Brazilská federativní republika",
    "common": "Brazílie"
    },
    "cym": {
    "official": "Gweriniaeth Ffederal Brasil",
    "common": "Brasil"
    },
    "deu": {
    "official": "Föderative Republik Brasilien",
    "common": "Brasilien"
    },
    "est": {
    "official": "Brasiilia Liitvabariik",
    "common": "Brasiilia"
    },
    "fin": {
    "official": "Brasilian liittotasavalta",
    "common": "Brasilia"
    },
    "fra": {
    "official": "République fédérative du Brésil",
    "common": "Brésil"
    },
    "hrv": {
    "official": "Savezne Republike Brazil",
    "common": "Brazil"
    },
    "hun": {
    "official": "Brazil Szövetségi Köztársaság",
    "common": "Brazília"
    },
    "ita": {
    "official": "Repubblica federativa del Brasile",
    "common": "Brasile"
    },
    "jpn": {
    "official": "ブラジル連邦共和国",
    "common": "ブラジル"
    },
    "kor": {
    "official": "브라질 연방 공화국",
    "common": "브라질"
    },
    "nld": {
    "official": "Federale Republiek Brazilië",
    "common": "Brazilië"
    },
    "per": {
    "official": "جمهوری فدراتیو برزیل",
    "common": "برزیل"
    },
    "pol": {
    "official": "Federacyjna Republika Brazylii",
    "common": "Brazylia"
    },
    "por": {
    "official": "República Federativa do Brasil",
    "common": "Brasil"
    },
    "rus": {
    "official": "Федеративная Республика Бразилия",
    "common": "Бразилия"
    },
    "slk": {
    "official": "Brazílska federatívna republika",
    "common": "Brazília"
    },
    "spa": {
    "official": "República Federativa del Brasil",
    "common": "Brasil"
    },
    "swe": {
    "official": "Förbundsrepubliken Brasilien",
    "common": "Brasilien"
    },
    "tur": {
    "official": "Brezilya Federal Cumhuriyeti",
    "common": "Brezilya"
    },
    "urd": {
    "official": "وفاقی جمہوریہ برازیل",
    "common": "برازیل"
    },
    "zho": {
    "official": "巴西联邦共和国",
    "common": "巴西"
    }
    },
    "latlng": [
    -10,
    -55
    ],
    "landlocked": false,
    "borders": [
    "ARG",
    "BOL",
    "COL",
    "GUF",
    "GUY",
    "PRY",
    "PER",
    "SUR",
    "URY",
    "VEN"
    ],
    "area": 8515767,
    "demonyms": {
    "eng": {
    "f": "Brazilian",
    "m": "Brazilian"
    },
    "fra": {
    "f": "Brésilienne",
    "m": "Brésilien"
    }
    },
    "flag": "🇧🇷",
    "maps": {
    "googleMaps": "https://goo.gl/maps/waCKk21HeeqFzkNC9",
    "openStreetMaps": "https://www.openstreetmap.org/relation/59470"
    },
    "population": 212559409,
    "gini": {
    "2019": 53.4
    },
    "fifa": "BRA",
    "car": {
    "signs": [
    "BR"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC-05:00",
    "UTC-04:00",
    "UTC-03:00",
    "UTC-02:00"
    ],
    "continents": [
    "South America"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/br.png",
    "svg": "https://flagcdn.com/br.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/br.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/br.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -15.79,
    -47.88
    ]
    },
    "postalCode": {
    "format": "#####-###",
    "regex": "^(\\d{8})$"
    }
    },
    {
    "name": {
    "common": "Luxembourg",
    "official": "Grand Duchy of Luxembourg",
    "nativeName": {
    "deu": {
    "official": "Großherzogtum Luxemburg",
    "common": "Luxemburg"
    },
    "fra": {
    "official": "Grand-Duché de Luxembourg",
    "common": "Luxembourg"
    },
    "ltz": {
    "official": "Groussherzogtum Lëtzebuerg",
    "common": "Lëtzebuerg"
    }
    }
    },
    "tld": [
    ".lu"
    ],
    "cca2": "LU",
    "ccn3": "442",
    "cca3": "LUX",
    "cioc": "LUX",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "EUR": {
    "name": "Euro",
    "symbol": "€"
    }
    },
    "idd": {
    "root": "+3",
    "suffixes": [
    "52"
    ]
    },
    "capital": [
    "Luxembourg"
    ],
    "altSpellings": [
    "LU",
    "Grand Duchy of Luxembourg",
    "Grand-Duché de Luxembourg",
    "Großherzogtum Luxemburg",
    "Groussherzogtum Lëtzebuerg"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "languages": {
    "deu": "German",
    "fra": "French",
    "ltz": "Luxembourgish"
    },
    "translations": {
    "ara": {
    "official": "دوقية لوكسمبورغ",
    "common": "لوكسمبورغ"
    },
    "bre": {
    "official": "Dugelezh Veur Luksembourg",
    "common": "Luksembourg"
    },
    "ces": {
    "official": "Lucemburské velkovévodství",
    "common": "Lucembursko"
    },
    "cym": {
    "official": "Grand Duchy of Luxembourg",
    "common": "Luxembourg"
    },
    "deu": {
    "official": "Großherzogtum Luxemburg,",
    "common": "Luxemburg"
    },
    "est": {
    "official": "Luksemburgi Suurhertsogiriik",
    "common": "Luksemburg"
    },
    "fin": {
    "official": "Luxemburgin suurherttuakunta",
    "common": "Luxemburg"
    },
    "fra": {
    "official": "Grand-Duché de Luxembourg",
    "common": "Luxembourg"
    },
    "hrv": {
    "official": "Veliko Vojvodstvo Luksemburg",
    "common": "Luksemburg"
    },
    "hun": {
    "official": "Luxemburgi Nagyhercegség",
    "common": "Luxemburg"
    },
    "ita": {
    "official": "Granducato di Lussemburgo",
    "common": "Lussemburgo"
    },
    "jpn": {
    "official": "ルクセンブルク大公国",
    "common": "ルクセンブルク"
    },
    "kor": {
    "official": "룩셈부르크 대공국",
    "common": "룩셈부르크"
    },
    "nld": {
    "official": "Groothertogdom Luxemburg",
    "common": "Luxemburg"
    },
    "per": {
    "official": "دوک‌نشین لوکزامبورگ",
    "common": "لوکزامبورگ"
    },
    "pol": {
    "official": "Wielkie Księstwo Luksemburga",
    "common": "Luksemburg"
    },
    "por": {
    "official": "Grão-Ducado do Luxemburgo",
    "common": "Luxemburgo"
    },
    "rus": {
    "official": "Великое Герцогство Люксембург",
    "common": "Люксембург"
    },
    "slk": {
    "official": "Luxemburské veľkovojvodstvo",
    "common": "Luxembursko"
    },
    "spa": {
    "official": "Gran Ducado de Luxemburgo",
    "common": "Luxemburgo"
    },
    "swe": {
    "official": "Storhertigdömet Luxemburg",
    "common": "Luxemburg"
    },
    "tur": {
    "official": "Lüksemburg Büyük Dükalığı",
    "common": "Lüksemburg"
    },
    "urd": {
    "official": "دوقیہ کبیرلکسمبرگ",
    "common": "لکسمبرگ"
    },
    "zho": {
    "official": "卢森堡大公国",
    "common": "卢森堡"
    }
    },
    "latlng": [
    49.75,
    6.16666666
    ],
    "landlocked": true,
    "borders": [
    "BEL",
    "FRA",
    "DEU"
    ],
    "area": 2586,
    "demonyms": {
    "eng": {
    "f": "Luxembourger",
    "m": "Luxembourger"
    },
    "fra": {
    "f": "Luxembourgeoise",
    "m": "Luxembourgeois"
    }
    },
    "flag": "🇱🇺",
    "maps": {
    "googleMaps": "https://goo.gl/maps/L6b2AgndgHprt2Ko9",
    "openStreetMaps": "https://www.openstreetmap.org/relation/2171347#map=10/49.8167/6.1335"
    },
    "population": 632275,
    "gini": {
    "2018": 35.4
    },
    "fifa": "LUX",
    "car": {
    "signs": [
    "L"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+01:00"
    ],
    "continents": [
    "Europe"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/lu.png",
    "svg": "https://flagcdn.com/lu.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/lu.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/lu.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    49.6,
    6.12
    ]
    },
    "postalCode": {
    "format": "####",
    "regex": "^(\\d{4})$"
    }
    },
    {
    "name": {
    "common": "United States Virgin Islands",
    "official": "Virgin Islands of the United States",
    "nativeName": {
    "eng": {
    "official": "Virgin Islands of the United States",
    "common": "United States Virgin Islands"
    }
    }
    },
    "tld": [
    ".vi"
    ],
    "cca2": "VI",
    "ccn3": "850",
    "cca3": "VIR",
    "cioc": "ISV",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
    "USD": {
    "name": "United States dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+1",
    "suffixes": [
    "340"
    ]
    },
    "capital": [
    "Charlotte Amalie"
    ],
    "altSpellings": [
    "VI",
    "Virgin Islands, U.S."
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "languages": {
    "eng": "English"
    },
    "translations": {
    "ara": {
    "official": "جزر العذراء الامريكية",
    "common": "جزر العذراء الامريكية"
    },
    "bre": {
    "official": "Inizi Gwerc'h ar Stadoù-Unanet",
    "common": "Inizi Gwerc'h ar Stadoù-Unanet"
    },
    "ces": {
    "official": "Americké Panenské ostrovy",
    "common": "Americké Panenské ostrovy"
    },
    "cym": {
    "official": "Virgin Islands of the United States",
    "common": "United States Virgin Islands"
    },
    "deu": {
    "official": "Amerikanische Jungferninseln",
    "common": "Amerikanische Jungferninseln"
    },
    "est": {
    "official": "Ühendriikide Neitsisaared",
    "common": "Neitsisaared, USA"
    },
    "fin": {
    "official": "Yhdysvaltain Neitsytsaaret",
    "common": "Neitsytsaaret"
    },
    "fra": {
    "official": "Îles Vierges des États-Unis",
    "common": "Îles Vierges des États-Unis"
    },
    "hrv": {
    "official": "Djevičanski Otoci SAD",
    "common": "Američki Djevičanski Otoci"
    },
    "hun": {
    "official": "Amerikai Virgin-szigetek",
    "common": "Amerikai Virgin-szigetek"
    },
    "ita": {
    "official": "Isole Vergini degli Stati Uniti",
    "common": "Isole Vergini americane"
    },
    "jpn": {
    "official": "米国のバージン諸島",
    "common": "アメリカ領ヴァージン諸島"
    },
    "kor": {
    "official": "미국령 버진아일랜드",
    "common": "미국령 버진아일랜드"
    },
    "nld": {
    "official": "Maagdeneilanden van de Verenigde Staten",
    "common": "Amerikaanse Maagdeneilanden"
    },
    "per": {
    "official": "جزایر ویرجین ایالات متحده آمریکا",
    "common": "جزایر ویرجین ایالات متحده آمریکا"
    },
    "pol": {
    "official": "Wyspy Dziewicze Stanów Zjednoczonych",
    "common": "Wyspy Dziewicze Stanów Zjednoczonych"
    },
    "por": {
    "official": "Ilhas Virgens dos Estados Unidos",
    "common": "Ilhas Virgens dos Estados Unidos"
    },
    "rus": {
    "official": "Виргинские острова Соединенных Штатов",
    "common": "Виргинские Острова"
    },
    "slk": {
    "official": "Americké Panenské ostrovy",
    "common": "Americké Panenské ostrovy"
    },
    "spa": {
    "official": "Islas Vírgenes de los Estados Unidos",
    "common": "Islas Vírgenes de los Estados Unidos"
    },
    "swe": {
    "official": "Amerikanska Jungfruöarna",
    "common": "Amerikanska Jungfruöarna"
    },
    "tur": {
    "official": "Amerika Birleşik Devletleri Virjin Adaları",
    "common": "ABD Virjin Adaları"
    },
    "urd": {
    "official": "امریکی جزائر ورجن",
    "common": "امریکی جزائر ورجن"
    },
    "zho": {
    "official": "美属维尔京群岛",
    "common": "美属维尔京群岛"
    }
    },
    "latlng": [
    18.35,
    -64.933333
    ],
    "landlocked": false,
    "area": 347,
    "demonyms": {
    "eng": {
    "f": "Virgin Islander",
    "m": "Virgin Islander"
    }
    },
    "flag": "🇻🇮",
    "maps": {
    "googleMaps": "https://goo.gl/maps/mBfreywj8dor6q4m9",
    "openStreetMaps": "openstreetmap.org/relation/286898"
    },
    "population": 106290,
    "fifa": "VIR",
    "car": {
    "signs": [
    "USA"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC-04:00"
    ],
    "continents": [
    "North America"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/vi.png",
    "svg": "https://flagcdn.com/vi.svg"
    },
    "coatOfArms": {},
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    18.35,
    -64.93
    ]
    }
    },
    {
    "name": {
    "common": "Kiribati",
    "official": "Independent and Sovereign Republic of Kiribati",
    "nativeName": {
    "eng": {
    "official": "Independent and Sovereign Republic of Kiribati",
    "common": "Kiribati"
    },
    "gil": {
    "official": "Ribaberiki Kiribati",
    "common": "Kiribati"
    }
    }
    },
    "tld": [
    ".ki"
    ],
    "cca2": "KI",
    "ccn3": "296",
    "cca3": "KIR",
    "cioc": "KIR",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "AUD": {
    "name": "Australian dollar",
    "symbol": "$"
    },
    "KID": {
    "name": "Kiribati dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+6",
    "suffixes": [
    "86"
    ]
    },
    "capital": [
    "South Tarawa"
    ],
    "altSpellings": [
    "KI",
    "Republic of Kiribati",
    "Ribaberiki Kiribati"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "languages": {
    "eng": "English",
    "gil": "Gilbertese"
    },
    "translations": {
    "ara": {
    "official": "جمهورية كيريباتي",
    "common": "كيريباتي"
    },
    "bre": {
    "official": "Republik Kiribati",
    "common": "Kiribati"
    },
    "ces": {
    "official": "Republika Kiribati",
    "common": "Kiribati"
    },
    "cym": {
    "official": "Independent and Sovereign Republic of Kiribati",
    "common": "Kiribati"
    },
    "deu": {
    "official": "Republik Kiribati",
    "common": "Kiribati"
    },
    "est": {
    "official": "Kiribati Vabariik",
    "common": "Kiribati"
    },
    "fin": {
    "official": "Kiribatin tasavalta",
    "common": "Kiribati"
    },
    "fra": {
    "official": "République de Kiribati",
    "common": "Kiribati"
    },
    "hrv": {
    "official": "Samostalne i suverene Republike Kiribati",
    "common": "Kiribati"
    },
    "hun": {
    "official": "Kiribati Köztársaság",
    "common": "Kiribati"
    },
    "ita": {
    "official": "Repubblica indipendente e sovrano di Kiribati",
    "common": "Kiribati"
    },
    "jpn": {
    "official": "キリバスの独立と主権共和国",
    "common": "キリバス"
    },
    "kor": {
    "official": "키리바시 공화국",
    "common": "키리바시"
    },
    "nld": {
    "official": "Onafhankelijke en soevereine republiek Kiribati",
    "common": "Kiribati"
    },
    "per": {
    "official": "جمهوری کیریباتی",
    "common": "کیریباتی"
    },
    "pol": {
    "official": "Republika Kiribati",
    "common": "Kiribati"
    },
    "por": {
    "official": "Independente e soberano República de Kiribati",
    "common": "Kiribati"
    },
    "rus": {
    "official": "Независимой и суверенной Республики Кирибати",
    "common": "Кирибати"
    },
    "slk": {
    "official": "Kiribatská republika",
    "common": "Kiribati"
    },
    "spa": {
    "official": "República Independiente y Soberano de Kiribati",
    "common": "Kiribati"
    },
    "swe": {
    "official": "Republiken Kiribati",
    "common": "Kiribati"
    },
    "tur": {
    "official": "Kiribati Cumhuriyeti",
    "common": "Kiribati"
    },
    "urd": {
    "official": "سلطنت آزاد جمہوریہ کیریباتی",
    "common": "کیریباتی"
    },
    "zho": {
    "official": "基里巴斯共和国",
    "common": "基里巴斯"
    }
    },
    "latlng": [
    1.41666666,
    173
    ],
    "landlocked": false,
    "area": 811,
    "demonyms": {
    "eng": {
    "f": "I-Kiribati",
    "m": "I-Kiribati"
    },
    "fra": {
    "f": "Kiribatienne",
    "m": "Kiribatien"
    }
    },
    "flag": "🇰🇮",
    "maps": {
    "googleMaps": "https://goo.gl/maps/NBfYvrndW4skAimw9",
    "openStreetMaps": "https://www.openstreetmap.org/relation/571178"
    },
    "population": 119446,
    "gini": {
    "2006": 37
    },
    "car": {
    "signs": [
    "KIR"
    ],
    "side": "left"
    },
    "timezones": [
    "UTC+12:00",
    "UTC+13:00",
    "UTC+14:00"
    ],
    "continents": [
    "Oceania"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/ki.png",
    "svg": "https://flagcdn.com/ki.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/ki.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/ki.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    1.33,
    172.98
    ]
    }
    },
    {
    "name": {
    "common": "Romania",
    "official": "Romania",
    "nativeName": {
    "ron": {
    "official": "România",
    "common": "România"
    }
    }
    },
    "tld": [
    ".ro"
    ],
    "cca2": "RO",
    "ccn3": "642",
    "cca3": "ROU",
    "cioc": "ROU",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "RON": {
    "name": "Romanian leu",
    "symbol": "lei"
    }
    },
    "idd": {
    "root": "+4",
    "suffixes": [
    "0"
    ]
    },
    "capital": [
    "Bucharest"
    ],
    "altSpellings": [
    "RO",
    "Rumania",
    "Roumania",
    "România"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "languages": {
    "ron": "Romanian"
    },
    "translations": {
    "ara": {
    "official": "رومانيا",
    "common": "رومانيا"
    },
    "bre": {
    "official": "Roumania",
    "common": "Roumania"
    },
    "ces": {
    "official": "Rumunsko",
    "common": "Rumunsko"
    },
    "cym": {
    "official": "Romania",
    "common": "Romania"
    },
    "deu": {
    "official": "Rumänien",
    "common": "Rumänien"
    },
    "est": {
    "official": "Rumeenia",
    "common": "Rumeenia"
    },
    "fin": {
    "official": "Romania",
    "common": "Romania"
    },
    "fra": {
    "official": "Roumanie",
    "common": "Roumanie"
    },
    "hrv": {
    "official": "Rumunija",
    "common": "Rumunjska"
    },
    "hun": {
    "official": "Románia",
    "common": "Románia"
    },
    "ita": {
    "official": "Romania",
    "common": "Romania"
    },
    "jpn": {
    "official": "ルーマニア",
    "common": "ルーマニア"
    },
    "kor": {
    "official": "루마니아",
    "common": "루마니아"
    },
    "nld": {
    "official": "Roemenië",
    "common": "Roemenië"
    },
    "per": {
    "official": "رومانی",
    "common": "رومانی"
    },
    "pol": {
    "official": "Rumunia",
    "common": "Rumunia"
    },
    "por": {
    "official": "Romênia",
    "common": "Roménia"
    },
    "rus": {
    "official": "Румыния",
    "common": "Румыния"
    },
    "slk": {
    "official": "Rumunsko",
    "common": "Rumunsko"
    },
    "spa": {
    "official": "Rumania",
    "common": "Rumania"
    },
    "swe": {
    "official": "Rumänien",
    "common": "Rumänien"
    },
    "tur": {
    "official": "Romanya",
    "common": "Romanya"
    },
    "urd": {
    "official": "رومانیہ",
    "common": "رومانیہ"
    },
    "zho": {
    "official": "罗马尼亚",
    "common": "罗马尼亚"
    }
    },
    "latlng": [
    46,
    25
    ],
    "landlocked": false,
    "borders": [
    "BGR",
    "HUN",
    "MDA",
    "SRB",
    "UKR"
    ],
    "area": 238391,
    "demonyms": {
    "eng": {
    "f": "Romanian",
    "m": "Romanian"
    },
    "fra": {
    "f": "Roumaine",
    "m": "Roumain"
    }
    },
    "flag": "🇷🇴",
    "maps": {
    "googleMaps": "https://goo.gl/maps/845hAgCf1mDkN3vr7",
    "openStreetMaps": "https://www.openstreetmap.org/relation/90689"
    },
    "population": 19286123,
    "gini": {
    "2018": 35.8
    },
    "fifa": "ROU",
    "car": {
    "signs": [
    "RO"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+02:00"
    ],
    "continents": [
    "Europe"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/ro.png",
    "svg": "https://flagcdn.com/ro.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/ro.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/ro.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    44.43,
    26.1
    ]
    },
    "postalCode": {
    "format": "######",
    "regex": "^(\\d{6})$"
    }
    },
    {
    "name": {
    "common": "Laos",
    "official": "Lao People's Democratic Republic",
    "nativeName": {
    "lao": {
    "official": "ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ",
    "common": "ສປປລາວ"
    }
    }
    },
    "tld": [
    ".la"
    ],
    "cca2": "LA",
    "ccn3": "418",
    "cca3": "LAO",
    "cioc": "LAO",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "LAK": {
    "name": "Lao kip",
    "symbol": "₭"
    }
    },
    "idd": {
    "root": "+8",
    "suffixes": [
    "56"
    ]
    },
    "capital": [
    "Vientiane"
    ],
    "altSpellings": [
    "LA",
    "Lao",
    "Lao People's Democratic Republic",
    "Sathalanalat Paxathipatai Paxaxon Lao"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "languages": {
    "lao": "Lao"
    },
    "translations": {
    "ara": {
    "official": "جمهورية لاوس الديمقراطية الشعبية",
    "common": "لاوس"
    },
    "bre": {
    "official": "Republik Demokratel ar Bobl Lao",
    "common": "Laos"
    },
    "ces": {
    "official": "Laoská lidově demokratická republika",
    "common": "Laos"
    },
    "cym": {
    "official": "Lao People's Democratic Republic",
    "common": "Laos"
    },
    "deu": {
    "official": "Demokratische Volksrepublik Laos",
    "common": "Laos"
    },
    "est": {
    "official": "Laose Demokraatlik Rahvavabariik",
    "common": "Laos"
    },
    "fin": {
    "official": "Laosin demokraattinen kansantasavalta",
    "common": "Laos"
    },
    "fra": {
    "official": "République démocratique populaire lao",
    "common": "Laos"
    },
    "hrv": {
    "official": "Narodna Demokratska Republika",
    "common": "Laos"
    },
    "hun": {
    "official": "Laoszi Népi Demokratikus Köztársaság",
    "common": "Laosz"
    },
    "ita": {
    "official": "Repubblica democratica popolare del Laos",
    "common": "Laos"
    },
    "jpn": {
    "official": "ラオス人民民主共和国",
    "common": "ラオス人民民主共和国"
    },
    "kor": {
    "official": "라오 인민 민주 공화국",
    "common": "라오스"
    },
    "nld": {
    "official": "Lao Democratische Volksrepubliek",
    "common": "Laos"
    },
    "per": {
    "official": "جمهوری دموکراتیک خلق لائوس",
    "common": "لائوس"
    },
    "pol": {
    "official": "Laotańska Republika Ludowo-Demokratyczna",
    "common": "Laos"
    },
    "por": {
    "official": "Laos, República Democrática",
    "common": "Laos"
    },
    "rus": {
    "official": "Лаосская Народно-Демократическая Республика",
    "common": "Лаос"
    },
    "slk": {
    "official": "Laoská ľudovodemokratická republika",
    "common": "Laos"
    },
    "spa": {
    "official": "República Democrática Popular Lao",
    "common": "Laos"
    },
    "swe": {
    "official": "Demokratiska folkrepubliken Laos",
    "common": "Laos"
    },
    "tur": {
    "official": "Laos Demokratik Halk Cumhuriyeti",
    "common": "Laos"
    },
    "urd": {
    "official": "عوامی جمہوری جمہوریہ لاؤ",
    "common": "لاؤس"
    },
    "zho": {
    "official": "老挝人民民主共和国",
    "common": "老挝"
    }
    },
    "latlng": [
    18,
    105
    ],
    "landlocked": true,
    "borders": [
    "MMR",
    "KHM",
    "CHN",
    "THA",
    "VNM"
    ],
    "area": 236800,
    "demonyms": {
    "eng": {
    "f": "Laotian",
    "m": "Laotian"
    },
    "fra": {
    "f": "Laotienne",
    "m": "Laotien"
    }
    },
    "flag": "🇱🇦",
    "maps": {
    "googleMaps": "https://goo.gl/maps/F3asVB7sRKgSnwbE7",
    "openStreetMaps": "https://www.openstreetmap.org/relation/49903"
    },
    "population": 7275556,
    "gini": {
    "2018": 38.8
    },
    "fifa": "LAO",
    "car": {
    "signs": [
    "LAO"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+07:00"
    ],
    "continents": [
    "Asia"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/la.png",
    "svg": "https://flagcdn.com/la.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/la.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/la.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    17.97,
    102.6
    ]
    },
    "postalCode": {
    "format": "#####",
    "regex": "^(\\d{5})$"
    }
    },
    {
    "name": {
    "common": "Malta",
    "official": "Republic of Malta",
    "nativeName": {
    "eng": {
    "official": "Republic of Malta",
    "common": "Malta"
    },
    "mlt": {
    "official": "Repubblika ta ' Malta",
    "common": "Malta"
    }
    }
    },
    "tld": [
    ".mt"
    ],
    "cca2": "MT",
    "ccn3": "470",
    "cca3": "MLT",
    "cioc": "MLT",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "EUR": {
    "name": "Euro",
    "symbol": "€"
    }
    },
    "idd": {
    "root": "+3",
    "suffixes": [
    "56"
    ]
    },
    "capital": [
    "Valletta"
    ],
    "altSpellings": [
    "MT",
    "Republic of Malta",
    "Repubblika ta' Malta"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "languages": {
    "eng": "English",
    "mlt": "Maltese"
    },
    "translations": {
    "ara": {
    "official": "جمهورية مالطا",
    "common": "مالطا"
    },
    "bre": {
    "official": "Republik Malta",
    "common": "Malta"
    },
    "ces": {
    "official": "Maltská republika",
    "common": "Malta"
    },
    "cym": {
    "official": "Republic of Malta",
    "common": "Malta"
    },
    "deu": {
    "official": "Republik Malta",
    "common": "Malta"
    },
    "est": {
    "official": "Malta Vabariik",
    "common": "Malta"
    },
    "fin": {
    "official": "Maltan tasavalta",
    "common": "Malta"
    },
    "fra": {
    "official": "République de Malte",
    "common": "Malte"
    },
    "hrv": {
    "official": "Republika Malta",
    "common": "Malta"
    },
    "hun": {
    "official": "Máltai Köztársaság",
    "common": "Málta"
    },
    "ita": {
    "official": "Repubblica di Malta",
    "common": "Malta"
    },
    "jpn": {
    "official": "マルタ共和国",
    "common": "マルタ"
    },
    "kor": {
    "official": "몰타 공화국",
    "common": "몰타"
    },
    "nld": {
    "official": "Republiek Malta",
    "common": "Malta"
    },
    "per": {
    "official": "جمهوری مالت",
    "common": "مالت"
    },
    "pol": {
    "official": "Republika Malty",
    "common": "Malta"
    },
    "por": {
    "official": "República de Malta",
    "common": "Malta"
    },
    "rus": {
    "official": "Республика Мальта",
    "common": "Мальта"
    },
    "slk": {
    "official": "Maltská republika",
    "common": "Malta"
    },
    "spa": {
    "official": "República de Malta",
    "common": "Malta"
    },
    "swe": {
    "official": "Republiken Malta",
    "common": "Malta"
    },
    "tur": {
    "official": "Malta Cumhuriyeti",
    "common": "Malta"
    },
    "urd": {
    "official": "جمہوریہ مالٹا",
    "common": "مالٹا"
    },
    "zho": {
    "official": "马耳他共和国",
    "common": "马耳他"
    }
    },
    "latlng": [
    35.83333333,
    14.58333333
    ],
    "landlocked": false,
    "area": 316,
    "demonyms": {
    "eng": {
    "f": "Maltese",
    "m": "Maltese"
    },
    "fra": {
    "f": "Maltaise",
    "m": "Maltais"
    }
    },
    "flag": "🇲🇹",
    "maps": {
    "googleMaps": "https://goo.gl/maps/skXCqguxDxxEKVk47",
    "openStreetMaps": "https://www.openstreetmap.org/relation/365307"
    },
    "population": 525285,
    "gini": {
    "2018": 28.7
    },
    "fifa": "MLT",
    "car": {
    "signs": [
    "M"
    ],
    "side": "left"
    },
    "timezones": [
    "UTC+01:00"
    ],
    "continents": [
    "Europe"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/mt.png",
    "svg": "https://flagcdn.com/mt.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/mt.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/mt.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    35.88,
    14.5
    ]
    },
    "postalCode": {
    "format": "@@@ ###|@@@ ##",
    "regex": "^([A-Z]{3}\\d{2}\\d?)$"
    }
    },
    {
    "name": {
    "common": "Togo",
    "official": "Togolese Republic",
    "nativeName": {
    "fra": {
    "official": "République togolaise",
    "common": "Togo"
    }
    }
    },
    "tld": [
    ".tg"
    ],
    "cca2": "TG",
    "ccn3": "768",
    "cca3": "TGO",
    "cioc": "TOG",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "XOF": {
    "name": "West African CFA franc",
    "symbol": "Fr"
    }
    },
    "idd": {
    "root": "+2",
    "suffixes": [
    "28"
    ]
    },
    "capital": [
    "Lomé"
    ],
    "altSpellings": [
    "TG",
    "Togolese",
    "Togolese Republic",
    "République Togolaise"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "languages": {
    "fra": "French"
    },
    "translations": {
    "ara": {
    "official": "جمهورية توغو",
    "common": "توغو"
    },
    "bre": {
    "official": "Republik Togoat",
    "common": "Togo"
    },
    "ces": {
    "official": "Republika Togo",
    "common": "Togo"
    },
    "cym": {
    "official": "Togolese Republic",
    "common": "Togo"
    },
    "deu": {
    "official": "Republik Togo",
    "common": "Togo"
    },
    "est": {
    "official": "Togo Vabariik",
    "common": "Togo"
    },
    "fin": {
    "official": "Togon tasavalta",
    "common": "Togo"
    },
    "fra": {
    "official": "République togolaise",
    "common": "Togo"
    },
    "hrv": {
    "official": "Togolese Republika",
    "common": "Togo"
    },
    "hun": {
    "official": "Togói Köztársaság",
    "common": "Togo"
    },
    "ita": {
    "official": "Repubblica del Togo",
    "common": "Togo"
    },
    "jpn": {
    "official": "トーゴ共和国",
    "common": "トーゴ"
    },
    "kor": {
    "official": "토고 공화국",
    "common": "토고"
    },
    "nld": {
    "official": "Republiek Togo",
    "common": "Togo"
    },
    "per": {
    "official": "جمهوری توگو",
    "common": "توگو"
    },
    "pol": {
    "official": "Republika Togijska",
    "common": "Togo"
    },
    "por": {
    "official": "República do Togo",
    "common": "Togo"
    },
    "rus": {
    "official": "Того Республика",
    "common": "Того"
    },
    "slk": {
    "official": "Togská republika",
    "common": "Togo"
    },
    "spa": {
    "official": "República de Togo",
    "common": "Togo"
    },
    "swe": {
    "official": "Republiken Togo",
    "common": "Togo"
    },
    "tur": {
    "official": "Togo Cumhuriyeti",
    "common": "Togo"
    },
    "urd": {
    "official": "جمہوریہ ٹوگو",
    "common": "ٹوگو"
    },
    "zho": {
    "official": "多哥共和国",
    "common": "多哥"
    }
    },
    "latlng": [
    8,
    1.16666666
    ],
    "landlocked": false,
    "borders": [
    "BEN",
    "BFA",
    "GHA"
    ],
    "area": 56785,
    "demonyms": {
    "eng": {
    "f": "Togolese",
    "m": "Togolese"
    },
    "fra": {
    "f": "Togolaise",
    "m": "Togolais"
    }
    },
    "flag": "🇹🇬",
    "maps": {
    "googleMaps": "https://goo.gl/maps/jzAa9feXuXPrKVb89",
    "openStreetMaps": "https://www.openstreetmap.org/relation/192782"
    },
    "population": 8278737,
    "gini": {
    "2015": 43.1
    },
    "fifa": "TOG",
    "car": {
    "signs": [
    "TG"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC"
    ],
    "continents": [
    "Africa"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/tg.png",
    "svg": "https://flagcdn.com/tg.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/tg.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/tg.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    6.14,
    1.21
    ]
    }
    },
    {
    "name": {
    "common": "Iraq",
    "official": "Republic of Iraq",
    "nativeName": {
    "ara": {
    "official": "جمهورية العراق",
    "common": "العراق"
    },
    "arc": {
    "official": "ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ",
    "common": "ܩܘܼܛܢܵܐ"
    },
    "ckb": {
    "official": "کۆماری عێراق",
    "common": "کۆماری"
    }
    }
    },
    "tld": [
    ".iq"
    ],
    "cca2": "IQ",
    "ccn3": "368",
    "cca3": "IRQ",
    "cioc": "IRQ",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "IQD": {
    "name": "Iraqi dinar",
    "symbol": "ع.د"
    }
    },
    "idd": {
    "root": "+9",
    "suffixes": [
    "64"
    ]
    },
    "capital": [
    "Baghdad"
    ],
    "altSpellings": [
    "IQ",
    "Republic of Iraq",
    "Jumhūriyyat al-‘Irāq"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "languages": {
    "ara": "Arabic",
    "arc": "Aramaic",
    "ckb": "Sorani"
    },
    "translations": {
    "ara": {
    "official": "جمهورية العراق",
    "common": "العراق"
    },
    "bre": {
    "official": "Republik Irak",
    "common": "Irak"
    },
    "ces": {
    "official": "Irácká republika",
    "common": "Irák"
    },
    "cym": {
    "official": "Republic of Iraq",
    "common": "Iraq"
    },
    "deu": {
    "official": "Republik Irak",
    "common": "Irak"
    },
    "est": {
    "official": "Iraagi Vabariik",
    "common": "Iraak"
    },
    "fin": {
    "official": "Irakin tasavalta",
    "common": "Irak"
    },
    "fra": {
    "official": "République d'Irak",
    "common": "Irak"
    },
    "hrv": {
    "official": "Republika Irak",
    "common": "Irak"
    },
    "hun": {
    "official": "Iraki Köztársaság",
    "common": "Irak"
    },
    "ita": {
    "official": "Repubblica dell'Iraq",
    "common": "Iraq"
    },
    "jpn": {
    "official": "イラク共和国",
    "common": "イラク"
    },
    "kor": {
    "official": "이라크 공화국",
    "common": "이라크"
    },
    "nld": {
    "official": "Republiek Irak",
    "common": "Irak"
    },
    "per": {
    "official": "جمهوری عراق",
    "common": "عراق"
    },
    "pol": {
    "official": "Republika Iraku",
    "common": "Irak"
    },
    "por": {
    "official": "República do Iraque",
    "common": "Iraque"
    },
    "rus": {
    "official": "Республика Ирак",
    "common": "Ирак"
    },
    "slk": {
    "official": "Iracká republika",
    "common": "Irak"
    },
    "spa": {
    "official": "República de Irak",
    "common": "Irak"
    },
    "swe": {
    "official": "Republiken Irak",
    "common": "Irak"
    },
    "tur": {
    "official": "Irak Cumhuriyeti",
    "common": "Irak"
    },
    "urd": {
    "official": "جمہوریہ عراق",
    "common": "عراق"
    },
    "zho": {
    "official": "伊拉克共和国",
    "common": "伊拉克"
    }
    },
    "latlng": [
    33,
    44
    ],
    "landlocked": false,
    "borders": [
    "IRN",
    "JOR",
    "KWT",
    "SAU",
    "SYR",
    "TUR"
    ],
    "area": 438317,
    "demonyms": {
    "eng": {
    "f": "Iraqi",
    "m": "Iraqi"
    },
    "fra": {
    "f": "Irakienne",
    "m": "Irakien"
    }
    },
    "flag": "🇮🇶",
    "maps": {
    "googleMaps": "https://goo.gl/maps/iL8Bmy1sUCW9fUk18",
    "openStreetMaps": "https://www.openstreetmap.org/relation/304934"
    },
    "population": 40222503,
    "gini": {
    "2012": 29.5
    },
    "fifa": "IRQ",
    "car": {
    "signs": [
    "IRQ"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+03:00"
    ],
    "continents": [
    "Asia"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/iq.png",
    "svg": "https://flagcdn.com/iq.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/iq.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/iq.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
    "latlng": [
    33.33,
    44.4
    ]
    },
    "postalCode": {
    "format": "#####",
    "regex": "^(\\d{5})$"
    }
    },
    {
    "name": {
    "common": "Kenya",
    "official": "Republic of Kenya",
    "nativeName": {
    "eng": {
    "official": "Republic of Kenya",
    "common": "Kenya"
    },
    "swa": {
    "official": "Republic of Kenya",
    "common": "Kenya"
    }
    }
    },
    "tld": [
    ".ke"
    ],
    "cca2": "KE",
    "ccn3": "404",
    "cca3": "KEN",
    "cioc": "KEN",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "KES": {
        "name": "Kenyan shilling",
"symbol": "Sh"
}
},
"idd": {
"root": "+2",
"suffixes": [
"54"
]
},
"capital": [
"Nairobi"
],
"altSpellings": [
"KE",
"Republic of Kenya",
"Jamhuri ya Kenya"
],
"region": "Africa",
"subregion": "Eastern Africa",
"languages": {
"eng": "English",
"swa": "Swahili"
},
"translations": {
"ara": {
"official": "جمهورية كينيا",
"common": "كينيا"
},
"bre": {
"official": "Republik Kenya",
"common": "Kenya"
},
"ces": {
"official": "Keňská republika",
"common": "Keňa"
},
"cym": {
"official": "Republic of Kenya",
"common": "Kenya"
},
"deu": {
"official": "Republik Kenia",
"common": "Kenia"
},
"est": {
"official": "Keenia Vabariik",
"common": "Keenia"
},
"fin": {
"official": "Kenian tasavalta",
"common": "Kenia"
},
"fra": {
"official": "République du Kenya",
"common": "Kenya"
},
"hrv": {
"official": "Republika Kenija",
"common": "Kenija"
},
"hun": {
"official": "Kenyai Köztársaság",
"common": "Kenya"
},
"ita": {
"official": "Repubblica del Kenya",
"common": "Kenya"
},
"jpn": {
"official": "ケニア共和国",
"common": "ケニア"
},
"kor": {
"official": "케냐 공화국",
"common": "케냐"
},
"nld": {
"official": "Republiek Kenia",
"common": "Kenia"
},
"per": {
"official": "جمهوری کنیا",
"common": "کنیا"
},
"pol": {
"official": "Republika Kenii",
"common": "Kenia"
},
"por": {
"official": "República do Quénia",
"common": "Quénia"
},
"rus": {
"official": "Республика Кения",
"common": "Кения"
},
"slk": {
"official": "Kenská republika",
"common": "Keňa"
},
"spa": {
"official": "República de Kenya",
"common": "Kenia"
},
"swe": {
"official": "Republiken Kenya",
"common": "Kenya"
},
"tur": {
"official": "Kenya Cumhuriyeti",
"common": "Kenya"
},
"urd": {
"official": "جمہوریہ کینیا",
"common": "کینیا"
},
"zho": {
"official": "肯尼亚共和国",
"common": "肯尼亚"
}
},
"latlng": [
1,
38
],
"landlocked": false,
"borders": [
"ETH",
"SOM",
"SSD",
"TZA",
"UGA"
],
"area": 580367,
"demonyms": {
"eng": {
"f": "Kenyan",
"m": "Kenyan"
},
"fra": {
"f": "Kényane",
"m": "Kényan"
}
},
"flag": "🇰🇪",
"maps": {
"googleMaps": "https://goo.gl/maps/Ni9M7wcCxf8bJHLX8",
"openStreetMaps": "https://www.openstreetmap.org/relation/192798"
},
"population": 53771300,
"gini": {
"2015": 40.8
},
"fifa": "KEN",
"car": {
"signs": [
"EAK"
],
"side": "left"
},
"timezones": [
"UTC+03:00"
],
"continents": [
"Africa"
],
"flags": {
"png": "https://flagcdn.com/w320/ke.png",
"svg": "https://flagcdn.com/ke.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/ke.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/ke.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
-1.28,
36.82
]
},
"postalCode": {
"format": "#####",
"regex": "^(\\d{5})$"
}
},
{
"name": {
"common": "Cayman Islands",
"official": "Cayman Islands",
"nativeName": {
"eng": {
"official": "Cayman Islands",
"common": "Cayman Islands"
}
}
},
"tld": [
".ky"
],
"cca2": "KY",
"ccn3": "136",
"cca3": "CYM",
"cioc": "CAY",
"independent": false,
"status": "officially-assigned",
"unMember": false,
"currencies": {
"KYD": {
"name": "Cayman Islands dollar",
"symbol": "$"
}
},
"idd": {
"root": "+1",
"suffixes": [
"345"
]
},
"capital": [
"George Town"
],
"altSpellings": [
"KY"
],
"region": "Americas",
"subregion": "Caribbean",
"languages": {
"eng": "English"
},
"translations": {
"ara": {
"official": "جزر كايمان",
"common": "جزر كايمان"
},
"bre": {
"official": "Inizi Cayman",
"common": "Inizi Cayman"
},
"ces": {
"official": "Kajmanské ostrovy",
"common": "Kajmanské ostrovy"
},
"cym": {
"official": "Ynysoedd Cayman",
"common": "Ynysoedd Cayman"
},
"deu": {
"official": "Cayman-Inseln",
"common": "Kaimaninseln"
},
"est": {
"official": "Kaimanisaared",
"common": "Kaimanisaared"
},
"fin": {
"official": "Caymansaaret",
"common": "Caymansaaret"
},
"fra": {
"official": "Îles Caïmans",
"common": "Îles Caïmans"
},
"hrv": {
"official": "Kajmanski otoci",
"common": "Kajmanski otoci"
},
"hun": {
"official": "Kajmán-szigetek",
"common": "Kajmán-szigetek"
},
"ita": {
"official": "Isole Cayman",
"common": "Isole Cayman"
},
"jpn": {
"official": "ケイマン諸島",
"common": "ケイマン諸島"
},
"kor": {
"official": "케이맨 제도",
"common": "케이맨 제도"
},
"nld": {
"official": "Caymaneilanden",
"common": "Caymaneilanden"
},
"per": {
"official": "جزایر کیمن",
"common": "جزایر کیمن"
},
"pol": {
"official": "Kajmany",
"common": "Kajmany"
},
"por": {
"official": "Ilhas Cayman",
"common": "Ilhas Caimão"
},
"rus": {
"official": "Каймановы острова",
"common": "Каймановы острова"
},
"slk": {
"official": "Kajmanie ostrovy",
"common": "Kajmanie ostrovy"
},
"spa": {
"official": "Islas Caimán",
"common": "Islas Caimán"
},
"swe": {
"official": "Caymanöarna",
"common": "Caymanöarna"
},
"tur": {
"official": "Cayman Adaları",
"common": "Cayman Adaları"
},
"urd": {
"official": "جزائر کیمین",
"common": "جزائر کیمین"
},
"zho": {
"official": "开曼群岛",
"common": "开曼群岛"
}
},
"latlng": [
19.5,
-80.5
],
"landlocked": false,
"area": 264,
"demonyms": {
"eng": {
"f": "Caymanian",
"m": "Caymanian"
},
"fra": {
"f": "Caïmanienne",
"m": "Caïmanien"
}
},
"flag": "🇰🇾",
"maps": {
"googleMaps": "https://goo.gl/maps/P3ZVXX3LH63t91hL8",
"openStreetMaps": "https://www.openstreetmap.org/relation/7269765"
},
"population": 65720,
"fifa": "CAY",
"car": {
"signs": [
"GB"
],
"side": "left"
},
"timezones": [
"UTC-05:00"
],
"continents": [
"North America"
],
"flags": {
"png": "https://flagcdn.com/w320/ky.png",
"svg": "https://flagcdn.com/ky.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/ky.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/ky.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
19.3,
-81.38
]
}
},
{
"name": {
"common": "Guinea",
"official": "Republic of Guinea",
"nativeName": {
"fra": {
"official": "République de Guinée",
"common": "Guinée"
}
}
},
"tld": [
".gn"
],
"cca2": "GN",
"ccn3": "324",
"cca3": "GIN",
"cioc": "GUI",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"GNF": {
"name": "Guinean franc",
"symbol": "Fr"
}
},
"idd": {
"root": "+2",
"suffixes": [
"24"
]
},
"capital": [
"Conakry"
],
"altSpellings": [
"GN",
"Republic of Guinea",
"République de Guinée"
],
"region": "Africa",
"subregion": "Western Africa",
"languages": {
"fra": "French"
},
"translations": {
"ara": {
"official": "جمهورية غينيا",
"common": "غينيا"
},
"bre": {
"official": "Republik Ginea",
"common": "Ginea"
},
"ces": {
"official": "Guinejská republika",
"common": "Guinea"
},
"cym": {
"official": "Republic of Guinea",
"common": "Guinea"
},
"deu": {
"official": "Republik Guinea",
"common": "Guinea"
},
"est": {
"official": "Guinea Vabariik",
"common": "Guinea"
},
"fin": {
"official": "Guinean tasavalta",
"common": "Guinea"
},
"fra": {
"official": "République de Guinée",
"common": "Guinée"
},
"hrv": {
"official": "Republika Gvineja",
"common": "Gvineja"
},
"hun": {
"official": "Guineai Köztársaság",
"common": "Guinea"
},
"ita": {
"official": "Repubblica di Guinea",
"common": "Guinea"
},
"jpn": {
"official": "ギニア共和国",
"common": "ギニア"
},
"kor": {
"official": "기니 공화국",
"common": "기니"
},
"nld": {
"official": "Republiek Guinee",
"common": "Guinee"
},
"per": {
"official": "مملکت مستقل پاپوآ گینه نو",
"common": "پاپوآ گینه نو"
},
"pol": {
"official": "Republika Gwinei",
"common": "Gwinea"
},
"por": {
"official": "República da Guiné",
"common": "Guiné"
},
"rus": {
"official": "Республика Гвинея",
"common": "Гвинея"
},
"slk": {
"official": "Guinejská republika",
"common": "Guinea"
},
"spa": {
"official": "República de Guinea",
"common": "Guinea"
},
"swe": {
"official": "Republiken Guinea",
"common": "Guinea"
},
"tur": {
"official": "Gine Cumhuriyeti",
"common": "Gine"
},
"urd": {
"official": "جمہوریہ گنی",
"common": "گنی"
},
"zho": {
"official": "几内亚共和国",
"common": "几内亚"
}
},
"latlng": [
11,
-10
],
"landlocked": false,
"borders": [
"CIV",
"GNB",
"LBR",
"MLI",
"SEN",
"SLE"
],
"area": 245857,
"demonyms": {
"eng": {
"f": "Guinean",
"m": "Guinean"
},
"fra": {
"f": "Guinéenne",
"m": "Guinéen"
}
},
"flag": "🇬🇳",
"maps": {
"googleMaps": "https://goo.gl/maps/8J5oM5sA4Ayr1ZYGA",
"openStreetMaps": "https://www.openstreetmap.org/relation/192778"
},
"population": 13132792,
"gini": {
"2012": 33.7
},
"fifa": "GUI",
"car": {
"signs": [
"RG"
],
"side": "right"
},
"timezones": [
"UTC"
],
"continents": [
"Africa"
],
"flags": {
"png": "https://flagcdn.com/w320/gn.png",
"svg": "https://flagcdn.com/gn.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/gn.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/gn.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
9.5,
-13.7
]
}
},
{
"name": {
"common": "United States",
"official": "United States of America",
"nativeName": {
"eng": {
"official": "United States of America",
"common": "United States"
}
}
},
"tld": [
".us"
],
"cca2": "US",
"ccn3": "840",
"cca3": "USA",
"cioc": "USA",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"USD": {
"name": "United States dollar",
"symbol": "$"
}
},
"idd": {
"root": "+1",
"suffixes": [
"201",
"202",
"203",
"205",
"206",
"207",
"208",
"209",
"210",
"212",
"213",
"214",
"215",
"216",
"217",
"218",
"219",
"220",
"224",
"225",
"227",
"228",
"229",
"231",
"234",
"239",
"240",
"248",
"251",
"252",
"253",
"254",
"256",
"260",
"262",
"267",
"269",
"270",
"272",
"274",
"276",
"281",
"283",
"301",
"302",
"303",
"304",
"305",
"307",
"308",
"309",
"310",
"312",
"313",
"314",
"315",
"316",
"317",
"318",
"319",
"320",
"321",
"323",
"325",
"327",
"330",
"331",
"334",
"336",
"337",
"339",
"346",
"347",
"351",
"352",
"360",
"361",
"364",
"380",
"385",
"386",
"401",
"402",
"404",
"405",
"406",
"407",
"408",
"409",
"410",
"412",
"413",
"414",
"415",
"417",
"419",
"423",
"424",
"425",
"430",
"432",
"434",
"435",
"440",
"442",
"443",
"447",
"458",
"463",
"464",
"469",
"470",
"475",
"478",
"479",
"480",
"484",
"501",
"502",
"503",
"504",
"505",
"507",
"508",
"509",
"510",
"512",
"513",
"515",
"516",
"517",
"518",
"520",
"530",
"531",
"534",
"539",
"540",
"541",
"551",
"559",
"561",
"562",
"563",
"564",
"567",
"570",
"571",
"573",
"574",
"575",
"580",
"585",
"586",
"601",
"602",
"603",
"605",
"606",
"607",
"608",
"609",
"610",
"612",
"614",
"615",
"616",
"617",
"618",
"619",
"620",
"623",
"626",
"628",
"629",
"630",
"631",
"636",
"641",
"646",
"650",
"651",
"657",
"660",
"661",
"662",
"667",
"669",
"678",
"681",
"682",
"701",
"702",
"703",
"704",
"706",
"707",
"708",
"712",
"713",
"714",
"715",
"716",
"717",
"718",
"719",
"720",
"724",
"725",
"727",
"730",
"731",
"732",
"734",
"737",
"740",
"743",
"747",
"754",
"757",
"760",
"762",
"763",
"765",
"769",
"770",
"772",
"773",
"774",
"775",
"779",
"781",
"785",
"786",
"801",
"802",
"803",
"804",
"805",
"806",
"808",
"810",
"812",
"813",
"814",
"815",
"816",
"817",
"818",
"828",
"830",
"831",
"832",
"843",
"845",
"847",
"848",
"850",
"854",
"856",
"857",
"858",
"859",
"860",
"862",
"863",
"864",
"865",
"870",
"872",
"878",
"901",
"903",
"904",
"906",
"907",
"908",
"909",
"910",
"912",
"913",
"914",
"915",
"916",
"917",
"918",
"919",
"920",
"925",
"928",
"929",
"930",
"931",
"934",
"936",
"937",
"938",
"940",
"941",
"947",
"949",
"951",
"952",
"954",
"956",
"959",
"970",
"971",
"972",
"973",
"975",
"978",
"979",
"980",
"984",
"985",
"989"
]
},
"capital": [
"Washington, D.C."
],
"altSpellings": [
"US",
"USA",
"United States of America"
],
"region": "Americas",
"subregion": "North America",
"languages": {
"eng": "English"
},
"translations": {
"ara": {
"official": "الولايات المتحدة الامريكية",
"common": "الولايات المتحدة"
},
"bre": {
"official": "Stadoù-Unanet Amerika",
"common": "Stadoù-Unanet"
},
"ces": {
"official": "Spojené státy americké",
"common": "Spojené státy"
},
"cym": {
"official": "United States of America",
"common": "United States"
},
"deu": {
"official": "Vereinigte Staaten von Amerika",
"common": "Vereinigte Staaten"
},
"est": {
"official": "Ameerika Ühendriigid",
"common": "Ameerika Ühendriigid"
},
"fin": {
"official": "Amerikan yhdysvallat",
"common": "Yhdysvallat"
},
"fra": {
"official": "Les états-unis d'Amérique",
"common": "États-Unis"
},
"hrv": {
"official": "Sjedinjene Države Amerike",
"common": "Sjedinjene Američke Države"
},
"hun": {
"official": "Amerikai Egyesült Államok",
"common": "Amerikai Egyesült Államok"
},
"ita": {
"official": "Stati Uniti d'America",
"common": "Stati Uniti d'America"
},
"jpn": {
"official": "アメリカ合衆国",
"common": "アメリカ合衆国"
},
"kor": {
"official": "아메리카 합중국",
"common": "미국"
},
"nld": {
"official": "Verenigde Staten van Amerika",
"common": "Verenigde Staten"
},
"per": {
"official": "ایالات متحده آمریکا",
"common": "ایالات متحده آمریکا"
},
"pol": {
"official": "Stany Zjednoczone Ameryki",
"common": "Stany Zjednoczone"
},
"por": {
"official": "Estados Unidos da América",
"common": "Estados Unidos"
},
"rus": {
"official": "Соединенные Штаты Америки",
"common": "Соединённые Штаты Америки"
},
"slk": {
"official": "Spojené štáty Americké",
"common": "Spojené štáty americké"
},
"spa": {
"official": "Estados Unidos de América",
"common": "Estados Unidos"
},
"swe": {
"official": "Amerikas förenta stater",
"common": "USA"
},
"tur": {
"official": "Amerika Birleşik Devletleri",
"common": "Amerika Birleşik Devletleri"
},
"urd": {
"official": "ریاستہائے متحدہ امریکا",
"common": "ریاستہائے متحدہ"
},
"zho": {
"official": "美利坚合众国",
"common": "美国"
}
},
"latlng": [
38,
-97
],
"landlocked": false,
"borders": [
"CAN",
"MEX"
],
"area": 9372610,
"demonyms": {
"eng": {
"f": "American",
"m": "American"
},
"fra": {
"f": "Américaine",
"m": "Américain"
}
},
"flag": "🇺🇸",
"maps": {
"googleMaps": "https://goo.gl/maps/e8M246zY4BSjkjAv6",
"openStreetMaps": "https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8"
},
"population": 329484123,
"gini": {
"2018": 41.4
},
"fifa": "USA",
"car": {
"signs": [
"USA"
],
"side": "right"
},
"timezones": [
"UTC-12:00",
"UTC-11:00",
"UTC-10:00",
"UTC-09:00",
"UTC-08:00",
"UTC-07:00",
"UTC-06:00",
"UTC-05:00",
"UTC-04:00",
"UTC+10:00",
"UTC+12:00"
],
"continents": [
"North America"
],
"flags": {
"png": "https://flagcdn.com/w320/us.png",
"svg": "https://flagcdn.com/us.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/us.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/us.svg"
},
"startOfWeek": "sunday",
"capitalInfo": {
"latlng": [
38.89,
-77.05
]
},
"postalCode": {
"format": "#####-####",
"regex": "^\\d{5}(-\\d{4})?$"
}
},
{
"name": {
"common": "Tunisia",
"official": "Tunisian Republic",
"nativeName": {
"ara": {
"official": "الجمهورية التونسية",
"common": "تونس"
}
}
},
"tld": [
".tn"
],
"cca2": "TN",
"ccn3": "788",
"cca3": "TUN",
"cioc": "TUN",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"TND": {
"name": "Tunisian dinar",
"symbol": "د.ت"
}
},
"idd": {
"root": "+2",
"suffixes": [
"16"
]
},
"capital": [
"Tunis"
],
"altSpellings": [
"TN",
"Republic of Tunisia",
"al-Jumhūriyyah at-Tūnisiyyah"
],
"region": "Africa",
"subregion": "Northern Africa",
"languages": {
"ara": "Arabic"
},
"translations": {
"ara": {
"official": "الجمهورية التونسية",
"common": "تونس"
},
"bre": {
"official": "Republik Tunizian",
"common": "Tunizia"
},
"ces": {
"official": "Tuniská republika",
"common": "Tunisko"
},
"cym": {
"official": "Tunisian Republic",
"common": "Tunisia"
},
"deu": {
"official": "Tunesische Republik",
"common": "Tunesien"
},
"est": {
"official": "Tuneesia Vabariik",
"common": "Tuneesia"
},
"fin": {
"official": "Tunisian tasavalta",
"common": "Tunisia"
},
"fra": {
"official": "République tunisienne",
"common": "Tunisie"
},
"hrv": {
"official": "Tuniski Republika",
"common": "Tunis"
},
"hun": {
"official": "Tunéziai Köztársaság",
"common": "Tunézia"
},
"ita": {
"official": "Repubblica tunisina",
"common": "Tunisia"
},
"jpn": {
"official": "チュニジア共和国",
"common": "チュニジア"
},
"kor": {
"official": "튀니지 공화국",
"common": "튀니지"
},
"nld": {
"official": "Republiek Tunesië",
"common": "Tunesië"
},
"per": {
"official": "جمهوری تونس",
"common": "تونس"
},
"pol": {
"official": "Republika Tunezyjska",
"common": "Tunezja"
},
"por": {
"official": "República da Tunísia",
"common": "Tunísia"
},
"rus": {
"official": "Тунисской Республики",
"common": "Тунис"
},
"slk": {
"official": "Tuniská republika",
"common": "Tunisko"
},
"spa": {
"official": "República de Túnez",
"common": "Túnez"
},
"swe": {
"official": "Republiken Tunisien",
"common": "Tunisien"
},
"tur": {
"official": "Tunus Cumhuriyeti",
"common": "Tunus"
},
"urd": {
"official": "جمہوریہ تونس",
"common": "تونس"
},
"zho": {
"official": "突尼斯共和国",
"common": "突尼斯"
}
},
"latlng": [
34,
9
],
"landlocked": false,
"borders": [
"DZA",
"LBY"
],
"area": 163610,
"demonyms": {
"eng": {
"f": "Tunisian",
"m": "Tunisian"
},
"fra": {
"f": "Tunisienne",
"m": "Tunisien"
}
},
"flag": "🇹🇳",
"maps": {
"googleMaps": "https://goo.gl/maps/KgUmpZdUuNRaougs8",
"openStreetMaps": "https://www.openstreetmap.org/relation/192757"
},
"population": 11818618,
"gini": {
"2015": 32.8
},
"fifa": "TUN",
"car": {
"signs": [
"TN"
],
"side": "right"
},
"timezones": [
"UTC+01:00"
],
"continents": [
"Africa"
],
"flags": {
"png": "https://flagcdn.com/w320/tn.png",
"svg": "https://flagcdn.com/tn.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/tn.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/tn.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
36.8,
10.18
]
},
"postalCode": {
"format": "####",
"regex": "^(\\d{4})$"
}
},
{
"name": {
"common": "Bolivia",
"official": "Plurinational State of Bolivia",
"nativeName": {
"aym": {
"official": "Wuliwya Suyu",
"common": "Wuliwya"
},
"grn": {
"official": "Tetã Volívia",
"common": "Volívia"
},
"que": {
"official": "Buliwya Mamallaqta",
"common": "Buliwya"
},
"spa": {
"official": "Estado Plurinacional de Bolivia",
"common": "Bolivia"
}
}
},
"tld": [
".bo"
],
"cca2": "BO",
"ccn3": "068",
"cca3": "BOL",
"cioc": "BOL",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"BOB": {
"name": "Bolivian boliviano",
"symbol": "Bs."
}
},
"idd": {
"root": "+5",
"suffixes": [
"91"
]
},
"capital": [
"Sucre"
],
"altSpellings": [
"BO",
"Buliwya",
"Wuliwya",
"Bolivia, Plurinational State of",
"Plurinational State of Bolivia",
"Estado Plurinacional de Bolivia",
"Buliwya Mamallaqta",
"Wuliwya Suyu",
"Tetã Volívia"
],
"region": "Americas",
"subregion": "South America",
"languages": {
"aym": "Aymara",
"grn": "Guaraní",
"que": "Quechua",
"spa": "Spanish"
},
"translations": {
"ara": {
"official": "دولة بوليفيا المتعددة القوميات",
"common": "بوليفيا"
},
"bre": {
"official": "Stad Liesvroadel Bolivia",
"common": "Bolivia"
},
"ces": {
"official": "Mnohonárodnostní stát Bolívie",
"common": "Bolívie"
},
"cym": {
"official": "Gweriniaeth Bolifia",
"common": "Bolifia"
},
"deu": {
"official": "Plurinationaler Staat Bolivien",
"common": "Bolivien"
},
"est": {
"official": "Boliivia Paljurahvuseline Riik",
"common": "Boliivia"
},
"fin": {
"official": "Bolivian monikansainen valtio",
"common": "Bolivia"
},
"fra": {
"official": "État plurinational de Bolivie",
"common": "Bolivie"
},
"hrv": {
"official": "Plurinational State of Bolivia",
"common": "Bolivija"
},
"hun": {
"official": "Bolíviai Többnemzetiségű Állam",
"common": "Bolívia"
},
"ita": {
"official": "Stato Plurinazionale della Bolivia",
"common": "Bolivia"
},
"jpn": {
"official": "ボリビアの多民族国",
"common": "ボリビア多民族国"
},
"kor": {
"official": "볼리비아 다민족국",
"common": "볼리비아"
},
"nld": {
"official": "Plurinationale Staat van Bolivia",
"common": "Bolivia"
},
"per": {
"official": "جمهوری بولیوی",
"common": "بولیوی"
},
"pol": {
"official": "Wielonarodowe Państwo Boliwia",
"common": "Boliwia"
},
"por": {
"official": "Estado Plurinacional da Bolívia",
"common": "Bolívia"
},
"rus": {
"official": "Многонациональное Государство Боливия",
"common": "Боливия"
},
"slk": {
"official": "Bolívijská republika",
"common": "Bolívia"
},
"spa": {
"official": "Estado Plurinacional de Bolivia",
"common": "Bolivia"
},
"swe": {
"official": "Mångnationella staten Bolivia",
"common": "Bolivia"
},
"tur": {
"official": "Bolivya Çokuluslu Devleti",
"common": "Bolivya"
},
"urd": {
"official": "جمہوریہ بولیویا",
"common": "بولیویا"
},
"zho": {
"official": "多民族玻利维亚国",
"common": "玻利维亚"
}
},
"latlng": [
-17,
-65
],
"landlocked": true,
"borders": [
"ARG",
"BRA",
"CHL",
"PRY",
"PER"
],
"area": 1098581,
"demonyms": {
"eng": {
"f": "Bolivian",
"m": "Bolivian"
},
"fra": {
"f": "Bolivienne",
"m": "Bolivien"
}
},
"flag": "🇧🇴",
"maps": {
"googleMaps": "https://goo.gl/maps/9DfnyfbxNM2g5U9b9",
"openStreetMaps": "https://www.openstreetmap.org/relation/252645"
},
"population": 11673029,
"gini": {
"2019": 41.6
},
"fifa": "BOL",
"car": {
"signs": [
"BOL"
],
"side": "right"
},
"timezones": [
"UTC-04:00"
],
"continents": [
"South America"
],
"flags": {
"png": "https://flagcdn.com/w320/bo.png",
"svg": "https://flagcdn.com/bo.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/bo.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/bo.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
-19.02,
-65.26
]
}
},
{
"name": {
"common": "China",
"official": "People's Republic of China",
"nativeName": {
"zho": {
"official": "中华人民共和国",
"common": "中国"
}
}
},
"tld": [
".cn",
".中国",
".中國",
".公司",
".网络"
],
"cca2": "CN",
"ccn3": "156",
"cca3": "CHN",
"cioc": "CHN",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"CNY": {
"name": "Chinese yuan",
"symbol": "¥"
}
},
"idd": {
"root": "+8",
"suffixes": [
"6"
]
},
"capital": [
"Beijing"
],
"altSpellings": [
"CN",
"Zhōngguó",
"Zhongguo",
"Zhonghua",
"People's Republic of China",
"中华人民共和国",
"Zhōnghuá Rénmín Gònghéguó"
],
"region": "Asia",
"subregion": "Eastern Asia",
"languages": {
"zho": "Chinese"
},
"translations": {
"ara": {
"official": "جمهورية الصين الشعبية",
"common": "الصين"
},
"bre": {
"official": "Republik Pobl Sina",
"common": "Sina"
},
"ces": {
"official": "Čínská lidová republika",
"common": "Čína"
},
"cym": {
"official": "Gweriniaeth Pobl Tsieina",
"common": "Tsieina"
},
"deu": {
"official": "Volksrepublik China",
"common": "China"
},
"est": {
"official": "Hiina Rahvavabariik",
"common": "Hiina"
},
"fin": {
"official": "Kiinan kansantasavalta",
"common": "Kiina"
},
"fra": {
"official": "République populaire de Chine",
"common": "Chine"
},
"hrv": {
"official": "Narodna Republika Kina",
"common": "Kina"
},
"hun": {
"official": "Kínai Népköztársaság",
"common": "Kína"
},
"ita": {
"official": "Repubblica popolare cinese",
"common": "Cina"
},
"jpn": {
"official": "中華人民共和国",
"common": "中国"
},
"kor": {
"official": "중화인민공화국",
"common": "중국"
},
"nld": {
"official": "Volksrepubliek China",
"common": "China"
},
"per": {
"official": "جمهوری خلق چین",
"common": "چین"
},
"pol": {
"official": "Chińska Republika Ludowa",
"common": "Chiny"
},
"por": {
"official": "República Popular da China",
"common": "China"
},
"rus": {
"official": "Народная Республика Китай",
"common": "Китай"
},
"slk": {
"official": "Čínska ľudová republika",
"common": "Čína"
},
"spa": {
"official": "República Popular de China",
"common": "China"
},
"swe": {
"official": "Folkrepubliken Kina",
"common": "Kina"
},
"tur": {
"official": "Çin Halk Cumhuriyeti",
"common": "Çin"
},
"urd": {
"official": "عوامی جمہوریہ چین",
"common": "چین"
}
},
"latlng": [
35,
105
],
"landlocked": false,
"borders": [
"AFG",
"BTN",
"MMR",
"HKG",
"IND",
"KAZ",
"NPL",
"PRK",
"KGZ",
"LAO",
"MAC",
"MNG",
"PAK",
"RUS",
"TJK",
"VNM"
],
"area": 9706961,
"demonyms": {
"eng": {
"f": "Chinese",
"m": "Chinese"
},
"fra": {
"f": "Chinoise",
"m": "Chinois"
}
},
"flag": "🇨🇳",
"maps": {
"googleMaps": "https://goo.gl/maps/p9qC6vgiFRRXzvGi7",
"openStreetMaps": "https://www.openstreetmap.org/relation/270056"
},
"population": 1402112000,
"gini": {
"2016": 38.5
},
"fifa": "CHN",
"car": {
"signs": [
"RC"
],
"side": "right"
},
"timezones": [
"UTC+08:00"
],
"continents": [
"Asia"
],
"flags": {
"png": "https://flagcdn.com/w320/cn.png",
"svg": "https://flagcdn.com/cn.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/cn.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/cn.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
39.92,
116.38
]
},
"postalCode": {
"format": "######",
"regex": "^(\\d{6})$"
}
},
{
"name": {
"common": "South Korea",
"official": "Republic of Korea",
"nativeName": {
"kor": {
"official": "대한민국",
"common": "한국"
}
}
},
"tld": [
".kr",
".한국"
],
"cca2": "KR",
"ccn3": "410",
"cca3": "KOR",
"cioc": "KOR",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"KRW": {
"name": "South Korean won",
"symbol": "₩"
}
},
"idd": {
"root": "+8",
"suffixes": [
"2"
]
},
"capital": [
"Seoul"
],
"altSpellings": [
"KR",
"Korea, Republic of",
"Republic of Korea",
"남한",
"남조선"
],
"region": "Asia",
"subregion": "Eastern Asia",
"languages": {
"kor": "Korean"
},
"translations": {
"ara": {
"official": "جمهورية كوريا",
"common": "كوريا الجنوبية"
},
"bre": {
"official": "Republik Korea",
"common": "Korea ar Su"
},
"ces": {
"official": "Korejská republika",
"common": "Jižní Korea"
},
"cym": {
"official": "Republic of Korea",
"common": "South Korea"
},
"deu": {
"official": "Republik Korea",
"common": "Südkorea"
},
"est": {
"official": "Korea Vabariik",
"common": "Lõuna-Korea"
},
"fin": {
"official": "Korean tasavalta",
"common": "Etelä-Korea"
},
"fra": {
"official": "République de Corée",
"common": "Corée du Sud"
},
"hrv": {
"official": "Republika Koreja",
"common": "Južna Koreja"
},
"hun": {
"official": "Koreai Köztársaság",
"common": "Dél-Korea"
},
"ita": {
"official": "Repubblica di Corea",
"common": "Corea del Sud"
},
"jpn": {
"official": "大韓民国",
"common": "韓国"
},
"kor": {
"official": "대한민국",
"common": "한국"
},
"nld": {
"official": "Republiek Korea",
"common": "Zuid-Korea"
},
"per": {
"official": "جمهوری کره",
"common": "کرهٔ جنوبی"
},
"pol": {
"official": "Republika Korei",
"common": "Korea Południowa"
},
"por": {
"official": "República da Coreia",
"common": "Coreia do Sul"
},
"rus": {
"official": "Республика Корея",
"common": "Южная Корея"
},
"slk": {
"official": "Kórejská republika",
"common": "Južná Kórea"
},
"spa": {
"official": "República de Corea",
"common": "Corea del Sur"
},
"swe": {
"official": "Republiken Korea",
"common": "Sydkorea"
},
"tur": {
"official": "Kore Cumhuriyeti",
"common": "Güney Kore"
},
"urd": {
"official": "جمہوریہ کوریا ",
"common": "جنوبی کوریا"
},
"zho": {
"official": "大韩民国",
"common": "韩国"
}
},
"latlng": [
37,
127.5
],
"landlocked": false,
"borders": [
"PRK"
],
"area": 100210,
"demonyms": {
"eng": {
"f": "South Korean",
"m": "South Korean"
},
"fra": {
"f": "Sud-coréenne",
"m": "Sud-coréen"
}
},
"flag": "🇰🇷",
"maps": {
"googleMaps": "https://goo.gl/maps/7ecjaJXefjAQhxjGA",
"openStreetMaps": "https://www.openstreetmap.org/relation/307756"
},
"population": 51780579,
"gini": {
"2016": 31.4
},
"fifa": "KOR",
"car": {
"signs": [
"ROK"
],
"side": "right"
},
"timezones": [
"UTC+09:00"
],
"continents": [
"Asia"
],
"flags": {
"png": "https://flagcdn.com/w320/kr.png",
"svg": "https://flagcdn.com/kr.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/kr.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/kr.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
37.55,
126.98
]
},
"postalCode": {
"format": "SEOUL ###-###",
"regex": "^(?:SEOUL)*(\\d{6})$"
}
},
{
"name": {
"common": "Kuwait",
"official": "State of Kuwait",
"nativeName": {
"ara": {
"official": "دولة الكويت",
"common": "الكويت"
}
}
},
"tld": [
".kw"
],
"cca2": "KW",
"ccn3": "414",
"cca3": "KWT",
"cioc": "KUW",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"KWD": {
"name": "Kuwaiti dinar",
"symbol": "د.ك"
}
},
"idd": {
"root": "+9",
"suffixes": [
"65"
]
},
"capital": [
"Kuwait City"
],
"altSpellings": [
"KW",
"State of Kuwait",
"Dawlat al-Kuwait"
],
"region": "Asia",
"subregion": "Western Asia",
"languages": {
"ara": "Arabic"
},
"translations": {
"ara": {
"official": "دولة الكويت",
"common": "الكويت"
},
"bre": {
"official": "Stad Koweit",
"common": "Koweit"
},
"ces": {
"official": "Stát Kuvajt",
"common": "Kuvajt"
},
"cym": {
"official": "State of Kuwait",
"common": "Kuwait"
},
"deu": {
"official": "Staat Kuwait",
"common": "Kuwait"
},
"est": {
"official": "Kuveidi Riik",
"common": "Kuveit"
},
"fin": {
"official": "Kuwaitin valtio",
"common": "Kuwait"
},
"fra": {
"official": "État du Koweït",
"common": "Koweït"
},
"hrv": {
"official": "Država Kuvajt",
"common": "Kuvajt"
},
"hun": {
"official": "Kuvaiti Állam",
"common": "Kuvait"
},
"ita": {
"official": "Stato del Kuwait",
"common": "Kuwait"
},
"jpn": {
"official": "クウェート国",
"common": "クウェート"
},
"kor": {
"official": "쿠웨이트국",
"common": "쿠웨이트"
},
"nld": {
"official": "Staat Koeweit",
"common": "Koeweit"
},
"per": {
"official": "دولت کویت",
"common": "کُویت"
},
"pol": {
"official": "Państwo Kuwejt",
"common": "Kuwejt"
},
"por": {
"official": "Estado do Kuwait",
"common": "Kuwait"
},
"rus": {
"official": "Государство Кувейт",
"common": "Кувейт"
},
"slk": {
"official": "Kuvajtský štát",
"common": "Kuvajt"
},
"spa": {
"official": "Estado de Kuwait",
"common": "Kuwait"
},
"swe": {
"official": "Staten Kuwait",
"common": "Kuwait"
},
"tur": {
"official": "Kuveyt Devleti",
"common": "Kuveyt"
},
"urd": {
"official": "دولتِ کویت",
"common": "کویت"
},
"zho": {
"official": "科威特国",
"common": "科威特"
}
},
"latlng": [
29.5,
45.75
],
"landlocked": false,
"borders": [
"IRQ",
"SAU"
],
"area": 17818,
"demonyms": {
"eng": {
"f": "Kuwaiti",
"m": "Kuwaiti"
},
"fra": {
"f": "Koweïtienne",
"m": "Koweïtien"
}
},
"flag": "🇰🇼",
"maps": {
"googleMaps": "https://goo.gl/maps/aqr3aNQjS1BAvksJ7",
"openStreetMaps": "https://www.openstreetmap.org/relation/305099"
},
"population": 4270563,
"fifa": "KUW",
"car": {
"signs": [
"KWT"
],
"side": "right"
},
"timezones": [
"UTC+03:00"
],
"continents": [
"Asia"
],
"flags": {
"png": "https://flagcdn.com/w320/kw.png",
"svg": "https://flagcdn.com/kw.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/kw.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/kw.svg"
},
"startOfWeek": "sunday",
"capitalInfo": {
"latlng": [
29.37,
47.97
]
},
"postalCode": {
"format": "#####",
"regex": "^(\\d{5})$"
}
},
{
"name": {
"common": "Algeria",
"official": "People's Democratic Republic of Algeria",
"nativeName": {
"ara": {
"official": "الجمهورية الديمقراطية الشعبية الجزائرية",
"common": "الجزائر"
}
}
},
"tld": [
".dz",
"الجزائر."
],
"cca2": "DZ",
"ccn3": "012",
"cca3": "DZA",
"cioc": "ALG",
"independent": true,
"status": "officially-assigned",
"unMember": true,
"currencies": {
"DZD": {
"name": "Algerian dinar",
"symbol": "د.ج"
}
},
"idd": {
"root": "+2",
"suffixes": [
"13"
]
},
"capital": [
"Algiers"
],
"altSpellings": [
"DZ",
"Dzayer",
"Algérie"
],
"region": "Africa",
"subregion": "Northern Africa",
"languages": {
"ara": "Arabic"
},
"translations": {
"ara": {
"official": "الجمهورية الديمقراطية الشعبية الجزائرية",
"common": "الجزائر"
},
"bre": {
"official": "Republik Aljerian Demokratel ha Poblel",
"common": "Aljeria"
},
"ces": {
"official": "Alžírská demokratická a lidová republika",
"common": "Alžírsko"
},
"cym": {
"official": "Gweriniaeth Ddemocrataidd Pobl Algeria",
"common": "Algeria"
},
"deu": {
"official": "Demokratische Volksrepublik Algerien",
"common": "Algerien"
},
"est": {
"official": "Alžeeria Demokraatlik Rahvavabariik",
"common": "Alžeeria"
},
"fin": {
"official": "Algerian demokraattinen kansantasavalta",
"common": "Algeria"
},
"fra": {
"official": "République démocratique et populaire d'Algérie",
"common": "Algérie"
},
"hrv": {
"official": "Narodna Demokratska Republika Alžir",
"common": "Alžir"
},
"hun": {
"official": "Algériai Népi Demokratikus Köztársaság",
"common": "Algéria"
},
"ita": {
"official": "Repubblica popolare democratica di Algeria",
"common": "Algeria"
},
"jpn": {
"official": "アルジェリア人民民主共和国",
"common": "アルジェリア"
},
"kor": {
"official": "알제리 인민 민주 공화국",
"common": "알제리"
},
"nld": {
"official": "Democratische Volksrepubliek Algerije",
"common": "Algerije"
},
"per": {
"official": "جمهوری دموکراتیک خلق الجزایر",
"common": "الجزایر"
},
"pol": {
"official": "Algierska Republika Ludowo-Demokratyczna",
"common": "Algieria"
},
"por": {
"official": "República Argelina Democrática e Popular",
"common": "Argélia"
},
"rus": {
"official": "Народно-Демократическая Республика Алжир",
"common": "Алжир"
},
"slk": {
"official": "Alžírska demokratická ľudová republika",
"common": "Alžírsko"
},
"spa": {
"official": "República Argelina Democrática y Popular",
"common": "Argelia"
},
"swe": {
"official": "Demokratiska folkrepubliken Algeriet",
"common": "Algeriet"
},
"tur": {
"official": "Cezayir Demokratik Halk Cumhuriyeti",
"common": "Cezayir"
},
"urd": {
"official": "عوامی جمہوری جمہوریہ الجزائر",
"common": "الجزائر"
},
"zho": {
"official": "阿尔及利亚人民民主共和国",
"common": "阿尔及利亚"
}
},
"latlng": [
28,
3
],
"landlocked": false,
"borders": [
"TUN",
"LBY",
"NER",
"ESH",
"MRT",
"MLI",
"MAR"
],
"area": 2381741,
"demonyms": {
"eng": {
"f": "Algerian",
"m": "Algerian"
},
"fra": {
"f": "Algérienne",
"m": "Algérien"
}
},
"flag": "🇩🇿",
"maps": {
"googleMaps": "https://goo.gl/maps/RsAyAfyaiNVb8DpW8",
"openStreetMaps": "https://www.openstreetmap.org/relation/192756"
},
"population": 44700000,
"gini": {
"2011": 27.6
},
"fifa": "ALG",
"car": {
"signs": [
"DZ"
],
"side": "right"
},
"timezones": [
"UTC+01:00"
],
"continents": [
"Africa"
],
"flags": {
"png": "https://flagcdn.com/w320/dz.png",
"svg": "https://flagcdn.com/dz.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/dz.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/dz.svg"
},
"startOfWeek": "sunday",
"capitalInfo": {
"latlng": [
36.75,
3.05
]
},
"postalCode": {
"format": "#####",
"regex": "^(\\d{5})$"
}
},
{
"name": {
"common": "Aruba",
"official": "Aruba",
"nativeName": {
"nld": {
"official": "Aruba",
"common": "Aruba"
},
"pap": {
"official": "Aruba",
"common": "Aruba"
}
}
},
"tld": [
".aw"
],
"cca2": "AW",
"ccn3": "533",
"cca3": "ABW",
"cioc": "ARU",
"independent": false,
"status": "officially-assigned",
"unMember": false,
"currencies": {
"AWG": {
"name": "Aruban florin",
"symbol": "ƒ"
}
},
"idd": {
"root": "+2",
"suffixes": [
"97"
]
},
"capital": [
"Oranjestad"
],
"altSpellings": [
"AW"
],
"region": "Americas",
"subregion": "Caribbean",
"languages": {
"nld": "Dutch",
"pap": "Papiamento"
},
"translations": {
"ara": {
"official": "أروبا",
"common": "أروبا"
},
"bre": {
"official": "Aruba",
"common": "Aruba"
},
"ces": {
"official": "Aruba",
"common": "Aruba"
},
"cym": {
"official": "Aruba",
"common": "Aruba"
},
"deu": {
"official": "Aruba",
"common": "Aruba"
},
"est": {
"official": "Aruba",
"common": "Aruba"
},
"fin": {
"official": "Aruba",
"common": "Aruba"
},
"fra": {
"official": "Aruba",
"common": "Aruba"
},
"hrv": {
"official": "Aruba",
"common": "Aruba"
},
"hun": {
"official": "Aruba",
"common": "Aruba"
},
"ita": {
"official": "Aruba",
"common": "Aruba"
},
"jpn": {
"official": "アルバ",
"common": "アルバ"
},
"kor": {
"official": "아루바",
"common": "아루바"
},
"nld": {
"official": "Aruba",
"common": "Aruba"
},
"per": {
"official": "آروبا",
"common": "آروبا"
},
"pol": {
"official": "Aruba",
"common": "Aruba"
},
"por": {
"official": "Aruba",
"common": "Aruba"
},
"rus": {
"official": "Аруба",
"common": "Аруба"
},
"slk": {
"official": "Aruba",
"common": "Aruba"
},
"spa": {
"official": "Aruba",
"common": "Aruba"
},
"swe": {
"official": "Aruba",
"common": "Aruba"
},
"tur": {
"official": "Aruba",
"common": "Aruba"
},
"urd": {
"official": "اروبا",
"common": "اروبا"
},
"zho": {
"official": "阿鲁巴",
"common": "阿鲁巴"
}
},
"latlng": [
12.5,
-69.96666666
],
"landlocked": false,
"area": 180,
"demonyms": {
"eng": {
"f": "Aruban",
"m": "Aruban"
},
"fra": {
"f": "Arubaise",
"m": "Arubais"
}
},
"flag": "🇦🇼",
"maps": {
"googleMaps": "https://goo.gl/maps/8hopbQqifHAgyZyg8",
"openStreetMaps": "https://www.openstreetmap.org/relation/1231749"
},
"population": 106766,
"fifa": "ARU",
"car": {
"side": "right"
},
"timezones": [
"UTC-04:00"
],
"continents": [
"North America"
],
"flags": {
"png": "https://flagcdn.com/w320/aw.png",
"svg": "https://flagcdn.com/aw.svg"
},
"coatOfArms": {
"png": "https://mainfacts.com/media/images/coats_of_arms/aw.png",
"svg": "https://mainfacts.com/media/images/coats_of_arms/aw.svg"
},
"startOfWeek": "monday",
"capitalInfo": {
"latlng": [
12.52,
-70.03
]
}
},
{
    "name": {
    "common": "South Georgia",
    "official": "South Georgia and the South Sandwich Islands",
    "nativeName": {
    "eng": {
    "official": "South Georgia and the South Sandwich Islands",
    "common": "South Georgia"
    }
    }
    },
    "tld": [
    ".gs"
    ],
    "cca2": "GS",
    "ccn3": "239",
    "cca3": "SGS",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
    "SHP": {
    "name": "Saint Helena pound",
    "symbol": "£"
    }
    },
    "idd": {
    "root": "+5",
    "suffixes": [
    "00"
    ]
    },
    "capital": [
    "King Edward Point"
    ],
    "altSpellings": [
    "GS",
    "South Georgia and the South Sandwich Islands"
    ],
    "region": "Antarctic",
    "languages": {
    "eng": "English"
    },
    "translations": {
    "ara": {
    "official": "جورجيا الجنوبية وجزر ساندوتش الجنوبية",
    "common": "جورجيا الجنوبية"
    },
    "bre": {
    "official": "Georgia ar Su hag Inizi Sandwich ar Su",
    "common": "Georgia ar Su hag Inizi Sandwich ar Su"
    },
    "ces": {
    "official": "Jižní Georgie a Jižní Sandwichovy ostrovy",
    "common": "Jižní Georgie a Jižní Sandwichovy ostrovy"
    },
    "cym": {
    "official": "South Georgia and the South Sandwich Islands",
    "common": "South Georgia"
    },
    "deu": {
    "official": "Südgeorgien und die Südlichen Sandwichinseln",
    "common": "Südgeorgien und die Südlichen Sandwichinseln"
    },
    "est": {
    "official": "Lõuna-Georgia ja Lõuna-Sandwichi saared",
    "common": "Lõuna-Georgia ja Lõuna-Sandwichi saared"
    },
    "fin": {
    "official": "Etelä-Georgia ja Eteläiset Sandwichsaaret",
    "common": "Etelä-Georgia ja Eteläiset Sandwichsaaret"
    },
    "fra": {
    "official": "Géorgie du Sud et les îles Sandwich du Sud",
    "common": "Géorgie du Sud-et-les Îles Sandwich du Sud"
    },
    "hrv": {
    "official": "Južna Džordžija i Otoci Južni Sendvič",
    "common": "Južna Georgija i otočje Južni Sandwich"
    },
    "hun": {
    "official": "Déli-Georgia és Déli-Sandwich-szigetek",
    "common": "Déli-Georgia és Déli-Sandwich-szigetek"
    },
    "ita": {
    "official": "Georgia del Sud e isole Sandwich del Sud",
    "common": "Georgia del Sud e Isole Sandwich Meridionali"
    },
    "jpn": {
    "official": "サウスジョージア·サウスサンドウィッチ諸島",
    "common": "サウスジョージア・サウスサンドウィッチ諸島"
    },
    "kor": {
    "official": "조지아",
    "common": "조지아"
    },
    "nld": {
    "official": "Zuid-Georgië en de Zuidelijke Sandwich-eilanden",
    "common": "Zuid-Georgia en Zuidelijke Sandwicheilanden"
    },
    "per": {
    "official": "جزایر جورجیای جنوبی و ساندویچ جنوبی",
    "common": "جزایر جورجیای جنوبی و ساندویچ جنوبی"
    },
    "pol": {
    "official": "Georgia Południowa i Sandwich Południowy",
    "common": "Georgia Południowa i Sandwich Południowy"
    },
    "por": {
    "official": "Geórgia do Sul e Sandwich do Sul",
    "common": "Ilhas Geórgia do Sul e Sandwich do Sul"
    },
    "rus": {
    "official": "Южная Георгия и Южные Сандвичевы острова",
    "common": "Южная Георгия и Южные Сандвичевы острова"
    },
    "slk": {
    "official": "Južná Georgia a Južné Sandwichove ostrovy",
    "common": "Južná Georgia a Južné Sandwichove ostrovy"
    },
    "spa": {
    "official": "Georgia del Sur y las Islas Sandwich del Sur",
    "common": "Islas Georgias del Sur y Sandwich del Sur"
    },
    "swe": {
    "official": "Sydgeorgien",
    "common": "Sydgeorgien"
    },
    "tur": {
    "official": "Güney Georgia ve Güney Sandwich Adaları",
    "common": "Güney Georgia ve Güney Sandwich Adaları"
    },
    "urd": {
    "official": "جنوبی جارجیا و جزائر جنوبی سینڈوچ",
    "common": "جنوبی جارجیا"
    },
    "zho": {
    "official": "南乔治亚岛和南桑威奇群岛",
    "common": "南乔治亚"
    }
    },
    "latlng": [
    -54.5,
    -37
    ],
    "landlocked": false,
    "area": 3903,
    "demonyms": {
    "eng": {
    "f": "South Georgian South Sandwich Islander",
    "m": "South Georgian South Sandwich Islander"
    }
    },
    "flag": "🇬🇸",
    "maps": {
    "googleMaps": "https://goo.gl/maps/mJzdaBwKBbm2B81q9",
    "openStreetMaps": "https://www.openstreetmap.org/relation/1983629"
    },
    "population": 30,
    "car": {
    "signs": [
    ""
    ],
    "side": "right"
    },
    "timezones": [
    "UTC-02:00"
    ],
    "continents": [
    "Antarctica"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/gs.png",
    "svg": "https://flagcdn.com/gs.svg"
    },
    "coatOfArms": {},
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -54.28,
    -36.5
    ]
    }
    },
    {
    "name": {
    "common": "Nauru",
    "official": "Republic of Nauru",
    "nativeName": {
    "eng": {
    "official": "Republic of Nauru",
    "common": "Nauru"
    },
    "nau": {
    "official": "Republic of Nauru",
    "common": "Nauru"
    }
    }
    },
    "tld": [
    ".nr"
    ],
    "cca2": "NR",
    "ccn3": "520",
    "cca3": "NRU",
    "cioc": "NRU",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "AUD": {
    "name": "Australian dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+6",
    "suffixes": [
    "74"
    ]
    },
    "capital": [
    "Yaren"
    ],
    "altSpellings": [
    "NR",
    "Naoero",
    "Pleasant Island",
    "Republic of Nauru",
    "Ripublik Naoero"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "languages": {
    "eng": "English",
    "nau": "Nauru"
    },
    "translations": {
    "ara": {
    "official": "جمهورية ناورو",
    "common": "ناورو"
    },
    "bre": {
    "official": "Republik Nauru",
    "common": "Nauru"
    },
    "ces": {
    "official": "Republika Nauru",
    "common": "Nauru"
    },
    "cym": {
    "official": "Republic of Nauru",
    "common": "Nauru"
    },
    "deu": {
    "official": "Republik Nauru",
    "common": "Nauru"
    },
    "est": {
    "official": "Nauru Vabariik",
    "common": "Nauru"
    },
    "fin": {
    "official": "Naurun tasavalta",
    "common": "Nauru"
    },
    "fra": {
    "official": "République de Nauru",
    "common": "Nauru"
    },
    "hrv": {
    "official": "Republika Nauru",
    "common": "Nauru"
    },
    "hun": {
    "official": "Naurui Köztársaság",
    "common": "Nauru"
    },
    "ita": {
    "official": "Repubblica di Nauru",
    "common": "Nauru"
    },
    "jpn": {
    "official": "ナウル共和国",
    "common": "ナウル"
    },
    "kor": {
    "official": "나우루 공화국",
    "common": "나우루"
    },
    "nld": {
    "official": "Republiek Nauru",
    "common": "Nauru"
    },
    "per": {
    "official": "جمهوری نائورو",
    "common": "نائورو"
    },
    "pol": {
    "official": "Republika Nauru",
    "common": "Nauru"
    },
    "por": {
    "official": "República de Nauru",
    "common": "Nauru"
    },
    "rus": {
    "official": "Республика Науру",
    "common": "Науру"
    },
    "slk": {
    "official": "Naurská republika",
    "common": "Nauru"
    },
    "spa": {
    "official": "República de Nauru",
    "common": "Nauru"
    },
    "swe": {
    "official": "Republiken Nauru",
    "common": "Nauru"
    },
    "tur": {
    "official": "Nauru Cumhuriyeti",
    "common": "Nauru"
    },
    "urd": {
    "official": "جمہوریہ ناورو",
    "common": "ناورو"
    },
    "zho": {
    "official": "瑙鲁共和国",
    "common": "瑙鲁"
    }
    },
    "latlng": [
    -0.53333333,
    166.91666666
    ],
    "landlocked": false,
    "area": 21,
    "demonyms": {
    "eng": {
    "f": "Nauruan",
    "m": "Nauruan"
    },
    "fra": {
    "f": "Nauruane",
    "m": "Nauruan"
    }
    },
    "flag": "🇳🇷",
    "maps": {
    "googleMaps": "https://goo.gl/maps/kyAGw6XEJgjSMsTK7",
    "openStreetMaps": "https://www.openstreetmap.org/relation/571804"
    },
    "population": 10834,
    "gini": {
    "2012": 34.8
    },
    "car": {
    "signs": [
    "NAU"
    ],
    "side": "left"
    },
    "timezones": [
    "UTC+12:00"
    ],
    "continents": [
    "Oceania"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/nr.png",
    "svg": "https://flagcdn.com/nr.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/nr.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/nr.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -0.55,
    166.92
    ]
    }
    },
    {
    "name": {
    "common": "Faroe Islands",
    "official": "Faroe Islands",
    "nativeName": {
    "dan": {
    "official": "Færøerne",
    "common": "Færøerne"
    },
    "fao": {
    "official": "Føroyar",
    "common": "Føroyar"
    }
    }
    },
    "tld": [
    ".fo"
    ],
    "cca2": "FO",
    "ccn3": "234",
    "cca3": "FRO",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
    "DKK": {
    "name": "Danish krone",
    "symbol": "kr"
    },
    "FOK": {
    "name": "Faroese króna",
    "symbol": "kr"
    }
    },
    "idd": {
    "root": "+2",
    "suffixes": [
    "98"
    ]
    },
    "capital": [
    "Tórshavn"
    ],
    "altSpellings": [
    "FO",
    "Føroyar",
    "Færøerne"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "languages": {
    "dan": "Danish",
    "fao": "Faroese"
    },
    "translations": {
    "ara": {
    "official": "جزر فارو",
    "common": "جزر فارو"
    },
    "bre": {
    "official": "Inizi Faero",
    "common": "Inizi Faero"
    },
    "ces": {
    "official": "Faerské ostrovy",
    "common": "Faerské ostrovy"
    },
    "cym": {
    "official": "Faroe Islands",
    "common": "Faroe Islands"
    },
    "deu": {
    "official": "Färöer",
    "common": "Färöer-Inseln"
    },
    "est": {
    "official": "Fääri saared",
    "common": "Fääri saared"
    },
    "fin": {
    "official": "Färsaaret",
    "common": "Färsaaret"
    },
    "fra": {
    "official": "Îles Féroé",
    "common": "Îles Féroé"
    },
    "hrv": {
    "official": "Farski Otoci",
    "common": "Farski Otoci"
    },
    "hun": {
    "official": "Feröer",
    "common": "Feröer"
    },
    "ita": {
    "official": "Isole Faroe",
    "common": "Isole Far Oer"
    },
    "jpn": {
    "official": "フェロー諸島",
    "common": "フェロー諸島"
    },
    "kor": {
    "official": "페로 제도",
    "common": "페로 제도"
    },
    "nld": {
    "official": "Faeröer",
    "common": "Faeröer"
    },
    "per": {
    "official": "جزایر فاروئه",
    "common": "جزایر فاروئه"
    },
    "pol": {
    "official": "Wyspy Owcze",
    "common": "Wyspy Owcze"
    },
    "por": {
    "official": "Ilhas Faroe",
    "common": "Ilhas Faroé"
    },
    "rus": {
    "official": "Фарерские острова",
    "common": "Фарерские острова"
    },
    "slk": {
    "official": "Faerské ostrovy",
    "common": "Faerské ostrovy"
    },
    "spa": {
    "official": "Islas Feroe",
    "common": "Islas Faroe"
    },
    "swe": {
    "official": "Färöarna",
    "common": "Färöarna"
    },
    "tur": {
    "official": "Faroe Adaları",
    "common": "Faroe Adaları"
    },
    "urd": {
    "official": "جزائر فارو",
    "common": "جزائر فارو"
    },
    "zho": {
    "official": "法罗群岛",
    "common": "法罗群岛"
    }
    },
    "latlng": [
    62,
    -7
    ],
    "landlocked": false,
    "area": 1393,
    "demonyms": {
    "eng": {
    "f": "Faroese",
    "m": "Faroese"
    },
    "fra": {
    "f": "Féroïenne",
    "m": "Féroïen"
    }
    },
    "flag": "🇫🇴",
    "maps": {
    "googleMaps": "https://goo.gl/maps/6sTru4SmHdEVcNkM6",
    "openStreetMaps": "https://www.openstreetmap.org/relation/52939"
    },
    "population": 48865,
    "fifa": "FRO",
    "car": {
    "signs": [
    "FO"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+00:00"
    ],
    "continents": [
    "Europe"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/fo.png",
    "svg": "https://flagcdn.com/fo.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/fo.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/fo.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    62.01,
    -6.77
    ]
    },
    "postalCode": {
    "format": "FO-###",
    "regex": "^(?:FO)*(\\d{3})$"
    }
    },
    {
    "name": {
    "common": "American Samoa",
    "official": "American Samoa",
    "nativeName": {
    "eng": {
    "official": "American Samoa",
    "common": "American Samoa"
    },
    "smo": {
    "official": "Sāmoa Amelika",
    "common": "Sāmoa Amelika"
    }
    }
    },
    "tld": [
    ".as"
    ],
    "cca2": "AS",
    "ccn3": "016",
    "cca3": "ASM",
    "cioc": "ASA",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
    "USD": {
    "name": "United States dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+1",
    "suffixes": [
    "684"
    ]
    },
    "capital": [
    "Pago Pago"
    ],
    "altSpellings": [
    "AS",
    "Amerika Sāmoa",
    "Amelika Sāmoa",
    "Sāmoa Amelika"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "languages": {
    "eng": "English",
    "smo": "Samoan"
    },
    "translations": {
    "ara": {
    "official": "ساموا الأمريكية",
    "common": "ساموا الأمريكية"
    },
    "bre": {
    "official": "Samoa Amerikan",
    "common": "Samoa Amerikan"
    },
    "ces": {
    "official": "Americká Samoa",
    "common": "Americká Samoa"
    },
    "cym": {
    "official": "American Samoa",
    "common": "American Samoa"
    },
    "deu": {
    "official": "Amerikanisch-Samoa",
    "common": "Amerikanisch-Samoa"
    },
    "est": {
    "official": "Ameerika Samoa",
    "common": "Ameerika Samoa"
    },
    "fin": {
    "official": "Amerikan Samoa",
    "common": "Amerikan Samoa"
    },
    "fra": {
    "official": "Samoa américaines",
    "common": "Samoa américaines"
    },
    "hrv": {
    "official": "američka Samoa",
    "common": "Američka Samoa"
    },
    "hun": {
    "official": "Szamoa",
    "common": "Szamoa"
    },
    "ita": {
    "official": "Samoa americane",
    "common": "Samoa Americane"
    },
    "jpn": {
    "official": "米サモア",
    "common": "アメリカ領サモア"
    },
    "kor": {
    "official": "아메리칸사모아",
    "common": "아메리칸사모아"
    },
    "nld": {
    "official": "Amerikaans Samoa",
    "common": "Amerikaans Samoa"
    },
    "per": {
    "official": "ساموآی آمریکا",
    "common": "ساموآی آمریکا"
    },
    "pol": {
    "official": "Samoa Amerykańskie",
    "common": "Samoa Amerykańskie"
    },
    "por": {
    "official": "Samoa americana",
    "common": "Samoa Americana"
    },
    "rus": {
    "official": "американское Самоа",
    "common": "Американское Самоа"
    },
    "slk": {
    "official": "Americká Samoa",
    "common": "Americká Samoa"
    },
    "spa": {
    "official": "Samoa Americana",
    "common": "Samoa Americana"
    },
    "swe": {
    "official": "Amerikanska Samoa",
    "common": "Amerikanska Samoa"
    },
    "tur": {
    "official": "Amerikan Samoası",
    "common": "Amerikan Samoası"
    },
    "urd": {
    "official": "امریکی سمووا",
    "common": "امریکی سمووا"
    },
    "zho": {
    "official": "美属萨摩亚",
    "common": "美属萨摩亚"
    }
    },
    "latlng": [
    -14.33333333,
    -170
    ],
    "landlocked": false,
    "area": 199,
    "demonyms": {
    "eng": {
    "f": "American Samoan",
    "m": "American Samoan"
    },
    "fra": {
    "f": "Samoane",
    "m": "Samoan"
    }
    },
    "flag": "🇦🇸",
    "maps": {
    "googleMaps": "https://goo.gl/maps/Re9ePMjwP1sFCBFA6",
    "openStreetMaps": "https://www.openstreetmap.org/relation/2177187"
    },
    "population": 55197,
    "fifa": "ASA",
    "car": {
    "signs": [
    "USA"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC-11:00"
    ],
    "continents": [
    "Oceania"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/as.png",
    "svg": "https://flagcdn.com/as.svg"
    },
    "coatOfArms": {},
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -14.27,
    -170.7
    ]
    }
    },
    {
    "name": {
    "common": "Lesotho",
    "official": "Kingdom of Lesotho",
    "nativeName": {
    "eng": {
    "official": "Kingdom of Lesotho",
    "common": "Lesotho"
    },
    "sot": {
    "official": "Kingdom of Lesotho",
    "common": "Lesotho"
    }
    }
    },
    "tld": [
    ".ls"
    ],
    "cca2": "LS",
    "ccn3": "426",
    "cca3": "LSO",
    "cioc": "LES",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "LSL": {
    "name": "Lesotho loti",
    "symbol": "L"
    },
    "ZAR": {
    "name": "South African rand",
    "symbol": "R"
    }
    },
    "idd": {
    "root": "+2",
    "suffixes": [
    "66"
    ]
    },
    "capital": [
    "Maseru"
    ],
    "altSpellings": [
    "LS",
    "Kingdom of Lesotho",
    "Muso oa Lesotho"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "languages": {
    "eng": "English",
    "sot": "Sotho"
    },
    "translations": {
    "ara": {
    "official": "مملكة ليسوتو",
    "common": "ليسوتو"
    },
    "bre": {
    "official": "Rouantelezh Lesotho",
    "common": "Lesotho"
    },
    "ces": {
    "official": "Lesothské království",
    "common": "Lesotho"
    },
    "cym": {
    "official": "Kingdom of Lesotho",
    "common": "Lesotho"
    },
    "deu": {
    "official": "Königreich Lesotho",
    "common": "Lesotho"
    },
    "est": {
    "official": "Lesotho Kuningriik",
    "common": "Lesotho"
    },
    "fin": {
    "official": "Lesothon kuningaskunta",
    "common": "Lesotho"
    },
    "fra": {
    "official": "Royaume du Lesotho",
    "common": "Lesotho"
    },
    "hrv": {
    "official": "Kraljevina Lesoto",
    "common": "Lesoto"
    },
    "hun": {
    "official": "Lesothói Királyság",
    "common": "Lesotho"
    },
    "ita": {
    "official": "Regno del Lesotho",
    "common": "Lesotho"
    },
    "jpn": {
    "official": "レソト王国",
    "common": "レソト"
    },
    "kor": {
    "official": "레소토 왕국",
    "common": "레소토"
    },
    "nld": {
    "official": "Koninkrijk Lesotho",
    "common": "Lesotho"
    },
    "per": {
    "official": "پادشاهی لسوتو",
    "common": "لسوتو"
    },
    "pol": {
    "official": "Królestwo Lesotho",
    "common": "Lesotho"
    },
    "por": {
    "official": "Reino do Lesoto",
    "common": "Lesoto"
    },
    "rus": {
    "official": "Королевство Лесото",
    "common": "Лесото"
    },
    "slk": {
    "official": "Lesothské kráľovstvo",
    "common": "Lesotho"
    },
    "spa": {
    "official": "Reino de Lesotho",
    "common": "Lesotho"
    },
    "swe": {
    "official": "Konungariket Lesotho",
    "common": "Lesotho"
    },
    "tur": {
    "official": "Lesotho Krallığı",
    "common": "Lesotho"
    },
    "urd": {
    "official": "مملکتِ لیسوتھو",
    "common": "لیسوتھو"
    },
    "zho": {
    "official": "莱索托王国",
    "common": "莱索托"
    }
    },
    "latlng": [
    -29.5,
    28.5
    ],
    "landlocked": true,
    "borders": [
    "ZAF"
    ],
    "area": 30355,
    "demonyms": {
    "eng": {
    "f": "Mosotho",
    "m": "Mosotho"
    },
    "fra": {
    "f": "Lésothienne",
    "m": "Lésothien"
    }
    },
    "flag": "🇱🇸",
    "maps": {
    "googleMaps": "https://goo.gl/maps/H8gJi5mL4Cmd1SF28",
    "openStreetMaps": "https://www.openstreetmap.org/relation/2093234"
    },
    "population": 2142252,
    "gini": {
    "2017": 44.9
    },
    "fifa": "LES",
    "car": {
    "signs": [
    "LS"
    ],
    "side": "left"
    },
    "timezones": [
    "UTC+02:00"
    ],
    "continents": [
    "Africa"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/ls.png",
    "svg": "https://flagcdn.com/ls.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/ls.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/ls.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -29.32,
    27.48
    ]
    },
    "postalCode": {
    "format": "###",
    "regex": "^(\\d{3})$"
    }
    },
    {
    "name": {
    "common": "Montenegro",
    "official": "Montenegro",
    "nativeName": {
    "cnr": {
    "official": "Црна Гора",
    "common": "Црна Гора"
    }
    }
    },
    "tld": [
    ".me"
    ],
    "cca2": "ME",
    "ccn3": "499",
    "cca3": "MNE",
    "cioc": "MNE",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "EUR": {
    "name": "Euro",
    "symbol": "€"
    }
    },
    "idd": {
    "root": "+3",
    "suffixes": [
    "82"
    ]
    },
    "capital": [
    "Podgorica"
    ],
    "altSpellings": [
    "ME",
    "Crna Gora"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "languages": {
    "cnr": "Montenegrin"
    },
    "translations": {
    "ara": {
    "official": "الجبل الاسود",
    "common": "الجبل الاسود"
    },
    "bre": {
    "official": "Republik Montenegro",
    "common": "Montenegro"
    },
    "ces": {
    "official": "Černá Hora",
    "common": "Černá Hora"
    },
    "cym": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "deu": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "est": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "fin": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "fra": {
    "official": "Monténégro",
    "common": "Monténégro"
    },
    "hrv": {
    "official": "Crna Gora",
    "common": "Crna Gora"
    },
    "hun": {
    "official": "Montenegró",
    "common": "Montenegró"
    },
    "ita": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "jpn": {
    "official": "モンテネグロ",
    "common": "モンテネグロ"
    },
    "kor": {
    "official": "몬테네그로",
    "common": "몬테네그로"
    },
    "nld": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "per": {
    "official": "مونته‌نگرو",
    "common": "مونته‌نگرو"
    },
    "pol": {
    "official": "Czarnogóra",
    "common": "Czarnogóra"
    },
    "por": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "rus": {
    "official": "Черногория",
    "common": "Черногория"
    },
    "slk": {
    "official": "Čierna Hora",
    "common": "Čierna Hora"
    },
    "spa": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "swe": {
    "official": "Montenegro",
    "common": "Montenegro"
    },
    "tur": {
    "official": "Karadağ",
    "common": "Karadağ"
    },
    "urd": {
    "official": "مونٹینیگرو",
    "common": "مونٹینیگرو"
    },
    "zho": {
    "official": "黑山",
    "common": "黑山"
    }
    },
    "latlng": [
    42.5,
    19.3
    ],
    "landlocked": false,
    "borders": [
    "ALB",
    "BIH",
    "HRV",
    "UNK",
    "SRB"
    ],
    "area": 13812,
    "demonyms": {
    "eng": {
    "f": "Montenegrin",
    "m": "Montenegrin"
    },
    "fra": {
    "f": "Monténégrine",
    "m": "Monténégrin"
    }
    },
    "flag": "🇲🇪",
    "maps": {
    "googleMaps": "https://goo.gl/maps/4THX1fM7WqANuPbB8",
    "openStreetMaps": "https://www.openstreetmap.org/relation/53296"
    },
    "population": 621718,
    "gini": {
    "2016": 38.5
    },
    "fifa": "MNE",
    "car": {
    "signs": [
    "SCG"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+01:00"
    ],
    "continents": [
    "Europe"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/me.png",
    "svg": "https://flagcdn.com/me.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/me.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/me.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    42.43,
    19.27
    ]
    },
    "postalCode": {
    "format": "#####",
    "regex": "^(\\d{5})$"
    }
    },
    {
    "name": {
    "common": "Cape Verde",
    "official": "Republic of Cabo Verde",
    "nativeName": {
    "por": {
    "official": "República de Cabo Verde",
    "common": "Cabo Verde"
    }
    }
    },
    "tld": [
    ".cv"
    ],
    "cca2": "CV",
    "ccn3": "132",
    "cca3": "CPV",
    "cioc": "CPV",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "CVE": {
    "name": "Cape Verdean escudo",
    "symbol": "Esc"
    }
    },
    "idd": {
    "root": "+2",
    "suffixes": [
    "38"
    ]
    },
    "capital": [
    "Praia"
    ],
    "altSpellings": [
    "CV",
    "Republic of Cabo Verde",
    "República de Cabo Verde"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "languages": {
    "por": "Portuguese"
    },
    "translations": {
    "ara": {
    "official": "جمهورية كابو فيردي",
    "common": "كابو فيردي"
    },
    "bre": {
    "official": "Republik Kab Glas",
    "common": "Kab Glas"
    },
    "ces": {
    "official": "Kapverdská republika",
    "common": "Kapverdy"
    },
    "cym": {
    "official": "Gweriniaeth Cabo Verde",
    "common": "Penrhyn Verde"
    },
    "deu": {
    "official": "Republik Cabo Verde",
    "common": "Kap Verde"
    },
    "est": {
    "official": "Cabo Verde Vabariik",
    "common": "Roheneemesaared"
    },
    "fin": {
    "official": "Kap Verden tasavalta",
    "common": "Kap Verde"
    },
    "fra": {
    "official": "République du Cap-Vert",
    "common": "Îles du Cap-Vert"
    },
    "hrv": {
    "official": "Republika Cabo Verde",
    "common": "Zelenortska Republika"
    },
    "hun": {
    "official": "Zöld-foki Köztársaság",
    "common": "Zöld-foki Köztársaság"
    },
    "ita": {
    "official": "Repubblica di Capo Verde",
    "common": "Capo Verde"
    },
    "jpn": {
    "official": "カーボベルデ共和国",
    "common": "カーボベルデ"
    },
    "kor": {
    "official": "카보베르데 공화국",
    "common": "카보베르데"
    },
    "nld": {
    "official": "Republiek van Cabo Verde",
    "common": "Kaapverdië"
    },
    "per": {
    "official": "جمهوری کبو ورد",
    "common": "دماغهٔ سبز"
    },
    "pol": {
    "official": "Republika Zielonego Przylądka",
    "common": "Republika Zielonego Przylądka"
    },
    "por": {
    "official": "República de Cabo Verde",
    "common": "Cabo Verde"
    },
    "rus": {
    "official": "Республика Кабо -Верде",
    "common": "Кабо-Верде"
    },
    "slk": {
    "official": "Kapverdská republika",
    "common": "Kapverdy"
    },
    "spa": {
    "official": "República de Cabo Verde",
    "common": "Cabo Verde"
    },
    "swe": {
    "official": "Republiken Kap Verde",
    "common": "Kap Verde"
    },
    "tur": {
    "official": "Yeşil Burun Cumhuriyeti",
    "common": "Yeşil Burun"
    },
    "urd": {
    "official": "جمہوریہ کیپ ورڈی",
    "common": "کیپ ورڈی"
    },
    "zho": {
    "official": "佛得角共和国",
    "common": "佛得角"
    }
    },
    "latlng": [
    16,
    -24
    ],
    "landlocked": false,
    "area": 4033,
    "demonyms": {
    "eng": {
    "f": "Cape Verdian",
    "m": "Cape Verdian"
    },
    "fra": {
    "f": "Cap-verdienne",
    "m": "Cap-verdien"
    }
    },
    "flag": "🇨🇻",
    "maps": {
    "googleMaps": "https://goo.gl/maps/Kc9vy5ChjuiAgMfXA",
    "openStreetMaps": "https://www.openstreetmap.org/relation/535774"
    },
    "population": 555988,
    "gini": {
    "2015": 42.4
    },
    "fifa": "CPV",
    "car": {
    "signs": [
    "CV"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC-01:00"
    ],
    "continents": [
    "Africa"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/cv.png",
    "svg": "https://flagcdn.com/cv.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/cv.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/cv.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    14.92,
    -23.52
    ]
    },
    "postalCode": {
    "format": "####",
    "regex": "^(\\d{4})$"
    }
    },
    {
    "name": {
    "common": "Cameroon",
    "official": "Republic of Cameroon",
    "nativeName": {
    "eng": {
    "official": "Republic of Cameroon",
    "common": "Cameroon"
    },
    "fra": {
    "official": "République du Cameroun",
    "common": "Cameroun"
    }
    }
    },
    "tld": [
    ".cm"
    ],
    "cca2": "CM",
    "ccn3": "120",
    "cca3": "CMR",
    "cioc": "CMR",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "XAF": {
    "name": "Central African CFA franc",
    "symbol": "Fr"
    }
    },
    "idd": {
    "root": "+2",
    "suffixes": [
    "37"
    ]
    },
    "capital": [
    "Yaoundé"
    ],
    "altSpellings": [
    "CM",
    "Republic of Cameroon",
    "République du Cameroun"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "languages": {
    "eng": "English",
    "fra": "French"
    },
    "translations": {
    "ara": {
    "official": "جمهورية الكاميرون",
    "common": "الكاميرون"
    },
    "bre": {
    "official": "Republik Kameroun",
    "common": "Kameroun"
    },
    "ces": {
    "official": "Kamerunská republika",
    "common": "Kamerun"
    },
    "cym": {
    "official": "Gweriniaeth Camerŵn",
    "common": "Camerŵn"
    },
    "deu": {
    "official": "Republik Kamerun",
    "common": "Kamerun"
    },
    "est": {
    "official": "Kameruni Vabariik",
    "common": "Kamerun"
    },
    "fin": {
    "official": "Kamerunin tasavalta",
    "common": "Kamerun"
    },
    "fra": {
    "official": "République du Cameroun",
    "common": "Cameroun"
    },
    "hrv": {
    "official": "Republika Kamerun",
    "common": "Kamerun"
    },
    "hun": {
    "official": "Kameruni Köztársaság",
    "common": "Kamerun"
    },
    "ita": {
    "official": "Repubblica del Camerun",
    "common": "Camerun"
    },
    "jpn": {
    "official": "カメルーン共和国",
    "common": "カメルーン"
    },
    "kor": {
    "official": "카메룬 공화국",
    "common": "카메룬"
    },
    "nld": {
    "official": "Republiek Kameroen",
    "common": "Kameroen"
    },
    "per": {
    "official": "جمهوری کامِرون",
    "common": "کامِرون"
    },
    "pol": {
    "official": "Republika Kamerunu",
    "common": "Kamerun"
    },
    "por": {
    "official": "República dos Camarões",
    "common": "Camarões"
    },
    "rus": {
    "official": "Республика Камерун",
    "common": "Камерун"
    },
    "slk": {
    "official": "Kamerunská republika",
    "common": "Kamerun"
    },
    "spa": {
    "official": "República de Camerún",
    "common": "Camerún"
    },
    "swe": {
    "official": "Republiken Kamerun",
    "common": "Kamerun"
    },
    "tur": {
    "official": "Kamerun Cumhuriyeti",
    "common": "Kamerun"
    },
    "urd": {
    "official": "جمہوریہ کیمرون",
    "common": "کیمرون"
    },
    "zho": {
    "official": "喀麦隆共和国",
    "common": "喀麦隆"
    }
    },
    "latlng": [
    6,
    12
    ],
    "landlocked": false,
    "borders": [
    "CAF",
    "TCD",
    "COG",
    "GNQ",
    "GAB",
    "NGA"
    ],
    "area": 475442,
    "demonyms": {
    "eng": {
    "f": "Cameroonian",
    "m": "Cameroonian"
    },
    "fra": {
    "f": "Camerounaise",
    "m": "Camerounais"
    }
    },
    "flag": "🇨🇲",
    "maps": {
    "googleMaps": "https://goo.gl/maps/JqiipHgFboG3rBJh9",
    "openStreetMaps": "https://www.openstreetmap.org/relation/192830"
    },
    "population": 26545864,
    "gini": {
    "2014": 46.6
    },
    "fifa": "CMR",
    "car": {
    "signs": [
    "CAM"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+01:00"
    ],
    "continents": [
    "Africa"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/cm.png",
    "svg": "https://flagcdn.com/cm.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/cm.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/cm.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    3.85,
    11.5
    ]
    }
    },
    {
    "name": {
    "common": "North Korea",
    "official": "Democratic People's Republic of Korea",
    "nativeName": {
    "kor": {
    "official": "조선민주주의인민공화국",
    "common": "조선"
    }
    }
    },
    "tld": [
    ".kp"
    ],
    "cca2": "KP",
    "ccn3": "408",
    "cca3": "PRK",
    "cioc": "PRK",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "KPW": {
    "name": "North Korean won",
    "symbol": "₩"
    }
    },
    "idd": {
    "root": "+8",
    "suffixes": [
    "50"
    ]
    },
    "capital": [
    "Pyongyang"
    ],
    "altSpellings": [
    "KP",
    "Democratic People's Republic of Korea",
    "DPRK",
    "조선민주주의인민공화국",
    "Chosŏn Minjujuŭi Inmin Konghwaguk",
    "Korea, Democratic People's Republic of",
    "북한",
    "북조선"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "languages": {
    "kor": "Korean"
    },
    "translations": {
    "ara": {
    "official": "جمهورية كوريا الديمقراطية الشعبية",
    "common": "كوريا الشمالية"
    },
    "bre": {
    "official": "Republik Poblel ha Demokratel Korea",
    "common": "Korea an Norzh"
    },
    "ces": {
    "official": "Korejská lidově demokratická republika",
    "common": "Severní Korea"
    },
    "cym": {
    "official": "Democratic People's Republic of Korea",
    "common": "North Korea"
    },
    "deu": {
    "official": "Demokratische Volksrepublik Korea",
    "common": "Nordkorea"
    },
    "est": {
    "official": "Korea Rahvademokraatlik Vabariik",
    "common": "Põhja-Korea"
    },
    "fin": {
    "official": "Korean demokraattinen kansantasavalta",
    "common": "Pohjois-Korea"
    },
    "fra": {
    "official": "République populaire démocratique de Corée",
    "common": "Corée du Nord"
    },
    "hrv": {
    "official": "Demokratska Narodna Republika Koreja",
    "common": "Sjeverna Koreja"
    },
    "hun": {
    "official": "Koreai Népi Demokratikus Köztársaság",
    "common": "Észak-Korea"
    },
    "ita": {
    "official": "Repubblica democratica popolare di Corea",
    "common": "Corea del Nord"
    },
    "jpn": {
    "official": "朝鮮民主主義人民共和国",
    "common": "朝鮮民主主義人民共和国"
    },
    "kor": {
    "official": "조선민주주의인민공화국",
    "common": "조선"
    },
    "nld": {
    "official": "Democratische Volksrepubliek Korea",
    "common": "Noord-Korea"
    },
    "per": {
    "official": "جمهوری دموکراتیک خلق کره",
    "common": "کُره شمالی"
    },
    "pol": {
    "official": "Koreańska Republika Ludowo-Demokratyczna",
    "common": "Korea Północna"
    },
    "por": {
    "official": "República Popular Democrática da Coreia",
    "common": "Coreia do Norte"
    },
    "rus": {
    "official": "Корейская Народно-Демократическая Республика Корея",
    "common": "Северная Корея"
    },
    "slk": {
    "official": "Kórejská ľudovodemokratická republika",
    "common": "Severná Kórea"
    },
    "spa": {
    "official": "República Popular Democrática de Corea",
    "common": "Corea del Norte"
    },
    "swe": {
    "official": "Demokratiska Folkrepubliken Korea",
    "common": "Nordkorea"
    },
    "tur": {
    "official": "Kore Demokratik Halk Cumhuriyeti",
    "common": "Kuzey Kore"
    },
    "urd": {
    "official": "جمہوری عوامی جمہوریہ کوریا",
    "common": "شمالی کوریا"
    },
    "zho": {
    "official": "朝鲜人民民主共和国",
    "common": "朝鲜"
    }
    },
    "latlng": [
    40,
    127
    ],
    "landlocked": false,
    "borders": [
    "CHN",
    "KOR",
    "RUS"
    ],
    "area": 120538,
    "demonyms": {
    "eng": {
    "f": "North Korean",
    "m": "North Korean"
    },
    "fra": {
    "f": "Nord-coréenne",
    "m": "Nord-coréen"
    }
    },
    "flag": "🇰🇵",
    "maps": {
    "googleMaps": "https://goo.gl/maps/9q5T2DMeH5JL7Tky6",
    "openStreetMaps": "https://www.openstreetmap.org/relation/192734"
    },
    "population": 25778815,
    "fifa": "PRK",
    "car": {
    "signs": [
    ""
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+09:00"
    ],
    "continents": [
    "Asia"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/kp.png",
    "svg": "https://flagcdn.com/kp.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/kp.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/kp.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    39.02,
    125.75
    ]
    },
    "postalCode": {
    "format": "###-###",
    "regex": "^(\\d{6})$"
    }
    },
    {
    "name": {
    "common": "Cuba",
    "official": "Republic of Cuba",
    "nativeName": {
    "spa": {
    "official": "República de Cuba",
    "common": "Cuba"
    }
    }
    },
    "tld": [
    ".cu"
    ],
    "cca2": "CU",
    "ccn3": "192",
    "cca3": "CUB",
    "cioc": "CUB",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "CUC": {
    "name": "Cuban convertible peso",
    "symbol": "$"
    },
    "CUP": {
    "name": "Cuban peso",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+5",
    "suffixes": [
    "3"
    ]
    },
    "capital": [
    "Havana"
    ],
    "altSpellings": [
    "CU",
    "Republic of Cuba",
    "República de Cuba"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "languages": {
    "spa": "Spanish"
    },
    "translations": {
    "ara": {
    "official": "جمهورية كوبا",
    "common": "كوبا"
    },
    "bre": {
    "official": "Republik Kuba",
    "common": "Kuba"
    },
    "ces": {
    "official": "Kubánská republika",
    "common": "Kuba"
    },
    "cym": {
    "official": "Gweriniaeth Ciwba",
    "common": "Ciwba"
    },
    "deu": {
    "official": "Republik Kuba",
    "common": "Kuba"
    },
    "est": {
    "official": "Kuuba Vabariik",
    "common": "Kuuba"
    },
    "fin": {
    "official": "Kuuban tasavalta",
    "common": "Kuuba"
    },
    "fra": {
    "official": "République de Cuba",
    "common": "Cuba"
    },
    "hrv": {
    "official": "Republika Kuba",
    "common": "Kuba"
    },
    "hun": {
    "official": "Kubai Köztársaság",
    "common": "Kuba"
    },
    "ita": {
    "official": "Repubblica di Cuba",
    "common": "Cuba"
    },
    "jpn": {
    "official": "キューバ共和国",
    "common": "キューバ"
    },
    "kor": {
    "official": "쿠바 공화국",
    "common": "쿠바"
    },
    "nld": {
    "official": "Republiek Cuba",
    "common": "Cuba"
    },
    "per": {
    "official": "جمهوری کوبا",
    "common": "کوبا"
    },
    "pol": {
    "official": "Republika Kuby",
    "common": "Kuba"
    },
    "por": {
    "official": "República de Cuba",
    "common": "Cuba"
    },
    "rus": {
    "official": "Республика Куба",
    "common": "Куба"
    },
    "slk": {
    "official": "Kubánska republika",
    "common": "Kuba"
    },
    "spa": {
    "official": "República de Cuba",
    "common": "Cuba"
    },
    "swe": {
    "official": "Republiken Kuba",
    "common": "Kuba"
    },
    "tur": {
    "official": "Küba Cumhuriyeti",
    "common": "Küba"
    },
    "urd": {
    "official": "جمہوریہ کیوبا",
    "common": "کیوبا"
    },
    "zho": {
    "official": "古巴共和国",
    "common": "古巴"
    }
    },
    "latlng": [
    21.5,
    -80
    ],
    "landlocked": false,
    "area": 109884,
    "demonyms": {
    "eng": {
    "f": "Cuban",
    "m": "Cuban"
    },
    "fra": {
    "f": "Cubaine",
    "m": "Cubain"
    }
    },
    "flag": "🇨🇺",
    "maps": {
    "googleMaps": "https://goo.gl/maps/1dDw1QfZspfMUTm99",
    "openStreetMaps": "https://www.openstreetmap.org/relation/307833"
    },
    "population": 11326616,
    "fifa": "CUB",
    "car": {
    "signs": [
    "C"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC-05:00"
    ],
    "continents": [
    "North America"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/cu.png",
    "svg": "https://flagcdn.com/cu.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/cu.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/cu.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    23.12,
    -82.35
    ]
    },
    "postalCode": {
    "format": "CP #####",
    "regex": "^(?:CP)*(\\d{5})$"
    }
    },
    {
    "name": {
    "common": "Suriname",
    "official": "Republic of Suriname",
    "nativeName": {
    "nld": {
    "official": "Republiek Suriname",
    "common": "Suriname"
    }
    }
    },
    "tld": [
    ".sr"
    ],
    "cca2": "SR",
    "ccn3": "740",
    "cca3": "SUR",
    "cioc": "SUR",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "SRD": {
    "name": "Surinamese dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+5",
    "suffixes": [
    "97"
    ]
    },
    "capital": [
    "Paramaribo"
    ],
    "altSpellings": [
    "SR",
    "Sarnam",
    "Sranangron",
    "Republic of Suriname",
    "Republiek Suriname"
    ],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
    "nld": "Dutch"
    },
    "translations": {
    "ara": {
    "official": "جمهورية سورينام",
    "common": "سورينام"
    },
    "bre": {
    "official": "Republik Surinam",
    "common": "Surinam"
    },
    "ces": {
    "official": "Republika Surinam",
    "common": "Surinam"
    },
    "cym": {
    "official": "Republic of Suriname",
    "common": "Suriname"
    },
    "deu": {
    "official": "Republik Suriname",
    "common": "Suriname"
    },
    "est": {
    "official": "Suriname Vabariik",
    "common": "Suriname"
    },
    "fin": {
    "official": "Surinamen tasavalta",
    "common": "Suriname"
    },
    "fra": {
    "official": "République du Suriname",
    "common": "Surinam"
    },
    "hrv": {
    "official": "Republika Surinam",
    "common": "Surinam"
    },
    "hun": {
    "official": "Suriname Köztársaság",
    "common": "Suriname"
    },
    "ita": {
    "official": "Repubblica del Suriname",
    "common": "Suriname"
    },
    "jpn": {
    "official": "スリナム共和国",
    "common": "スリナム"
    },
    "kor": {
    "official": "수리남 공화국",
    "common": "수리남"
    },
    "nld": {
    "official": "Republiek Suriname",
    "common": "Suriname"
    },
    "per": {
    "official": "جمهوری سورینام",
    "common": "سورینام"
    },
    "pol": {
    "official": "Republika Surinamu",
    "common": "Surinam"
    },
    "por": {
    "official": "República do Suriname",
    "common": "Suriname"
    },
    "rus": {
    "official": "Республика Суринам",
    "common": "Суринам"
    },
    "slk": {
    "official": "Surinamská republika",
    "common": "Surinam"
    },
    "spa": {
    "official": "República de Suriname",
    "common": "Surinam"
    },
    "swe": {
    "official": "Republiken Surinam",
    "common": "Surinam"
    },
    "tur": {
    "official": "Surinam Cumhuriyeti",
    "common": "Surinam"
    },
    "urd": {
    "official": "جمہوریہ سرینام",
    "common": "سرینام"
    },
    "zho": {
    "official": "苏里南共和国",
    "common": "苏里南"
    }
    },
    "latlng": [
    4,
    -56
    ],
    "landlocked": false,
    "borders": [
    "BRA",
    "GUF",
    "GUY"
    ],
    "area": 163820,
    "demonyms": {
    "eng": {
    "f": "Surinamer",
    "m": "Surinamer"
    },
    "fra": {
    "f": "Surinamaise",
    "m": "Surinamais"
    }
    },
    "flag": "🇸🇷",
    "maps": {
    "googleMaps": "https://goo.gl/maps/iy7TuQLSi4qgoBoG7",
    "openStreetMaps": "https://www.openstreetmap.org/relation/287082"
    },
    "population": 586634,
    "gini": {
    "1999": 57.9
    },
    "fifa": "SUR",
    "car": {
    "signs": [
    "SME"
    ],
    "side": "left"
    },
    "timezones": [
    "UTC-03:00"
    ],
    "continents": [
    "South America"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/sr.png",
    "svg": "https://flagcdn.com/sr.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/sr.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/sr.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    5.83,
    -55.17
    ]
    }
    },
    {
    "name": {
    "common": "New Zealand",
    "official": "New Zealand",
    "nativeName": {
    "eng": {
    "official": "New Zealand",
    "common": "New Zealand"
    },
    "mri": {
    "official": "Aotearoa",
    "common": "Aotearoa"
    },
    "nzs": {
    "official": "New Zealand",
    "common": "New Zealand"
    }
    }
    },
    "tld": [
    ".nz"
    ],
    "cca2": "NZ",
    "ccn3": "554",
    "cca3": "NZL",
    "cioc": "NZL",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "NZD": {
    "name": "New Zealand dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+6",
    "suffixes": [
    "4"
    ]
    },
    "capital": [
    "Wellington"
    ],
    "altSpellings": [
    "NZ",
    "Aotearoa"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "languages": {
    "eng": "English",
    "mri": "Māori",
    "nzs": "New Zealand Sign Language"
    },
    "translations": {
    "ara": {
    "official": "نيوزيلندا",
    "common": "نيوزيلندا"
    },
    "bre": {
    "official": "Zeland-Nevez",
    "common": "Zeland-Nevez"
    },
    "ces": {
    "official": "Nový Zéland",
    "common": "Nový Zéland"
    },
    "cym": {
    "official": "New Zealand",
    "common": "New Zealand"
    },
    "deu": {
    "official": "Neuseeland",
    "common": "Neuseeland"
    },
    "est": {
    "official": "Uus-Meremaa",
    "common": "Uus-Meremaa"
    },
    "fin": {
    "official": "Uusi-Seelanti",
    "common": "Uusi-Seelanti"
    },
    "fra": {
    "official": "Nouvelle-Zélande",
    "common": "Nouvelle-Zélande"
    },
    "hrv": {
    "official": "Novi Zeland",
    "common": "Novi Zeland"
    },
    "hun": {
    "official": "Új-Zéland",
    "common": "Új-Zéland"
    },
    "ita": {
    "official": "Nuova Zelanda",
    "common": "Nuova Zelanda"
    },
    "jpn": {
    "official": "ニュージーランド",
    "common": "ニュージーランド"
    },
    "kor": {
    "official": "뉴질랜드",
    "common": "뉴질랜드"
    },
    "nld": {
    "official": "Nieuw Zeeland",
    "common": "Nieuw-Zeeland"
    },
    "per": {
    "official": "نیوزیلند",
    "common": "نیوزیلند"
    },
    "pol": {
    "official": "Nowa Zelandia",
    "common": "Nowa Zelandia"
    },
    "por": {
    "official": "nova Zelândia",
    "common": "Nova Zelândia"
    },
    "rus": {
    "official": "Новая Зеландия",
    "common": "Новая Зеландия"
    },
    "slk": {
    "official": "Nový Zéland",
    "common": "Nový Zéland"
    },
    "spa": {
    "official": "nueva Zelanda",
    "common": "Nueva Zelanda"
    },
    "swe": {
    "official": "Nya Zeeland",
    "common": "Nya Zeeland"
    },
    "tur": {
    "official": "Yeni Zelanda",
    "common": "Yeni Zelanda"
    },
    "urd": {
    "official": "نیوزی لینڈ",
    "common": "نیوزی لینڈ"
    },
    "zho": {
    "official": "新西兰",
    "common": "新西兰"
    }
    },
    "latlng": [
    -41,
    174
    ],
    "landlocked": false,
    "area": 270467,
    "demonyms": {
    "eng": {
    "f": "New Zealander",
    "m": "New Zealander"
    },
    "fra": {
    "f": "Neo-Zélandaise",
    "m": "Neo-Zélandais"
    }
    },
    "flag": "🇳🇿",
    "maps": {
    "googleMaps": "https://goo.gl/maps/xXiDQo65dwdpw9iu8",
    "openStreetMaps": "https://www.openstreetmap.org/relation/556706#map=5/-46.710/172.046"
    },
    "population": 5084300,
    "fifa": "NZL",
    "car": {
    "signs": [
    "NZ"
    ],
    "side": "left"
    },
    "timezones": [
    "UTC-11:00",
    "UTC-10:00",
    "UTC+12:00",
    "UTC+12:45",
    "UTC+13:00"
    ],
    "continents": [
    "Oceania"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/nz.png",
    "svg": "https://flagcdn.com/nz.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/nz.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/nz.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    -41.3,
    174.78
    ]
    },
    "postalCode": {
    "format": "####",
    "regex": "^(\\d{4})$"
    }
    },
    {
    "name": {
    "common": "Mexico",
    "official": "United Mexican States",
    "nativeName": {
    "spa": {
    "official": "Estados Unidos Mexicanos",
    "common": "México"
    }
    }
    },
    "tld": [
    ".mx"
    ],
    "cca2": "MX",
    "ccn3": "484",
    "cca3": "MEX",
    "cioc": "MEX",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "MXN": {
    "name": "Mexican peso",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+5",
    "suffixes": [
    "2"
    ]
    },
    "capital": [
    "Mexico City"
    ],
    "altSpellings": [
    "MX",
    "Mexicanos",
    "United Mexican States",
    "Estados Unidos Mexicanos"
    ],
    "region": "Americas",
    "subregion": "North America",
    "languages": {
    "spa": "Spanish"
    },
    "translations": {
    "ara": {
    "official": "الولايات المتحدة المكسيكية",
    "common": "المسكيك"
    },
    "bre": {
    "official": "Stadoù-Unanet Mec'hiko",
    "common": "Mec'hiko"
    },
    "ces": {
    "official": "Spojené státy mexické",
    "common": "Mexiko"
    },
    "cym": {
    "official": "United Mexican States",
    "common": "Mexico"
    },
    "deu": {
    "official": "Vereinigte Mexikanische Staaten",
    "common": "Mexiko"
    },
    "est": {
    "official": "Mehhiko Ühendriigid",
    "common": "Mehhiko"
    },
    "fin": {
    "official": "Meksikon yhdysvallat",
    "common": "Meksiko"
    },
    "fra": {
    "official": "États-Unis du Mexique",
    "common": "Mexique"
    },
    "hrv": {
    "official": "Sjedinjene Meksičke Države",
    "common": "Meksiko"
    },
    "hun": {
    "official": "Mexikói Egyesült Államok",
    "common": "Mexikó"
    },
    "ita": {
    "official": "Stati Uniti del Messico",
    "common": "Messico"
    },
    "jpn": {
    "official": "メキシコ合衆国",
    "common": "メキシコ"
    },
    "kor": {
    "official": "멕시코 합중국",
    "common": "멕시코"
    },
    "nld": {
    "official": "Verenigde Mexicaanse Staten",
    "common": "Mexico"
    },
    "per": {
    "official": "ایالات متحد مکزیک",
    "common": "مکزیک"
    },
    "pol": {
    "official": "Meksykańskie Stany Zjednoczone",
    "common": "Meksyk"
    },
    "por": {
    "official": "Estados Unidos Mexicanos",
    "common": "México"
    },
    "rus": {
    "official": "Мексиканские Соединённые Штаты",
    "common": "Мексика"
    },
    "slk": {
    "official": "Spojené štášy mexické",
    "common": "Mexiko"
    },
    "spa": {
    "official": "Estados Unidos Mexicanos",
    "common": "México"
    },
    "swe": {
    "official": "Mexikos förenta stater",
    "common": "Mexiko"
    },
    "tur": {
    "official": "Birleşik Meksika Devletleri",
    "common": "Meksika"
    },
    "urd": {
    "official": "ریاستہائے متحدہ میکسیکو",
    "common": "میکسیکو"
    },
    "zho": {
    "official": "墨西哥合众国",
    "common": "墨西哥"
    }
    },
    "latlng": [
    23,
    -102
    ],
    "landlocked": false,
    "borders": [
    "BLZ",
    "GTM",
    "USA"
    ],
    "area": 1964375,
    "demonyms": {
    "eng": {
    "f": "Mexican",
    "m": "Mexican"
    },
    "fra": {
    "f": "Mexicaine",
    "m": "Mexicain"
    }
    },
    "flag": "🇲🇽",
    "maps": {
    "googleMaps": "https://goo.gl/maps/s5g7imNPMDEePxzbA",
    "openStreetMaps": "https://www.openstreetmap.org/relation/114686"
    },
    "population": 128932753,
    "gini": {
    "2018": 45.4
    },
    "fifa": "MEX",
    "car": {
    "signs": [
    "MEX"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00"
    ],
    "continents": [
    "North America"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/mx.png",
    "svg": "https://flagcdn.com/mx.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/mx.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/mx.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    19.43,
    -99.13
    ]
    },
    "postalCode": {
    "format": "#####",
    "regex": "^(\\d{5})$"
    }
    },
    {
    "name": {
    "common": "Marshall Islands",
    "official": "Republic of the Marshall Islands",
    "nativeName": {
    "eng": {
    "official": "Republic of the Marshall Islands",
    "common": "Marshall Islands"
    },
    "mah": {
    "official": "Republic of the Marshall Islands",
    "common": "M̧ajeļ"
    }
    }
    },
    "tld": [
    ".mh"
    ],
    "cca2": "MH",
    "ccn3": "584",
    "cca3": "MHL",
    "cioc": "MHL",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
    "USD": {
    "name": "United States dollar",
    "symbol": "$"
    }
    },
    "idd": {
    "root": "+6",
    "suffixes": [
    "92"
    ]
    },
    "capital": [
    "Majuro"
    ],
    "altSpellings": [
    "MH",
    "Republic of the Marshall Islands",
    "Aolepān Aorōkin M̧ajeļ"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "languages": {
    "eng": "English",
    "mah": "Marshallese"
    },
    "translations": {
    "ara": {
    "official": "جمهورية جزر مارشال",
    "common": "جزر مارشال"
    },
    "bre": {
    "official": "Republik Inizi Marshall",
    "common": "Inizi Marshall"
    },
    "ces": {
    "official": "Republika Marshallovy ostrovy",
    "common": "Marshallovy ostrovy"
    },
    "cym": {
    "official": "Republic of the Marshall Islands",
    "common": "Marshall Islands"
    },
    "deu": {
    "official": "Republik Marshallinseln",
    "common": "Marshallinseln"
    },
    "est": {
    "official": "Marshalli Saarte Vabariik",
    "common": "Marshalli Saared"
    },
    "fin": {
    "official": "Marshallinsaarten tasavalta",
    "common": "Marshallinsaaret"
    },
    "fra": {
    "official": "République des Îles Marshall",
    "common": "Îles Marshall"
    },
    "hrv": {
    "official": "Republika Maršalovi Otoci",
    "common": "Maršalovi Otoci"
    },
    "hun": {
    "official": "Marshall-szigetek",
    "common": "Marshall-szigetek"
    },
    "ita": {
    "official": "Repubblica delle Isole Marshall",
    "common": "Isole Marshall"
    },
    "jpn": {
    "official": "マーシャル諸島共和国",
    "common": "マーシャル諸島"
    },
    "kor": {
    "official": "마셜 제도 공화국",
    "common": "마셜 제도"
    },
    "nld": {
    "official": "Republiek van de Marshall-eilanden",
    "common": "Marshalleilanden"
    },
    "per": {
    "official": "جمهوری جزایر مارشال",
    "common": "جزایر مارشال"
    },
    "pol": {
    "official": "Republika Wysp Marshalla",
    "common": "Wyspy Marshalla"
    },
    "por": {
    "official": "República das Ilhas Marshall",
    "common": "Ilhas Marshall"
    },
    "rus": {
    "official": "Республика Маршалловы острова",
    "common": "Маршалловы Острова"
    },
    "slk": {
    "official": "Republika Marshallových ostrovov",
    "common": "Marshallove ostrovy"
    },
    "spa": {
    "official": "República de las Islas Marshall",
    "common": "Islas Marshall"
    },
    "swe": {
    "official": "Republiken Marshallöarna",
    "common": "Marshallöarna"
    },
    "tur": {
    "official": "Marshall Adaları Cumhuriyeti",
    "common": "Marshall Adaları"
    },
    "urd": {
    "official": "جمہوریہ جزائر مارشل",
    "common": "جزائر مارشل"
    },
    "zho": {
    "official": "马绍尔群岛共和国",
    "common": "马绍尔群岛"
    }
    },
    "latlng": [
    9,
    168
    ],
    "landlocked": false,
    "area": 181,
    "demonyms": {
    "eng": {
    "f": "Marshallese",
    "m": "Marshallese"
    },
    "fra": {
    "f": "Marshallaise",
    "m": "Marshallais"
    }
    },
    "flag": "🇲🇭",
    "maps": {
    "googleMaps": "https://goo.gl/maps/A4xLi1XvcX88gi3W8",
    "openStreetMaps": "https://www.openstreetmap.org/relation/571771"
    },
    "population": 59194,
    "car": {
    "signs": [
    "MH"
    ],
    "side": "right"
    },
    "timezones": [
    "UTC+12:00"
    ],
    "continents": [
    "Oceania"
    ],
    "flags": {
    "png": "https://flagcdn.com/w320/mh.png",
    "svg": "https://flagcdn.com/mh.svg"
    },
    "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/mh.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/mh.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
    "latlng": [
    7.1,
    171.38
    ]
    }
    },
    {
        "name": {
        "common": "Philippines",
        "official": "Republic of the Philippines",
        "nativeName": {
        "eng": {
        "official": "Republic of the Philippines",
        "common": "Philippines"
        },
        "fil": {
        "official": "Republic of the Philippines",
        "common": "Pilipinas"
        }
        }
        },
        "tld": [
        ".ph"
        ],
        "cca2": "PH",
        "ccn3": "608",
        "cca3": "PHL",
        "cioc": "PHI",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "PHP": {
        "name": "Philippine peso",
        "symbol": "₱"
        }
        },
        "idd": {
        "root": "+6",
        "suffixes": [
        "3"
        ]
        },
        "capital": [
        "Manila"
        ],
        "altSpellings": [
        "PH",
        "Republic of the Philippines",
        "Repúblika ng Pilipinas"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
        "eng": "English",
        "fil": "Filipino"
        },
        "translations": {
        "ara": {
        "official": "جمهورية الفلبين",
        "common": "الفلبين"
        },
        "bre": {
        "official": "Republik Filipinez",
        "common": "Filipinez"
        },
        "ces": {
        "official": "Filipínská republika",
        "common": "Filipíny"
        },
        "cym": {
        "official": "Republic of the Philippines",
        "common": "Philippines"
        },
        "deu": {
        "official": "Republik der Philippinen",
        "common": "Philippinen"
        },
        "est": {
        "official": "Filipiini Vabariik",
        "common": "Filipiinid"
        },
        "fin": {
        "official": "Filippiinien tasavalta",
        "common": "Filippiinit"
        },
        "fra": {
        "official": "République des Philippines",
        "common": "Philippines"
        },
        "hrv": {
        "official": "Republika Filipini",
        "common": "Filipini"
        },
        "hun": {
        "official": "Fülöp-szigeteki Köztársaság",
        "common": "Fülöp-szigetek"
        },
        "ita": {
        "official": "Repubblica delle Filippine",
        "common": "Filippine"
        },
        "jpn": {
        "official": "フィリピン共和国",
        "common": "フィリピン"
        },
        "kor": {
        "official": "필리핀 공화국",
        "common": "필리핀"
        },
        "nld": {
        "official": "Republiek der Filipijnen",
        "common": "Filipijnen"
        },
        "per": {
        "official": "جمهوری فیلیپین",
        "common": "فیلیپین"
        },
        "pol": {
        "official": "Republika Filipin",
        "common": "Filipiny"
        },
        "por": {
        "official": "República das Filipinas",
        "common": "Filipinas"
        },
        "rus": {
        "official": "Республика Филиппины",
        "common": "Филиппины"
        },
        "slk": {
        "official": "Filipínska republika",
        "common": "Filipíny"
        },
        "spa": {
        "official": "República de las Filipinas",
        "common": "Filipinas"
        },
        "swe": {
        "official": "Republiken Filippinerna",
        "common": "Filippinerna"
        },
        "tur": {
        "official": "Filipinler Cumhuriyeti",
        "common": "Filipinler"
        },
        "urd": {
        "official": "جمہوریہ فلپائن",
        "common": "فلپائن"
        },
        "zho": {
        "official": "菲律宾共和国",
        "common": "菲律宾"
        }
        },
        "latlng": [
        13,
        122
        ],
        "landlocked": false,
        "area": 342353,
        "demonyms": {
        "eng": {
        "f": "Filipino",
        "m": "Filipino"
        },
        "fra": {
        "f": "Philippine",
        "m": "Philippin"
        }
        },
        "flag": "🇵🇭",
        "maps": {
        "googleMaps": "https://goo.gl/maps/k8T2fb5VMUfsWFX6A",
        "openStreetMaps": "https://www.openstreetmap.org/relation/443174"
        },
        "population": 109581085,
        "gini": {
        "2018": 42.3
        },
        "fifa": "PHI",
        "car": {
        "signs": [
        "RP"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+08:00"
        ],
        "continents": [
        "Asia"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/ph.png",
        "svg": "https://flagcdn.com/ph.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ph.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ph.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        14.6,
        120.97
        ]
        },
        "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
        }
        },
        {
        "name": {
        "common": "Sweden",
        "official": "Kingdom of Sweden",
        "nativeName": {
        "swe": {
        "official": "Konungariket Sverige",
        "common": "Sverige"
        }
        }
        },
        "tld": [
        ".se"
        ],
        "cca2": "SE",
        "ccn3": "752",
        "cca3": "SWE",
        "cioc": "SWE",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "SEK": {
        "name": "Swedish krona",
        "symbol": "kr"
        }
        },
        "idd": {
        "root": "+4",
        "suffixes": [
        "6"
        ]
        },
        "capital": [
        "Stockholm"
        ],
        "altSpellings": [
        "SE",
        "Kingdom of Sweden",
        "Konungariket Sverige"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
        "swe": "Swedish"
        },
        "translations": {
        "ara": {
        "official": "مملكة السويد",
        "common": "السويد"
        },
        "bre": {
        "official": "Rouantelezh Sveden",
        "common": "Sveden"
        },
        "ces": {
        "official": "Švédské království",
        "common": "Švédsko"
        },
        "cym": {
        "official": "Kingdom of Sweden",
        "common": "Sweden"
        },
        "deu": {
        "official": "Königreich Schweden",
        "common": "Schweden"
        },
        "est": {
        "official": "Rootsi Kuningriik",
        "common": "Rootsi"
        },
        "fin": {
        "official": "Ruotsin kuningaskunta",
        "common": "Ruotsi"
        },
        "fra": {
        "official": "Royaume de Suède",
        "common": "Suède"
        },
        "hrv": {
        "official": "Kraljevina Švedska",
        "common": "Švedska"
        },
        "hun": {
        "official": "Svéd Királyság",
        "common": "Svédország"
        },
        "ita": {
        "official": "Regno di Svezia",
        "common": "Svezia"
        },
        "jpn": {
        "official": "スウェーデン王国",
        "common": "スウェーデン"
        },
        "kor": {
        "official": "스웨덴 왕국",
        "common": "스웨덴"
        },
        "nld": {
        "official": "Koninkrijk Zweden",
        "common": "Zweden"
        },
        "per": {
        "official": "پادشاهی سوئد",
        "common": "سوئد"
        },
        "pol": {
        "official": "Królestwo Szwecji",
        "common": "Szwecja"
        },
        "por": {
        "official": "Reino da Suécia",
        "common": "Suécia"
        },
        "rus": {
        "official": "Королевство Швеция",
        "common": "Швеция"
        },
        "slk": {
        "official": "Švédske kráľovstvo",
        "common": "Švédsko"
        },
        "spa": {
        "official": "Reino de Suecia",
        "common": "Suecia"
        },
        "swe": {
        "official": "Konungariket Sverige",
        "common": "Sverige"
        },
        "tur": {
        "official": "İsveç Krallığı",
        "common": "İsveç"
        },
        "urd": {
        "official": "مملکتِ سویڈن",
        "common": "سویڈن"
        },
        "zho": {
        "official": "瑞典王国",
        "common": "瑞典"
        }
        },
        "latlng": [
        62,
        15
        ],
        "landlocked": false,
        "borders": [
        "FIN",
        "NOR"
        ],
        "area": 450295,
        "demonyms": {
        "eng": {
        "f": "Swedish",
        "m": "Swedish"
        },
        "fra": {
        "f": "Suédoise",
        "m": "Suédois"
        }
        },
        "flag": "🇸🇪",
        "maps": {
        "googleMaps": "https://goo.gl/maps/iqygE491ADVgnBW39",
        "openStreetMaps": "https://www.openstreetmap.org/relation/52822"
        },
        "population": 10353442,
        "gini": {
        "2018": 30
        },
        "fifa": "SWE",
        "car": {
        "signs": [
        "S"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/se.png",
        "svg": "https://flagcdn.com/se.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/se.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/se.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        59.33,
        18.05
        ]
        },
        "postalCode": {
        "format": "SE-### ##",
        "regex": "^(?:SE)*(\\d{5})$"
        }
        },
        {
        "name": {
        "common": "Bouvet Island",
        "official": "Bouvet Island",
        "nativeName": {
        "nor": {
        "official": "Bouvetøya",
        "common": "Bouvetøya"
        }
        }
        },
        "tld": [
        ".bv"
        ],
        "cca2": "BV",
        "ccn3": "074",
        "cca3": "BVT",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "idd": {
        "root": "+4",
        "suffixes": [
        "7"
        ]
        },
        "altSpellings": [
        "BV",
        "Bouvetøya",
        "Bouvet-øya"
        ],
        "region": "Antarctic",
        "languages": {
        "nor": "Norwegian"
        },
        "translations": {
        "ara": {
        "official": "جزر بوفيه",
        "common": "جزر بوفيه"
        },
        "bre": {
        "official": "Enez Bouvet",
        "common": "Enez Bouvet"
        },
        "ces": {
        "official": "Bouvetův ostrov",
        "common": "Bouvetův ostrov"
        },
        "cym": {
        "official": "Bouvet Island",
        "common": "Bouvet Island"
        },
        "deu": {
        "official": "Bouvetinsel",
        "common": "Bouvetinsel"
        },
        "est": {
        "official": "Bouvet’ saar",
        "common": "Bouvet’ saar"
        },
        "fin": {
        "official": "Bouvet'nsaari",
        "common": "Bouvet'nsaari"
        },
        "fra": {
        "official": "Île Bouvet",
        "common": "Île Bouvet"
        },
        "hrv": {
        "official": "Bouvet Island",
        "common": "Otok Bouvet"
        },
        "hun": {
        "official": "Bouvet-sziget",
        "common": "Bouvet-sziget"
        },
        "ita": {
        "official": "Isola Bouvet",
        "common": "Isola Bouvet"
        },
        "jpn": {
        "official": "ブーヴェ島",
        "common": "ブーベ島"
        },
        "kor": {
        "official": "부베 섬",
        "common": "부베 섬"
        },
        "nld": {
        "official": "Bouvet Island",
        "common": "Bouveteiland"
        },
        "per": {
        "official": "جزیرهٔ بووه",
        "common": "جزیرهٔ بووه"
        },
        "pol": {
        "official": "Wyspa Bouveta",
        "common": "Wyspa Bouveta"
        },
        "por": {
        "official": "Ilha Bouvet",
        "common": "Ilha Bouvet"
        },
        "rus": {
        "official": "Остров Буве",
        "common": "Остров Буве"
        },
        "slk": {
        "official": "Bouvetov ostrov",
        "common": "Bouvetov ostrov"
        },
        "spa": {
        "official": "Isla Bouvet",
        "common": "Isla Bouvet"
        },
        "swe": {
        "official": "Bouvetön",
        "common": "Bouvetön"
        },
        "tur": {
        "official": "Bouvet Adası",
        "common": "Bouvet Adası"
        },
        "urd": {
        "official": "جزیرہ بووہ",
        "common": "جزیرہ بووہ"
        },
        "zho": {
        "official": "布维岛",
        "common": "布维岛"
        }
        },
        "latlng": [
        -54.43333333,
        3.4
        ],
        "landlocked": false,
        "area": 49,
        "flag": "🇧🇻",
        "maps": {
        "googleMaps": "https://goo.gl/maps/7WRQAEKZb4uK36yi9",
        "openStreetMaps": "https://www.openstreetmap.org/way/174996681"
        },
        "population": 0,
        "car": {
        "signs": [
        ""
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Antarctica"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/bv.png",
        "svg": "https://flagcdn.com/bv.svg"
        },
        "coatOfArms": {},
        "startOfWeek": "monday",
        "capitalInfo": {}
        },
        {
        "name": {
        "common": "Jamaica",
        "official": "Jamaica",
        "nativeName": {
        "eng": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "jam": {
        "official": "Jamaica",
        "common": "Jamaica"
        }
        }
        },
        "tld": [
        ".jm"
        ],
        "cca2": "JM",
        "ccn3": "388",
        "cca3": "JAM",
        "cioc": "JAM",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "JMD": {
        "name": "Jamaican dollar",
        "symbol": "$"
        }
        },
        "idd": {
        "root": "+1",
        "suffixes": [
        "876"
        ]
        },
        "capital": [
        "Kingston"
        ],
        "altSpellings": [
        "JM"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
        "eng": "English",
        "jam": "Jamaican Patois"
        },
        "translations": {
        "ara": {
        "official": "جامايكا",
        "common": "جامايكا"
        },
        "bre": {
        "official": "Jamaika",
        "common": "Jamaika"
        },
        "ces": {
        "official": "Jamajka",
        "common": "Jamajka"
        },
        "cym": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "deu": {
        "official": "Jamaika",
        "common": "Jamaika"
        },
        "est": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "fin": {
        "official": "Jamaika",
        "common": "Jamaika"
        },
        "fra": {
        "official": "Jamaïque",
        "common": "Jamaïque"
        },
        "hrv": {
        "official": "Jamajka",
        "common": "Jamajka"
        },
        "hun": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "ita": {
        "official": "Giamaica",
        "common": "Giamaica"
        },
        "jpn": {
        "official": "ジャマイカ",
        "common": "ジャマイカ"
        },
        "kor": {
        "official": "자메이카",
        "common": "자메이카"
        },
        "nld": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "per": {
        "official": "جامائیکا",
        "common": "جامائیکا"
        },
        "pol": {
        "official": "Jamajka",
        "common": "Jamajka"
        },
        "por": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "rus": {
        "official": "Ямайка",
        "common": "Ямайка"
        },
        "slk": {
        "official": "Jamajka",
        "common": "Jamajka"
        },
        "spa": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "swe": {
        "official": "Jamaica",
        "common": "Jamaica"
        },
        "tur": {
        "official": "Jamaika",
        "common": "Jamaika"
        },
        "urd": {
        "official": "جمیکا",
        "common": "جمیکا"
        },
        "zho": {
        "official": "牙买加",
        "common": "牙买加"
        }
        },
        "latlng": [
        18.25,
        -77.5
        ],
        "landlocked": false,
        "area": 10991,
        "demonyms": {
        "eng": {
        "f": "Jamaican",
        "m": "Jamaican"
        },
        "fra": {
        "f": "Jamaïcaine",
        "m": "Jamaïcain"
        }
        },
        "flag": "🇯🇲",
        "maps": {
        "googleMaps": "https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A",
        "openStreetMaps": "https://www.openstreetmap.org/relation/555017"
        },
        "population": 2961161,
        "gini": {
        "2004": 45.5
        },
        "fifa": "JAM",
        "car": {
        "signs": [
        "JA"
        ],
        "side": "left"
        },
        "timezones": [
        "UTC-05:00"
        ],
        "continents": [
        "North America"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/jm.png",
        "svg": "https://flagcdn.com/jm.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/jm.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/jm.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        17.99702,
        -76.79358
        ]
        }
        },
        {
        "name": {
        "common": "Venezuela",
        "official": "Bolivarian Republic of Venezuela",
        "nativeName": {
        "spa": {
        "official": "República Bolivariana de Venezuela",
        "common": "Venezuela"
        }
        }
        },
        "tld": [
        ".ve"
        ],
        "cca2": "VE",
        "ccn3": "862",
        "cca3": "VEN",
        "cioc": "VEN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "VES": {
        "name": "Venezuelan bolívar soberano",
        "symbol": "Bs.S."
        }
        },
        "idd": {
        "root": "+5",
        "suffixes": [
        "8"
        ]
        },
        "capital": [
        "Caracas"
        ],
        "altSpellings": [
        "VE",
        "Bolivarian Republic of Venezuela",
        "Venezuela, Bolivarian Republic of",
        "República Bolivariana de Venezuela"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
        "spa": "Spanish"
        },
        "translations": {
        "ara": {
        "official": "جمهورية فنزويلا البوليفارية",
        "common": "فنزويلا"
        },
        "bre": {
        "official": "Republik Volivarian Venezuela",
        "common": "Venezuela"
        },
        "ces": {
        "official": "Bolívarská republika Venezuela",
        "common": "Venezuela"
        },
        "cym": {
        "official": "Bolivarian Republic of Venezuela",
        "common": "Venezuela"
        },
        "deu": {
        "official": "Bolivarische Republik Venezuela",
        "common": "Venezuela"
        },
        "est": {
        "official": "Venezuela Bolívari Vabariik",
        "common": "Venezuela"
        },
        "fin": {
        "official": "Venezuelan bolivariaainen tasavalta",
        "common": "Venezuela"
        },
        "fra": {
        "official": "République bolivarienne du Venezuela",
        "common": "Venezuela"
        },
        "hrv": {
        "official": "BOLIVARIJANSKA Republika Venezuela",
        "common": "Venezuela"
        },
        "hun": {
        "official": "Venezuelai Bolivári Köztársaság",
        "common": "Venezuela"
        },
        "ita": {
        "official": "Repubblica Bolivariana del Venezuela",
        "common": "Venezuela"
        },
        "jpn": {
        "official": "ベネズエラ·ボリバル共和国",
        "common": "ベネズエラ・ボリバル共和国"
        },
        "kor": {
        "official": "베네수엘라 볼리바르 공화국",
        "common": "베네수엘라"
        },
        "nld": {
        "official": "Bolivariaanse Republiek Venezuela",
        "common": "Venezuela"
        },
        "per": {
        "official": "جمهوری بولیواری ونزوئلا",
        "common": "ونزوئلا"
        },
        "pol": {
        "official": "Boliwariańska Republika Wenezueli",
        "common": "Wenezuela"
        },
        "por": {
        "official": "República Bolivariana da Venezuela",
        "common": "Venezuela"
        },
        "rus": {
        "official": "Боливарианская Республика Венесуэла",
        "common": "Венесуэла"
        },
        "slk": {
        "official": "Venezuelská bolívarovská republika",
        "common": "Venezuela"
        },
        "spa": {
        "official": "República Bolivariana de Venezuela",
        "common": "Venezuela"
        },
        "swe": {
        "official": "Bolivarianska republiken Venezuela",
        "common": "Venezuela"
        },
        "tur": {
        "official": "Bolivarcı Venezuela Cumhuriyeti",
        "common": "Venezuela"
        },
        "urd": {
        "official": "جمہوریہ وینیزویلا",
        "common": "وینیزویلا"
        },
        "zho": {
        "official": "委内瑞拉玻利瓦尔共和国",
        "common": "委内瑞拉"
        }
        },
        "latlng": [
        8,
        -66
        ],
        "landlocked": false,
        "borders": [
        "BRA",
        "COL",
        "GUY"
        ],
        "area": 916445,
        "demonyms": {
        "eng": {
        "f": "Venezuelan",
        "m": "Venezuelan"
        },
        "fra": {
        "f": "Vénézuélienne",
        "m": "Vénézuélien"
        }
        },
        "flag": "🇻🇪",
        "maps": {
        "googleMaps": "https://goo.gl/maps/KLCwDN8sec7z2kse9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/272644"
        },
        "population": 28435943,
        "gini": {
        "2006": 44.8
        },
        "fifa": "VEN",
        "car": {
        "signs": [
        "YV"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC-04:00"
        ],
        "continents": [
        "South America"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/ve.png",
        "svg": "https://flagcdn.com/ve.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ve.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ve.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        10.48,
        -66.87
        ]
        },
        "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
        }
        },
        {
        "name": {
        "common": "Jersey",
        "official": "Bailiwick of Jersey",
        "nativeName": {
        "eng": {
        "official": "Bailiwick of Jersey",
        "common": "Jersey"
        },
        "fra": {
        "official": "Bailliage de Jersey",
        "common": "Jersey"
        },
        "nrf": {
        "official": "Bailliage dé Jèrri",
        "common": "Jèrri"
        }
        }
        },
        "tld": [
        ".je"
        ],
        "cca2": "JE",
        "ccn3": "832",
        "cca3": "JEY",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
        "GBP": {
        "name": "British pound",
        "symbol": "£"
        },
        "JEP": {
        "name": "Jersey pound",
        "symbol": "£"
        }
        },
        "idd": {
        "root": "+4",
        "suffixes": [
        "4"
        ]
        },
        "capital": [
        "Saint Helier"
        ],
        "altSpellings": [
        "JE",
        "Bailiwick of Jersey",
        "Bailliage de Jersey",
        "Bailliage dé Jèrri"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
        "eng": "English",
        "fra": "French",
        "nrf": "Jèrriais"
        },
        "translations": {
        "ara": {
        "official": "جيرزي",
        "common": "جيرزي"
        },
        "bre": {
        "official": "Jerzenez",
        "common": "Jerzenez"
        },
        "ces": {
        "official": "Rychtářství Jersey",
        "common": "Jersey"
        },
        "cym": {
        "official": "Bailiwick of Jersey",
        "common": "Jersey"
        },
        "deu": {
        "official": "Vogtei Jersey",
        "common": "Jersey"
        },
        "est": {
        "official": "Jersey foogtkond",
        "common": "Jersey"
        },
        "fin": {
        "official": "Jersey",
        "common": "Jersey"
        },
        "fra": {
        "official": "Bailliage de Jersey",
        "common": "Jersey"
        },
        "hrv": {
        "official": "Struka od Jersey",
        "common": "Jersey"
        },
        "hun": {
        "official": "Jersey",
        "common": "Jersey"
        },
        "ita": {
        "official": "Baliato di Jersey",
        "common": "Isola di Jersey"
        },
        "jpn": {
        "official": "ジャージの得意分野",
        "common": "ジャージー"
        },
        "kor": {
        "official": "저지 섬",
        "common": "저지 섬"
        },
        "nld": {
        "official": "Baljuwschap Jersey",
        "common": "Jersey"
        },
        "per": {
        "official": "جرزی",
        "common": "جرزی"
        },
        "pol": {
        "official": "Jersey",
        "common": "Jersey"
        },
        "por": {
        "official": "Bailiado de Jersey",
        "common": "Jersey"
        },
        "rus": {
        "official": "Коронное владение Джерси",
        "common": "Джерси"
        },
        "slk": {
        "official": "Bailiwick Jersey",
        "common": "Jersey"
        },
        "spa": {
        "official": "Bailía de Jersey",
        "common": "Jersey"
        },
        "swe": {
        "official": "Jersey",
        "common": "Jersey"
        },
        "tur": {
        "official": "Jersey",
        "common": "Jersey"
        },
        "urd": {
        "official": "جرزی",
        "common": "جرزی"
        },
        "zho": {
        "official": "泽西岛",
        "common": "泽西岛"
        }
        },
        "latlng": [
        49.25,
        -2.16666666
        ],
        "landlocked": false,
        "area": 116,
        "demonyms": {
        "eng": {
        "f": "Channel Islander",
        "m": "Channel Islander"
        },
        "fra": {
        "f": "Jersiaise",
        "m": "Jersiais"
        }
        },
        "flag": "🇯🇪",
        "maps": {
        "googleMaps": "https://goo.gl/maps/rXG8GZZtsqK92kTCA",
        "openStreetMaps": "https://www.openstreetmap.org/relation/367988"
        },
        "population": 100800,
        "car": {
        "signs": [
        "GBJ"
        ],
        "side": "left"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/je.png",
        "svg": "https://flagcdn.com/je.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/je.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/je.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        49.18,
        -2.1
        ]
        },
        "postalCode": {
        "format": "@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",
        "regex": "^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$"
        }
        },
        {
        "name": {
        "common": "Afghanistan",
        "official": "Islamic Republic of Afghanistan",
        "nativeName": {
        "prs": {
        "official": "جمهوری اسلامی افغانستان",
        "common": "افغانستان"
        },
        "pus": {
        "official": "د افغانستان اسلامي جمهوریت",
        "common": "افغانستان"
        },
        "tuk": {
        "official": "Owganystan Yslam Respublikasy",
        "common": "Owganystan"
        }
        }
        },
        "tld": [
        ".af"
        ],
        "cca2": "AF",
        "ccn3": "004",
        "cca3": "AFG",
        "cioc": "AFG",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "AFN": {
        "name": "Afghan afghani",
        "symbol": "؋"
        }
        },
        "idd": {
        "root": "+9",
        "suffixes": [
        "3"
        ]
        },
        "capital": [
        "Kabul"
        ],
        "altSpellings": [
        "AF",
        "Afġānistān"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
        "prs": "Dari",
        "pus": "Pashto",
        "tuk": "Turkmen"
        },
        "translations": {
        "ara": {
        "official": "جمهورية أففانستان الإسلامية",
        "common": "أفغانستان"
        },
        "bre": {
        "official": "Republik Islamek Afghanistan",
        "common": "Afghanistan"
        },
        "ces": {
        "official": "Afghánská islámská republika",
        "common": "Afghánistán"
        },
        "cym": {
        "official": "Gweriniaeth Islamaidd Affganistan",
        "common": "Affganistan"
        },
        "deu": {
        "official": "Islamische Republik Afghanistan",
        "common": "Afghanistan"
        },
        "est": {
        "official": "Afganistani Islamivabariik",
        "common": "Afganistan"
        },
        "fin": {
        "official": "Afganistanin islamilainen tasavalta",
        "common": "Afganistan"
        },
        "fra": {
        "official": "République islamique d'Afghanistan",
        "common": "Afghanistan"
        },
        "hrv": {
        "official": "Islamska Republika Afganistan",
        "common": "Afganistan"
        },
        "hun": {
        "official": "Afganisztáni Iszlám Köztársaság",
        "common": "Afganisztán"
        },
        "ita": {
        "official": "Repubblica islamica dell'Afghanistan",
        "common": "Afghanistan"
        },
        "jpn": {
        "official": "アフガニスタン·イスラム共和国",
        "common": "アフガニスタン"
        },
        "kor": {
        "official": "아프가니스탄 이슬람 공화국",
        "common": "아프가니스탄"
        },
        "nld": {
        "official": "Islamitische Republiek Afghanistan",
        "common": "Afghanistan"
        },
        "per": {
        "official": "جمهوری اسلامی افغانستان",
        "common": "افغانستان"
        },
        "pol": {
        "official": "Islamska Republika Afganistanu",
        "common": "Afganistan"
        },
        "por": {
        "official": "República Islâmica do Afeganistão",
        "common": "Afeganistão"
        },
        "rus": {
        "official": "Исламская Республика Афганистан",
        "common": "Афганистан"
        },
        "slk": {
        "official": "Afgánsky islamský štát",
        "common": "Afganistan"
        },
        "spa": {
        "official": "República Islámica de Afganistán",
        "common": "Afganistán"
        },
        "swe": {
        "official": "Islamiska republiken Afghanistan",
        "common": "Afghanistan"
        },
        "tur": {
        "official": "Afganistan İslam Cumhuriyeti",
        "common": "Afganistan"
        },
        "urd": {
        "official": "اسلامی جمہوریہ افغانستان",
        "common": "افغانستان"
        },
        "zho": {
        "official": "阿富汗伊斯兰共和国",
        "common": "阿富汗"
        }
        },
        "latlng": [
        33,
        65
        ],
        "landlocked": true,
        "borders": [
        "IRN",
        "PAK",
        "TKM",
        "UZB",
        "TJK",
        "CHN"
        ],
        "area": 652230,
        "demonyms": {
        "eng": {
        "f": "Afghan",
        "m": "Afghan"
        },
        "fra": {
        "f": "Afghane",
        "m": "Afghan"
        }
        },
        "flag": "🇦🇫",
        "maps": {
        "googleMaps": "https://goo.gl/maps/BXBGw7yUUFknCfva9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/303427"
        },
        "population": 40218234,
        "fifa": "AFG",
        "car": {
        "signs": [
        "AFG"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+04:30"
        ],
        "continents": [
        "Asia"
        ],
        "flags": {
        "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
        "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/af.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/af.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        34.52,
        69.18
        ]
        }
        },
        {
        "name": {
        "common": "Macau",
        "official": "Macao Special Administrative Region of the People's Republic of China",
        "nativeName": {
        "por": {
        "official": "Região Administrativa Especial de Macau da República Popular da China",
        "common": "Macau"
        },
        "zho": {
        "official": "中华人民共和国澳门特别行政区",
        "common": "澳门"
        }
        }
        },
        "tld": [
        ".mo"
        ],
        "cca2": "MO",
        "ccn3": "446",
        "cca3": "MAC",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
        "MOP": {
        "name": "Macanese pataca",
        "symbol": "P"
        }
        },
        "idd": {
        "root": "+8",
        "suffixes": [
        "53"
        ]
        },
        "altSpellings": [
        "MO",
        "澳门",
        "Macao",
        "Macao Special Administrative Region of the People's Republic of China",
        "中華人民共和國澳門特別行政區",
        "Região Administrativa Especial de Macau da República Popular da China"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
        "por": "Portuguese",
        "zho": "Chinese"
        },
        "translations": {
        "ara": {
        "official": "منطقة ماكاو الإدارية التابعة لجمهورية الصين الشعبية",
        "common": "ماكاو"
        },
        "bre": {
        "official": "Rannvro velestradurel arbennik Makao eus Republik pobl Sina",
        "common": "Makao"
        },
        "ces": {
        "official": "Zvláštní správní oblast Čínské lidové republiky Macao",
        "common": "Macao"
        },
        "cym": {
        "official": "Macao Special Administrative Region of the People's Republic of China",
        "common": "Macau"
        },
        "deu": {
        "official": "Sonderverwaltungsregion Macau der Volksrepublik China",
        "common": "Macao"
        },
        "est": {
        "official": "Macau erihalduspiirkond",
        "common": "Macau"
        },
        "fin": {
        "official": "Macaon Kiinan kansantasavallan erityishallintoalue",
        "common": "Macao"
        },
        "fra": {
        "official": "Région administrative spéciale de Macao de la République populaire de Chine",
        "common": "Macao"
        },
        "hrv": {
        "official": "Makao Posebnog upravnog područjaNarodne Republike Kine",
        "common": "Makao"
        },
        "hun": {
        "official": "Makaó",
        "common": "Makaó"
        },
        "ita": {
        "official": "Macao Regione amministrativa speciale della Repubblica Popolare Cinese",
        "common": "Macao"
        },
        "jpn": {
        "official": "中華人民共和国マカオ特別行政区",
        "common": "マカオ"
        },
        "kor": {
        "official": "중화인민공화국 마카오 특별행정구",
        "common": "마카오"
        },
        "nld": {
        "official": "Speciale Administratieve Regio Macau van de Volksrepubliek China",
        "common": "Macao"
        },
        "per": {
        "official": "ماکائو",
        "common": "ماکائو"
        },
        "pol": {
        "official": "Specjalny Region Administracyjny Chińskiej Republiki Ludowej Makau",
        "common": "Makau"
        },
        "por": {
        "official": "Macau Região Administrativa Especial da República Popular da China",
        "common": "Macau"
        },
        "rus": {
        "official": "Специальный административный район Макао Китайской Народной Республики Китай",
        "common": "Макао"
        },
        "slk": {
        "official": "Macao, Špeciàlna administratívna oblasŦ",
        "common": "Macao"
        },
        "spa": {
        "official": "Macao, Región Administrativa Especial de la República Popular China",
        "common": "Macao"
        },
        "swe": {
        "official": "Macao",
        "common": "Macao"
        },
        "tur": {
        "official": "Çin Halk Cumhuriyeti Makao Özel İdari Bölgesi",
        "common": "Makao"
        },
        "urd": {
        "official": "مکاؤ عوامی جمہوریہ چین کا خصوصی انتظامی علاقہ",
        "common": "مکاؤ"
        }
        },
        "latlng": [
        22.16666666,
        113.55
        ],
        "landlocked": false,
        "borders": [
        "CHN"
        ],
        "area": 30,
        "demonyms": {
        "eng": {
        "f": "Macanese",
        "m": "Macanese"
        },
        "fra": {
        "f": "Macanaise",
        "m": "Macanais"
        }
        },
        "flag": "🇲🇴",
        "maps": {
        "googleMaps": "https://goo.gl/maps/whymRdk3dZFfAAs4A",
        "openStreetMaps": "https://www.openstreetmap.org/relation/1867188"
        },
        "population": 649342,
        "fifa": "MAC",
        "car": {
        "signs": [
        "MO"
        ],
        "side": "left"
        },
        "timezones": [
        "UTC+08:00"
        ],
        "continents": [
        "Asia"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/mo.png",
        "svg": "https://flagcdn.com/mo.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/mo.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/mo.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {}
        },
        {
        "name": {
        "common": "Åland Islands",
        "official": "Åland Islands",
        "nativeName": {
        "swe": {
        "official": "Landskapet Åland",
        "common": "Åland"
        }
        }
        },
        "tld": [
        ".ax"
        ],
        "cca2": "AX",
        "ccn3": "248",
        "cca3": "ALA",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
        "EUR": {
        "name": "Euro",
        "symbol": "€"
        }
        },
        "idd": {
        "root": "+3",
        "suffixes": [
        "5818"
        ]
        },
        "capital": [
        "Mariehamn"
        ],
        "altSpellings": [
        "AX",
        "Aaland",
        "Aland",
        "Ahvenanmaa"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
        "swe": "Swedish"
        },
        "translations": {
        "ara": {
        "official": "جزر أولاند",
        "common": "جزر أولاند"
        },
        "bre": {
        "official": "Inizi Åland",
        "common": "Åland"
        },
        "ces": {
        "official": "Ålandské ostrovy",
        "common": "Ålandy"
        },
        "cym": {
        "official": "Åland Islands",
        "common": "Åland Islands"
        },
        "deu": {
        "official": "Åland-Inseln",
        "common": "Åland"
        },
        "est": {
        "official": "Ahvenamaa maakond",
        "common": "Ahvenamaa"
        },
        "fin": {
        "official": "Ahvenanmaan maakunta",
        "common": "Ahvenanmaa"
        },
        "fra": {
        "official": "Ahvenanmaa",
        "common": "Ahvenanmaa"
        },
        "hrv": {
        "official": "Aland Islands",
        "common": "Ålandski otoci"
        },
        "hun": {
        "official": "Åland-szigetek",
        "common": "Åland-szigetek"
        },
        "ita": {
        "official": "Isole Åland",
        "common": "Isole Aland"
        },
        "jpn": {
        "official": "オーランド諸島",
        "common": "オーランド諸島"
        },
        "kor": {
        "official": "올란드 제도",
        "common": "올란드 제도"
        },
        "nld": {
        "official": "Åland eilanden",
        "common": "Ålandeilanden"
        },
        "per": {
        "official": "جزایر الند",
        "common": "جزایر الند"
        },
        "pol": {
        "official": "Wyspy Alandzkie",
        "common": "Wyspy Alandzkie"
        },
        "por": {
        "official": "Ilhas Åland",
        "common": "Alândia"
        },
        "rus": {
        "official": "Аландские острова",
        "common": "Аландские острова"
        },
        "slk": {
        "official": "Alandské ostrovy",
        "common": "Alandy"
        },
        "spa": {
        "official": "Islas Åland",
        "common": "Alandia"
        },
        "swe": {
        "official": "Åland",
        "common": "Åland"
        },
        "tur": {
        "official": "Åland Adaları",
        "common": "Åland"
        },
        "urd": {
        "official": "جزائر اولند",
        "common": "جزائر اولند"
        },
        "zho": {
        "official": "奥兰群岛",
        "common": "奥兰群岛"
        }
        },
        "latlng": [
        60.116667,
        19.9
        ],
        "landlocked": false,
        "area": 1580,
        "demonyms": {
        "eng": {
        "f": "Ålandish",
        "m": "Ålandish"
        },
        "fra": {
        "f": "Ålandaise",
        "m": "Ålandais"
        }
        },
        "flag": "🇦🇽",
        "maps": {
        "googleMaps": "https://goo.gl/maps/ewFb3vYsfUmVCoSb8",
        "openStreetMaps": "https://www.openstreetmap.org/relation/1650407"
        },
        "population": 29458,
        "car": {
        "signs": [
        ""
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+02:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/ax.png",
        "svg": "https://flagcdn.com/ax.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ax.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ax.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        60.12,
        19.9
        ]
        }
        },
        {
        "name": {
        "common": "Syria",
        "official": "Syrian Arab Republic",
        "nativeName": {
        "ara": {
        "official": "الجمهورية العربية السورية",
        "common": "سوريا"
        }
        }
        },
        "tld": [
        ".sy",
        "سوريا."
        ],
        "cca2": "SY",
        "ccn3": "760",
        "cca3": "SYR",
        "cioc": "SYR",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "SYP": {
        "name": "Syrian pound",
        "symbol": "£"
        }
        },
        "idd": {
        "root": "+9",
        "suffixes": [
        "63"
        ]
        },
        "capital": [
        "Damascus"
        ],
        "altSpellings": [
        "SY",
        "Syrian Arab Republic",
        "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
        "ara": "Arabic"
        },
        "translations": {
        "ara": {
        "official": "الجمهورية العربية السورية",
        "common": "سوريا"
        },
        "bre": {
        "official": "Republik Arab Siriat",
        "common": "Siria"
        },
        "ces": {
        "official": "Syrská arabská republika",
        "common": "Sýrie"
        },
        "cym": {
        "official": "Syrian Arab Republic",
        "common": "Syria"
        },
        "deu": {
        "official": "Arabische Republik Syrien",
        "common": "Syrien"
        },
        "est": {
        "official": "Süüria Araabia Vabariik",
        "common": "Süüria"
        },
        "fin": {
        "official": "Syyrian arabitasavalta",
        "common": "Syyria"
        },
        "fra": {
        "official": "République arabe syrienne",
        "common": "Syrie"
        },
        "hrv": {
        "official": "Sirijska Arapska Republika",
        "common": "Sirija"
        },
        "hun": {
        "official": "Szíriai Arab Köztársaság",
        "common": "Szíria"
        },
        "ita": {
        "official": "Repubblica araba siriana",
        "common": "Siria"
        },
        "jpn": {
        "official": "シリアアラブ共和国",
        "common": "シリア・アラブ共和国"
        },
        "kor": {
        "official": "시리아 아랍 공화국",
        "common": "시리아"
        },
        "nld": {
        "official": "Syrische Arabische Republiek",
        "common": "Syrië"
        },
        "per": {
        "official": "جمهوری عربی سوریه",
        "common": "سوریه"
        },
        "pol": {
        "official": "Syryjska Republika Arabska",
        "common": "Syria"
        },
        "por": {
        "official": "República Árabe Síria",
        "common": "Síria"
        },
        "rus": {
        "official": "Сирийская Арабская Республика",
        "common": "Сирия"
        },
        "slk": {
        "official": "Sýrska arabská republika",
        "common": "Sýria"
        },
        "spa": {
        "official": "República Árabe Siria",
        "common": "Siria"
        },
        "swe": {
        "official": "Syriska arabiska republiken",
        "common": "Syrien"
        },
        "tur": {
        "official": "Suriye Arap Cumhuriyeti",
        "common": "Suriye"
        },
        "urd": {
        "official": "عرب جمہوریہ سوریہ",
        "common": "سوریہ"
        },
        "zho": {
        "official": "叙利亚阿拉伯共和国",
        "common": "叙利亚"
        }
        },
        "latlng": [
        35,
        38
        ],
        "landlocked": false,
        "borders": [
        "IRQ",
        "ISR",
        "JOR",
        "LBN",
        "TUR"
        ],
        "area": 185180,
        "demonyms": {
        "eng": {
        "f": "Syrian",
        "m": "Syrian"
        },
        "fra": {
        "f": "Syrienne",
        "m": "Syrien"
        }
        },
        "flag": "🇸🇾",
        "maps": {
        "googleMaps": "https://goo.gl/maps/Xe3VnFbwdb4nv2SM9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/184840"
        },
        "population": 17500657,
        "gini": {
        "2003": 37.5
        },
        "fifa": "SYR",
        "car": {
        "signs": [
        "SYR"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+02:00"
        ],
        "continents": [
        "Asia"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/sy.png",
        "svg": "https://flagcdn.com/sy.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/sy.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/sy.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        33.5,
        36.3
        ]
        }
        },
        {
        "name": {
        "common": "São Tomé and Príncipe",
        "official": "Democratic Republic of São Tomé and Príncipe",
        "nativeName": {
        "por": {
        "official": "República Democrática do São Tomé e Príncipe",
        "common": "São Tomé e Príncipe"
        }
        }
        },
        "tld": [
        ".st"
        ],
        "cca2": "ST",
        "ccn3": "678",
        "cca3": "STP",
        "cioc": "STP",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "STN": {
        "name": "São Tomé and Príncipe dobra",
        "symbol": "Db"
        }
        },
        "idd": {
        "root": "+2",
        "suffixes": [
        "39"
        ]
        },
        "capital": [
        "São Tomé"
        ],
        "altSpellings": [
        "ST",
        "Democratic Republic of São Tomé and Príncipe",
        "Sao Tome and Principe",
        "República Democrática de São Tomé e Príncipe"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
        "por": "Portuguese"
        },
        "translations": {
        "ara": {
        "official": "جمهورية ساو تومي وبرينسيب الديمقراطية",
        "common": "ساو تومي وبرينسيب"
        },
        "bre": {
        "official": "Republik Demokratel São Tomé ha Príncipe",
        "common": "São Tomé ha Príncipe"
        },
        "ces": {
        "official": "Demokratická republika Svatý Tomáš a Princův ostrov",
        "common": "Svatý Tomáš a Princův ostrov"
        },
        "cym": {
        "official": "Democratic Republic of São Tomé and Príncipe",
        "common": "São Tomé and Príncipe"
        },
        "deu": {
        "official": "Demokratische Republik São Tomé und Príncipe",
        "common": "São Tomé und Príncipe"
        },
        "est": {
        "official": "São Tomé ja Príncipe Demokraatlik Vabariik",
        "common": "São Tomé ja Príncipe"
        },
        "fin": {
        "official": "São Tomé ja Príncipen demokraattinen tasavalta",
        "common": "São Téme ja Príncipe"
        },
        "fra": {
        "official": "République démocratique de São Tomé et Príncipe",
        "common": "São Tomé et Príncipe"
        },
        "hrv": {
        "official": "Demokratska Republika São Tome i Principe",
        "common": "Sveti Toma i Princip"
        },
        "hun": {
        "official": "São Tomé és Príncipe Demokratikus Köztársaság",
        "common": "São Tomé és Príncipe"
        },
        "ita": {
        "official": "Repubblica democratica di São Tomé e Príncipe",
        "common": "São Tomé e Príncipe"
        },
        "jpn": {
        "official": "サントメ·プリンシペ民主共和国",
        "common": "サントメ・プリンシペ"
        },
        "kor": {
        "official": "상투메 프린시페 민주 공화국",
        "common": "상투메 프린시페"
        },
        "nld": {
        "official": "Democratische Republiek Sao Tomé en Principe",
        "common": "Sao Tomé en Principe"
        },
        "per": {
        "official": "جمهوری دموکراتیک سائوتومه و پرنسیپ",
        "common": "سائوتومه و پرنسیپ"
        },
        "pol": {
        "official": "Demokratyczna Republika Wysp Świętego Tomasza i Książęcej",
        "common": "Wyspy Świętego Tomasza i Książęca"
        },
        "por": {
        "official": "República Democrática de São Tomé e Príncipe",
        "common": "São Tomé e Príncipe"
        },
        "rus": {
        "official": "Демократическая Республика Сан-Томе и Принсипи",
        "common": "Сан-Томе и Принсипи"
        },
        "slk": {
        "official": "Demokratická republika Svätého Tomáša A princovho ostrova",
        "common": "Svätý Tomáš a Princov ostrov"
        },
        "spa": {
        "official": "República Democrática de Santo Tomé y Príncipe",
        "common": "Santo Tomé y Príncipe"
        },
        "swe": {
        "official": "Demokratiska republiken São Tomé och Príncipe",
        "common": "São Tomé och Príncipe"
        },
        "tur": {
        "official": "São Tomé ve Príncipe Demokratik Cumhuriyeti",
        "common": "São Tomé ve Príncipe"
        },
        "urd": {
        "official": "جمہوریہ ساؤ ٹومے و پرنسپے",
        "common": "ساؤ ٹومے و پرنسپے"
        },
        "zho": {
        "official": "圣多美和普林西比民主共和国",
        "common": "圣多美和普林西比"
        }
        },
        "latlng": [
        1,
        7
        ],
        "landlocked": false,
        "area": 964,
        "demonyms": {
        "eng": {
        "f": "Sao Tomean",
        "m": "Sao Tomean"
        },
        "fra": {
        "f": "Santoméenne",
        "m": "Santoméen"
        }
        },
        "flag": "🇸🇹",
        "maps": {
        "googleMaps": "https://goo.gl/maps/9EUppm13RtPX9oF46",
        "openStreetMaps": "https://www.openstreetmap.org/relation/535880"
        },
        "population": 219161,
        "gini": {
        "2017": 56.3
        },
        "fifa": "STP",
        "car": {
        "signs": [
        "STP"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC"
        ],
        "continents": [
        "Africa"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/st.png",
        "svg": "https://flagcdn.com/st.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/st.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/st.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        0.34,
        6.73
        ]
        }
        },
        {
        "name": {
        "common": "Switzerland",
        "official": "Swiss Confederation",
        "nativeName": {
        "fra": {
        "official": "Confédération suisse",
        "common": "Suisse"
        },
        "gsw": {
        "official": "Schweizerische Eidgenossenschaft",
        "common": "Schweiz"
        },
        "ita": {
        "official": "Confederazione Svizzera",
        "common": "Svizzera"
        },
        "roh": {
        "official": "Confederaziun svizra",
        "common": "Svizra"
        }
        }
        },
        "tld": [
        ".ch"
        ],
        "cca2": "CH",
        "ccn3": "756",
        "cca3": "CHE",
        "cioc": "SUI",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "CHF": {
        "name": "Swiss franc",
        "symbol": "Fr."
        }
        },
        "idd": {
        "root": "+4",
        "suffixes": [
        "1"
        ]
        },
        "capital": [
        "Bern"
        ],
        "altSpellings": [
        "CH",
        "Swiss Confederation",
        "Schweiz",
        "Suisse",
        "Svizzera",
        "Svizra"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
        "fra": "French",
        "gsw": "Swiss German",
        "ita": "Italian",
        "roh": "Romansh"
        },
        "translations": {
        "ara": {
        "official": "الاتحاد السويسري",
        "common": "سويسرا"
        },
        "bre": {
        "official": "Kengevredad Suis",
        "common": "Suis"
        },
        "ces": {
        "official": "Švýcarská konfederace",
        "common": "Švýcarsko"
        },
        "cym": {
        "official": "Swiss Confederation",
        "common": "Switzerland"
        },
        "deu": {
        "official": "Schweizerische Eidgenossenschaft",
        "common": "Schweiz"
        },
        "est": {
        "official": "Šveitsi Konföderatsioon",
        "common": "Šveits"
        },
        "fin": {
        "official": "Sveitsin valaliitto",
        "common": "Sveitsi"
        },
        "fra": {
        "official": "Confédération suisse",
        "common": "Suisse"
        },
        "hrv": {
        "official": "švicarska Konfederacija",
        "common": "Švicarska"
        },
        "hun": {
        "official": "Svájc",
        "common": "Svájc"
        },
        "ita": {
        "official": "Confederazione svizzera",
        "common": "Svizzera"
        },
        "jpn": {
        "official": "スイス連邦",
        "common": "スイス"
        },
        "kor": {
        "official": "스위스 연방",
        "common": "스위스"
        },
        "nld": {
        "official": "Zwitserse Confederatie",
        "common": "Zwitserland"
        },
        "per": {
        "official": "کنفدراسیون سوئیس",
        "common": "سوئیس"
        },
        "pol": {
        "official": "Konfederacja Szwajcarska",
        "common": "Szwajcaria"
        },
        "por": {
        "official": "Confederação Suíça",
        "common": "Suíça"
        },
        "rus": {
        "official": "Швейцарская Конфедерация",
        "common": "Швейцария"
        },
        "slk": {
        "official": "Švajčiarska konfederácia",
        "common": "Švajčiarsko"
        },
        "spa": {
        "official": "Confederación Suiza",
        "common": "Suiza"
        },
        "swe": {
        "official": "Schweiziska edsförbundet",
        "common": "Schweiz"
        },
        "tur": {
        "official": "İsviçre Konfederasyonu",
        "common": "İsviçre"
        },
        "urd": {
        "official": "سوئیس  متحدہ",
        "common": "سویٹذرلینڈ"
        },
        "zho": {
        "official": "瑞士联邦",
        "common": "瑞士"
        }
        },
        "latlng": [
        47,
        8
        ],
        "landlocked": true,
        "borders": [
        "AUT",
        "FRA",
        "ITA",
        "LIE",
        "DEU"
        ],
        "area": 41284,
        "demonyms": {
        "eng": {
        "f": "Swiss",
        "m": "Swiss"
        },
        "fra": {
        "f": "Suisse",
        "m": "Suisse"
        }
        },
        "flag": "🇨🇭",
        "maps": {
        "googleMaps": "https://goo.gl/maps/uVuZcXaxSx5jLyEC9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/51701"
        },
        "population": 8654622,
        "gini": {
        "2018": 33.1
        },
        "fifa": "SUI",
        "car": {
        "signs": [
        "CH"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/ch.png",
        "svg": "https://flagcdn.com/ch.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ch.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ch.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        46.92,
        7.47
        ]
        },
        "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
        }
        },
        {
        "name": {
        "common": "San Marino",
        "official": "Republic of San Marino",
        "nativeName": {
        "ita": {
        "official": "Repubblica di San Marino",
        "common": "San Marino"
        }
        }
        },
        "tld": [
        ".sm"
        ],
        "cca2": "SM",
        "ccn3": "674",
        "cca3": "SMR",
        "cioc": "SMR",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "EUR": {
        "name": "Euro",
        "symbol": "€"
        }
        },
        "idd": {
        "root": "+3",
        "suffixes": [
        "78"
        ]
        },
        "capital": [
        "City of San Marino"
        ],
        "altSpellings": [
        "SM",
        "Republic of San Marino",
        "Repubblica di San Marino"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
        "ita": "Italian"
        },
        "translations": {
        "ara": {
        "official": "جمهورية سان مارينو",
        "common": "سان مارينو"
        },
        "bre": {
        "official": "Republik San Marino",
        "common": "San Marino"
        },
        "ces": {
        "official": "Republika San Marino",
        "common": "San Marino"
        },
        "cym": {
        "official": "Republic of San Marino",
        "common": "San Marino"
        },
        "deu": {
        "official": "Republik San Marino",
        "common": "San Marino"
        },
        "est": {
        "official": "San Marino Vabariik",
        "common": "San Marino"
        },
        "fin": {
        "official": "San Marinon seesteinen tasavalta",
        "common": "San Marino"
        },
        "fra": {
        "official": "République de Saint-Marin",
        "common": "Saint-Marin"
        },
        "hrv": {
        "official": "Većina Serene Republika San Marino",
        "common": "San Marino"
        },
        "hun": {
        "official": "San Marino Köztársaság",
        "common": "San Marino"
        },
        "ita": {
        "official": "Serenissima Repubblica di San Marino",
        "common": "San Marino"
        },
        "jpn": {
        "official": "サンマリノのほとんどセリーヌ共和国",
        "common": "サンマリノ"
        },
        "kor": {
        "official": "산마리노 공화국",
        "common": "산마리노"
        },
        "nld": {
        "official": "Meest Serene Republiek San Marino",
        "common": "San Marino"
        },
        "per": {
        "official": "جمهوری سان مارینو",
        "common": "سان مارینو"
        },
        "pol": {
        "official": "Republika San Marino",
        "common": "San Marino"
        },
        "por": {
        "official": "Sereníssima República de San Marino",
        "common": "San Marino"
        },
        "rus": {
        "official": "Большинство Serene Республика Сан-Марино",
        "common": "Сан-Марино"
        },
        "slk": {
        "official": "Sanmarínska republika",
        "common": "San Maríno"
        },
        "spa": {
        "official": "Serenísima República de San Marino",
        "common": "San Marino"
        },
        "swe": {
        "official": "Republiken San Marino",
        "common": "San Marino"
        },
        "tur": {
        "official": "San Marino Cumhuriyeti",
        "common": "San Marino"
        },
        "urd": {
        "official": "جمہوریہ سان مارینو",
        "common": "سان مارینو"
        },
        "zho": {
        "official": "圣马力诺共和国",
        "common": "圣马力诺"
        }
        },
        "latlng": [
        43.76666666,
        12.41666666
        ],
        "landlocked": true,
        "borders": [
        "ITA"
        ],
        "area": 61,
        "demonyms": {
        "eng": {
        "f": "Sammarinese",
        "m": "Sammarinese"
        },
        "fra": {
        "f": "Saint-Marinaise",
        "m": "Saint-Marinais"
        }
        },
        "flag": "🇸🇲",
        "maps": {
        "googleMaps": "https://goo.gl/maps/rxCVJjm8dVY93RPY8",
        "openStreetMaps": "https://www.openstreetmap.org/relation/54624"
        },
        "population": 33938,
        "fifa": "SMR",
        "car": {
        "signs": [
        "RSM"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/sm.png",
        "svg": "https://flagcdn.com/sm.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/sm.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/sm.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        43.94,
        12.45
        ]
        },
        "postalCode": {
        "format": "4789#",
        "regex": "^(4789\\d)$"
        }
        },
        {
        "name": {
        "common": "Eswatini",
        "official": "Kingdom of Eswatini",
        "nativeName": {
        "eng": {
        "official": "Kingdom of Eswatini",
        "common": "Eswatini"
        },
        "ssw": {
        "official": "Umbuso weSwatini",
        "common": "eSwatini"
        }
        }
        },
        "tld": [
        ".sz"
        ],
        "cca2": "SZ",
        "ccn3": "748",
        "cca3": "SWZ",
        "cioc": "SWZ",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "SZL": {
        "name": "Swazi lilangeni",
        "symbol": "L"
        },
        "ZAR": {
        "name": "South African rand",
        "symbol": "R"
        }
        },
        "idd": {
        "root": "+2",
        "suffixes": [
        "68"
        ]
        },
        "capital": [
        "Mbabane"
        ],
        "altSpellings": [
        "SZ",
        "Swaziland",
        "weSwatini",
        "Swatini",
        "Ngwane",
        "Kingdom of Eswatini",
        "Umbuso weSwatini"
        ],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
        "eng": "English",
        "ssw": "Swazi"
        },
        "translations": {
        "ara": {
        "official": "مملكة إسواتيني",
        "common": "إسواتيني"
        },
        "bre": {
        "official": "Rouantelezh Eswatini",
        "common": "Eswatini"
        },
        "ces": {
        "official": "Svazijské království",
        "common": "Svazijsko"
        },
        "cym": {
        "official": "Kingdom of Eswatini",
        "common": "Eswatini"
        },
        "deu": {
        "official": "Königreich Eswatini",
        "common": "Swasiland"
        },
        "est": {
        "official": "eSwatini Kuningriik",
        "common": "Svaasimaa"
        },
        "fin": {
        "official": "Swazimaan kuningaskunta",
        "common": "Swazimaa"
        },
        "fra": {
        "official": "Royaume d’Eswatini",
        "common": "Swaziland"
        },
        "hrv": {
        "official": "Kraljevina eSwatini",
        "common": "Svazi"
        },
        "hun": {
        "official": "Szváziföldi Királyság",
        "common": "Szváziföld"
        },
        "ita": {
        "official": "Regno di eSwatini",
        "common": "Swaziland"
        },
        "jpn": {
        "official": "スワジランド王国",
        "common": "スワジランド"
        },
        "kor": {
        "official": "에스와티니 왕국",
        "common": "에스와티니"
        },
        "nld": {
        "official": "Koninkrijk eSwatini",
        "common": "Swaziland"
        },
        "per": {
        "official": "پادشاهی سوازیلند",
        "common": "اسواتینی"
        },
        "pol": {
        "official": "Królestwo Suazi",
        "common": "Suazi"
        },
        "por": {
        "official": "Reino de eSwatini",
        "common": "Suazilândia"
        },
        "rus": {
        "official": "Королевство Свазиленд",
        "common": "Свазиленд"
        },
        "slk": {
        "official": "Svazijské kráľovstvo",
        "common": "Svazijsko"
        },
        "spa": {
        "official": "Reino de eSwatini",
        "common": "Suazilandia"
        },
        "swe": {
        "official": "Konungariket Eswatini",
        "common": "Swaziland"
        },
        "tur": {
        "official": "Esvatini Krallığı",
        "common": "Esvatini"
        },
        "urd": {
        "official": "مملکتِ سوازی لینڈ",
        "common": "سوازی لینڈ"
        },
        "zho": {
        "official": "斯威士兰王国",
        "common": "斯威士兰"
        }
        },
        "latlng": [
        -26.5,
        31.5
        ],
        "landlocked": true,
        "borders": [
        "MOZ",
        "ZAF"
        ],
        "area": 17364,
        "demonyms": {
        "eng": {
        "f": "Swazi",
        "m": "Swazi"
        },
        "fra": {
        "f": "Swazie",
        "m": "Swazie"
        }
        },
        "flag": "🇸🇿",
        "maps": {
        "googleMaps": "https://goo.gl/maps/cUY79eqQihFSE8hV6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/88210"
        },
        "population": 1160164,
        "gini": {
        "2016": 54.6
        },
        "fifa": "SWZ",
        "car": {
        "signs": [
        "SD"
        ],
        "side": "left"
        },
        "timezones": [
        "UTC+02:00"
        ],
        "continents": [
        "Africa"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/sz.png",
        "svg": "https://flagcdn.com/sz.svg"
        },
        "coatOfArms": {},
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        -26.32,
        31.13
        ]
        },
        "postalCode": {
        "format": "@###",
        "regex": "^([A-Z]\\d{3})$"
        }
        },
        {
        "name": {
        "common": "Saint Vincent and the Grenadines",
        "official": "Saint Vincent and the Grenadines",
        "nativeName": {
        "eng": {
        "official": "Saint Vincent and the Grenadines",
        "common": "Saint Vincent and the Grenadines"
        }
        }
        },
        "tld": [
        ".vc"
        ],
        "cca2": "VC",
        "ccn3": "670",
        "cca3": "VCT",
        "cioc": "VIN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "XCD": {
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
        }
        },
        "idd": {
        "root": "+1",
        "suffixes": [
        "784"
        ]
        },
        "capital": [
        "Kingstown"
        ],
        "altSpellings": [
        "VC"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
        "eng": "English"
        },
        "translations": {
        "ara": {
        "official": "سانت فينسنت والغرينادين",
        "common": "سانت فينسنت والغرينادين"
        },
        "bre": {
        "official": "Sant-Visant hag ar Grenadinez",
        "common": "Sant-Visant hag ar Grenadinez"
        },
        "ces": {
        "official": "Svatý Vincenc a Grenadiny",
        "common": "Svatý Vincenc a Grenadiny"
        },
        "cym": {
        "official": "Saint Vincent and the Grenadines",
        "common": "Saint Vincent and the Grenadines"
        },
        "deu": {
        "official": "St. Vincent und die Grenadinen",
        "common": "St. Vincent und die Grenadinen"
        },
        "est": {
        "official": "Saint Vincent ja Grenadiinid",
        "common": "Saint Vincent"
        },
        "fin": {
        "official": "Saint Vincent ja Grenadiinit",
        "common": "Saint Vincent ja Grenadiinit"
        },
        "fra": {
        "official": "Saint-Vincent-et-les Grenadines",
        "common": "Saint-Vincent-et-les-Grenadines"
        },
        "hrv": {
        "official": "Sveti Vincent i Grenadini",
        "common": "Sveti Vincent i Grenadini"
        },
        "hun": {
        "official": "Saint Vincent és a Grenadine-szigetek",
        "common": "Saint Vincent és a Grenadine-szigetek"
        },
        "ita": {
        "official": "Saint Vincent e Grenadine",
        "common": "Saint Vincent e Grenadine"
        },
        "jpn": {
        "official": "セントビンセントおよびグレナディーン諸島",
        "common": "セントビンセントおよびグレナディーン諸島"
        },
        "kor": {
        "official": "세인트빈센트 그레나딘",
        "common": "세인트빈센트 그레나딘"
        },
        "nld": {
        "official": "Saint Vincent en de Grenadines",
        "common": "Saint Vincent en de Grenadines"
        },
        "per": {
        "official": "سنت وینسنت و گرنادین‌ها",
        "common": "سنت وینسنت و گرنادین‌ها"
        },
        "pol": {
        "official": "Saint Vincent i Grenadyny",
        "common": "Saint Vincent i Grenadyny"
        },
        "por": {
        "official": "São Vicente e Granadinas",
        "common": "São Vincente e Granadinas"
        },
        "rus": {
        "official": "Сент-Винсент и Гренадины",
        "common": "Сент-Винсент и Гренадины"
        },
        "slk": {
        "official": "Svätý Vincent a Grenadíny",
        "common": "Svätý Vincent a Grenadíny"
        },
        "spa": {
        "official": "San Vicente y las Granadinas",
        "common": "San Vicente y Granadinas"
        },
        "swe": {
        "official": "Saint Vincent och Grenadinerna",
        "common": "Saint Vincent och Grenadinerna"
        },
        "tur": {
        "official": "Saint Vincent ve Grenadinler",
        "common": "Saint Vincent ve Grenadinler"
        },
        "urd": {
        "official": "سینٹ وینسینٹ و گریناڈائنز",
        "common": "سینٹ وینسینٹ و گریناڈائنز"
        },
        "zho": {
        "official": "圣文森特和格林纳丁斯",
        "common": "圣文森特和格林纳丁斯"
        }
        },
        "latlng": [
        13.25,
        -61.2
        ],
        "landlocked": false,
        "area": 389,
        "demonyms": {
        "eng": {
        "f": "Saint Vincentian",
        "m": "Saint Vincentian"
        },
        "fra": {
        "f": "Vincentaise",
        "m": "Vincentais"
        }
        },
        "flag": "🇻🇨",
        "maps": {
        "googleMaps": "https://goo.gl/maps/wMbnMqjG37FMnrwf7",
        "openStreetMaps": "https://www.openstreetmap.org/relation/550725"
        },
        "population": 110947,
        "fifa": "VIN",
        "car": {
        "signs": [
        "WV"
        ],
        "side": "left"
        },
        "timezones": [
        "UTC-04:00"
        ],
        "continents": [
        "North America"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/vc.png",
        "svg": "https://flagcdn.com/vc.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/vc.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/vc.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        13.13,
        -61.22
        ]
        }
        },
        {
        "name": {
        "common": "Malaysia",
        "official": "Malaysia",
        "nativeName": {
        "eng": {
        "official": "Malaysia",
        "common": "Malaysia"
        },
        "msa": {
        "official": "مليسيا",
        "common": "مليسيا"
        }
        }
        },
        "tld": [
        ".my"
        ],
        "cca2": "MY",
        "ccn3": "458",
        "cca3": "MYS",
        "cioc": "MAS",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "MYR": {
        "name": "Malaysian ringgit",
        "symbol": "RM"
        }
        },
        "idd": {
        "root": "+6",
        "suffixes": [
        "0"
        ]
        },
        "capital": [
        "Kuala Lumpur"
        ],
        "altSpellings": [
        "MY"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
        "eng": "English",
        "msa": "Malay"
        },
        "translations": {
        "ara": {
        "official": "ماليزيا",
        "common": "ماليزيا"
        },
        "bre": {
        "official": "Malaysia",
        "common": "Malaysia"
        },
        "ces": {
        "official": "Malajsie",
        "common": "Malajsie"
        },
        "cym": {
        "official": "Malaysia",
        "common": "Malaysia"
        },
        "deu": {
        "official": "Malaysia",
        "common": "Malaysia"
        },
        "est": {
        "official": "Malaisia",
        "common": "Malaisia"
        },
        "fin": {
        "official": "Malesia",
        "common": "Malesia"
        },
        "fra": {
        "official": "Fédération de Malaisie",
        "common": "Malaisie"
        },
        "hrv": {
        "official": "Malezija",
        "common": "Malezija"
        },
        "hun": {
        "official": "Malajzia",
        "common": "Malajzia"
        },
        "ita": {
        "official": "Malaysia",
        "common": "Malesia"
        },
        "jpn": {
        "official": "マレーシア",
        "common": "マレーシア"
        },
        "kor": {
        "official": "말레이시아",
        "common": "말레이시아"
        },
        "nld": {
        "official": "Maleisië",
        "common": "Maleisië"
        },
        "per": {
        "official": "فدراسیون مالزی",
        "common": "مالزی"
        },
        "pol": {
        "official": "Malezja",
        "common": "Malezja"
        },
        "por": {
        "official": "Malásia",
        "common": "Malásia"
        },
        "rus": {
        "official": "Малайзия",
        "common": "Малайзия"
        },
        "slk": {
        "official": "Malajzia",
        "common": "Malajzia"
        },
        "spa": {
        "official": "Malasia",
        "common": "Malasia"
        },
        "swe": {
        "official": "Malaysia",
        "common": "Malaysia"
        },
        "tur": {
        "official": "Malezya",
        "common": "Malezya"
        },
        "urd": {
        "official": "ملائیشیا",
        "common": "ملائیشیا"
        },
        "zho": {
        "official": "马来西亚",
        "common": "马来西亚"
        }
        },
        "latlng": [
        2.5,
        112.5
        ],
        "landlocked": false,
        "borders": [
        "BRN",
        "IDN",
        "THA"
        ],
        "area": 330803,
        "demonyms": {
        "eng": {
        "f": "Malaysian",
        "m": "Malaysian"
        },
        "fra": {
        "f": "Malaisienne",
        "m": "Malaisien"
        }
        },
        "flag": "🇲🇾",
        "maps": {
        "googleMaps": "https://goo.gl/maps/qrY1PNeUXGyXDcPy6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/2108121"
        },
        "population": 32365998,
        "gini": {
        "2015": 41.1
        },
        "fifa": "MAS",
        "car": {
        "signs": [
        "MAL"
        ],
        "side": "left"
        },
        "timezones": [
        "UTC+08:00"
        ],
        "continents": [
        "Asia"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/my.png",
        "svg": "https://flagcdn.com/my.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/my.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/my.svg"
        },
        "startOfWeek": "sunday",
        "capitalInfo": {
        "latlng": [
        3.17,
        101.7
        ]
        },
        "postalCode": {
        "format": "#####",
        "regex": "^(\\d{5})$"
        }
        },
        {
        "name": {
        "common": "Germany",
        "official": "Federal Republic of Germany",
        "nativeName": {
        "deu": {
        "official": "Bundesrepublik Deutschland",
        "common": "Deutschland"
        }
        }
        },
        "tld": [
        ".de"
        ],
        "cca2": "DE",
        "ccn3": "276",
        "cca3": "DEU",
        "cioc": "GER",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "EUR": {
        "name": "Euro",
        "symbol": "€"
        }
        },
        "idd": {
        "root": "+4",
        "suffixes": [
        "9"
        ]
        },
        "capital": [
        "Berlin"
        ],
        "altSpellings": [
        "DE",
        "Federal Republic of Germany",
        "Bundesrepublik Deutschland"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
        "deu": "German"
        },
        "translations": {
        "ara": {
        "official": "جمهورية ألمانيا الاتحادية",
        "common": "ألمانيا"
        },
        "bre": {
        "official": "Republik Kevreadel Alamagn",
        "common": "Alamagn"
        },
        "ces": {
        "official": "Spolková republika Německo",
        "common": "Německo"
        },
        "cym": {
        "official": "Federal Republic of Germany",
        "common": "Germany"
        },
        "deu": {
        "official": "Bundesrepublik Deutschland",
        "common": "Deutschland"
        },
        "est": {
        "official": "Saksamaa Liitvabariik",
        "common": "Saksamaa"
        },
        "fin": {
        "official": "Saksan liittotasavalta",
        "common": "Saksa"
        },
        "fra": {
        "official": "République fédérale d'Allemagne",
        "common": "Allemagne"
        },
        "hrv": {
        "official": "Njemačka Federativna Republika",
        "common": "Njemačka"
        },
        "hun": {
        "official": "Német Szövetségi Köztársaság",
        "common": "Németország"
        },
        "ita": {
        "official": "Repubblica federale di Germania",
        "common": "Germania"
        },
        "jpn": {
        "official": "ドイツ連邦共和国",
        "common": "ドイツ"
        },
        "kor": {
        "official": "독일 연방 공화국",
        "common": "독일"
        },
        "nld": {
        "official": "Bondsrepubliek Duitsland",
        "common": "Duitsland"
        },
        "per": {
        "official": "جمهوری فدرال آلمان",
        "common": "آلمان"
        },
        "pol": {
        "official": "Republika Federalna Niemiec",
        "common": "Niemcy"
        },
        "por": {
        "official": "República Federal da Alemanha",
        "common": "Alemanha"
        },
        "rus": {
        "official": "Федеративная Республика Германия",
        "common": "Германия"
        },
        "slk": {
        "official": "Nemecká spolková republika",
        "common": "Nemecko"
        },
        "spa": {
        "official": "República Federal de Alemania",
        "common": "Alemania"
        },
        "swe": {
        "official": "Förbundsrepubliken Tyskland",
        "common": "Tyskland"
        },
        "tur": {
        "official": "Almanya Federal Cumhuriyeti",
        "common": "Almanya"
        },
        "urd": {
        "official": "وفاقی جمہوریہ جرمنی",
        "common": "جرمنی"
        },
        "zho": {
        "official": "德意志联邦共和国",
        "common": "德国"
        }
        },
        "latlng": [
        51,
        9
        ],
        "landlocked": false,
        "borders": [
        "AUT",
        "BEL",
        "CZE",
        "DNK",
        "FRA",
        "LUX",
        "NLD",
        "POL",
        "CHE"
        ],
        "area": 357114,
        "demonyms": {
        "eng": {
        "f": "German",
        "m": "German"
        },
        "fra": {
        "f": "Allemande",
        "m": "Allemand"
        }
        },
        "flag": "🇩🇪",
        "maps": {
        "googleMaps": "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/51477"
        },
        "population": 83240525,
        "gini": {
        "2016": 31.9
        },
        "fifa": "GER",
        "car": {
        "signs": [
        "DY"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/de.png",
        "svg": "https://flagcdn.com/de.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/de.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/de.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        52.52,
        13.4
        ]
        },
        "postalCode": {
        "format": "#####",
        "regex": "^(\\d{5})$"
        }
        },
        {
        "name": {
        "common": "Poland",
        "official": "Republic of Poland",
        "nativeName": {
        "pol": {
        "official": "Rzeczpospolita Polska",
        "common": "Polska"
        }
        }
        },
        "tld": [
        ".pl"
        ],
        "cca2": "PL",
        "ccn3": "616",
        "cca3": "POL",
        "cioc": "POL",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "PLN": {
        "name": "Polish złoty",
        "symbol": "zł"
        }
        },
        "idd": {
        "root": "+4",
        "suffixes": [
        "8"
        ]
        },
        "capital": [
        "Warsaw"
        ],
        "altSpellings": [
        "PL",
        "Republic of Poland",
        "Rzeczpospolita Polska"
        ],
        "region": "Europe",
        "subregion": "Central Europe",
        "languages": {
        "pol": "Polish"
        },
        "translations": {
        "ara": {
        "official": "الجمهورية البولندية",
        "common": "بولندا"
        },
        "bre": {
        "official": "Republik Polonia",
        "common": "Polonia"
        },
        "ces": {
        "official": "Polská republika",
        "common": "Polsko"
        },
        "cym": {
        "official": "Republic of Poland",
        "common": "Poland"
        },
        "deu": {
        "official": "Republik Polen",
        "common": "Polen"
        },
        "est": {
        "official": "Poola Vabariik",
        "common": "Poola"
        },
        "fin": {
        "official": "Puolan tasavalta",
        "common": "Puola"
        },
        "fra": {
        "official": "République de Pologne",
        "common": "Pologne"
        },
        "hrv": {
        "official": "Republika Poljska",
        "common": "Poljska"
        },
        "hun": {
        "official": "Lengyel Köztársaság",
        "common": "Lengyelország"
        },
        "ita": {
        "official": "Repubblica di Polonia",
        "common": "Polonia"
        },
        "jpn": {
        "official": "ポーランド共和国",
        "common": "ポーランド"
        },
        "kor": {
        "official": "폴란드 공화국",
        "common": "폴란드"
        },
        "nld": {
        "official": "Republiek Polen",
        "common": "Polen"
        },
        "per": {
        "official": "جمهوری لهستان",
        "common": "لهستان"
        },
        "pol": {
        "official": "Rzeczpospolita Polska",
        "common": "Polska"
        },
        "por": {
        "official": "República da Polónia",
        "common": "Polónia"
        },
        "rus": {
        "official": "Республика Польша",
        "common": "Польша"
        },
        "slk": {
        "official": "Poľská republika",
        "common": "Poľsko"
        },
        "spa": {
        "official": "República de Polonia",
        "common": "Polonia"
        },
        "swe": {
        "official": "Republiken Polen",
        "common": "Polen"
        },
        "tur": {
        "official": "Polonya Cumhuriyeti",
        "common": "Polonya"
        },
        "urd": {
        "official": "جمہوریہ پولینڈ",
        "common": "پولینڈ"
        },
        "zho": {
        "official": "波兰共和国",
        "common": "波兰"
        }
        },
        "latlng": [
        52,
        20
        ],
        "landlocked": false,
        "borders": [
        "BLR",
        "CZE",
        "DEU",
        "LTU",
        "RUS",
        "SVK",
        "UKR"
        ],
        "area": 312679,
        "demonyms": {
        "eng": {
        "f": "Polish",
        "m": "Polish"
        },
        "fra": {
        "f": "Polonaise",
        "m": "Polonais"
        }
        },
        "flag": "🇵🇱",
        "maps": {
        "googleMaps": "https://goo.gl/maps/gY9Xw4Sf4415P4949",
        "openStreetMaps": "https://www.openstreetmap.org/relation/49715"
        },
        "population": 37950802,
        "gini": {
        "2018": 30.2
        },
        "fifa": "POL",
        "car": {
        "signs": [
        "PL"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/pl.png",
        "svg": "https://flagcdn.com/pl.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/pl.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/pl.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        52.25,
        21
        ]
        },
        "postalCode": {
        "format": "##-###",
        "regex": "^(\\d{5})$"
        }
        },
        {
        "name": {
        "common": "Grenada",
        "official": "Grenada",
        "nativeName": {
        "eng": {
        "official": "Grenada",
        "common": "Grenada"
        }
        }
        },
        "tld": [
        ".gd"
        ],
        "cca2": "GD",
        "ccn3": "308",
        "cca3": "GRD",
        "cioc": "GRN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "XCD": {
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
        }
        },
        "idd": {
        "root": "+1",
        "suffixes": [
        "473"
        ]
        },
        "capital": [
        "St. George's"
        ],
        "altSpellings": [
        "GD"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
        "eng": "English"
        },
        "translations": {
        "ara": {
        "official": "غرينادا",
        "common": "غرينادا"
        },
        "bre": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "ces": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "cym": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "deu": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "est": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "fin": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "fra": {
        "official": "Grenade",
        "common": "Grenade"
        },
        "hrv": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "hun": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "ita": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "jpn": {
        "official": "グレナダ",
        "common": "グレナダ"
        },
        "kor": {
        "official": "그레나다",
        "common": "그레나다"
        },
        "nld": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "per": {
        "official": "گرنادا",
        "common": "گرنادا"
        },
        "pol": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "por": {
        "official": "Grenada",
        "common": "Granada"
        },
        "rus": {
        "official": "Гренада",
        "common": "Гренада"
        },
        "slk": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "spa": {
        "official": "Granada",
        "common": "Grenada"
        },
        "swe": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "tur": {
        "official": "Grenada",
        "common": "Grenada"
        },
        "urd": {
        "official": "گریناڈا",
        "common": "گریناڈا"
        },
        "zho": {
        "official": "格林纳达",
        "common": "格林纳达"
        }
        },
        "latlng": [
        12.11666666,
        -61.66666666
        ],
        "landlocked": false,
        "area": 344,
        "demonyms": {
        "eng": {
        "f": "Grenadian",
        "m": "Grenadian"
        },
        "fra": {
        "f": "Grenadienne",
        "m": "Grenadien"
        }
        },
        "flag": "🇬🇩",
        "maps": {
        "googleMaps": "https://goo.gl/maps/rqWyfUAt4xhvk1Zy9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/550727"
        },
        "population": 112519,
        "fifa": "GRN",
        "car": {
        "signs": [
        "WG"
        ],
        "side": "left"
        },
        "timezones": [
        "UTC-04:00"
        ],
        "continents": [
        "North America"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/gd.png",
        "svg": "https://flagcdn.com/gd.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/gd.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/gd.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        32.38,
        -64.68
        ]
        }
        },
        {
        "name": {
        "common": "South Sudan",
        "official": "Republic of South Sudan",
        "nativeName": {
        "eng": {
        "official": "Republic of South Sudan",
        "common": "South Sudan"
        }
        }
        },
        "tld": [
        ".ss"
        ],
        "cca2": "SS",
        "ccn3": "728",
        "cca3": "SSD",
        "cioc": "SSD",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "SSP": {
        "name": "South Sudanese pound",
        "symbol": "£"
        }
        },
        "idd": {
        "root": "+2",
        "suffixes": [
        "11"
        ]
        },
        "capital": [
        "Juba"
        ],
        "altSpellings": [
        "SS"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
        "eng": "English"
        },
        "translations": {
        "ara": {
        "official": "جمهورية جنوب السودان",
        "common": "جنوب السودان"
        },
        "bre": {
        "official": "Republik Soudan ar Su",
        "common": "Soudan ar Su"
        },
        "ces": {
        "official": "Jihosúdánská republika",
        "common": "Jižní Súdán"
        },
        "cym": {
        "official": "Republic of South Sudan",
        "common": "South Sudan"
        },
        "deu": {
        "official": "Republik Südsudan",
        "common": "Südsudan"
        },
        "est": {
        "official": "Lõuna-Sudaani Vabariik",
        "common": "Lõuna-Sudaan"
        },
        "fin": {
        "official": "Etelä-Sudanin tasavalta",
        "common": "Etelä-Sudan"
        },
        "fra": {
        "official": "République du Soudan du Sud",
        "common": "Soudan du Sud"
        },
        "hrv": {
        "official": "Republika Južni Sudan",
        "common": "Južni Sudan"
        },
        "hun": {
        "official": "Dél-szudáni Köztársaság",
        "common": "Dél-Szudán"
        },
        "ita": {
        "official": "Repubblica del Sudan del Sud",
        "common": "Sudan del sud"
        },
        "jpn": {
        "official": "南スーダン共和国",
        "common": "南スーダン"
        },
        "kor": {
        "official": "남수단 공화국",
        "common": "남수단"
        },
        "nld": {
        "official": "Republiek Zuid-Soedan",
        "common": "Zuid-Soedan"
        },
        "per": {
        "official": "جمهوری سودان جنوبی",
        "common": "سودان جنوبی"
        },
        "pol": {
        "official": "Republika Sudanu",
        "common": "Sudan"
        },
        "por": {
        "official": "República do Sudão do Sul",
        "common": "Sudão do Sul"
        },
        "rus": {
        "official": "Республика Южный Судан",
        "common": "Южный Судан"
        },
        "slk": {
        "official": "Juhosudánska republika",
        "common": "Južný Sudán"
        },
        "spa": {
        "official": "República de Sudán del Sur",
        "common": "Sudán del Sur"
        },
        "swe": {
        "official": "Republiken Sydsudan",
        "common": "Sydsudan"
        },
        "tur": {
        "official": "Güney Sudan Cumhuriyeti",
        "common": "Güney Sudan"
        },
        "urd": {
        "official": "جمہوریہ جنوبی سوڈان",
        "common": "جنوبی سوڈان"
        },
        "zho": {
        "official": "南苏丹共和国",
        "common": "南苏丹"
        }
        },
        "latlng": [
        7,
        30
        ],
        "landlocked": true,
        "borders": [
        "CAF",
        "COD",
        "ETH",
        "KEN",
        "SDN",
        "UGA"
        ],
        "area": 619745,
        "demonyms": {
        "eng": {
        "f": "South Sudanese",
        "m": "South Sudanese"
        },
        "fra": {
        "f": "Sud-Soudanaise",
        "m": "Sud-Soudanais"
        }
        },
        "flag": "🇸🇸",
        "maps": {
        "googleMaps": "https://goo.gl/maps/Zm1AYCXb9HSNF1P27",
        "openStreetMaps": "https://www.openstreetmap.org/relation/1656678"
        },
        "population": 11193729,
        "gini": {
        "2016": 44.1
        },
        "fifa": "SSD",
        "car": {
        "signs": [
        ""
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+03:00"
        ],
        "continents": [
        "Africa"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/ss.png",
        "svg": "https://flagcdn.com/ss.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ss.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ss.svg"
        },
        "startOfWeek": "sunday",
        "capitalInfo": {
        "latlng": [
        4.85,
        31.62
        ]
        }
        },
        {
        "name": {
        "common": "Belgium",
        "official": "Kingdom of Belgium",
        "nativeName": {
        "deu": {
        "official": "Königreich Belgien",
        "common": "Belgien"
        },
        "fra": {
        "official": "Royaume de Belgique",
        "common": "Belgique"
        },
        "nld": {
        "official": "Koninkrijk België",
        "common": "België"
        }
        }
        },
        "tld": [
        ".be"
        ],
        "cca2": "BE",
        "ccn3": "056",
        "cca3": "BEL",
        "cioc": "BEL",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "EUR": {
        "name": "Euro",
        "symbol": "€"
        }
        },
        "idd": {
        "root": "+3",
        "suffixes": [
        "2"
        ]
        },
        "capital": [
        "Brussels"
        ],
        "altSpellings": [
        "BE",
        "België",
        "Belgie",
        "Belgien",
        "Belgique",
        "Kingdom of Belgium",
        "Koninkrijk België",
        "Royaume de Belgique",
        "Königreich Belgien"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
        "deu": "German",
        "fra": "French",
        "nld": "Dutch"
        },
        "translations": {
        "ara": {
        "official": "مملكة بلجيكا",
        "common": "بلجيكا"
        },
        "bre": {
        "official": "Rouantelezh Belgia",
        "common": "Belgia"
        },
        "ces": {
        "official": "Belgické království",
        "common": "Belgie"
        },
        "cym": {
        "official": "Teyrnas Gwlad Belg",
        "common": "Gwlad Belg"
        },
        "deu": {
        "official": "Königreich Belgien",
        "common": "Belgien"
        },
        "est": {
        "official": "Belgia Kuningriik",
        "common": "Belgia"
        },
        "fin": {
        "official": "Belgian kuningaskunta",
        "common": "Belgia"
        },
        "fra": {
        "official": "Royaume de Belgique",
        "common": "Belgique"
        },
        "hrv": {
        "official": "Kraljevina Belgija",
        "common": "Belgija"
        },
        "hun": {
        "official": "Belga Királyság",
        "common": "Belgium"
        },
        "ita": {
        "official": "Regno del Belgio",
        "common": "Belgio"
        },
        "jpn": {
        "official": "ベルギー王国",
        "common": "ベルギー"
        },
        "kor": {
        "official": "벨기에 왕국",
        "common": "벨기에"
        },
        "nld": {
        "official": "Koninkrijk België",
        "common": "België"
        },
        "per": {
        "official": "پادشاهی بلژیک",
        "common": "بلژیک"
        },
        "pol": {
        "official": "Królestwo Belgii",
        "common": "Belgia"
        },
        "por": {
        "official": "Reino da Bélgica",
        "common": "Bélgica"
        },
        "rus": {
        "official": "Королевство Бельгия",
        "common": "Бельгия"
        },
        "slk": {
        "official": "Belgické kráľovstvo",
        "common": "Belgicko"
        },
        "spa": {
        "official": "Reino de Bélgica",
        "common": "Bélgica"
        },
        "swe": {
        "official": "Konungariket Belgien",
        "common": "Belgien"
        },
        "tur": {
        "official": "Belçika Krallığı",
        "common": "Belçika"
        },
        "urd": {
        "official": "مملکتِ بلجئیم",
        "common": "بلجئیم"
        },
        "zho": {
        "official": "比利时王国",
        "common": "比利时"
        }
        },
        "latlng": [
        50.83333333,
        4
        ],
        "landlocked": false,
        "borders": [
        "FRA",
        "DEU",
        "LUX",
        "NLD"
        ],
        "area": 30528,
        "demonyms": {
        "eng": {
        "f": "Belgian",
        "m": "Belgian"
        },
        "fra": {
        "f": "Belge",
        "m": "Belge"
        }
        },
        "flag": "🇧🇪",
        "maps": {
        "googleMaps": "https://goo.gl/maps/UQQzat85TCtPRXAL8",
        "openStreetMaps": "https://www.openstreetmap.org/relation/52411"
        },
        "population": 11555997,
        "gini": {
        "2018": 27.2
        },
        "fifa": "BEL",
        "car": {
        "signs": [
        "B"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+01:00"
        ],
        "continents": [
        "Europe"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/be.png",
        "svg": "https://flagcdn.com/be.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/be.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/be.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        50.83,
        4.33
        ]
        },
        "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
        }
        },
        {
        "name": {
        "common": "Cambodia",
        "official": "Kingdom of Cambodia",
        "nativeName": {
        "khm": {
        "official": "ព្រះរាជាណាចក្រកម្ពុជា",
        "common": "Kâmpŭchéa"
        }
        }
        },
        "tld": [
        ".kh"
        ],
        "cca2": "KH",
        "ccn3": "116",
        "cca3": "KHM",
        "cioc": "CAM",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
        "KHR": {
        "name": "Cambodian riel",
        "symbol": "៛"
        },
        "USD": {
        "name": "United States dollar",
        "symbol": "$"
        }
        },
        "idd": {
        "root": "+8",
        "suffixes": [
        "55"
        ]
        },
        "capital": [
        "Phnom Penh"
        ],
        "altSpellings": [
        "KH",
        "Kingdom of Cambodia"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
        "khm": "Khmer"
        },
        "translations": {
        "ara": {
        "official": "مملكة كمبوديا",
        "common": "كمبوديا"
        },
        "bre": {
        "official": "Rouantelezh Kambodja",
        "common": "Kambodja"
        },
        "ces": {
        "official": "Kambodžské království",
        "common": "Kambodža"
        },
        "cym": {
        "official": "Teyrnas Cambodia",
        "common": "Cambodia"
        },
        "deu": {
        "official": "Königreich Kambodscha",
        "common": "Kambodscha"
        },
        "est": {
        "official": "Kambodža Kuningriik",
        "common": "Kambodža"
        },
        "fin": {
        "official": "Kambodžan kuningaskunta",
        "common": "Kambodža"
        },
        "fra": {
        "official": "Royaume du Cambodge",
        "common": "Cambodge"
        },
        "hrv": {
        "official": "Kraljevina Kambodža",
        "common": "Kambodža"
        },
        "hun": {
        "official": "Kambodzsai Királyság",
        "common": "Kambodzsa"
        },
        "ita": {
        "official": "Regno di Cambogia",
        "common": "Cambogia"
        },
        "jpn": {
        "official": "カンボジア王国",
        "common": "カンボジア"
        },
        "kor": {
        "official": "캄보디아 왕국",
        "common": "캄보디아"
        },
        "nld": {
        "official": "Koninkrijk Cambodja",
        "common": "Cambodja"
        },
        "per": {
        "official": "پادشاهی کامبوج",
        "common": "کامبوج"
        },
        "pol": {
        "official": "Królestwo Kambodży",
        "common": "Kambodża"
        },
        "por": {
        "official": "Reino do Camboja",
        "common": "Camboja"
        },
        "rus": {
        "official": "Королевство Камбоджа",
        "common": "Камбоджа"
        },
        "slk": {
        "official": "Kamboǆské kráľovstvo",
        "common": "Kamboǆa"
        },
        "spa": {
        "official": "Reino de Camboya",
        "common": "Camboya"
        },
        "swe": {
        "official": "Konungariket Kambodja",
        "common": "Kambodja"
        },
        "tur": {
        "official": "Kamboçya Krallığı",
        "common": "Kamboçya"
        },
        "urd": {
        "official": "مملکتِ کمبوڈیا",
        "common": "کمبوڈیا"
        },
        "zho": {
        "official": "柬埔寨王国",
        "common": "柬埔寨"
        }
        },
        "latlng": [
        13,
        105
        ],
        "landlocked": false,
        "borders": [
        "LAO",
        "THA",
        "VNM"
        ],
        "area": 181035,
        "demonyms": {
        "eng": {
        "f": "Cambodian",
        "m": "Cambodian"
        },
        "fra": {
        "f": "Cambodgienne",
        "m": "Cambodgien"
        }
        },
        "flag": "🇰🇭",
        "maps": {
        "googleMaps": "https://goo.gl/maps/nztQtFSrUXZymJaW8",
        "openStreetMaps": "https://www.openstreetmap.org/relation/49898"
        },
        "population": 16718971,
        "fifa": "CAM",
        "car": {
        "signs": [
        "K"
        ],
        "side": "right"
        },
        "timezones": [
        "UTC+07:00"
        ],
        "continents": [
        "Asia"
        ],
        "flags": {
        "png": "https://flagcdn.com/w320/kh.png",
        "svg": "https://flagcdn.com/kh.svg"
        },
        "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/kh.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/kh.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
        "latlng": [
        11.55,
        104.92
        ]
        },
        "postalCode": {
        "format": "#####",
        "regex": "^(\\d{5})$"
        }
        }
];

// filtro países no independientes
const independentCountries = countries.filter((country) => country.independent === true);

// me quedo con la info necesaria
const countriesRequiredData = independentCountries.map((independentCountry) => {
    const countryFiltered = {
        name: independentCountry.name.common,
        timezones: independentCountry.timezones,
        maps: independentCountry.maps.googleMaps,
        flag: independentCountry.flags.png,
    };
    return countryFiltered;
});

const fragment = document.createDocumentFragment();

countriesRequiredData.map((countryRequiredData) => {
    const section = document.createElement("section");
    section.className = "card";
    
    section.innerHTML = `
    <article class="card-data">
    <ul>
        <li><i class="fa-solid fa-earth-americas"></i>${countryRequiredData.name}</li>
        <li id="timezones"><i class="fa-solid fa-clock"></i>${countryRequiredData.timezones}</li>
        <li><i class="fa-solid fa-map-location"></i><a href="${countryRequiredData.maps}">Google Maps Location</a></li>
    </ul>
    </article>
    <article id="container-image" class="card-image">
        <img class="flag-img" src="${countryRequiredData.flag}" alt="${countryRequiredData.name}'s flag">
    </article>
    `

    fragment.appendChild(section);
})
    
containerCards.appendChild(fragment);

