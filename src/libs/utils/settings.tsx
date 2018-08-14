export const settings: any = {
        debug: !process.env.production || false,
        history: false,
        appID: 'ShrsVtsx',
        authKey: 'auth',
        pathHome: '/',
        pathAPI: !process.env.production
                ? 'http://192.168.0.191:10007'
                : 'http://www.shrs2006.com/cgi-bin'
}
