app.controller('EditCtrl', function($scope, $state, NoteStore) {

  $scope.note = angular.copy(NoteStore.get($state.params.noteId));
  $scope.getTitle = function() {
    return 'Editar Nota';
  }
  $scope.save = function() {
    NoteStore.update($scope.note);
    $state.go('list');
  };
});