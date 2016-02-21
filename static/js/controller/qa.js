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

  var qaId = '1234';
  RelatedQuestions.get(function(d) {
    $scope.relatedQuestions = d;
  }, qaId);
});
