var app = angular.module('mynotes');

app.controller('ListController', function($scope, NoteStore) {

  $scope.reordering = false;
  $scope.notes = NoteStore.list();
  $scope.remove = remove;
  $scope.move = move;
  $scope.toggleReordering = toggleRecordering; 

  function remove(noteId) {
    NoteStore.remove(noteId);
  };
  
  function move(note, fromIndex, toIndex) {
    NoteStore.move(note, fromIndex, toIndex);
  };

  function toggleRecordering() {
    $scope.reordering = !$scope.reordering;
  };

});