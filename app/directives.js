var myDirectives = angular.module('myDirectives',[]);

myDirectives.directive('i3chat', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat.html',
		controller: function($scope, chatService) {
			$scope.chatting = false;
			$scope.activeChat = null;
			$scope.events = [];
			$scope.minimized = false;

			$scope.$watch(function() {
				return chatService.activeChatEvents;
			}, function() {
				$scope.events = chatService.activeChatEvents;
			});
			
			/*get the active chat information*/
			$scope.$watch(function() {
				return chatService.activeChat;
			}, function() {
				$scope.activeChat = chatService.activeChat;
			});

			$scope.$watch(function() {
				return chatService.minimized;
			}, function() {
				$scope.minimized = chatService.minimized;
			});

			//$('.i3chat').draggable({
			//		containment: "windows"
			//	}
			//);
		}
	};
});

myDirectives.directive('i3chatHeader', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat-header.html',
		controller: function($scope, chatService) {
			$scope.minimizeChat = chatService.minimizeChat;
			$scope.closeChat = chatService.closeChat;
			$scope.minimized = false;
			$scope.$watch(function() {
				return chatService.minimized;
			}, function() {
				$scope.minimized = chatService.minimized;
			});
		}
	};
});


myDirectives.directive('i3chatMessage', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat-message.html',
		scope: {
			'event':'='
		}
	};
});

myDirectives.directive('i3chatTypingIndicator', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat-typing-indicator.html',
		scope: {
			'showindicator':'='
		}
	};
});

myDirectives.directive('i3chatSignonForm', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat-signon-form.html',
		controller: function($scope, chatService) {
			$scope.mytext = '';
			
			$scope.endChat = function() {
				$scope.Calificar = false;
				$scope.Visible = false;
				$scope.FueraServicio = false;
				
				chatService.endChat();
			};
			
			$scope.sendChat = function() {
				chatService.sendMessage($scope.mytext);
				$scope.mytext = '';
			};
			
			$scope.setTyping = function(isTyping) {
				chatService.setTyping(isTyping);
			};
		}
	};
});

myDirectives.directive('i3chatUserInput',function(){
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat-user-input.html',
		controller: function($scope, chatService,$http) {
			$scope.name = localStorage["name"];
			$scope.server = localStorage["server"];
			$scope.workgroup = localStorage["workgroup"];           
			
			
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
//document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
  
	switch(diasSemana[f.getDay()]){
	
		case "Lunes":
					
				if( (f.getHours() >= 8) && (f.getHours() <= 12)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
						
					}
					else if ( (f.getHours() >= 13) && (f.getHours() <= 17)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
					
					
					}
					else{
						
						$scope.Visible= false;
						$scope.FueraServicio= true;
						
					} 
		
		break;
		case "Martes":
					
				if( (f.getHours() >= 8) && (f.getHours() <= 12)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
						
					}
					else if ( (f.getHours() >= 13) && (f.getHours() <= 17)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
					
					
					}
					else{
						
						$scope.Visible= false;
						$scope.FueraServicio= true;
						
					} 
		
		break;
		case "Miércoles":
					
					if( (f.getHours() >= 8) && (f.getHours() <= 12)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
						
					}
					else if ( (f.getHours() >= 13) && (f.getHours() <= 17)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
					
					
					}
					else{
						
						$scope.Visible= false;
						$scope.FueraServicio= true;
						
					} 
					
		
		break;
		case "Jueves":
					
				if( (f.getHours() >= 8) && (f.getHours() <= 12)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
						
					}
					else if ( (f.getHours() >= 13) && (f.getHours() <= 17)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
					
					
					}
					else{
						
						$scope.Visible= false;
						$scope.FueraServicio= true;
						
					} 
		
		break;
		case "Viernes":
					
					
				
				
					if( (f.getHours() >= 8) && (f.getHours() <= 12)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
						
					}
					else if ( (f.getHours() >= 13) && (f.getHours() <= 17)){
					
						$scope.Visible= true;
						$scope.FueraServicio= false;
					
					
					}
					else{
						
						$scope.Visible= false;
						$scope.FueraServicio= true;
						
					} 
					
		
		break;
		default: 
					
					$scope.Visible = false;
					$scope.FueraServicio= true;
					
		break;
		
	
	
	}
			
			
				$scope.Visible= true;
				$scope.FueraServicio= false;
			
		
			
			
			$scope.Calificar = false;
				
			$scope.startChat = function(){

				$scope.name =  $scope.nombres+ " "+ $scope.apellidos +"- Identificación: "+ $scope.identificacion  +" - Número: "+$scope.numero +"- Correo: "+$scope.email; 
				localStorage["name"] = $scope.name ;
				localStorage["server"] = $scope.server;
				localStorage["workgroup"] = $scope.workgroup;
					
				
				var participant = {
					"name": $scope.name,
					"credentials": null,
					"telefono": $scope.numero,
					"identificacion": $scope.identificacion,
					"correo": $scope.email
				}
				chatService.startChat(participant, $scope.numero, $scope.identificacion,$scope.email).success(function (data) {
					//$scope.status =data.chat.status.type;
				});
			}
		}
	};
});

myDirectives.directive('i3chatBody', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat-body.html'
	};
});
myDirectives.directive('i3chatMessageHolder', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		templateUrl: 'templates/i3chat-message-holder.html'
	};
});

myDirectives.directive('onEnter', function() {
	var linkFn = function(scope, element, attrs) {
		element.bind("keypress", function(event) {
			if (event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.onEnter);
				});
				event.preventDefault();
			}
		});
	};

	return {
		link:linkFn
	};
});
