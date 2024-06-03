import con from '/db'

exports.facilitiesRegist = async (req, res) => {
    await insertFacilities(req);

    const facilitiesNo = await maxFacilitiesNo();
    const playNo = await maxPlayNo();
    const surroundNo = await maxSurroundNo();

    await insertFacilitiesInfo(facilitiesNo, playNo, surroundNo);


    async function insertFacilities(req) {
        con.query('INSERT INTO facilities (mart, toilet) VALUES (?, ?)', [req.body.facilitiesDetail.facilities.mart, req.body.facilitiesDetail.facilities.toilet], (err) => {
            if (err) {
                console.log(err);
            }
        })

        con.query('INSERT INTO play (playGround,singingRoom) VALUES (?, ?)', [req.body.facilitiesDetail.play.playGround, req.body.facilitiesDetail.play.singingRoom], (err) => {
            if (err) {
                console.log(err);
            }
        })

        con.query('INSERT INTO surround (mountain, river) VALUES (?, ?)', [req.body.facilitiesDetail.surround.mountain, req.body.facilitiesDetail.surround.river], (err) => {
            if (err) {
                console.log(err);
            }
        })
    }

    async function maxFacilitiesNo() {
        return new Promise((resolve, reject) => {
            con.query('SELECT MAX(facilitiesNo) AS facilitiesNo FROM facilities', (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(typeof result[0].facilitiesNo);
                    resolve(parseInt(result[0].facilitiesNo));
                }
            })
        })
    }

    async function maxPlayNo() {
        return new Promise((resolve) => {
            con.query('SELECT MAX(playNo) AS playNo FROM play', (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    resolve(parseInt(result[0].playNo));
                }
            })
        })
    }

    async function maxSurroundNo() {
        return new Promise((resolve) => {
            con.query('SELECT MAX(surroundNo) AS surroundNo FROM surround', (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    resolve(parseInt(result[0].surroundNo));
                }
            })
        })
    }

    async function insertFacilitiesInfo(facilitiesNo, playNo, surroundNo) {
        con.query('INSERT INTO facilitiesinfo (facilitiesNo, playNo, surroundNo) values (?,?,?)', [facilitiesNo, playNo, surroundNo], (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    }

}


