app.controller('AddCtrl', function($scope, $state, NoteStore) {

  $scope.note = {
    id: new Date().getTime().toString(),
    title: '',
    description: ''
  };

  $scope.getTitle = function() {
    return 'Nova Nota';
  }

  $scope.save = function() {
    NoteStore.create($scope.note);
    $state.go('list');
  };
});