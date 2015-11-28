'use strict';

// Create the 'createdoc' controller
angular.module('createdoc', ['ngAnimate', 'ui.bootstrap']);
angular.module('createdoc').controller('CreatedocController', ['$scope',
  function ($scope) {

    // Create a messages array
    
    $scope.oneAtATime = false;
    $scope.disable = true;

    $scope.questions = [
    {
      id: "1",
      title: "Роботодавець є:  ",
      subquestions: [

      {content :"Юридичною особою"}, 
      {content :"Фізичною особою – підприємцем"}, 
      {content :"Фізичною особою  "}
      ] 
    }

    ,
    {
      id: "2",
      title: "Позов подається Працівником чи його Представником? ",
      subquestions: [

      {content :"Працівником"}, 
      {content :"Представником"}
      ] 
    }
    ,
    {
      id: "3",
      title: "Чи укладався письмовий трудовий договір? ",
      subquestions: [

      {content :"Так"}, 
      {content :"Ні"}
      ] 
    }
    ,
    {
      id: "4",
      title: "Трудовий договір визначено як:  ",
      subquestions: [

      {content :"Безстроковий, що укладений на невизначений строк"}, 
      {content :"Строковий, що укладений на визначений строк, встановлений за погодженням сторін"}, 
      {content :"Таким, що укладається на час виконання певної роботи"}
      ] 
    }

    ]
  

    $scope.disable = function(){
      scope.status.isDisabled = scope.disable;
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false,
      isDisabled: false
    };
};
]);
