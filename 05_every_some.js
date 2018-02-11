function checkUsersValid(goodUsers) {
    return function allUsersValid(usersToTest) {
        return usersToTest.every(function(testUser) {
            return goodUsers.some(function(goodUser) {
                return goodUser.id === testUser.id;
            });
        });
    };
}

module.exports = checkUsersValid;