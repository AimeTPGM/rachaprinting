angular.module('app')
.controller('OrderFormCtrl',['$scope', '$http','$window', '$document', 
	'OrderDetailService', 
	'FormatFactory', 'PrintFactory', 'PrintColorFactory', 'PaperTypesFactory', 'RefinementFactory', 'DeliveryFactory', 'OrderFactory',
	function($scope, $http, $window, $document, 
		OrderDetailService,
		FormatFactory, PrintFactory, PrintColorFactory, PaperTypesFactory, RefinementFactory, DeliveryFactory, OrderFactory){

		$scope.formats = FormatFactory.getFormats()
		$scope.prints = PrintFactory.getPrints()
		$scope.printColors = PrintColorFactory.getPrintColors()
		$scope.paperTypes = PaperTypesFactory.getPaperTypes()
		$scope.refinements = RefinementFactory.getRefinements()
		$scope.deliveryDayAndDate = DeliveryFactory.getAvailableDeliveryDayAndDates()
		$scope.prices = OrderFactory.getPrices()

		var order = OrderDetailService.orderDetail

		function selectAngularElementByID(id){
			return angular.element(document.querySelector('#'+id))
		}

		function addClass(element, className){
			element.addClass(className)
		}

		function removeClass(element, className){
			element.removeClass(className)
		}

		function addAttr(element, attr, value){
			element.attr(attr, value)
		}

		function removeAttr(element, attr){
			element.removeAttr(attr)
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
			var choice1Element = selectAngularElementByID('choice1')
			var choice2Element = selectAngularElementByID('choice2')
			if(index == 0){
				addClass(choice1Element, 'selected')
				removeClass(choice2Element, 'selected')
				order.choice = { name: 'ออกแบบเอง' }
			}
			else if(index == 1){
				addClass(choice2Element, 'selected')
				removeClass(choice1Element, 'selected')
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
			$document.scrollToElementAnimated(angular.element(document.getElementById('orderDetail')), 72)
		}

		// Format
		$scope.selectedFormat = pleaseSelect
		$scope.showFormatList = false
		$scope.formatSize = {}
		var widthElement = selectAngularElementByID('width')
		var heightElement = selectAngularElementByID('height')

		$scope.showFormat = function(){
			if($scope.showFormatList == true) $scope.showFormatList = false
			else if($scope.showFormatList == false) $scope.showFormatList = true
		}

		$scope.setWidth = function(){
			setSize($scope.formatSize.width, $scope.formatSize.height)
			if(!isUndefined($scope.formatSize.width)){
				if(isEmpty($scope.formatSize.width)) addAttr(widthElement, 'required', true)
				else removeAttr(widthElement, 'required')
			}
		}

		$scope.setHeight = function(){
			setSize($scope.formatSize.width, $scope.formatSize.height)
			if(!isUndefined($scope.formatSize.height)){
				if(isEmpty($scope.formatSize.height)) addAttr(heightElement, 'required', true)
				else removeAttr(heightElement, 'required')
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
				removeAttr(widthElement, 'disabled')
				removeAttr(heightElement, 'disabled')
				addAttr(widthElement, 'required', true)
				addAttr(heightElement, 'required', true)
				$scope.formatSize = {}
				var description = $scope.formatSize.width+" x "+$scope.formatSize.height
				$scope.selectedFormat = { name: 'กำหนดขนาดเอง', description: description }
			} 
			else {
				removeAttr(widthElement, 'required')
				removeAttr(heightElement, 'required')
				addAttr(widthElement, 'disabled', true)
				addAttr(heightElement, 'disabled', true)
				$scope.selectedFormat = $scope.formats[index]
				$scope.formatSize = $scope.formats[index].formatSize
				console.log($scope.formatSize)
			}
			order.format = $scope.selectedFormat
			addClass(selectAngularElementByID('selectedFormat'), 'active')
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
			addClass(selectAngularElementByID('selectedRefinement'),'active')
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
			addClass(selectAngularElementByID('selectedPaperType'), 'active')
			$scope.showPaperTypeList = false
		}

	}
]);