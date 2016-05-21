app.controller('ListCtrl', function($scope, NoteStore) {

  $scope.reordering = false;
  $scope.notes = NoteStore.list();

  $scope.remove = function(noteId) {
    NoteStore.remove(noteId);
  };

  $scope.move = function(note, fromIndex, toIndex) {
    NoteStore.move(note, fromIndex, toIndex);
  };

  $scope.toggleReordering = function() {
    $scope.reordering = !$scope.reordering;
  };

});