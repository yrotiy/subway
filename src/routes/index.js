const express = require('express');
const router = express.Router();

const { index, login, processLogin, register, processRegister, registerSuccess, mySubway, searchId, searchPw,
      sandwich, unit, salad, morning, smile, catering, 
      subwayUtilization, groupMenuUtilization, freshInfo, appUtilizationMenu} = require('../controller/index');

router.get('/', index);

// GNB
router.get('/login', login);
router.post('/login', processLogin);

router.get('/register', register);
router.post('/register', processRegister);
router.get('/registerSuccess', registerSuccess)

router.get('/mySubway', mySubway);
router.get('/searchId', searchId);
router.get('/searchPw', searchPw);

// MAIN MENU 01_menuSubway
router.get('/sandwich', sandwich);
router.get('/unit', unit);
router.get('/salad', salad);
router.get('/morning', morning);
router.get('/smile', smile);
router.get('/catering', catering);

// MAIN MENU 02_menuSubway
router.get('/subwayUtilization', subwayUtilization);
router.get('/groupMenuUtilization', groupMenuUtilization);
router.get('/freshInfo', freshInfo);
router.get('/appUtilizationMenu', appUtilizationMenu);

module.exports = router;