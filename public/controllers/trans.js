angular.module('MyApp')
    .controller('TransfertCtrl', ['$scope', 'transfertbanc', function ($scope, transfertbanc) {

        $scope.trans = function () {
            transfertbanc.trans({
                method: $scope.methodeTransfert,
                numer: $scope.numerpaypal,
                montant: $scope.montantpaypal,
                nomAssociation: $scope.associationNom,
                typeBon: $scope.typeBon
            });
        };

        $scope.pageClass = 'fadeZoom'
    }]);