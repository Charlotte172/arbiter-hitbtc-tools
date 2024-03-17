'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Order = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _arbiterModel = require('arbiter-model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderSideMap = {
	buy: _arbiterModel.OrderSide.BUY,
	sell: _arbiterModel.OrderSide.SELL
};

var OrderStatusMap = {
	new: _arbiterModel.OrderStatus.ACTIVE,
	filled: _arbiterModel.OrderStatus.FILLED,
	canceled: _arbiterModel.OrderStatus.CANCELED
};

var OrderTypeMap = {
	limit: _arbiterModel.OrderType.LIMIT,
	market: _arbiterModel.OrderType.MARKET

	/*
 	HitBTC Order
 */
};
var Order = exports.Order = function (_DefaultOrder) {
	_inherits(Order, _DefaultOrder);

	function Order(order) {
		_classCallCheck(this, Order);

		var id = order.clientOrderId;

		var price = order.price || Number(order.tradePrice) + Number(order.tradeFee) || 0;

		var timestamp = order.updatedAt;

		var side = OrderSideMap[order.side];

		var status = OrderStatusMap[order.status] || _arbiterModel.OrderStatus.OTHER;

		var type = OrderTypeMap[order.type];

		return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, _extends({}, order, {
			id: id,
			price: price,
			timestamp: timestamp,

			side: side,
			status: status,
			type: type
		})));
	}

	return Order;
}(_arbiterModel.Order);