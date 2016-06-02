var app = angular.module('mynotes');

app.controller('AddController', function($scope, $state, NoteStore, $cordovaCamera) {

  $scope.pictureUrl = 'foto.png';

  $scope.getTitle = getTitle;
  $scope.save = save;
  $scope.takePicture = takePicture;
  $scope.deletePicture = deletePicture;

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

  $scope.note = {
    id: new Date().getTime().toString(),
    title: '',
    description: '',
    picture: undefined
  };

  function getTitle() {
    return 'Nova Nota';
  }

  function save() {
    NoteStore.update($scope.note);
    $state.go('list');
  };

  function deletePicture() {
    $scope.pictureUrl = undefined;
    $scope.note.picture = undefined;
 }
});