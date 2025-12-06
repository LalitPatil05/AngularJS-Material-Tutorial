// AngularJS Material Friends Circle Application
// Created by Lalit Patil - MCA-I

(function() {
    'use strict';

    // Main Application Module
    angular
        .module('MyApp', ['ngMaterial'])
        .config(configTheme)
        .controller('UserController', UserController)
        .service('userService', UserService);

    // Theme Configuration - Traditional Blue Color Scheme
    function configTheme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('light-blue');
    }

    // Main Controller
    UserController.$inject = ['userService', '$mdSidenav', '$mdDialog', '$mdToast'];
    
    function UserController(userService, $mdSidenav, $mdDialog, $mdToast) {
        var vm = this;

        // Controller Properties
        vm.users = [];
        vm.selected = null;

        // Controller Methods
        vm.toggleList = toggleList;
        vm.selectUser = selectUser;
        vm.makeContact = makeContact;
        vm.shareProfile = shareProfile;

        // Initialize
        activate();

        // =====================================
        // Implementation
        // =====================================

        function activate() {
            userService.loadAllUsers().then(function(users) {
                vm.users = users;
                vm.selected = users[0];
            });
        }

        function toggleList() {
            $mdSidenav('left').toggle();
        }

        function selectUser(user) {
            vm.selected = user;
            
            // Close sidenav on mobile after selection
            if (!angular.element(document.querySelector('md-sidenav')).hasClass('md-locked-open')) {
                $mdSidenav('left').close();
            }

            // Show selection toast
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Viewing ' + user.name + '\'s profile')
                    .position('bottom right')
                    .hideDelay(2000)
            );
        }

        function makeContact(user) {
            var contactOptions = [
                { name: 'Email', icon: 'email' },
                { name: 'Phone', icon: 'phone' },
                { name: 'Message', icon: 'message' }
            ];

            $mdDialog.show({
                controller: ContactDialogController,
                controllerAs: 'ctrl',
                templateUrl: 'contactDialog.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                locals: {
                    user: user,
                    options: contactOptions
                }
            }).then(function(selectedOption) {
                if (selectedOption) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Opening ' + selectedOption.name + ' for ' + user.name)
                            .position('bottom right')
                            .hideDelay(3000)
                    );
                }
            });
        }

        function shareProfile(user) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Share Profile')
                    .textContent('Share ' + user.name + '\'s profile on social media or via email.')
                    .ok('Close')
            );
        }
    }

    // Contact Dialog Controller
    ContactDialogController.$inject = ['$mdDialog', 'user', 'options'];
    
    function ContactDialogController($mdDialog, user, options) {
        var vm = this;
        vm.user = user;
        vm.options = options;
        vm.selectOption = selectOption;
        vm.cancel = cancel;

        function selectOption(option) {
            $mdDialog.hide(option);
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

    // User Data Service
    UserService.$inject = ['$q'];
    
    function UserService($q) {
        var users = [
            {
                name: 'Lalit Patil',
                role: 'Project Creator & Developer',
                status: 'Building awesome projects',
                content: 'Hello! I\'m Lalit Patil, currently pursuing MCA-I and passionate about web development. I created this project to learn AngularJS Material Design and showcase my amazing friends. When I\'m not coding, you\'ll find me exploring new technologies, collaborating with my team, and working on innovative solutions. This project represents my journey in mastering modern web frameworks and Material Design principles.',
                joke: 'Why do programmers prefer dark mode? Because light attracts bugs! 🐛 And trust me, after countless debugging sessions at 2 AM, I can confirm this is absolutely true! The darker my screen, the fewer bugs I find... or maybe I just can\'t see them anymore! 😄',
                quote: 'Code is like humor. When you have to explain it, it\'s bad. - Cory House',
                tags: ['Developer', 'MCA Student', 'Team Leader', 'Tech Enthusiast'],
                stats: [
                    { label: 'Projects Completed', value: '15+' },
                    { label: 'Coffee Consumed', value: '∞' },
                    { label: 'Lines of Code', value: '10K+' },
                    { label: 'Bugs Fixed', value: '999+' }
                ]
            },
            {
                name: 'Sumit Patil',
                role: 'The Perfectionist',
                status: 'Always on time',
                content: 'Meet Sumit, the most organized person in our squad! He\'s the guy who reads the entire documentation before writing a single line of code. His attention to detail is legendary - he spots typos in comments that nobody else would ever notice. Sumit believes in doing things right the first time, and his code reviews are thorough but always constructive. He\'s our go-to person for architectural decisions.',
                joke: 'Sumit walks into a coffee shop and immediately reorganizes the sugar packets by size, color, and sweetness level. The barista asks, "Are you a software architect?" Sumit replies, "How did you know?" The barista smiles, "You\'ve been refactoring our counter for 10 minutes!" 📊😂',
                quote: 'Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi',
                tags: ['Perfectionist', 'Organized', 'Detail-Oriented', 'Code Reviewer'],
                stats: [
                    { label: 'Code Reviews', value: '500+' },
                    { label: 'Refactorings', value: '100+' },
                    { label: 'Clean Code', value: '100%' },
                    { label: 'On-Time Delivery', value: 'Always' }
                ]
            },
            {
                name: 'Kunal Wagh',
                role: 'The Innovator',
                status: 'Thinking outside the box',
                content: 'Kunal is our creative genius who always thinks differently. He\'s the friend who suggests using machine learning for a simple calculator app! While sometimes his ideas seem crazy at first, they often lead to breakthrough solutions. Kunal stays updated with the latest tech trends and loves experimenting with new frameworks. His enthusiasm for innovation is contagious and pushes us all to think bigger.',
                joke: 'Kunal tried to create an AI that writes jokes. The AI\'s first joke: "Why did the developer quit his job? He didn\'t get arrays!" Kunal was impressed, "That\'s actually pretty good!" The AI responded, "Thanks! I learned from reading your code comments. They\'re hilarious!" 🤖😆',
                quote: 'Innovation distinguishes between a leader and a follower. - Steve Jobs',
                tags: ['Creative', 'Trendsetter', 'Innovator', 'Early Adopter'],
                stats: [
                    { label: 'Ideas per Day', value: '50+' },
                    { label: 'Frameworks Tried', value: '25+' },
                    { label: 'Prototypes Built', value: '30+' },
                    { label: 'Energy Level', value: 'Maximum' }
                ]
            },
            {
                name: 'Uday Mali',
                role: 'The Gaming Guru',
                status: 'Level 99 achieved',
                content: 'Uday is our gaming expert who somehow manages to relate every coding concept to video games. Need to understand loops? Uday will explain it using game mechanics. Debugging? It\'s like finding Easter eggs in GTA! His unique perspective makes complex concepts easy to understand. Despite his love for gaming, he\'s incredibly productive and brings positive energy to every team session.',
                joke: 'We found a hidden function in Uday\'s code called "unlockCheatMode()" that makes the app run 10 times faster. When we asked why he didn\'t use it from the start, he grinned and said, "Come on guys, where\'s the fun in that? You gotta earn your way to the cheat codes!" 🎮😂',
                quote: 'Life is more fun if you play games. - Roald Dahl',
                tags: ['Gamer', 'Optimistic', 'Team Player', 'Problem Solver'],
                stats: [
                    { label: 'Gaming Hours', value: '2000+' },
                    { label: 'Achievements Unlocked', value: '750+' },
                    { label: 'High Scores', value: 'Countless' },
                    { label: 'Team Spirit', value: '100%' }
                ]
            },
            {
                name: 'Ansari Intesab',
                role: 'The Knowledge Bank',
                status: 'Currently learning something new',
                content: 'Intesab is our walking encyclopedia who seems to know something about everything. Need to know the history of JavaScript? Ask Intesab. Curious about quantum computing? Intesab has a detailed explanation ready. His thirst for knowledge is truly inspiring, and he\'s always reading books, watching tutorials, or attending webinars. He\'s the person who makes learning look effortless and fun.',
                joke: 'Someone asked Intesab to explain recursion. He said: "To understand recursion, you must first understand recursion." We asked him to clarify. He repeated: "To understand recursion, you must first understand recursion." We finally stopped him at the 5th iteration and just accepted that he proved his point perfectly! 📚🔄😄',
                quote: 'The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert',
                tags: ['Scholar', 'Researcher', 'Mentor', 'Lifelong Learner'],
                stats: [
                    { label: 'Books Read', value: '200+' },
                    { label: 'Topics Mastered', value: '50+' },
                    { label: 'Questions Answered', value: '∞' },
                    { label: 'Study Hours', value: 'Daily' }
                ]
            }
        ];

        return {
            loadAllUsers: function() {
                return $q.when(users);
            }
        };
    }

})();

// Contact Dialog Template (Inline)
angular.module('MyApp').run(['$templateCache', function($templateCache) {
    $templateCache.put('contactDialog.html',
        '<md-dialog aria-label="Contact Options">' +
        '  <md-toolbar>' +
        '    <div class="md-toolbar-tools">' +
        '      <h2>Contact {{ ctrl.user.name }}</h2>' +
        '      <span flex></span>' +
        '      <md-button class="md-icon-button" ng-click="ctrl.cancel()">' +
        '        <md-icon>close</md-icon>' +
        '      </md-button>' +
        '    </div>' +
        '  </md-toolbar>' +
        '  <md-dialog-content>' +
        '    <div class="md-dialog-content">' +
        '      <p>Choose how you would like to contact {{ ctrl.user.name }}:</p>' +
        '      <md-list>' +
        '        <md-list-item ng-repeat="option in ctrl.options" ng-click="ctrl.selectOption(option)">' +
        '          <md-icon>{{ option.icon }}</md-icon>' +
        '          <p>{{ option.name }}</p>' +
        '        </md-list-item>' +
        '      </md-list>' +
        '    </div>' +
        '  </md-dialog-content>' +
        '  <md-dialog-actions layout="row">' +
        '    <md-button ng-click="ctrl.cancel()">' +
        '      Cancel' +
        '    </md-button>' +
        '  </md-dialog-actions>' +
        '</md-dialog>'
    );
}]);
