const produtos = [
    {
        id: "hawks-association-17-20",
        nome: "Camisa Atlanta Hawks 17-20",
        time: "Atlanta Hawks",
        preco: 199.00,
        imagem: "camisa-association-atlanta-hawks-2017-2020.jpg"
    },
    {
        id: "hawks-association-25-26",
        nome: "Camisa Atlanta Hawks 25-26",
        time: "Atlanta Hawks",
        preco: 199.00,
        imagem: "camisa-association-atlanta-hawks-2025-2026.jpg"
    },
    {
        id: "hawks-city-21-22",
        nome: "Camisa Atlanta Hawks 20-21",
        time: "Atlanta Hawks",
        preco: 199.00,
        imagem: "camisa-city-atlanta-hawks-2021-2022.jpg"
    },
    {
        id: "hawks-icon-25-26",
        nome: "Camisa Atlanta Hawks 25-26",
        time: "Atlanta Hawks",
        preco: 199.00,
        imagem: "camisa-icon-atlanta-hawks-2025-2026.jpg"
    },
    {
        id: "hawks-statement-25-26",
        nome: "Camisa Atlanta Hawks 25-26",
        time: "Atlanta Hawks",
        preco: 199.00,
        imagem: "camisa-statement-atlanta-hawks-2025-2026.jpg"
    },

    {
        id: "celtics-alternate-06-17",
        nome: "Camisa Boston Celtics 06-17",
        time: "Boston Celtics",
        preco: 199.00,
        imagem: "camisa-alternate-boston-celtics-2006-2017.jpg"
    },
    {
        id: "celtics-association-24-27",
        nome: "Camisa Boston Celtics 24-27",
        time: "Boston Celtics",
        preco: 199.00,
        imagem: "camisa-association-boston-celtics-2024-2027.jpg"
    },
    {
        id: "celtics-city-22-23",
        nome: "Camisa Boston Celtics 22-23",
        time: "Boston Celtics",
        preco: 199.00,
        imagem: "camisa-city-boston-celtics-2022-2023.jpg"
    },
    {
        id: "celtics-icon-24-27",
        nome: "Camisa Boston Celtics 24-27",
        time: "Boston Celtics",
        preco: 199.00,
        imagem: "camisa-icon-boston-celtics-2024-2027.jpg"
    },
    {
        id: "celtics-statement-24-26",
        nome: "Camisa Boston Celtics 24-26",
        time: "Boston Celtics",
        preco: 199.00,
        imagem: "camisa-statement-boston-celtics-2024-2026.jpg"
    },

    {
        id: "nets-association-25-26",
        nome: "Camisa Brooklyn Nets 25-26",
        time: "Brooklyn Nets",
        preco: 199.00,
        imagem: "camisa-association-brooklyn-nets-2025-2026.jpg"
    },
    {
        id: "nets-city-25-26",
        nome: "Camisa Brooklyn Nets 25-26",
        time: "Brooklyn Nets",
        preco: 199.00,
        imagem: "camisa-city-brooklyn-nets-2025-2026.jpg"
    },
    {
        id: "nets-icon-25-26",
        nome: "Camisa Brooklyn Nets 25-26",
        time: "Brooklyn Nets",
        preco: 199.00,
        imagem: "camisa-icon-brooklyn-nets-2025-2026.jpg"
    },
    {
        id: "nets-statement-21-22",
        nome: "Camisa Brooklyn Nets 21-22",
        time: "Brooklyn Nets",
        preco: 199.00,
        imagem: "camisa-statement-brooklyn-nets-2021-2022.jpg"
    },
    {
        id: "nets-statement-25-26",
        nome: "Camisa Brooklyn Nets 25-26",
        time: "Brooklyn Nets",
        preco: 199.00,
        imagem: "camisa-statement-brooklyn-nets-2025-2026.jpg"
    },

    {
        id: "hornets-association-25-26",
        nome: "Camisa Charlotte Hornets 25-26",
        time: "Charlotte Hornets",
        preco: 199.00,
        imagem: "camisa-association-charlotte-hornets-2025-2026.jpg"
    },
    {
        id: "hornets-city-22-23",
        nome: "Camisa Charlotte Hornets 22-23",
        time: "Charlotte Hornets",
        preco: 199.00,
        imagem: "camisa-city-charlotte-hornets-2022-2023.jpg"
    },
    {
        id: "hornets-city-24-25",
        nome: "Camisa Charlotte Hornets 24-25",
        time: "Charlotte Hornets",
        preco: 199.00,
        imagem: "camisa-city-charlotte-hornets-2024-2025.jpg"
    },
    {
        id: "hornets-icon-25-26",
        nome: "Camisa Charlotte Hornets 25-26",
        time: "Charlotte Hornets",
        preco: 199.00,
        imagem: "camisa-icon-charlotte-hornets-2025-2026.jpg"
    },
    {
        id: "hornets-statement-25-26",
        nome: "Camisa Charlotte Hornets 25-26",
        time: "Charlotte Hornets",
        preco: 199.00,
        imagem: "camisa-statement-charlotte-hornets-2025-2026.jpg"
    },

    {
        id: "bulls-association-25-27",
        nome: "Camisa Chicago Bulls 25-27",
        time: "Chicago Bulls",
        preco: 199.00,
        imagem: "camisa-association-chicago-bulls-2025-2027.jpg"
    },
    {
        id: "bulls-home-11-17",
        nome: "Camisa Chicago Bulls 11-17",
        time: "Chicago Bulls",
        preco: 199.00,
        imagem: "camisa-casa-chicago-bulls-2011-2017.jpg"
    },
    {
        id: "bulls-icon-25-27",
        nome: "Camisa Chicago Bulls 25-27",
        time: "Chicago Bulls",
        preco: 199.00,
        imagem: "camisa-icon-chicago-bulls-2025-2027.jpg"
    },
    {
        id: "bulls-statement-25-27",
        nome: "Camisa Chicago Bulls 25-27",
        time: "Chicago Bulls",
        preco: 199.00,
        imagem: "camisa-statement-chicago-bulls-2025-2027.jpg"
    },
    {
        id: "bulls-away-89-97",
        nome: "Camisa Chicago Bulls 89-97",
        time: "Chicago Bulls",
        preco: 199.00,
        imagem: "camisa-visitante-chicago-bulls-1989-1997.jpg"
    },

    {
        id: "cavaliers-alternate-1-12-17",
        nome: "Camisa Cleveland Cavaliers 12-17",
        time: "Cleveland Cavaliers",
        preco: 199.00,
        imagem: "camisa-alternate-1-cleveland-cavaliers-2012-2017.jpg"
    },
    {
        id: "cavaliers-alternate-11-12",
        nome: "Camisa Cleveland Cavaliers 11-12",
        time: "Cleveland Cavaliers",
        preco: 199.00,
        imagem: "camisa-alternate-cleveland-cavaliers-2011-2012.jpg"
    },
    {
        id: "cavaliers-home-10-17",
        nome: "Camisa Cleveland Cavaliers 10-17",
        time: "Cleveland Cavaliers",
        preco: 199.00,
        imagem: "camisa-casa-cleveland-cavaliers-2010-2017.jpg"
    },
    {
        id: "cavaliers-classic-25-26",
        nome: "Camisa Cleveland Cavaliers 25-26",
        time: "Cleveland Cavaliers",
        preco: 199.00,
        imagem: "camisa-classic-cleveland-cavaliers-2025-2026.jpg"
    },
    {
        id: "cavaliers-icon-23-27",
        nome: "Camisa Cleveland Cavaliers 23-27",
        time: "Cleveland Cavaliers",
        preco: 199.00,
        imagem: "camisa-icon-cleveland-cavaliers-2023-2027.jpg"
    },

    {
        id: "mavericks-association-23-27",
        nome: "Camisa Dallas Mavericks 23-27",
        time: "Dallas Mavericks",
        preco: 199.00,
        imagem: "camisa-association-dallas-mavericks-2023-2027.jpg"
    },
    {
        id: "mavericks-home-06-17",
        nome: "Camisa Dallas Mavericks 06-17",
        time: "Dallas Mavericks",
        preco: 199.00,
        imagem: "camisa-casa-dallas-mavericks-2006-2017.jpg"
    },
    {
        id: "mavericks-city-22-23",
        nome: "Camisa Dallas Mavericks 22-23",
        time: "Dallas Mavericks",
        preco: 199.00,
        imagem: "camisa-city-dallas-mavericks-2022-2023.jpg"
    },
    {
        id: "mavericks-icon-23-27",
        nome: "Camisa Dallas Mavericks 23-27",
        time: "Dallas Mavericks",
        preco: 199.00,
        imagem: "camisa-icon-dallas-mavericks-2023-2027.jpg"
    },
    {
        id: "mavericks-statement-23-26",
        nome: "Camisa Dallas Mavericks 23-26",
        time: "Dallas Mavericks",
        preco: 199.00,
        imagem: "camisa-statement-dallas-mavericks-2023-2026.jpg"
    },

    {
        id: "nuggets-association-23-27",
        nome: "Camisa Denver Nuggets 23-27",
        time: "Denver Nuggets",
        preco: 199.00,
        imagem: "camisa-association-denver-nuggets-2023-2027.jpg"
    },
    {
        id: "nuggets-home-03-06",
        nome: "Camisa Denver Nuggets 03-06",
        time: "Denver Nuggets",
        preco: 199.00,
        imagem: "camisa-casa-denver-nuggets-2003-2006.jpg"
    },
    {
        id: "nuggets-city-18-19",
        nome: "Camisa Denver Nuggets 18-19",
        time: "Denver Nuggets",
        preco: 199.00,
        imagem: "camisa-city-denver-nuggets-2018-2019.jpg"
    },
    {
        id: "nuggets-icon-23-27",
        nome: "Camisa Denver Nuggets 23-27",
        time: "Denver Nuggets",
        preco: 199.00,
        imagem: "camisa-icon-denver-nuggets-2023-2027.jpg"
    },
    {
        id: "nuggets-statement-23-26",
        nome: "Camisa Denver Nuggets 23-26",
        time: "Denver Nuggets",
        preco: 199.00,
        imagem: "camisa-statement-denver-nuggets-2023-2026.jpg"
    },

    {
        id: "pistons-association-25-27",
        nome: "Camisa Detroit Pistons 25-27",
        time: "Detroit Pistons",
        preco: 199.00,
        imagem: "camisa-association-detroit-pistons-2025-2027.jpg"
    },
    {
        id: "pistons-home-97-01",
        nome: "Camisa Detroit Pistons 97-01",
        time: "Detroit Pistons",
        preco: 199.00,
        imagem: "camisa-casa-detroit-pistons-1997-2001.jpg"
    },
    {
        id: "pistons-city-25-26",
        nome: "Camisa Detroit Pistons 25-26",
        time: "Detroit Pistons",
        preco: 199.00,
        imagem: "camisa-city-detroit-pistons-2025-2026.jpg"
    },
    {
        id: "pistons-classic-22-23",
        nome: "Camisa Detroit Pistons 22-23",
        time: "Detroit Pistons",
        preco: 199.00,
        imagem: "camisa-classic-detroit-pistons-2022-2023.jpg"
    },
    {
        id: "pistons-icon-25-27",
        nome: "Camisa Detroit Pistons 25-27",
        time: "Detroit Pistons",
        preco: 199.00,
        imagem: "camisa-icon-detroit-pistons-2025-2027.jpg"
    },

    {
        id: "warriors-association-19-21",
        nome: "Camisa Golden State Warriors 19-21",
        time: "Golden State Warriors",
        preco: 199.00,
        imagem: "camisa-association-golden-state-warriors-2019-2021.jpg"
    },
    {
        id: "warriors-association-25-27",
        nome: "Camisa Golden State Warriors 25-27",
        time: "Golden State Warriors",
        preco: 199.00,
        imagem: "camisa-association-golden-state-warriors-2025-2027.jpg"
    },
    {
        id: "warriors-city-23-24",
        nome: "Camisa Golden State Warriors 23-24",
        time: "Golden State Warriors",
        preco: 199.00,
        imagem: "camisa-city-golden-state-warriors-2023-2024.jpg"
    },
    {
        id: "warriors-icon-18-19",
        nome: "Camisa Golden State Warriors 18-19",
        time: "Golden State Warriors",
        preco: 199.00,
        imagem: "camisa-icon-golden-state-warriors-2018-2019.jpg"
    },
    {
        id: "warriors-icon-25-27",
        nome: "Camisa Golden State Warriors 25-27",
        time: "Golden State Warriors",
        preco: 199.00,
        imagem: "camisa-icon-golden-state-warriors-2025-2027.jpg"
    },

    {
        id: "rockets-association-18-19",
        nome: "Camisa Houston Rockets 18-20",
        time: "Houston Rockets",
        preco: 199.00,
        imagem: "camisa-association-houston-rockets-2018-2019.jpg"
    },
    {
        id: "rockets-association-24-26",
        nome: "Camisa Houston Rockets 24-26",
        time: "Houston Rockets",
        preco: 199.00,
        imagem: "camisa-association-houston-rockets-2024-2026.jpg"
    },
    {
        id: "rockets-earned-18-19",
        nome: "Camisa Houston Rockets 18-19",
        time: "Houston Rockets",
        preco: 199.00,
        imagem: "camisa-earned-houston-rockets-2018-2019.jpg"
    },
    {
        id: "rockets-icon-24-26",
        nome: "Camisa Houston Rockets 24-26",
        time: "Houston Rockets",
        preco: 199.00,
        imagem: "camisa-icon-houston-rockets-2024-2026.jpg"
    },
    {
        id: "rockets-statement-24-26",
        nome: "Camisa Houston Rockets 24-26",
        time: "Houston Rockets",
        preco: 199.00,
        imagem: "camisa-statement-houston-rockets-2024-2026.jpg"
    },

    {
        id: "pacers-association-25-27",
        nome: "Camisa Indiana Pacers 25-27",
        time: "Indiana Pacers",
        preco: 199.00,
        imagem: "camisa-association-indiana-pacers-2025-2027.jpg"
    },
    {
        id: "pacers-home-01-05",
        nome: "Camisa Indiana Pacers 01-05",
        time: "Indiana Pacers",
        preco: 199.00,
        imagem: "camisa-casa-indiana-pacers-2001-2005.jpg"
    },
    {
        id: "pacers-city-24-25",
        nome: "Camisa Indiana Pacers 24-25",
        time: "Indiana Pacers",
        preco: 199.00,
        imagem: "camisa-city-indiana-pacers-2024-2025.jpg"
    },
    {
        id: "pacers-icon-25-27",
        nome: "Camisa Indiana Pacers 25-27",
        time: "Indiana Pacers",
        preco: 199.00,
        imagem: "camisa-icon-indiana-pacers-2025-2027.jpg"
    },
    {
        id: "pacers-statement-22-23",
        nome: "Camisa Indiana Pacers 22-23",
        time: "Indiana Pacers",
        preco: 199.00,
        imagem: "camisa-statement-indiana-pacers-2022-2023.jpg"
    },

    {
        id: "clippers-association-25-27",
        nome: "Camisa Los Angeles Clippers 25-27",
        time: "Los Angeles Clippers",
        preco: 199.00,
        imagem: "camisa-association-los-angeles-clippers-2025-2027.jpg"
    },
    {
        id: "clippers-home-10-15",
        nome: "Camisa Los Angeles Clippers 10-15",
        time: "Los Angeles Clippers",
        preco: 199.00,
        imagem: "camisa-casa-los-angeles-clippers-2010-2015.jpg"
    },
    {
        id: "clippers-icon-23-24",
        nome: "Camisa Los Angeles Clippers 23-24",
        time: "Los Angeles Clippers",
        preco: 199.00,
        imagem: "camisa-icon-los-angeles-clippers-2023-2024.jpg"
    },
    {
        id: "clippers-icon-24-27",
        nome: "Camisa Los Angeles Clippers 24-27",
        time: "Los Angeles Clippers",
        preco: 199.00,
        imagem: "camisa-icon-los-angeles-clippers-2024-2027.jpg"
    },
    {
        id: "clippers-statement-22-23",
        nome: "Camisa Los Angeles Clippers 22-23",
        time: "Los Angeles Clippers",
        preco: 199.00,
        imagem: "camisa-statement-los-angeles-clippers-2022-2023.jpg"
    },

    {
        id: "lakers-association-25-27",
        nome: "Camisa Los Angeles Lakers 25-27",
        time: "Los Angeles Lakers",
        preco: 199.00,
        imagem: "camisa-association-los-angeles-lakers-2025-2027.jpg"
    },
    {
        id: "lakers-home-08-17",
        nome: "Camisa Los Angeles Lakers 08-17",
        time: "Los Angeles Lakers",
        preco: 199.00,
        imagem: "camisa-casa-los-angeles-lakers-2008-2017.jpg"
    },
    {
        id: "lakers-special-23-24",
        nome: "Camisa Los Angeles Lakers 23-24",
        time: "Los Angeles Lakers",
        preco: 199.00,
        imagem: "camisa-especial-los-angeles-lakers-2023-2024.jpg"
    },
    {
        id: "lakers-icon-25-27",
        nome: "Camisa Los Angeles Lakers 25-27",
        time: "Los Angeles Lakers",
        preco: 199.00,
        imagem: "camisa-icon-los-angeles-lakers-2025-2027.jpg"
    },
    {
        id: "lakers-statement-24-25",
        nome: "Camisa Los Angeles Lakers 24-25",
        time: "Los Angeles Lakers",
        preco: 199.00,
        imagem: "camisa-statement-los-angeles-lakers-2024-2025.jpg"
    },
    {
        id: "grizzlies-association-24-26",
        nome: "Camisa Memphis Grizzlies 24-26",
        time: "Memphis Grizzlies",
        preco: 199.00,
        imagem: "camisa-association-memphis-grizzlies-2024-2026.jpg"
    },
    {
        id: "grizzlies-classic-19-20",
        nome: "Camisa Memphis Grizzlies 19-20",
        time: "Memphis Grizzlies",
        preco: 199.00,
        imagem: "camisa-classic-memphis-grizzlies-2019-2020.jpg"
    },
    {
        id: "grizzlies-classic-25-26",
        nome: "Camisa Memphis Grizzlies 25-26",
        time: "Memphis Grizzlies",
        preco: 199.00,
        imagem: "camisa-classic-memphis-grizzlies-2025-2026.jpg"
    },
    {
        id: "grizzlies-icon-24-26",
        nome: "Camisa Memphis Grizzlies 24-26",
        time: "Memphis Grizzlies",
        preco: 199.00,
        imagem: "camisa-icon-memphis-grizzlies-2024-2026.jpg"
    },
    {
        id: "grizzlies-statement-24-26",
        nome: "Camisa Memphis Grizzlies 24-26",
        time: "Memphis Grizzlies",
        preco: 199.00,
        imagem: "camisa-statement-memphis-grizzlies-2024-2026.jpg"
    },

    {
        id: "heat-association-2-24-25",
        nome: "Camisa Miami Heat 24-25",
        time: "Miami Heat",
        preco: 199.00,
        imagem: "camisa-association-2-miami-heat-2024-2025.jpg"
    },
    {
        id: "heat-association-24-27",
        nome: "Camisa Miami Heat 24-27",
        time: "Miami Heat",
        preco: 199.00,
        imagem: "camisa-association-miami-heat-2024-2027.jpg"
    },
    {
        id: "heat-home-08-17",
        nome: "Camisa Miami Heat 08-17",
        time: "Miami Heat",
        preco: 199.00,
        imagem: "camisa-casa-miami-heat-2008-2017.jpg"
    },
    {
        id: "heat-city-25-26",
        nome: "Camisa Miami Heat 25-26",
        time: "Miami Heat",
        preco: 199.00,
        imagem: "camisa-city-miami-heat-2025-2026.jpg"
    },
    {
        id: "heat-statement-24-26",
        nome: "Camisa Miami Heat 24-26",
        time: "Miami Heat",
        preco: 199.00,
        imagem: "camisa-statement-miami-heat-2024-2026.jpg"
    },

    {
        id: "bucks-association-17-20",
        nome: "Camisa Milwaukee Bucks 17-20",
        time: "Milwaukee Bucks",
        preco: 199.00,
        imagem: "camisa-association-milwaukee-bucks-2017-2020.jpg"
    },
    {
        id: "bucks-association-23-27",
        nome: "Camisa Milwaukee Bucks 23-27",
        time: "Milwaukee Bucks",
        preco: 199.00,
        imagem: "camisa-association-milwaukee-bucks-2023-2027.jpg"
    },
    {
        id: "bucks-home-10-15",
        nome: "Camisa Milwaukee Bucks 10-15",
        time: "Milwaukee Bucks",
        preco: 199.00,
        imagem: "camisa-casa-milwaukee-bucks-2010-2015.jpg"
    },
    {
        id: "bucks-icon-20-21",
        nome: "Camisa Milwaukee Bucks 20-21",
        time: "Milwaukee Bucks",
        preco: 199.00,
        imagem: "camisa-icon-milwaukee-bucks-2020-2021.jpg"
    },
    {
        id: "bucks-icon-23-27",
        nome: "Camisa Milwaukee Bucks 23-27",
        time: "Milwaukee Bucks",
        preco: 199.00,
        imagem: "camisa-icon-milwaukee-bucks-2023-2027.jpg"
    },

    {
        id: "timberwolves-association-26-27",
        nome: "Camisa Minnesota Timberwolves 26-27",
        time: "Minnesota Timberwolves",
        preco: 199.00,
        imagem: "camisa-association-minnesota-timberwolves-2026-2027.jpg"
    },
    {
        id: "timberwolves-home-10-17",
        nome: "Camisa Minnesota Timberwolves 10-17",
        time: "Minnesota Timberwolves",
        preco: 199.00,
        imagem: "camisa-casa-minnesota-timberwolves-2010-2017.jpg"
    },
    {
        id: "timberwolves-classic-25-26",
        nome: "Camisa Minnesota Timberwolves 25-26",
        time: "Minnesota Timberwolves",
        preco: 199.00,
        imagem: "camisa-classic-minnesota-timberwolves-2025-2026.jpg"
    },
    {
        id: "timberwolves-icon-26-27",
        nome: "Camisa Minnesota Timberwolves 26-27",
        time: "Minnesota Timberwolves",
        preco: 199.00,
        imagem: "camisa-icon-minnesota-timberwolves-2026-2027.jpg"
    },
    {
        id: "timberwolves-away-06-08",
        nome: "Camisa Minnesota Timberwolves 06-08",
        time: "Minnesota Timberwolves",
        preco: 199.00,
        imagem: "camisa-visitante-minnesota-timberwolves-2006-2008.jpg"
    },

    {
        id: "pelicans-association-25-26",
        nome: "Camisa New Orleans Pelicans 25-26",
        time: "New Orleans Pelicans",
        preco: 199.00,
        imagem: "camisa-association-new-orleans-pelicans-2025-2026.jpg"
    },
    {
        id: "pelicans-city-18-20",
        nome: "Camisa New Orleans Pelicans 18-20",
        time: "New Orleans Pelicans",
        preco: 199.00,
        imagem: "camisa-city-new-orleans-pelicans-2018-2020.jpg"
    },
    {
        id: "pelicans-icon-24-26",
        nome: "Camisa New Orleans Pelicans 24-26",
        time: "New Orleans Pelicans",
        preco: 199.00,
        imagem: "camisa-icon-new-orleans-pelicans-2024-2026.jpg"
    },
    {
        id: "pelicans-statement-22-23",
        nome: "Camisa New Orleans Pelicans 22-23",
        time: "New Orleans Pelicans",
        preco: 199.00,
        imagem: "camisa-statement-new-orleans-pelicans-2022-2023.jpg"
    },
    {
        id: "pelicans-away-10-13",
        nome: "Camisa New Orleans Pelicans 10-13",
        time: "New Orleans Pelicans",
        preco: 199.00,
        imagem: "camisa-visitante-new-orleans-hornets-2010-2013.jpg"
    },

    {
        id: "knicks-association-24-27",
        nome: "Camisa New York Knicks 24-27",
        time: "New York Knicks",
        preco: 199.00,
        imagem: "camisa-association-new-york-knicks-2024-2027.jpg"
    },
    {
        id: "knicks-city-18-20",
        nome: "Camisa New York Knicks 18-20",
        time: "New York Knicks",
        preco: 199.00,
        imagem: "camisa-city-new-york-knicks-2018-2020.jpg"
    },
    {
        id: "knicks-icon-24-27",
        nome: "Camisa New York Knicks 24-27",
        time: "New York Knicks",
        preco: 199.00,
        imagem: "camisa-icon-new-york-knicks-2024-2027.jpg"
    },
    {
        id: "knicks-statement-24-25",
        nome: "Camisa New York Knicks 24-25",
        time: "New York Knicks",
        preco: 199.00,
        imagem: "camisa-statement-new-york-knicks-2024-2025.jpg"
    },
    {
        id: "knicks-away-10-12",
        nome: "Camisa New York Knicks 10-12",
        time: "New York Knicks",
        preco: 199.00,
        imagem: "camisa-visitante-new-york-knicks-2010-2012.jpg"
    },

    {
        id: "thunder-association-21-22",
        nome: "Camisa Oklahoma City Thunder 21-22",
        time: "Oklahoma City Thunder",
        preco: 199.00,
        imagem: "camisa-association-oklahoma-city-thunder-2021-2022.jpg"
    },
    {
        id: "thunder-home-10-17",
        nome: "Camisa Oklahoma City Thunder 10-17",
        time: "Oklahoma City Thunder",
        preco: 199.00,
        imagem: "camisa-casa-oklahoma-city-thunder-2010-2017.jpg"
    },
    {
        id: "thunder-city-18-20",
        nome: "Camisa Oklahoma City Thunder 18-20",
        time: "Oklahoma City Thunder",
        preco: 199.00,
        imagem: "camisa-city-oklahoma-city-thunder-2018-2019.jpg"
    },
    {
        id: "thunder-icon-21-22",
        nome: "Camisa Oklahoma City Thunder 21-22",
        time: "Oklahoma City Thunder",
        preco: 199.00,
        imagem: "camisa-icon-oklahoma-city-thunder-2021-2022.jpg"
    },
    {
        id: "thunder-icon-23-27",
        nome: "Camisa Oklahoma City Thunder 23-27",
        time: "Oklahoma City Thunder",
        preco: 199.00,
        imagem: "camisa-icon-oklahoma-city-thunder-2023-2027.jpg"
    },

    {
        id: "magic-association-25-27",
        nome: "Camisa Orlando Magic 25-27",
        time: "Orlando Magic",
        preco: 199.00,
        imagem: "camisa-association-orlando-magic-2025-2027.jpg"
    },
    {
        id: "magic-home-08-17",
        nome: "Camisa Orlando Magic 08-17",
        time: "Orlando Magic",
        preco: 199.00,
        imagem: "camisa-casa-orlando-magic-2008-2017.jpg"
    },
    {
        id: "magic-icon-23-24",
        nome: "Camisa Orlando Magic 23-24",
        time: "Orlando Magic",
        preco: 199.00,
        imagem: "camisa-icon-orlando-magic-2023-2024.jpg"
    },
    {
        id: "magic-icon-25-27",
        nome: "Camisa Orlando Magic 25-27",
        time: "Orlando Magic",
        preco: 199.00,
        imagem: "camisa-icon-orlando-magic-2025-2027.jpg"
    },
    {
        id: "magic-away-08-17",
        nome: "Camisa Orlando Magic 08-17",
        time: "Orlando Magic",
        preco: 199.00,
        imagem: "camisa-visitante-orlando-magic-2008-2017.jpg"
    },

    {
        id: "76ers-association-23-27",
        nome: "Camisa Philadelphia 76ers 23-27",
        time: "Philadelphia 76ers",
        preco: 199.00,
        imagem: "camisa-association-philadelphia-76ers-2023-2027.jpg"
    },
    {
        id: "76ers-home-97-00",
        nome: "Camisa Philadelphia 76ers 97-00",
        time: "Philadelphia 76ers",
        preco: 199.00,
        imagem: "camisa-casa-philadelphia-76ers-1997-2000.jpg"
    },
    {
        id: "76ers-classic-25-26",
        nome: "Camisa Philadelphia 76ers 25-26",
        time: "Philadelphia 76ers",
        preco: 199.00,
        imagem: "camisa-classic-philadelphia-76ers-2025-2026.jpg"
    },
    {
        id: "76ers-icon-23-27",
        nome: "Camisa Philadelphia 76ers 23-27",
        time: "Philadelphia 76ers",
        preco: 199.00,
        imagem: "camisa-icon-philadelphia-76ers-2023-2027.jpg"
    },
    {
        id: "76ers-statement-23-26",
        nome: "Camisa Philadelphia 76ers 23-26",
        time: "Philadelphia 76ers",
        preco: 199.00,
        imagem: "camisa-statement-philadelphia-76ers-2023-2026.jpg"
    },

    {
        id: "suns-association-25-27",
        nome: "Camisa Phoenix Suns 25-27",
        time: "Phoenix Suns",
        preco: 199.00,
        imagem: "camisa-association-phoenix-suns-2025-2027.jpg"
    },
    {
        id: "suns-city-25-26",
        nome: "Camisa Phoenix Suns 25-26",
        time: "Phoenix Suns",
        preco: 199.00,
        imagem: "camisa-city-phoenix-suns-2025-2026.jpg"
    },
    {
        id: "suns-icon-25-27",
        nome: "Camisa Phoenix Suns 25-27",
        time: "Phoenix Suns",
        preco: 199.00,
        imagem: "camisa-icon-phoenix-suns-2025-2027.jpg"
    },
    {
        id: "suns-statement-21-22",
        nome: "Camisa Phoenix Suns 21-22",
        time: "Phoenix Suns",
        preco: 199.00,
        imagem: "camisa-statement-phoenix-suns-2021-2022.jpg"
    },
    {
        id: "suns-statement-24-25",
        nome: "Camisa Phoenix Suns 24-25",
        time: "Phoenix Suns",
        preco: 199.00,
        imagem: "camisa-statement-phoenix-suns-2024-2025.jpg"
    },

    {
        id: "blazers-association-25-27",
        nome: "Camisa Portland Trail Blazers 25-27",
        time: "Portland Trail Blazers",
        preco: 199.00,
        imagem: "camisa-association-portland-trail-blazers-2025-2027.jpg"
    },
    {
        id: "blazers-earned-18-19",
        nome: "Camisa Portland Trail Blazers 18-19",
        time: "Portland Trail Blazers",
        preco: 199.00,
        imagem: "camisa-earned-portland-trail-blazers-2018-2019.jpg"
    },
    {
        id: "blazers-icon-18-21",
        nome: "Camisa Portland Trail Blazers 18-21",
        time: "Portland Trail Blazers",
        preco: 199.00,
        imagem: "camisa-icon-portland-trail-blazers-2018-2021.jpg"
    },
    {
        id: "blazers-icon-25-27",
        nome: "Camisa Portland Trail Blazers 25-27",
        time: "Portland Trail Blazers",
        preco: 199.00,
        imagem: "camisa-icon-portland-trail-blazers-2025-2027.jpg"
    },
    {
        id: "blazers-statement-25-26",
        nome: "Camisa Portland Trail Blazers 25-26",
        time: "Portland Trail Blazers",
        preco: 199.00,
        imagem: "camisa-statement-portland-trail-blazers-2025-2026.jpg"
    },

    {
        id: "kings-association-17-20",
        nome: "Camisa Sacramento Kings 17-20",
        time: "Sacramento Kings",
        preco: 199.00,
        imagem: "camisa-association-sacramento-kings-2017-2020.jpg"
    },
    {
        id: "kings-association-25-26",
        nome: "Camisa Sacramento Kings 25-26",
        time: "Sacramento Kings",
        preco: 199.00,
        imagem: "camisa-association-sacramento-kings-2025-2026.jpg"
    },
    {
        id: "kings-classic-24-25",
        nome: "Camisa Sacramento Kings 24-25",
        time: "Sacramento Kings",
        preco: 199.00,
        imagem: "camisa-classic-sacramento-kings-2024-2025.jpg"
    },
    {
        id: "kings-icon-25-26",
        nome: "Camisa Sacramento Kings 25-26",
        time: "Sacramento Kings",
        preco: 199.00,
        imagem: "camisa-icon-sacramento-kings-2025-2026.jpg"
    },
    {
        id: "kings-away-09-10",
        nome: "Camisa Sacramento Kings 09-10",
        time: "Sacramento Kings",
        preco: 199.00,
        imagem: "camisa-visitante-sacramento-kings-2009-2010.jpg"
    },

    {
        id: "spurs-association-25-27",
        nome: "Camisa San Antonio Spurs 25-27",
        time: "San Antonio Spurs",
        preco: 199.00,
        imagem: "camisa-association-san-antonio-spurs-2025-2027.jpg"
    },
    {
        id: "spurs-city-23-24",
        nome: "Camisa San Antonio Spurs 23-24",
        time: "San Antonio Spurs",
        preco: 199.00,
        imagem: "camisa-city-san-antonio-spurs-2023-2024.jpg"
    },
    {
        id: "spurs-classic-22-23",
        nome: "Camisa San Antonio Spurs 22-23",
        time: "San Antonio Spurs",
        preco: 199.00,
        imagem: "camisa-classic-san-antonio-spurs-2022-2023.jpg"
    },
    {
        id: "spurs-icon-25-27",
        nome: "Camisa San Antonio Spurs 25-27",
        time: "San Antonio Spurs",
        preco: 199.00,
        imagem: "camisa-icon-san-antonio-spurs-2025-2027.jpg"
    },
    {
        id: "spurs-away-06-10",
        nome: "Camisa San Antonio Spurs 06-10",
        time: "San Antonio Spurs",
        preco: 199.00,
        imagem: "camisa-visitante-san-antonio-spurs-2006-2010.jpg"
    },

    {
        id: "raptors-association-23-26",
        nome: "Camisa Toronto Raptors 23-26",
        time: "Toronto Raptors",
        preco: 199.00,
        imagem: "camisa-association-toronto-raptors-2023-2026.jpg"
    },
    {
        id: "raptors-classic-19-20",
        nome: "Camisa Toronto Raptors 19-20",
        time: "Toronto Raptors",
        preco: 199.00,
        imagem: "camisa-classic-toronto-raptors-2019-2020.jpg"
    },
    {
        id: "raptors-icon-19-20",
        nome: "Camisa Toronto Raptors 19-20",
        time: "Toronto Raptors",
        preco: 199.00,
        imagem: "camisa-icon-toronto-raptors-2019-2020.jpg"
    },
    {
        id: "raptors-icon-23-26",
        nome: "Camisa Toronto Raptors 23-26",
        time: "Toronto Raptors",
        preco: 199.00,
        imagem: "camisa-icon-toronto-raptors-2023-2026.jpg"
    },
    {
        id: "raptors-statement-23-26",
        nome: "Camisa Toronto Raptors 23-26",
        time: "Toronto Raptors",
        preco: 199.00,
        imagem: "camisa-statement-toronto-raptors-2023-2026.jpg"
    },

    {
        id: "jazz-association-25-27",
        nome: "Camisa Utah Jazz 25-27",
        time: "Utah Jazz",
        preco: 199.00,
        imagem: "camisa-association-utah-jazz-2025-2027.jpg"
    },
    {
        id: "jazz-city-21-22",
        nome: "Camisa Utah Jazz 21-22",
        time: "Utah Jazz",
        preco: 199.00,
        imagem: "camisa-city-utah-jazz-2021-2022.jpg"
    },
    {
        id: "jazz-city-24-25",
        nome: "Camisa Utah Jazz 24-25",
        time: "Utah Jazz",
        preco: 199.00,
        imagem: "camisa-city-utah-jazz-2024-2025.jpg"
    },
    {
        id: "jazz-icon-21-22",
        nome: "Camisa Utah Jazz 21-22",
        time: "Utah Jazz",
        preco: 199.00,
        imagem: "camisa-icon-utah-jazz-2021-2022.jpg"
    },
    {
        id: "jazz-icon-25-27",
        nome: "Camisa Utah Jazz 25-27",
        time: "Utah Jazz",
        preco: 199.00,
        imagem: "camisa-icon-utah-jazz-2025-2027.jpg"
    },

    {
        id: "wizards-association-23-27",
        nome: "Camisa Washington Wizards 23-27",
        time: "Washington Wizards",
        preco: 199.00,
        imagem: "camisa-association-washington-wizards-2023-2027.jpg"
    },
    {
        id: "wizards-city-22-23",
        nome: "Camisa Washington Wizards 22-23",
        time: "Washington Wizards",
        preco: 199.00,
        imagem: "camisa-city-washington-wizards-2022-2023.jpg"
    },
    {
        id: "wizards-city-24-25",
        nome: "Camisa Washington Wizards 24-25",
        time: "Washington Wizards",
        preco: 199.00,
        imagem: "camisa-city-washington-wizards-2024-2025.jpg"
    },
    {
        id: "wizards-icon-17-18",
        nome: "Camisa Washington Wizards 17-18",
        time: "Washington Wizards",
        preco: 199.00,
        imagem: "camisa-icon-washington-wizards-2017-2018.jpg"
    },
    {
        id: "wizards-icon-23-27",
        nome: "Camisa Washington Wizards 23-27",
        time: "Washington Wizards",
        preco: 199.00,
        imagem: "camisa-icon-washington-wizards-2023-2027.jpg"
    },
];

const listaProdutos = document.getElementById("lista-produtos");


function mostrarProdutos(lista) {

    listaProdutos.innerHTML = "";

    lista.forEach(produto => {

        const article = document.createElement("article");

        article.classList.add("produto");

        article.dataset.id = produto.id;
        article.dataset.time = produto.time;
        article.dataset.preco = produto.preco;

        article.innerHTML = `

            <div class="imagem-produto">

                <a href="./camisas.html?id=${produto.id}">

                    <img
                        src="./img/${produto.time}/${produto.imagem}"
                        alt="${produto.nome}">

                </a>

            </div>


            <div class="info-produtos">

                <h2 class="produto-nome">
                    ${produto.nome}
                </h2>

                <p class="produto-preco">
                    Preço R$ ${produto.preco.toFixed(2).replace(".", ",")}
                </p>

                <p class="produto-time">
                    ${produto.time}
                </p>

            </div>


            <div class="acao-compra">

                <label for="tamanho-${produto.id}">
                    Escolha um tamanho
                </label>

                <select
                    name="tamanho"
                    id="tamanho-${produto.id}"
                    class="produto-tamanho">

                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                    <option value="2GG">2GG</option>

                </select>


                <button
                    type="button"
                    class="btn-comprar"
                    data-acao="adicionar-carrinho"
                    data-id="${produto.id}">

                    Adicionar ao carrinho

                </button>

            </div>

        `;

        listaProdutos.appendChild(article);

    });
}

const botoesFiltro = document.querySelectorAll("[data-filtro]");


botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        const filtro = botao.dataset.filtro;


        if (filtro === "todos") {

            mostrarProdutos(produtos);

        } else {

            const produtosFiltrados = produtos.filter(produto =>
                produto.time === filtro
            );

            mostrarProdutos(produtosFiltrados);

        }

    });

});


// Mostra todos os produtos ao abrir a página
mostrarProdutos(produtos);


// Adicionar ao carrinho

document.addEventListener("click", function (evento) {

    if (!evento.target.classList.contains("btn-comprar")) {
        return;
    }

    const botao = evento.target;

    const idProduto = botao.dataset.id;

    const produto = produtos.find(produto => produto.id === idProduto);

    if (!produto) {
        console.error("Produto não encontrado.");
        return;
    }

    const article = botao.closest(".produto");

    const selectTamanho = article.querySelector(".produto-tamanho");

    const tamanho = selectTamanho.value;

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(item =>
        item.id === produto.id && item.tamanho === tamanho
    );

    if (produtoExistente) {

        produtoExistente.quantidade = Math.min(
            produtoExistente.quantidade + 1,
            10
        );

    } else {

        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            time: produto.time,
            preco: produto.preco,
            imagem: produto.imagem,
            tamanho: tamanho,
            quantidade: 1
        });

    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");

});