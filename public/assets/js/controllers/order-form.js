angular.module('app')
  .controller('OrderFormCtrl', ['$scope', '$http', '$window', '$document', '$routeParams', '$timeout',
    'LanguageConfig', 'Upload',
    'OrderDetailService', 'ScrollService', 'AngularService',
    'FormatFactory', 'PrintFactory', 'PrintColorFactory', 'PaperTypesFactory', 'RefinementFactory', 'DeliveryFactory', 'OrderFactory',
    function($scope, $http, $window, $document, $routeParams, $timeout,
      LanguageConfig, Upload,
      OrderDetailService, ScrollService, AngularService,
      FormatFactory, PrintFactory, PrintColorFactory, PaperTypesFactory, RefinementFactory, DeliveryFactory, OrderFactory) {

      var languagePack = LanguageConfig.setLanguage($routeParams.lang)
   	 	$scope.webContent = languagePack.orderForm

      $scope.templates = {
        step1: '/views/order-form-step1.html',
        step2: '/views/order-form-step2.html'
      }
   	 	
      $scope.filename = 'คลิ๊กเพื่ออัพโหลดรูปภาพ'
      $scope.formats = FormatFactory.getFormats()
      $scope.prints = PrintFactory.getPrints()
      $scope.printColors = PrintColorFactory.getPrintColors()
      $scope.paperTypes = PaperTypesFactory.getPaperTypes()
      $scope.refinements = RefinementFactory.getRefinements()
      $scope.deliveryDayAndDate = DeliveryFactory.getAvailableDeliveryDayAndDates()
      $scope.prices = OrderFactory.getPrices()
      $scope.bookBindings = [
        {
          id: 1,
          name: 'Wire-o-binding',
          description: 'wiring'
        }
      ]
      $scope.pinchings = [
        {
          id: 1,
          name: 'เจาะรูมุมบนซ้าย',
          description: 'เจาะรูหนึ่งรู ตรงมุมบนซ้ายของป้ายห้อย'
        },
        {
          id: 2,
          name: 'เจาะรูมุมบนตรงกลาง',
          description: 'เจาะรูหนึ่งรู ด้านบนตรงกลางของป้ายห้อย'
        },
        {
          id: 3,
          name: 'เจาะรูมุมบนขวา',
          description: 'เจาะรูหนึ่งรู ตรงมุมบนขวาของป้ายห้อย'
        }
      ]
      $scope.decorations = [
        {
          id: 1,
          name: 'พับขอบและเจาะตาไก่',
          description: 'พับขอบและเจาะตาไก่ เพิ่มความทนทาน'
        }
      ]
      $scope.stringRopes = [
        {
          id: 1,
          name: 'ไม่มีเชือก',
          description: 'ไม่มีเชือกสำหรับป้ายห้อย (ในกรณีที่คุณมีเชือกอยู่แล้ว)'
        },
        {
          id: 2,
          name: 'มีเชือก แต่ยังไม่ร้อยเชือก',
          description: 'มีเชือกสำหรับป้ายห้อย ให้คุณสามารถไปร้อยได้เอง'
        },
        {
          id: 3,
          name: 'ร้อยเชือกเรียบร้อย',
          description: 'มีเชือกสำหรับคล้องป้ายชื่อและร้อยเชือกให้เรียบร้อยสวยงามจากโรงพิมพ์'
        }
      ]

      $scope.stickerShapes = [
        {
          id: 1,
          name: 'สี่เหลี่ยม',
          description: 'พิมพ์สติ๊กเกอร์สี่เหลี่ยม'
        },
        {
          id: 2,
          name: 'วงกลม/วงรี',
          description: 'พิมพ์สติ๊กเกอร์แบบวงกลมหรือวงรี'
        },
        {
          id: 3,
          name: 'ไดคัท',
          description: 'พิมพ์สติ๊กเกอร์เป็นรูปร่างตามที่คุณต้องการ'
        }
      ]

      $scope.stickerCuttings = [
        {
          id: 1,
          name: 'ติดไว้บนกระดาษ A4/A3',
          description: 'ติดไว้บนกระดาษ A3 หรือ A4'
        },
        {
          id: 2,
          name: 'ตัดออกเป็นชิ้นๆ',
          description: 'ตัดสติ๊กออกเป็นชิ้น'
        },
        {
          id: 3,
          name: 'ตัดตามรูปร่าง',
          description: 'ตัดสติ๊กเกอร์ตามรูปร่าง'
        }
      ]

      var order = OrderDetailService.orderDetail

      function addActiveClassByID(id) {
        AngularService.addActiveClassByID(id)
      }

      function addClassByID(id, className) {
        AngularService.addClassByID(id, className)
      }

      function removeClassByID(id, className) {
        AngularService.removeClassByID(id, className)
      }

      function addAttrByID(id, attr, value) {
        AngularService.addAttrByID(id, attr, value)
      }

      function removeAttrByID(id, attr) {
        AngularService.removeAttrByID(id, attr)
      }

      function isUndefined(element) {
        if (element == undefined) return true
        return false
      }

      function isEmpty(element) {
        if (element == '') return true
        return false
      }

      var pleaseSelect = $scope.webContent.languagepack_orderform_000001
      $scope.showFilePath = function(file){
        order.file = file.value
        $scope.filename = file.value
        console.log($scope.filename)
        $timeout(function() {
            $scope.$apply();
        }, 1000)
      }

      $scope.setMainChoice = function(index) {
        if (index == 0) {
          addClassByID('choice1', 'selected')
          removeClassByID('choice2', 'selected')
          order.choice = {
            name: $scope.webContent.languagepack_orderform_000002
          }

        } else if (index == 1) {
          addClassByID('choice2', 'selected')
          removeClassByID('choice1', 'selected')
          order.choice = {
            name: $scope.webContent.languagepack_orderform_000003
          }
        }
      }

      $scope.setPrint = function(index) {
        order.print = $scope.prints[index]
      }

      $scope.setPrintColor = function(index) {
        order.printColor = $scope.printColors[index]
      }

      $scope.setPrice = function(i, j) {
        order.price = $scope.prices[i].priceOfDate[j]
        order.deliveryDayAndDate = $scope.deliveryDayAndDate[j + 1]
        ScrollService.scrollToID('orderDetail')
      }

      // Format
      $scope.selectedFormat = pleaseSelect
      $scope.showFormatList = false
      $scope.formatSize = {}
      var width = 'width'
      var height = 'height'

      $scope.showFormat = function() {
        if ($scope.showFormatList == true) $scope.showFormatList = false
        else if ($scope.showFormatList == false) $scope.showFormatList = true
      }

      $scope.setWidth = function() {
        setSize($scope.formatSize.width, $scope.formatSize.height)
        if (!isUndefined($scope.formatSize.width)) {
          if (isEmpty($scope.formatSize.width)) addAttrByID(width, 'required', true)
          else removeAttrByID(width, 'required')
        }
      }

      $scope.setHeight = function() {
        setSize($scope.formatSize.width, $scope.formatSize.height)
        if (!isUndefined($scope.formatSize.height)) {
          if (isEmpty($scope.formatSize.height)) addAttrByID(height, 'required', true)
          else removeAttrByID(height, 'required')
        }
      }

      function setSize(w, h) {
        var description = w + " X " + h + " mm"
        $scope.selectedFormat = {
          name: $scope.webContent.languagepack_orderform_000004,
          description: description,
          formatSize: {
            width: w,
            height: h
          }
        }
        order.format = $scope.selectedFormat
      }

      $scope.setFormat = function(id, index) {
        if (index == -1) {
          removeAttrByID(width, 'disabled')
          removeAttrByID(height, 'disabled')
          addAttrByID(width, 'required', true)
          addAttrByID(height, 'required', true)
          $scope.formatSize = {}
          var description = $scope.formatSize.width + " x " + $scope.formatSize.height
          $scope.selectedFormat = {
            name: $scope.webContent.languagepack_orderform_000005,
            description: description
          }
        } else {
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
      $scope.showRefinement = function() {
        if ($scope.showRefinementList == true) $scope.showRefinementList = false
        else if ($scope.showRefinementList == false) $scope.showRefinementList = true
      }

      $scope.setRefinement = function(id, index) {
        $scope.selectedRefinement = $scope.refinements[index]
        order.refinement = $scope.refinements[index]
        addActiveClassByID('selectedRefinement')
        $scope.showRefinementList = false
      }

      // PaperType
      $scope.selectedPaperType = pleaseSelect
      $scope.showPaperTypeList = false
      $scope.showSelectPaperTypeDropdown = function() {
        if ($scope.showPaperTypeList == true) $scope.showPaperTypeList = false
        else if ($scope.showPaperTypeList == false) $scope.showPaperTypeList = true
      }

      $scope.setPaperType = function(id, index) {
        $scope.selectedPaperType = $scope.paperTypes[index]
        order.paperType = $scope.paperTypes[index]
        addActiveClassByID('selectedPaperType')
        $scope.showPaperTypeList = false
      }

      // BookBinding
      // TODO: add active class by id 
      $scope.selectedBookBinding = pleaseSelect
      $scope.showBookBindingList = false
      $scope.showBookBindingDropdown = function(){
        if($scope.showBookBindingList) $scope.showBookBindingList = false
        else $scope.showBookBindingList = true
      }
      $scope.setBookBinding = function(id, index){
        $scope.selectedBookBinding = $scope.bookBindings[index]
        order.bookBinding = $scope.bookBindings[index]
        console.log(order)
        $scope.showBookBindingList = false
      }

      // Pinching
      $scope.selectedPinching = pleaseSelect
      $scope.showPinchingList = false
      $scope.showPinching = function(){
        if($scope.showPinchingList) $scope.showPinchingList = false
        else $scope.showPinchingList = true
      }
      $scope.setPinching = function(id, index){
        $scope.selectedPinching = $scope.pinchings[index]
        order.pinching = $scope.pinchings[index]
        console.log(order)
        $scope.showPinchingList = false
      }

      // Pinching
      $scope.selectedDecoration = pleaseSelect
      $scope.showDecorationList = false
      $scope.showDecoration = function(){
        if($scope.showDecorationList) $scope.showDecorationList = false
        else $scope.showDecorationList = true
      }
      $scope.setDecoration = function(id, index){
        $scope.selectedDecoration = $scope.decorations[index]
        order.decoration = $scope.decorations[index]
        console.log(order)
        $scope.showDecorationList = false
      }

      // StringRopes
      $scope.selectedStringRope = pleaseSelect
      $scope.showStringRopeList = false
      $scope.showStringRope = function(){
        if($scope.showStringRopeList) $scope.showStringRopeList = false
        else $scope.showStringRopeList = true
      }
      $scope.setStringRope = function(id, index){
        $scope.selectedStringRope = $scope.stringRopes[index]
        order.stringRope = $scope.stringRopes[index]
        console.log(order)
        $scope.showStringRopeList = false
      }

      // StickerShape
      $scope.selectedStickerShape = pleaseSelect
      $scope.showStickerShapeList = false
      $scope.showStickerShape = function(){
        if($scope.showStickerShapeList) $scope.showStickerShapeList = false
        else $scope.showStickerShapeList = true
      }
      $scope.setStickerShape = function(id, index){
        $scope.selectedStickerShape = $scope.stickerShapes[index]
        order.stickerShape = $scope.stickerShapes[index]
        console.log(order)
        $scope.showStickerShapeList = false
      }

      // StickerCutting
      $scope.selectedStickerCutting = pleaseSelect
      $scope.showStickerCuttingList = false
      $scope.showStickerCutting = function(){
        if($scope.showStickerCuttingList) $scope.showStickerCuttingList = false
        else $scope.showStickerCuttingList = true
      }
      $scope.setStickerCutting = function(id, index){
        $scope.selectedStickerCutting = $scope.stickerCuttings[index]
        order.stickerCuttings = $scope.stickerCuttings[index]
        console.log(order)
        $scope.showStickerCuttingList = false
      }

      // Refactor
      // function dropdownFunc(selected, showList, showFunc, setSelectedFunc, itemList){
        
      // }

    }
  ]);
