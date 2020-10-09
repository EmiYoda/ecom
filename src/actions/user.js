import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Emiliano Del Valle',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 1.30,
                orderNumber: '24343sdfkjh72',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jorge Del Valle',
                    shippingAddress: '2431 West State Street'
                }
            },
            {
                _id: 2,
                total: 5.20,
                orderNumber: 'B0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Karen Roa',
                    shippingAddress: '5432 West State Street'
                }
            },
            {
                _id: 3,
                total: 16.40,
                orderNumber: 'ADFasdlfkjwe',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Asher Nelson',
                    shippingAddress: '4231 West State Street'
                }
            },
            {
                _id: 4,
                total: 20.30,
                orderNumber: 'Rt415241ffwe',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '8172 West State Street'
                }
            },
            {
                _id: 5,
                total: 2.10,
                orderNumber: 'B19283001928',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Snow',
                    shippingAddress: '0192 West State Street'
                }
            },
            {
                _id: 6,
                total: 6.20,
                orderNumber: 'J617261863320',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Peter Parker',
                    shippingAddress: '4321 West State Street'
                }
            },
            {
                _id: 7,
                total: 3.20,
                orderNumber: '5UFISHDFJASUSHI298',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Wold',
                    shippingAddress: '3480 State Street'
                }
            },

        ]
    })
}
