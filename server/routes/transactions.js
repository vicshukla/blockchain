var express = require('express');
var fs = require('fs');
var datafile = 'server/data/readers.json';
var router = express.Router();

/* GET all books and POST new readers */
router.route('/')
    .get(function(req, res) {
        var data = getTransactionData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getTransactionData();
        var nextID = getNextAvailableHash(data);

        var newReader = {
            transactionID: nextHash,
            name: req.body.name,
            weeklyReadingGoal: req.body.weeklyReadingGoal,
        };

        data.push(newTransaction);

        saveTransactionData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newTransaction);
    });


/* GET, PUT and DELETE individual readers */
router.route('/:hash')

    .get(function(req, res) {

        //console.log('Retrieving reader id: ' + req.params.id);

        var data = getTransactionData();

        var matchingTransaction = data.filter(function(item) {
            return item.transactionHash == req.params.hash;
        });

        if(matchingTransaction.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingTransaction[' ']);
        }
    })

    .delete(function(req, res) {

        var data = getData();

        var pos = data.map(function(e) {
            return e.transactionHash;
        }).indexOf(parseInt(req.params.hash, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        saveTransactionData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getTransactionData();

        var matchingTransaction = data.filter(function(item) {
            return item.transactionHash == req.params.id;
        });

        if(matchingTransaction.length === 0) {
            res.sendStatus(404);
        } else {

            var transactionToUpdate = matchingTransaction[0];
            transactionToUpdate.name = req.body.name;
            transactionToUpdate.ver = req.body.verl;
            transactionToUpdate.prev_block = req.body.prev_block;

            saveTransactionData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableHash(allTransaction) {

    var maxID = 0;

    allTransactions.forEach(function(element, index, array) {

        if(element.readerID > maxID) {
            maxID = element.transactionHash;
        }

    });

    return ++maxID;

}

function getTransactionData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function saveTransactionData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;
