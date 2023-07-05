let ShortTimeData = {
    privacyData: {
        profilePhoto: '../frontend/src/assets/image/SNG_8627.jpg',
        name: 'oki Chandra',
        email: 'okichandracode@gmail.com',
    },
    activityData: {
        mainActivity: {
            task: [
                {
                    taskName: 'joging',
                    description: 'Running in morning for healthy',
                    category: 'Sports',
                    dueDate: {
                        day: 'Saturday',
                        date: '21',
                        moonth: 'September',
                        year: '2023',
                    },
                    dayTime: {
                        start: '10:00',
                        end: '12:00',
                    },
                },
                {
                    taskName: 'Bioskop',
                    description: 'Refreshing nonton transformers',
                    category: 'Life',
                    dueDate: {
                        day: 'Saturday',
                        date: '21',
                        moonth: 'September',
                        year: '2023',
                    },
                    dayTime: {
                        start: '10:00',
                        end: '12:00',
                    },
                },
                {
                    taskName: 'Datang ke seminar',
                    description: 'datang untuk menambah ilmu saya',
                    category: 'Study',
                    dueDate: {
                        day: 'Saturday',
                        date: '21',
                        moonth: 'September',
                        year: '2023',
                    },
                    dayTime: {
                        start: '10:00',
                        end: '12:00',
                    },
                },
                {
                    taskName: 'Portofolio',
                    description: 'Buat web portofolio untuk lamar',
                    category: 'Web dev',
                    dueDate: {
                        day: 'Saturday',
                        date: '21',
                        moonth: 'September',
                        year: '2023',
                    },
                    dayTime: {
                        start: '10:00',
                        end: '12:00',
                    },
                },
            ]
        }
    },
    financeData: {
        mainFinance: {
            balance: 23647000,
            receive: 0,
            expense: 83000,
        },
        expenseRecord: [
            {
                name: 'Burger',
                price: 12000,
                category: 'pet',
                tipe: 'subscription',
                dateDo: {
                    day: new Date().getDay(),
                    date: new Date().getDate(),
                    time: {
                        hour: new Date().getHours(),
                        minute: new Date().getMinutes(),
                    },
                }
            },
            
        ],
        wishList: [
            {
                name: 'Supra',
                price: 3230000000,
                description: 'i want suprraaaa'
            },
        ]
    }
}

export default ShortTimeData
