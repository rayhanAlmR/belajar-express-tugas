var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function (client) {
  router.get('/', function(req, res, next) {
    const sql = `select * from llu26`
    client.query(sql,(err,user) => {
      res.render('index', { user: user.rows });
    })
  });

  router.post('/', function(req, res, next) {
    const sql = `insert into llu26 (ID, NAMA, NOTELP) values (${req.body.id}, '${req.body.nama}', '${req.body.nit}', '${req.body.notelp}')`
    client.query(sql,(err,user) => {
      res.redirect('/');
    })
  });

  router.get('/delete/:ID', function(req, res, next) {
    const sql = `delete from llu26 where ID = ${req.params.ID}`
    client.query(sql,(err,user) => {
      res.redirect('/');
    })
  });

  router.get('/edit/:ID', function(req, res, next) {
    const sql = `select * from llu26 where ID = ${req.params.ID}`
    client.query(sql,(err,user) => {
      console.log(user.rows[0])
      res.render('edit', {user: user.rows[0]});
    })
  });

  router.post('/edit/:ID', function(req, res, next) {
    const sql = `update llu26 set ID = ${req.body.id}, NAMA = '${req.body.nama}', NIT= '${req.body.nit}', NOTELP= '${req.body.notelp}' where ID = ${req.params.ID}`
    client.query(sql,(err,user) => {
      res.redirect('/');
    })
  });
  return router 
}



