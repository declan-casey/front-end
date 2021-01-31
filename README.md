# front-end

@ '/' not logged in: {
    display buttons Login and Register: {
        user clicks Login: {
            display login form: {
                username: '',
                password: '',
                submit.
            }
        }
        user clicks Register: {
            display register form: {
                realName: '',
                username: '',
                email: '',
                password: '',
                premium: boolean
            }
        }
    }
}
@ '/aProtectedPage' if(!loggedIn): {
    say unaccessible because not logged in and display button to go back to '/'
}

@ '/home' if(loggedIn): {
    display Home page: {
        pretty header: {
            title of page or something,
            log out button
        },
        contribute recipe button: {
            leads to new recipe form: {
                title: '',
                ingredients: '',
                prepTime: '',   // is a string in to take # + unit of measure of time e.g. seconds, minutes, hours.
                eta: '',    // string for the same reason.
                instructions: '',
                premium: boolean
            }
        },
        my recipes button: {
            goes to separate screen that shows only this accounts submissions: {
                next to each recipe put delete button.
            }
        }
        display all free recipes in inverse chronlogy,
        if(premium) {
            display all premium recipes underneath also in inverse chronology.
        }
    }
}