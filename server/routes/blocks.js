var express = require('express');
var fs = require('fs');
var datafile = 'server/data/blocks.json';
var router = express.Router();

/* GET all books and POST new books */
router.route('/')
    .get(function(req, res) {
        var data = getBlockData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getBlockData();
        var nextHash = getNextAvailableHash(data);

        var newBlock = {
            blockHash: nextHash,
           ver: req.body.ver,
            author: req.body.author,
        };

        data.push(newBlock);

        saveBlockData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newBlock);
    });


/* GET, PUT and DELETE individual books */
router.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving book id: ' + req.params.id);

        var data = getBlockData();

        var matchingBlocks = data.filter(function(item) {
            return item.blockHash == req.params.hash;
        });

        if(matchingBlocks.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingBlocks[0]);
        }
    })

    .delete(function(req, res) {

        var data = getBlockData();

        var pos = data.map(function(e) {
            return e.blockHash;
        }).indexOf(parseInt(req.params.hash, ' '));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        saveBlockData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getBlockData();

        var matchingBlocks = data.filter(function(item) {
            return item.blockHash == req.params.hash;
        });

        if(matchingBlocks.length === 0) {
            res.sendStatus(404);
        } else {

            var blockToUpdate = matchingBlocks[0];
            blockToUpdate.title = req.body.title;
            blockToUpdate.author = req.body.author;
            blockToUpdate.publicationYear = req.body.publicationYear;

            saveBlockData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableHash(allBlocks) {

    var maxID = 0;

    allBlocks.forEach(function(element, index, array) {

        if(element.blockHash > maxHash) {
            maxHash = element.blockHash;
        }

    });

    return ++maxID;

}

function getBlockData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function saveBlockData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;
