'use strict';

/**
 * QAController
 */
app.controller('QAController', function($scope, QA, RelatedQuestions) {
  QA.getQuestion(function(d) {
    $scope.question = d;
  });
  QA.getAnswers(function(d) {
    $scope.answers = d;
  });

  RelatedQuestions.get(function(d) {
    $scope.relatedQuestions = d;
  });
});
