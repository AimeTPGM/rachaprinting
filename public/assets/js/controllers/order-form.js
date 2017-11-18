angular.module('app')
.controller('OrderFormCtrl',['$scope', '$http','$window', '$document', 
	'OrderDetailService', 'ScrollService', 'AngularService',
	'FormatFactory', 'PrintFactory', 'PrintColorFactory', 'PaperTypesFactory', 'RefinementFactory', 'DeliveryFactory', 'OrderFactory', 
	function($scope, $http, $window, $document, 
		OrderDetailService, ScrollService, AngularService,
		FormatFactory, PrintFactory, PrintColorFactory, PaperTypesFactory, RefinementFactory, DeliveryFactory, OrderFactory){

		$scope.formats = FormatFactory.getFormats()
		$scope.prints = PrintFactory.getPrints()
		$scope.printColors = PrintColorFactory.getPrintColors()
		$scope.paperTypes = PaperTypesFactory.getPaperTypes()
		$scope.refinements = RefinementFactory.getRefinements()
		$scope.deliveryDayAndDate = DeliveryFactory.getAvailableDeliveryDayAndDates()
		$scope.prices = OrderFactory.getPrices()

		var order = OrderDetailService.orderDetail

		function addActiveClassByID(id){
			AngularService.addActiveClassByID(id)
		}
		function addClassByID(id, className){
			AngularService.addClassByID(id, className)
		}

		function removeClassByID(id, className){
			AngularService.removeClassByID(id, className)
		}

		function addAttrByID(id, attr, value){
			AngularService.addAttrByID(id, attr, value)
		}

		function removeAttrByID(id, attr){
			AngularService.removeAttrByID(id, attr)
		}

		function isUndefined(element){
			if (element == undefined) return true
			return false
		}

		function isEmpty(element){
			if(element == '') return true
			return false
		}

		var pleaseSelect = { name: 'กรุณาเลือก...' }

		$scope.setMainChoice = function(index){
			if(index == 0){
				addClassByID('choice1', 'selected')
				removeClassByID('choice2', 'selected')
				order.choice = { name: 'ออกแบบเอง' }
			}
			else if(index == 1){
				addClassByID('choice2', 'selected')
				removeClassByID('choice1', 'selected')
				order.choice = { name: 'ให้ราชาปริ้นติ้งออกแบบให้' }
			}
		}

		$scope.setPrint = function(index){
			order.print = $scope.prints[index]
		}

		$scope.setPrintColor = function(index){
			order.printColor = $scope.printColors[index]
		}

		$scope.setPrice = function(i, j){
			order.price = $scope.prices[i].priceOfDate[j]
			order.deliveryDayAndDate = $scope.deliveryDayAndDate[j+1]
			ScrollService.scrollToID('orderDetail')
		}

		// Format
		$scope.selectedFormat = pleaseSelect
		$scope.showFormatList = false
		$scope.formatSize = {}
		var width = 'width'
		var height = 'height'

		$scope.showFormat = function(){
			if($scope.showFormatList == true) $scope.showFormatList = false
			else if($scope.showFormatList == false) $scope.showFormatList = true
		}

		$scope.setWidth = function(){
			setSize($scope.formatSize.width, $scope.formatSize.height)
			if(!isUndefined($scope.formatSize.width)){
				if(isEmpty($scope.formatSize.width)) addAttrByID(width, 'required', true)
				else removeAttrByID(width, 'required')
			}
		}

		$scope.setHeight = function(){
			setSize($scope.formatSize.width, $scope.formatSize.height)
			if(!isUndefined($scope.formatSize.height)){
				if(isEmpty($scope.formatSize.height)) addAttrByID(height, 'required', true)
				else removeAttrByID(height, 'required')
			}
		}

		function setSize(w, h){
			var description = w+" X "+h+" mm"
			$scope.selectedFormat = { 
				name: 'กำหนดขนาดเอง', 
				description: description, 
				formatSize: {
					width: w,
					height: h
				}
			}
			order.format = $scope.selectedFormat
		}

		$scope.setFormat = function(id, index){
			if(index == -1){
				removeAttrByID(width, 'disabled')
				removeAttrByID(height, 'disabled')
				addAttrByID(width, 'required', true)
				addAttrByID(height, 'required', true)
				$scope.formatSize = {}
				var description = $scope.formatSize.width+" x "+$scope.formatSize.height
				$scope.selectedFormat = { name: 'กำหนดขนาดเอง', description: description }
			} 
			else {
				removeAttrByID(width, 'required')
				removeAttrByID(height, 'required')
				addAttrByID(width, 'disabled', true)
				addAttrByID(height, 'disabled', true)
				$scope.selectedFormat = $scope.formats[index]
				$scope.formatSize = $scope.formats[index].formatSize
			}
			order.format = $scope.selectedFormat
			addActiveClassByID('selectedFormat')
			$scope.showFormatList = false
		}

		// Refinement
		$scope.selectedRefinement = pleaseSelect
		$scope.showRefinementList = false
		$scope.showRefinement = function(){
			if($scope.showRefinementList == true) $scope.showRefinementList = false
			else if($scope.showRefinementList == false) $scope.showRefinementList = true
		}

		$scope.setRefinement = function(id, index){
			$scope.selectedRefinement = $scope.refinements[index]
			order.refinement = $scope.refinements[index]
			addActiveClassByID('selectedRefinement')
			$scope.showRefinementList = false
		}
		
		// PaperType
		$scope.selectedPaperType = pleaseSelect
		$scope.showPaperType = true
		$scope.showPaperTypeList = false
		$scope.showSelectPaperType = function(){
			if($scope.showPaperTypeList == true) $scope.showPaperTypeList = false
			else if($scope.showPaperTypeList == false) $scope.showPaperTypeList = true
		}

		$scope.setPaperType = function(id, index){
			$scope.selectedPaperType = $scope.paperTypes[index]
			order.paperType = $scope.paperTypes[index]
			addActiveClassByID('selectedPaperType')
			$scope.showPaperTypeList = false
		}

	}
]);