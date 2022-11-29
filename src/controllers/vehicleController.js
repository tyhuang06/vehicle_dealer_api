import asyncHandler from 'express-async-handler';
import connection from '../config/db.js';

// @desc    Get all vehicles
// @route   Get /vehicle
// @access  Private
const getAllVehicles = asyncHandler(async (req, res) => {
    connection.query(
        `select * from vehicle`, (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get vehicle by type
// @route   Get /vehicle/:type
// @access  Private
const getVehicleByType = asyncHandler(async (req, res) => {
    const type = req.params.id;
    connection.query(
        `select * from vehicle where type = '${type}'`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get vehicle by brand
// @route   Get /vehicle/:brand
// @access  Private
const getVehicleByBrand = asyncHandler(async (req, res) => {
    const brand = req.params.id;
    connection.query(
        `select * from vehicle where brand = '${brand}' `,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get vehicle by id
// @route   Get /vehicle/:id
// @access  Private
const getVehicleById = asyncHandler(async (req, res) => {
    const vin = req.params.id;
    connection.query(
        `select * from vehicle where vin = '${vin}'`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get all electric vehicles
// @route   Get /vehicle/electric
// @access  Private
const getElectricVehicle = asyncHandler(async (req, res) => {
    connection.query(
        `select * from vehicle where is_electric_car = 1`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get all new vehicles
// @route   Get /vehicle/newVehicle
// @access  Private
const getNewVehicle = asyncHandler(async (req, res) => {
    connection.query(
        `select * from vehicle where new_or_used = 1`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get all used vehicles
// @route   Get /vehicle/usedVehicle
// @access  Private
const getUsedVehicle = asyncHandler(async (req, res) => {
    connection.query(
        `select * from vehicle where new_or_used = 0`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get all vehicles after specific year
// @route   Get /vehicle/year
// @access  Private
const getVehicleAfterYear = asyncHandler(async (req, res) => {
    const {year} = req.body;
    connection.query(
        `select * from vehicle where year >= '${year}'`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get vehicle by color
// @route   Get /vehicle/color
// @access  Private
const getVehicleByColor = asyncHandler(async (req, res) => {
    const {color} = req.body;
    connection.query(
        `select * from vehicle where color = '${color}`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
});

// @desc    Get vehicle by price, bewteen minprice and maxprice
// @route   Get /vehicle/price
// @access  Private
const getVehicleByPrice = asyncHandler(async (req, res) => {
    const {minprice, maxprice} = req.body;
    connection.query(
        `select * from vehicle where price >= '${minprice}'
         and price >= '${maxprice}'`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );

});

export { getAllVehicles, getVehicleByType, getVehicleByBrand, getVehicleById,
    getElectricVehicle, getNewVehicle, getUsedVehicle, getVehicleAfterYear, 
    getVehicleByColor, getVehicleByPrice };

