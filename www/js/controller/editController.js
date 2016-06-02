var app = angular.module('mynotes');

app.controller('EditController', function($scope, $state, NoteStore, $cordovaCamera) {
  $scope.pictureUrl = 'foto.png';
  $scope.note = angular.copy(NoteStore.get($state.params.noteId));
  
  $scope.getTitle = getTitle;
  $scope.save = save;
  $scope.takePicture = takePicture;
  $scope.deletePicture = deletePicture;
  
  function getTitle() {
    return 'Editar Nota';
  }
  
  function save() {
    NoteStore.update($scope.note);
    $state.go('list');
  };

  var options = { destinationType: Camera.DestinationType.DATA_URL,
                  encodingType: Camera.EncodingType.JPEG };

  function takePicture() {
    $cordovaCamera.getPicture(options)
      .then(updatePictureVariable)
  }

 function updatePictureVariable(data) {
    $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
    $scope.note.picture = 'data:image/jpeg;base64,' + data;
 }

 function deletePicture() {
    $scope.pictureUrl = undefined;
    $scope.note.picture = undefined;
 }

});