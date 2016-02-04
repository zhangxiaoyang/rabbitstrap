/**
 * Created by dq on 16/2/3.
 */
(function(){

    angular.module('rsApp').config(function ($routeProvider) {
        $routeProvider
        // QA
            .when('/qa',
                {
                    controller: 'QAController',
                    templateUrl: '/static/app/qa/qa.html'
                })
            .when('/qadetail',
                {
                    controller: 'QADetailController',
                    templateUrl: '/static/app/qadetail/qadetail.html'
                })
            .when('/topic',
                {
                    controller: 'TopicController',
                    templateUrl: '/static/app/partial/topic.html'
                })
            // Course
            .when('/course',
                {
                    controller: 'CourseController',
                    templateUrl: '/static/app/course/course.html'
                })
            .when('/course/:courseId',
                {
                    controller: 'CourseIdController',
                    templateUrl: '/static/app/course/courseid.html'
                })
            .otherwise({ redirectTo: '/qa' });
    });

})();
