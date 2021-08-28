var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/banner', function (req, res, next) {
  res.render('banner');
});
router.get('/clientDairy', function (req, res, next) {
  res.render('clientDairy');
});
router.get('/eMailer', function (req, res, next) {
  res.render('eMailer');
});
router.get('/instaPost', function (req, res, next) {
  res.render('instaPost');
});
router.get('/instaStory', function (req, res, next) {
  res.render('instaStory');
});
router.get('/paperAd', function (req, res, next) {
  res.render('paperAd');
});
router.get('/videos', function (req, res, next) {
  res.render('videos');
});

module.exports = router;
