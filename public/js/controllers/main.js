(function mainModule() {
    angular.module('conciergeApp',[])
        .controller('mainCtrl',mainCtrl);

    mainCtrl.$inject = [];
    function mainCtrl(){
        var vm = this;

        vm.resource = {
            name: '',
            location: '',
            locationUrl: '',
            subcategory: '',
            category: '',
            approved: false,
            url: '',
            img: '',
            doc1: {
                name: '',
                path: ''
            },
            doc2: {
                name: '',
                path: ''
            },
            club: {
                schedule: {
                    day: {
                        name: '',
                        note: ''
                    }
                },
                space: '',
                music: '',
                management: '',
                contact: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    altPhone: '',
                    email: ''
                }
            }
        };

    }
})();