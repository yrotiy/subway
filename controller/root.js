const path = require('path');
const fs = require('fs');

const index = (req, res)=>{
      res.sendFile(path.join(__dirname, '..' ,'view', 'index.html'));
}

// GNB
const login = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'subwayGnb' ,'login.html'))
}
const register = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'subwayGnb' ,'register.html'))
}
const mySubway = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'subwayGnb' ,'mySubway.html'))
}

// MAIN MENU 01_menuSubway
const sandwich = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'menuSubway' ,'sandwich.html'))
}

const unit = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'menuSubway' ,'unit.html'))
}

const salad = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'menuSubway' ,'salad.html'))
}

const morning = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'menuSubway' ,'morning.html'))
}

const smile = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'menuSubway' ,'smile.html'))
}

const catering = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'menuSubway' ,'catering.html'))
}

// MAIN MENU 02_menuSubway
const subwayUtilization = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'utilizationSubway' ,'subwayUtilization.html'))
}

const groupMenuUtilization = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'utilizationSubway' ,'groupMenuUtilization.html'))
}

const freshInfo = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'utilizationSubway' ,'freshInfo.html'))
}

const appUtilizationMenu = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir', 'utilizationSubway' ,'appUtilizationMenu.html'))
}

module.exports = { index, login, register, mySubway,
            sandwich, unit, salad, morning, smile, catering, 
            subwayUtilization, groupMenuUtilization, freshInfo, appUtilizationMenu}