/**
 * Created by dq on 16/2/3.
 */

/**
 * QADetailController
 */
(function(){

    angular.module('rsApp').controller('QADetailController', function($scope, $rootScope, $window) {
        var resetSideUI = function() {
            var nodes = document.querySelectorAll('.rs-card.sub-card');
            var rightSide = angular.element(nodes[nodes.length - 1]);
            var windowTop = rightSide.prop('offsetTop') + rightSide.prop('offsetHeight') - $window.pageYOffset;
            $scope.$apply(function() {
                $scope.showProfile = windowTop <= 0;
                $scope.profileWidth = rightSide.prop('offsetWidth') - 20 + 'px';
            });
        }
        angular.element($window).on('resize', resetSideUI);
        angular.element($window).bind('scroll', resetSideUI);

        $scope.readingOpen = {};
        $scope.setReadingOpen = function(index, open) {
            $scope.readingOpen[index] = open;
        }

        $scope.replySomebody = function(index) {
            $scope.reply = '回复 周杰伦: ';
        };

        $scope.qa = gQA;
    });

})();
